import React, {useContext} from 'react';
import axios from 'axios';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const QuestionModal = ({productInfo, changeShowQuestionModal}) => {
  const interactionAPI = useContext(InteractionAPIContext);

  const checkInputs = () => {
    let userQuestion = document.getElementsByClassName('question-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('question-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('question-modal-email')[0].value;

    let checkEmail = (input) => {
      let isValid = true;

      if (input.length === 0 || !input.includes('@') || input[input.length - 1] === '@' || input[input.length - 1] === '.') {
        isValid = false;
      }

      return isValid;
    };

    if (userQuestion.length === 0 || userNickname.length === 0 || !checkEmail(userEmail)) {
      alert('You must enter the following:');
    }
  };

  const postQuestion = () => {
    interactionAPI("Submit Question Button", "QuestionsAnswers");
    // instead of get element by class name use "useRef" to get value (let test = useRef('question-modal-textbox) ====> test.current.value should be the value of the user input)
    let url = '/qa/questions';
    let userQuestion = document.getElementsByClassName('question-modal-textbox')[0].value;
    let userNickname = document.getElementsByClassName('question-modal-nickname')[0].value;
    let userEmail = document.getElementsByClassName('question-modal-email')[0].value;

    let data = {
      body: userQuestion,
      name: userNickname,
      email: userEmail,
      product_id: productInfo.id
    }

    axios.post(url, data)
    .then((res) => console.log('this is server response', res))
    .catch((err) => console.log('error sending question to server'));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      postQuestion();
      changeShowQuestionModal();
      alert('Your question has been submitted! Please refresh the page to display your question.');
    }}>
      <div className="question-modal">

        <div className="question-modal-content">

          <div className="question-modal-header">
            <h4 className="question-modal-title">Ask Your Question</h4>
            <h6 className="question-modal-subtitle">About the {productInfo.name}</h6>
          </div>

          <div className="question-modal-body">

            <div>
              <span>*</span> Your Question:
              <textarea className="question-modal-textbox" maxLength="1000" required placeholder="Ask your question here..."></textarea>
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
                <input className="question-modal-email" type="email" maxLength="60" required placeholder="Example: jackson11@mail.com"/>
              </label>
              <p>For authentication reasons, you will not be emailed</p>
            </div>

          </div>

          <div className="question-modal-footer">
            <button className="cancel-submission-button" type="button" onClick={() => changeShowQuestionModal()}>Cancel</button>&nbsp;
            <button className="question-submission-button" type="submit" onClick={() => checkInputs()}>Submit Question</button>
          </div>

        </div>

      </div>
    </form>
  )
};

export default QuestionModal;