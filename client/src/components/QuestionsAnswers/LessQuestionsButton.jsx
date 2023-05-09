import React from 'react';

const LessQuestionsButton = ({onClick}) => {
  return (
    <div>
      <button type='button' onClick={() => onClick()}>Show Less Questions</button>
    </div>
  )
};

export default LessQuestionsButton;