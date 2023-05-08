import React, { useState } from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';

const QuestionsList = ({ questions }) => {
  // console.log('these are questions', questions);
  const [ questionCount, setQuestionCount ] = useState(4);
  const [ answerCount, setAnswerCount ] = useState(2);

  const incrementCount = () => {
    alert('hello!');
    // fix this later to limit display questions
    // console.log(questionCount)
    // setQuestionCount(0);
    // setAnswerCount(0);
  };

  if (questions.results !== undefined && questions.results.length !== 0) {
    return (
      <div>
        {
          questions.results.map((question, index) => <QuestionsListEntry key={index} question={question} questionCount={questionCount} answerCount={answerCount}/>)
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