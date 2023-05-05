import React from 'react';
import AnswersEntry from './AnswersEntry.jsx';

const QuestionsListEntry = ({ question }) => {
  // console.log('this is question', question);
  let answersArray = [];

  for (let i in question.answers) {
    answersArray.push(question.answers[i]);
  }

  // console.log('this is answers', answersArray);

  return (
    <div>
      <p>Q: { question.question_body }</p>
      {
        answersArray.map((answer, index) => <AnswersEntry key={index} answer={answer} />)
      }
    </div>
  )
};

export default QuestionsListEntry;