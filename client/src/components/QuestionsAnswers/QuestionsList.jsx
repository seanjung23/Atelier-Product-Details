import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import {MoreQuestionsButton, LessQuestionsButton} from './QuestionsButtons.jsx';

const QuestionsList = ({questions}) => {
  // console.log('these are questions', questions);
  const [displayMoreQuestionsButton, setDisplayMoreQuestionsButton] = useState(true);
  const [questionCount, setQuestionCount] = useState(4);

  let displayedQuestions = [];

  if (questions.results) {
    if (questionCount === 0) {
      displayedQuestions = questions.results.slice(questionCount);
    } else {
      displayedQuestions = questions.results.slice(0, questionCount);
    }

  }

  const incrementCount = () => {
    setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
    setQuestionCount(0);
  };

  const decrementCount = () => {
    setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
    setQuestionCount(4);
  };



  if (displayedQuestions.length !== 0) {
    return (
      <div className="questionsList">
        {displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question}/>)}
        {displayMoreQuestionsButton && (
          <MoreQuestionsButton onClick={incrementCount}/>
        )}
        {!displayMoreQuestionsButton && (
          <LessQuestionsButton onClick={decrementCount}/>
        )}
      </div>
    )
  }

  return (
    <div>
      <h4>Q:</h4>
      <p>No Questions Asked Yet!</p>
      <button type="button" onClick={() => alert('hello')}>Submit New Question</button>
    </div>
  )
};

export default QuestionsList;