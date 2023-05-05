import React from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';

const QuestionsList = ({ questions }) => {
  // console.log('these are questions', questions);
  if (questions.results !== undefined && questions.results.length !== 0) {
    return (
      <div>
        {
          questions.results.map((question, index) => <QuestionsListEntry key={index} question={question} />)
        }
        <MoreAnsweredQuestions />
      </div>
    )
  }

  return (
    <div>
      <p>No Questions Asked Yet!</p>
    </div>
  )
};

export default QuestionsList;