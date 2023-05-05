import React from 'react';

const AnswersEntry = ({ answer }) => {
  // console.log('this is answer', answer);
  return (
  <div>
    <p>A: {answer.body}</p>
    <p>by {`${answer.answerer_name}, ${answer.date}`}</p>
  </div>
  )
};

export default AnswersEntry;