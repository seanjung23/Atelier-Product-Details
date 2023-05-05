import React, { useState } from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';

const QuestionsList = ({ questions }) => {
  // console.log('these are questions', questions);
  const [ questionCount, setQuestionCount ] = useState(2);

  const incrementCount = () => {
    console.log(questionCount)
    let counter = questionCount + 2;
    // alert('hello!');
    setQuestionCount(counter);
  };

  if (questions.results !== undefined && questions.results.length !== 0) {
    return (
      <div>
        {
          questions.results.map((question, index) => <QuestionsListEntry key={index} question={question} />)
        }
        <MoreAnsweredQuestions onClick={incrementCount}/>
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