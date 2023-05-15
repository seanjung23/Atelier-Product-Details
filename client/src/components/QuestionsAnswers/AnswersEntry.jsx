import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';

const AnswersEntry = ({answer}) => {
  // console.log('this is answer', answer);
  const [upvotedAnswer, setUpvotedAnswer] = useState(false);
  const [reportedAnswer, setReportedAnswer] = useState(false);

  const upvoteAnswer = () => {
    let url = '/qa/answers/' + answer.answer_id + '/helpful';
    let params = {
      answer_id: answer.answer_id
    }

    axios.put(url, {params})
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setUpvotedAnswer(!upvotedAnswer);
  };

  const reportAnswer = () => {
    let url = '/qa/answers/' + answer.answer_id + '/report'
    let params = {
      answer_id: answer.answer_id
    }

    axios.put(url, {params})
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setReportedAnswer(!reportedAnswer);
  };

  if (answer.answerer_name === 'Seller') {
    return (
      <div>
        <p>--------------------------------------------------</p>
        <p>{answer.body}</p>
        <p>
          by <strong>{answer.answerer_name}</strong> {format(parseISO(answer.date), 'MMM d yyyy')} <b>|</b>&nbsp;
          <span><b>Helpful?</b></span>&nbsp;
          {(!upvotedAnswer) && (
            <span>
              <a href="javascript:void(0)" onClick={()=> upvoteAnswer()}>Yes ({answer.helpfulness})</a> <b>|</b>
            </span>
          )}
          {(upvotedAnswer) && (
            <span>
              <span>Yes</span> <b>|</b>
            </span>
          )}&nbsp;
          {!reportedAnswer && (
          <a href="javascript:void(0)" onClick={() => reportAnswer()}>Report</a>
          )}
          {reportedAnswer && (
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
      <span><b>Helpful?</b></span>&nbsp;
      {(!upvotedAnswer) && (
        <span>
          <a href="javascript:void(0)" onClick={()=> upvoteAnswer()}>Yes ({answer.helpfulness})</a> <b>|</b>
        </span>
      )}
      {(upvotedAnswer) && (
        <span>
          <span>Yes</span> <b>|</b>
        </span>
      )}&nbsp;
      {!reportedAnswer && (
      <a href="javascript:void(0)" onClick={() => reportAnswer()}>Report</a>
      )}
      {reportedAnswer && (
      <span>Reported</span>
      )}
    </p>
    <p>--------------------------------------------------</p>
  </div>
  )
};

export default AnswersEntry;