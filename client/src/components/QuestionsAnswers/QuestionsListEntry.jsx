import React from 'react';
import AnswersEntry from './AnswersEntry.jsx';

const QuestionsListEntry = ({question, answerCount}) => {
  // console.log('this is question', question);
  let answers = [];

  for (let i in question.answers) {
    answers.push(question.answers[i]);
  }
  console.log('this is answers before slice', answers);

  if (answerCount === 0) {
    answers = answers.slice(answerCount);
    console.log('this is answers', answers);
  } else {
    answers = answers.slice(0, answerCount);
    console.log('this is answerds', answers);
  }
  // console.log('this is answers', answers);

  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  for (let j = 0; j < answers.length; j++) {
    if (answers[j].answerer_name === 'Seller') {
      let temp = answers.splice(j, 1);
      answers.unshift(temp[0]);
    }
  }


  if (answers.length !== 0) {
    return (
      <div>
        <h4>Q:</h4>
        <p>{question.question_body}</p>
        <div>
          <h4>A:</h4>
          {answers.map((answer, index) => <AnswersEntry key={index} answer={answer} />)}
        </div>
        <div>==================================================</div>
      </div>
    )
  }

  return (
    <div>
      <h4>Q:</h4>
      <p>{question.question_body}</p>
      <div>
        <h4>A:</h4>
        <p>No Answers Yet!</p>
      </div>
      <div>==================================================</div>
    </div>
  )
};

export default QuestionsListEntry;