import React, {useState, useContext} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import QuestionModal from './QuestionModal.jsx';
import {MoreQuestionsButton, AddQuestionButton} from './QuestionsButtons.jsx';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const QuestionsList = ({questions, productInfo}) => {
  const interactionAPI = useContext(InteractionAPIContext);
  const [displayMoreQuestionsButton, setDisplayMoreQuestionsButton] = useState(true);
  const [questionCount, setQuestionCount] = useState(2);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  let displayedQuestions = [];

  if (questions.results) {
    displayedQuestions = questions.results.slice(0, questionCount);
  }

  const incrementCount = () => {
    interactionAPI("Show More Questions Button", "QuestionsAnswers");

    let temp = questionCount + 2;

    setQuestionCount(temp);

    if (questions.results.length < temp) {
      setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
    }
  };

  const changeShowQuestionModal = () => {
    interactionAPI("Show/Hide Question Modal Button", "QuestionsAnswers");
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