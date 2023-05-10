import React from 'react';
import {format, parseISO} from 'date-fns';

const AnswersEntry = ({answer}) => {
  // console.log('this is answer', answer);
  if (answer.answerer_name === 'Seller') {
    return (
      <div>
        <p>--------------------------------------------------</p>
        <p>{answer.body}</p>
        <p>by <strong>{answer.answerer_name}</strong> {format(parseISO(answer.date), 'MMM d yyyy')}</p>
        <p>Helpful? <a href="">Yes ({answer.helpfulness})</a></p>
        <p>--------------------------------------------------</p>
      </div>
      )
  }

  return (
  <div>
    <p>--------------------------------------------------</p>
    <p>{answer.body}</p>
    <p>by {answer.answerer_name} {format(parseISO(answer.date), 'MMM d yyyy')}</p>
    <p>Helpful? <a href="">Yes ({answer.helpfulness})</a></p>
    <p>--------------------------------------------------</p>
  </div>
  )
};

export default AnswersEntry;