import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import {MoreQuestionsButton, AddQuestionButton} from './QuestionsButtons.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = ({questions, productInfo}) => {
  // console.log('this is productInfo', productInfo);
  // console.log('these are questions', questions);
  const [displayMoreQuestionsButton, setDisplayMoreQuestionsButton] = useState(true);
  const [questionCount, setQuestionCount] = useState(2);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

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

  const changeShowQuestionModal = () => {
    setShowQuestionModal(!showQuestionModal);
  };

  // const decrementCount = () => {
  //   setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
  //   setQuestionCount(2);
  // };

  if (displayedQuestions.length !== 0) {
    return (
      <div className="questions-list">
        {displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question} productInfo={productInfo} />)}
        {(displayMoreQuestionsButton && questions.results.length > 2) && (
          <MoreQuestionsButton incrementCount={incrementCount} />
        )}
        {(!showQuestionModal) && (
          <AddQuestionButton changeShowQuestionModal={changeShowQuestionModal} />
        )}
        {(showQuestionModal) && (
          <QuestionModal productInfo={productInfo} changeShowQuestionModal={changeShowQuestionModal} />
        )}
      </div>
    )
  }

  return (
    <div>
      <h4>Q:</h4>
      <p>No Questions Asked Yet!</p>
      <button type="button" onClick={() => changeShowQuestionModal()}>Submit New Question</button>
      {(showQuestionModal) && (
        <QuestionModal productInfo={productInfo} changeShowQuestionModal={changeShowQuestionModal} />
      )}
    </div>
  )
};

export default QuestionsList;