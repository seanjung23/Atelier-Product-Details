import React from 'react';
import QuestionsList from './QuestionsList.jsx';

// Sean
// Remember sync and to GIT PULL

const QuestionsAnswers = ({ productInfo }) => {

  return(
    <div>
      <h1>Questions and Answers Section</h1>
      <QuestionsList productInfo={productInfo}/>
    </div>
  )
};

export default QuestionsAnswers;