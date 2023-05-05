import React from 'react';

const MoreAnsweredQuestions = ({ onClick }) => {
  return (
    <div>
      <button type='button' onClick={() => onClick()}>More Answered Questions</button>
    </div>
  )
};

export default MoreAnsweredQuestions;