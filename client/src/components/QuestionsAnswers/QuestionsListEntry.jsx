import React from 'react';
import AnswersEntry from './AnswersEntry.jsx';

const QuestionsListEntry = ({question, answerCount}) => {
  // console.log('this is question', question);
  //fix answers display
  let answersArray = [];

  for (let i in question.answers) {
    answersArray.push(question.answers[i]);
  }

  if (answerCount === 0) {
    answersArray = answersArray.slice(answerCount);
    // console.log('if count is 0', answersArray)
  } else {
    answersArray = answersArray.slice(0, answerCount);
    // console.log('if count is 2', answersArray)
  }
  // console.log('this is answers', answersArray);

  if (answersArray.length !== 0) {
    return (
      <div>
        <p>Q: {question.question_body}</p>
        {
          answersArray.map((answer, index) => <AnswersEntry key={index} answer={answer} />)
        }
      </div>
    )
  }

  return (
    <div>
        <p>Q: {question.question_body}</p>
        <p>No Answers Yet!</p>
      </div>
  )
};

export default QuestionsListEntry;