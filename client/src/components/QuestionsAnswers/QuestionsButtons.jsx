import React from 'react';

const MoreQuestionsButton = ({incrementCount}) => {
  return (
    <button className="more-questions-button" type="button" onClick={() => incrementCount()}>More Questions</button>
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

const CancelQuestionForm = ({changeShowQuestionModal}) => {
  return (
    <button className="cancel-submission-button" type="button" onClick={() => changeShowQuestionModal()}>Cancel</button>
  )
};

const SubmitQuestionForm = ({checkInputs}) => {
  return (
    <button className="question-submission-button" type="submit" onClick={() => checkInputs()}>Submit Question</button>
  )
};

const SubmitAnswerForm = ({checkInputs}) => {
  return (
    <button className="answer-submission-button" type="submit" onClick={() => checkInputs()}>Submit Answer</button>
  )
};

const CancelAnswerForm = ({changeShowAnswerModal}) => {
  return (
    <button className="cancel-submission-button" type="button" onClick={() => changeShowAnswerModal()}>Cancel</button>
  )
};

export {MoreQuestionsButton, AddQuestionButton, ShowAllAnswersButton, CollapseAllAnswersButton, SubmitQuestionForm, CancelQuestionForm, SubmitAnswerForm, CancelAnswerForm}