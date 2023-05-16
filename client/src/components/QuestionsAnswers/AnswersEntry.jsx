import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';

const AnswersEntry = ({answer}) => {
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
        <p>{answer.body}</p>
        <p className="answer-actions">
          by <strong>{answer.answerer_name}</strong> &nbsp;{format(parseISO(answer.date), 'MMM d yyyy')} &nbsp;<b>|</b>
          &nbsp;&nbsp;<span><b>Helpful?</b></span>&nbsp;&nbsp;
          {(!upvotedAnswer) && (
            <span>
              <a href="javascript:void(0)" onClick={()=> upvoteAnswer()}>Yes ({answer.helpfulness})</a> &nbsp;&nbsp;<b>|</b>
            </span>
          )}&nbsp;&nbsp;
          {(upvotedAnswer) && (
            <span>
              <span>Yes</span>  <b>|</b>
            </span>
          )}&nbsp;
          {!reportedAnswer && (
          <a href="javascript:void(0)" onClick={() => reportAnswer()}>Report</a>
          )}
          {reportedAnswer && (
          <span>Reported</span>
          )}
        </p>
      </div>
      )
  }

  return (
    <div>
      <p>{answer.body}</p>
      <p className="answer-actions">
        by {answer.answerer_name} &nbsp;{format(parseISO(answer.date), 'MMM d yyyy')} &nbsp;<b>|</b>
        &nbsp;&nbsp;<span><b>Helpful?</b></span>&nbsp;&nbsp;
        {(!upvotedAnswer) && (
          <span>
            <a href="javascript:void(0)" onClick={()=> upvoteAnswer()}>Yes ({answer.helpfulness})</a> &nbsp;&nbsp;<b>|</b>
          </span>
        )}&nbsp;&nbsp;
        {(upvotedAnswer) && (
          <span>
            <span>Yes</span>  <b>|</b>
          </span>
        )}&nbsp;
        {!reportedAnswer && (
        <a href="javascript:void(0)" onClick={() => reportAnswer()}>Report</a>
        )}
        {reportedAnswer && (
        <span>Reported</span>
        )}
      </p>
    </div>
  )
};

export default AnswersEntry;