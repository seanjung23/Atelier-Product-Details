import React from 'react';
import {format, parseISO} from 'date-fns';

const AnswersEntry = ({answer}) => {
  // console.log('this is answer', answer);

  return (
  <div>
    <p>A: {answer.body}</p>
    <p>by {answer.answerer_name} {format(parseISO(answer.date), 'MMM d yyyy')}</p>
  </div>
  )
};

export default AnswersEntry;