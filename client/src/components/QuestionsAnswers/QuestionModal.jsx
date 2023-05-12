import React from 'react';
import axios from 'axios';

const QuestionModal = ({productInfo, changeShowQuestionModal}) => {
  // const checkInputs = () => {
  //   let userQuestion = document.getElementsByClassName('question-modal-textbox')[0].value;
  //   let userNickname = document.getElementsByClassName('question-modal-nickname')[0].value;
  //   let userEmail = document.getElementsByClassName('question-modal-email')[0].value;

  //   if (userQuestion.length === 0 || userNickname.length === 0 || userEmail.length === 0) {
  //     alert('You must enter the following:');
  //   }
  // };


  // WORK ON SUBMIT FUNCTION
  const postQuestion = () => {
    let userQuestion = document.getElementsByClassName('question-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('question-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('question-modal-email')[0].value;
    console.log(userQuestion);
    console.log(userNickname);
    console.log(userEmail);
    console.log('posted!')

    axios.post('/qa/questions', {
      body: userQuestion,
      name: userNickname,
      email: userEmail
    })
    .then((res) => console.log('this is server response', res))
    .catch((err) => console.log('error sending question to server'));
  };

  return (
    <form action="" onSubmit={() => postQuestion()}>
      <div className="question-modal">

        <div className="question-modal-content">

          <div className="question-modal-header">
            <h4 className="question-modal-title">Ask Your Question</h4>
            <h6 className="question-modal-subtitle">About the {productInfo.name}</h6>
          </div>

          <div className="question-modal-body">

            <div>
              <span>*</span> Your Question:
              <textarea className="question-modal-textbox" maxlength="1000" required placeholder="This is the Modal Content!"></textarea>
            </div>

            <div>
              <label>
                <span>*</span> What is your nickname:&nbsp;
                <input className="question-modal-nickname" type="text" maxLength="60" required placeholder="Example: jackson11!"/>&nbsp;
              </label>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>

            <div>
              <label>
                <span>*</span> Your email:&nbsp;
                <input className="question-modal-email" type="email" maxLength="60" required placeholder="Why did you like the product or not?"/>
              </label>
              <p>For authentication reasons, you will not be emailed</p>
            </div>

          </div>

          <div className="question-modal-footer">
            <button type="button" onClick={() => changeShowQuestionModal()}>Cancel</button>&nbsp;

            <input type="submit" value='Submit Your Question'></input>
          </div>

        </div>

      </div>
    </form>
  )
};

export default QuestionModal;