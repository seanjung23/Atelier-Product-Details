import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const QuestionsListEntry = ({question, productInfo}) => {
  const interactionAPI = useContext(InteractionAPIContext);
  const [answers, setAnswers] = useState([]);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [upvotedQuestion, setUpvotedQuestion] = useState(false);
  const [reportedQuestion, setReportedQuestion] = useState(false);

  useEffect(() => {
    let url = '/qa/questions/' + question.question_id + '/answers'
    let params = {
      question_id: question.question_id,
      page: 1,
      count: 1000
    }

    axios.get(url, {params})
      .then((result) => setAnswers(result.data.results))
      .catch((err) => console.log(err));
  }, [question])

  const upvoteQuestion = () => {
    interactionAPI("Upvote Question Button", "QuestionsAnswers");

    let url = '/qa/questions/' + question.question_id + '/helpful';
    let params = {
      question_id: question.question_id
    }

    axios.put(url, {params})
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setUpvotedQuestion(!upvotedQuestion);
  };

  const changeShowAnswerModal = () => {
    interactionAPI("Show/Hide Answer Modal Button", "QuestionsAnswers");
    setShowAnswerModal(!showAnswerModal);
  };

  const reportQuestion = () => {
    interactionAPI("Report Question Button", "QuestionsAnswers");

    let url = '/qa/questions/' + question.question_id + '/report';
    let params = {
      question_id: question.question_id
    }

    axios.put(url, {params})
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setReportedQuestion(!reportedQuestion);
  };

  return (
    <div>
      <div className="question-list-body">
        <p className="question-body">Q: {question.question_body}</p>&nbsp;
        <p className="question-actions">
          <span>Helpful?</span>&nbsp;
          {(!upvotedQuestion) && (
            <span>
              <a href="javascript:void(0)" onClick={() => upvoteQuestion()}>Yes ({question.question_helpfulness})</a> <b>|</b>
            </span>
          )}
          {(upvotedQuestion) && (
            <span>
              <span>Yes</span> <b>|</b>
            </span>
          )}
          &nbsp;<a href="javacript:void(0)" onClick={() => changeShowAnswerModal()}>Add Answer</a> <b>|</b>&nbsp;
          {!reportedQuestion && (
            <a href="javascript:void(0)" onClick={() => reportQuestion()}>Report Question</a>
          )}
          {reportedQuestion && (
            <span>Reported</span>
          )}
        </p>
      </div>
      <AnswersList answers={answers} question={question} productInfo={productInfo} showAnswerModal={showAnswerModal} changeShowAnswerModal={changeShowAnswerModal} />
    </div>
  )
};


export default QuestionsListEntry;