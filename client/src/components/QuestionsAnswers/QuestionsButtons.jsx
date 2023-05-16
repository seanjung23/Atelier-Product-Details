import React from 'react';

const MoreQuestionsButton = ({incrementCount}) => {
  return (
    <button className="more-questions-button" type="button" onClick={() => incrementCount()}>More Answered Questions</button>
  )
};

const AddQuestionButton = ({changeShowQuestionModal}) => {
  return (
    <button className="add-questions-button" type="button" onClick={() => changeShowQuestionModal()}>Add A Question +</button>
  )
};

const ShowAllAnswersButton = ({showAllAnswers}) => {
  return (
    <button className="show-answers-button" type="button" onClick={() => showAllAnswers()}>See More Answers</button>
  )
};

const CollapseAllAnswersButton = ({collapseAnswers}) => {
  return (
    <button className="collapse-answers-button" type="button" onClick={() => collapseAnswers()}>Collapse Answers</button>
  )
};

export {MoreQuestionsButton, AddQuestionButton, ShowAllAnswersButton, CollapseAllAnswersButton}