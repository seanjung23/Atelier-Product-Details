import React from 'react';

const MoreQuestionsButton = ({onClick}) => {
  return (
    <div>
      <button type='button' onClick={() => onClick()}>Show More Questions</button>
    </div>
  )
};

export default MoreQuestionsButton;