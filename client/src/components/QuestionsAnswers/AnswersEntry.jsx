import React, {useState} from 'react';
import {format, parseISO} from 'date-fns';

const AnswersEntry = ({answer}) => {
  const [reported, setReported] = useState(false);

  // console.log('this is answer', answer);
  if (answer.answerer_name === 'Seller') {
    return (
      <div>
        <p>--------------------------------------------------</p>
        <p>{answer.body}</p>
        <p>
          by <strong>{answer.answerer_name}</strong> {format(parseISO(answer.date), 'MMM d yyyy')} <b>|</b>&nbsp;
          <span>Helpful?</span> <a href="">Yes ({answer.helpfulness})</a> <b>|</b>&nbsp;
          {!reported && (
          <a href="" onClick={() => setReported(!reported)}>Report</a>
          )}
          {reported && (
          <span>Reported</span>
          )}
        </p>
        <p>--------------------------------------------------</p>
      </div>
      )
  }

  return (
  <div>
    <p>--------------------------------------------------</p>
    <p>{answer.body}</p>
    <p>
      by {answer.answerer_name} {format(parseISO(answer.date), 'MMM d yyyy')} <b>|</b>&nbsp;
      <span>Helpful?</span> <a href="">Yes ({answer.helpfulness})</a> <b>|</b>&nbsp;
      {!reported && (
      <a href="" onClick={() => setReported(!reported)}>Report</a>
      )}
      {reported && (
      <span>Reported</span>
      )}
    </p>
    <p>--------------------------------------------------</p>
  </div>
  )
};

export default AnswersEntry;