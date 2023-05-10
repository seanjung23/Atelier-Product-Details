import React from 'react';

const MoreQuestionsButton = ({onClick}) => {
  return (
    <div>
      <button type="button" onClick={() => onClick()}>More Answered Questions</button>
    </div>
  )
};

const LessQuestionsButton = ({onClick}) => {
  return (
    <div>
      <button type="button" onClick={() => onClick()}>Show Less Questions</button>
    </div>
  )
};

const ShowAllAnswersButton = ({showAllAnswers}) => {
  return (
    <button type="button" onClick={() => showAllAnswers()}>See More Answers</button>
  )
};

const CollapseAllAnswersButton = ({collapseAnswers}) => {
  return (
    <button type="button" onClick={() => collapseAnswers()}>Collapse Answers</button>
  )
};

export {MoreQuestionsButton, LessQuestionsButton, ShowAllAnswersButton, CollapseAllAnswersButton}