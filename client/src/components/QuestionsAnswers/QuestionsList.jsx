import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import {MoreQuestionsButton, AddQuestionButton} from './QuestionsButtons.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = ({questions, productInfo}) => {
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

  if (displayedQuestions.length !== 0) {
    return (
      <div className="questions-list">
        {displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question} productInfo={productInfo} />)}
        {(displayMoreQuestionsButton && questions.results.length > 2) && (
          <MoreQuestionsButton incrementCount={incrementCount} />
        )}
        <AddQuestionButton changeShowQuestionModal={changeShowQuestionModal} />
        {(showQuestionModal) && (
          <QuestionModal productInfo={productInfo} changeShowQuestionModal={changeShowQuestionModal} />
        )}
      </div>
    )
  }

  return (
    <div>
      <button type="button" onClick={() => changeShowQuestionModal()}>Submit New Question</button>
      <p>No Questions Asked Yet!</p>
      {(showQuestionModal) && (
        <QuestionModal productInfo={productInfo} changeShowQuestionModal={changeShowQuestionModal} />
      )}
    </div>
  )
};

export default QuestionsList;