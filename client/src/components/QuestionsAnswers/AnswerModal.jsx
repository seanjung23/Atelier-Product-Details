import React from 'react';
import axios from 'axios';

const AnswerModal = ({productInfo, question, changeShowAnswerModal}) => {
  const checkInputs = () => {
    let userAnswer = document.getElementsByClassName('answer-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('answer-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('answer-modal-email')[0].value;
    //add functionality to check for valid photos here

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
    console.log(url);
    let userAnswer = document.getElementsByClassName('answer-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('answer-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('answer-modal-email')[0].value;
    // grab photo urls here
    let data = {
      body: userAnswer,
      name: userNickname,
      email: userEmail,
      photos: ["https://www.uhaul.com/MovingSupplies/Image/GetMedia/?id=8390&media=8185"]
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

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      postAnswer();
      changeShowAnswerModal();
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
              <textarea className="answer-modal-textbox" maxLength="1000" required placeholder="This is the Modal Content!"></textarea>
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
                <input className="answer-modal-email" type="email" maxLength="60" required placeholder="Why did you like the product or not?"/>
              </label>
              <p>For authentication reasons, you will not be emailed</p>
            </div>

            <div>
              Upload Your Photos:

              <input type="button" value="Upload"/>
            </div>

          </div>

          <div className="answer-modal-footer">
            <button onClick={() => changeShowAnswerModal()}>Cancel</button>&nbsp;
            <button type="submit" onClick={() => checkInputs()}>Submit Answer</button>
          </div>

        </div>

      </div>

    </form>
  )
};

export default AnswerModal;