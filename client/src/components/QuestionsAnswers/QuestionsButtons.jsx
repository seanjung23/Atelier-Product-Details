import React from 'react';

const MoreQuestionsButton = ({incrementCount}) => {
  return (
    <div>
      <button type="button" onClick={() => incrementCount()}>More Answered Questions</button>
    </div>
  )
};

const AddQuestionButton = ({changeShowModal}) => {
  return (
    <div>
      <button type="button" onClick={() => changeShowModal()}>Add A Question +</button>
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

export {MoreQuestionsButton, AddQuestionButton, ShowAllAnswersButton, CollapseAllAnswersButton}