import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import {MoreQuestionsButton, AddQuestionButton} from './QuestionsButtons.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = ({questions, productInfo}) => {
  // console.log('this is productInfo', productInfo);
  // console.log('these are questions', questions);
  const [displayMoreQuestionsButton, setDisplayMoreQuestionsButton] = useState(true);
  const [questionCount, setQuestionCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  let displayedQuestions = [];

  if (questions.results) {
    displayedQuestions = questions.results.slice(0, questionCount);
  }

  const incrementCount = () => {
    let temp = questionCount + 2;
    setQuestionCount(temp);
    if (questions.results.length < temp) {
      setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
    }
  };

  const changeShowModal = () => {
    setShowModal(!showModal);
  };

  // const decrementCount = () => {
  //   setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
  //   setQuestionCount(2);
  // };

  if (displayedQuestions.length !== 0) {
    return (
      <div className="questionsList">
        {displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question}/>)}
        {(displayMoreQuestionsButton && questions.results.length > 2) && (
          <MoreQuestionsButton incrementCount={incrementCount}/>
        )}
        {(!showModal) && (
          <AddQuestionButton changeShowModal={changeShowModal}/>
        )}

        {(showModal) && (
          <QuestionModal productInfo={productInfo} changeShowModal={changeShowModal}/>
        )}
      </div>
    )
  }

  return (
    <div>
      <h4>Q:</h4>
      <p>No Questions Asked Yet!</p>
      <button type="button" onClick={() => alert('hello')}>Submit New Question</button>
    </div>
  )
};

export default QuestionsList;