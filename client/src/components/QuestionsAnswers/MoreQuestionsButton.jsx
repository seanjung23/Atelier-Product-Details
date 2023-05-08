import React from 'react';

const MoreQuestionsButton = ({ onClick }) => {
  return (
    <div>
      <button type='button' onClick={() => onClick()}>More Answered Questions</button>
    </div>
  )
};

export default MoreQuestionsButton;