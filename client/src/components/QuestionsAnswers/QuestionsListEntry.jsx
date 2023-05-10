import React, {useState} from 'react';
import AnswersEntry from './AnswersEntry.jsx';
import {ShowAllAnswersButton, CollapseAllAnswersButton} from './QuestionsButtons.jsx';

const QuestionsListEntry = ({question}) => {
  // console.log('this is question', question);
  const [answerCount, setAnswerCount] = useState(2);
  const [showAnswersButton, setShowAnswersButton] = useState(true);
  const [reported, setReported] = useState(false);

  let answers = [];

  for (let i in question.answers) {
    answers.push(question.answers[i]);
  }

  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  if (answerCount === 0) {
    answers = answers.slice(answerCount);
  } else {
    answers = answers.slice(0, answerCount);
  }

  for (let j = 0; j < answers.length; j++) {
    if (answers[j].answerer_name === 'Seller') {
      let temp = answers.splice(j, 1);
      answers.unshift(temp[0]);
    }
  }
  // console.log('this is answers', answers);

  const showAllAnswers = () => {
    setAnswerCount(0);
    setShowAnswersButton(!showAnswersButton);
  }

  const collapseAnswers = () => {
    setAnswerCount(2);
    setShowAnswersButton(!showAnswersButton);
  };

  if (answers.length !== 0) {
    return (
      <div>
        <h4>Q:</h4>
        <p className="questionBody">{question.question_body}</p>&nbsp;
        <p className="questionBody">
          <span>Helpful?</span> <a href="">Yes ({question.question_helpfulness})</a> <b>|</b>&nbsp;
          <a href="">Add Answer</a>
        </p>
        <div>
          <h4>A:</h4>
          {answers.map((answer, index) => <AnswersEntry key={index} answer={answer} reported={reported} setReported={setReported}/>)}
          {showAnswersButton && (<ShowAllAnswersButton showAllAnswers={showAllAnswers}/>)}
          {!showAnswersButton && (<CollapseAllAnswersButton collapseAnswers={collapseAnswers}/>)}
        </div>
        <div>==================================================</div>
      </div>
    )
  }

  return (
    <div>
      <h4>Q:</h4>
      <p className="questionBody">{question.question_body}</p>&nbsp;
      <p className="questionBody">
        <span>Helpful?</span> <a href="">Yes ({question.question_helpfulness})</a> <b>|</b>&nbsp;
        <a href="">Add Answer</a>
      </p>
      <div>
        <h4>A:</h4>
        <p>No Answers Yet!</p>
      </div>
      <div>==================================================</div>
    </div>
  )
};

export default QuestionsListEntry;