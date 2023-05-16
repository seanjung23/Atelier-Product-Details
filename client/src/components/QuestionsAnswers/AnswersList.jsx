import React, {useState} from 'react';
import AnswersEntry from './AnswersEntry.jsx';
import AnswerModal from './AnswerModal.jsx';
import {ShowAllAnswersButton, CollapseAllAnswersButton} from './QuestionsButtons.jsx';

const AnswersList = ({answers, question, productInfo, showAnswerModal, changeShowAnswerModal}) => {
  const [answerCount, setAnswerCount] = useState(2);
  const [showAnswersButton, setShowAnswersButton] = useState(true);

  let displayedAnswers = answers.slice();

  displayedAnswers.sort((a, b) => b.helpfulness - a.helpfulness);

  for (let j = 0; j < displayedAnswers.length; j++) {
    if (displayedAnswers[j].answerer_name === 'Seller') {
      let temp = displayedAnswers.splice(j, 1);
      displayedAnswers.unshift(temp[0]);
    }
  }

  if (answerCount === 0) {
    displayedAnswers = displayedAnswers.slice(answerCount);
  } else {
    displayedAnswers = displayedAnswers.slice(0, answerCount);
  }


  const showAllAnswers = () => {
    setAnswerCount(0);
    setShowAnswersButton(!showAnswersButton);
  }

  const collapseAnswers = () => {
    setAnswerCount(2);
    setShowAnswersButton(!showAnswersButton);
  };

  if (displayedAnswers.length !== 0) {
    return (
      <div>
        <div>
          <h4>A:</h4>
          {displayedAnswers.map((answer, index) => <AnswersEntry key={index} answer={answer} />)}
          {(showAnswersButton && answers.length > 2) && (
            <ShowAllAnswersButton showAllAnswers={showAllAnswers} />
          )}
          {(!showAnswersButton) && (
            <CollapseAllAnswersButton collapseAnswers={collapseAnswers} />
          )}
        </div>
          {(showAnswerModal) && (
            <AnswerModal productInfo={productInfo} question={question} changeShowAnswerModal={changeShowAnswerModal} />
          )}
        <div>==================================================</div>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h4>A:</h4>
        <p>No Answers Yet!</p>
      </div>
      {(showAnswerModal) && (
        <AnswerModal productInfo={productInfo} question={question} changeShowAnswerModal={changeShowAnswerModal} />
      )}
      <div>==================================================</div>
    </div>
  )
};

export default AnswersList;