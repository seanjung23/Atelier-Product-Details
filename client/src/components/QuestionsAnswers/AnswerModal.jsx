import React, {useState} from 'react';
import axios from 'axios';

const AnswerModal = ({productInfo, question, changeShowAnswerModal}) => {
  const [answerPhotos, setAnswerPhotos] = useState([]);

  const checkInputs = () => {
    let userAnswer = document.getElementsByClassName('answer-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('answer-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('answer-modal-email')[0].value;

    let checkEmail = (input) => {
      let isValid = true;

      if (input.length === 0 || !input.includes('@') || input[input.length - 1] === '@' || input[input.length - 1] === '.') {
        isValid = false;
      }

      return isValid;
    };

    if (userAnswer.length === 0 || userNickname.length === 0 || !checkEmail(userEmail)) {
      alert('You must enter the following:');
    }
  };

  const postAnswer = () => {
    // instead of get element by class name use "useRef" to get value (let test = useRef('answer-modal-textbox) ====> test.current.value should be the value of the user input)
    let url = '/qa/questions/' + question.question_id + '/answers';
    let userAnswer = document.getElementsByClassName('answer-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('answer-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('answer-modal-email')[0].value;
    let userPhotos = () => {
      let temp = [];

      for (var i = 0; i < answerPhotos.length; i++) {
        temp.push("https://www.uhaul.com/MovingSupplies/Image/GetMedia/?id=8390&media=8185");
      }

      return temp;
    };

    let data = {
      body: userAnswer,
      name: userNickname,
      email: userEmail,
      photos: userPhotos()
    }

    let config = {
      params: {
        question_id: question.question_id
      }
    }

    axios.post(url, data, config)
    .then((res) => console.log('this is server response', res))
    .catch((err) => console.log('error sending question to server'));
  };

  const checkPhotoSubmit = (e) => {
    let temp = answerPhotos.slice();
    temp.push(e.target.files[0]);

    setAnswerPhotos(temp);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      postAnswer();
      changeShowAnswerModal();
      alert('Your answer has been submitted! Please refresh the page to display your answer.');
    }}>

      <div className="answer-modal">

        <div className="answer-modal-content">

          <div className="answer-modal-header">
            <h4 className="answer-modal-title">Submit Your Answer</h4>
            <h6 className="answer-modal-subtitle">{productInfo.name}: {question.question_body}</h6>
          </div>

          <div className="answer-modal-body">

            <div>
              <span>*</span> Your Answer:
              <textarea className="answer-modal-textbox" maxLength="1000" required placeholder="Type your answer here..."></textarea>
            </div>

            <div>
              <label>
                <span>*</span> What is your nickname:&nbsp;
                <input className="answer-modal-nickname" type="text" maxLength="60" required placeholder="Example: jack543!"/>&nbsp;
              </label>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>

            <div>
              <label>
                <span>*</span> Your email:&nbsp;
                <input className="answer-modal-email" type="email" maxLength="60" required placeholder="Example: jackson11@mail.com"/>
              </label>
              <p>For authentication reasons, you will not be emailed</p>
            </div>

            <div>
              Upload Your Photos: &nbsp;
              {(answerPhotos.length < 5) && (
                <label>
                  <input type="file" accept="image/*" onChange={(e) => checkPhotoSubmit(e)}/>
                </label>
              )}
              <div className="photos-display">
                {answerPhotos.map((photo, index) => (
                  <img className="answer-modal-photo" key={index} src={URL.createObjectURL(photo)}/>
                ))}
              </div>
            </div>

          </div>

          <div className="answer-modal-footer">
            <button className="cancel-submission-button" onClick={() => changeShowAnswerModal()}>Cancel</button>&nbsp;
            <button className="answer-submission-button" type="submit" onClick={() => checkInputs()}>Submit Answer</button>
          </div>

        </div>

      </div>

    </form>
  )
};

export default AnswerModal;