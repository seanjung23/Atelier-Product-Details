import React from 'react';
import AnswersEntry from './AnswersEntry.jsx';

const QuestionsListEntry = ({question, answerCount}) => {
  // console.log('this is question', question);
  let answers = [];

  for (let i in question.answers) {
    answers.push(question.answers[i]);
  }

  if (answerCount === 0) {
    answers = answers.slice(answerCount);
  } else {
    answers = answers.slice(0, answerCount);
  }

  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].answerer_name === 'Seller') {
      answers.unshift(answers[i]);
      answers.splice(i, 1);
    }
  }

  console.log('this is answers', answers);

  if (answers.length !== 0) {
    return (
      <div>
        <div>Q:</div>
        <p>{question.question_body}</p>
        <div>A:</div>
        {
          answers.map((answer, index) => <AnswersEntry key={index} answer={answer} />)
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