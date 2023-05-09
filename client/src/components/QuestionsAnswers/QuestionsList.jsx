import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import MoreQuestionsButton from './MoreQuestionsButton.jsx';
import LessQuestionsButton from './LessQuestionsButton.jsx';

const QuestionsList = ({questions}) => {
  // console.log('these are questions', questions);
  const [displayMoreQuestionsButton, setDisplayMoreQuestionsButton] = useState(true);
  const [questionCount, setQuestionCount] = useState(4);
  const [answerCount, setAnswerCount] = useState(2);

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
    setAnswerCount(0);
  };

  const decrementCount = () => {
    setDisplayMoreQuestionsButton(!displayMoreQuestionsButton);
    setQuestionCount(4);
    setAnswerCount(2);
  };

  if (displayedQuestions.length !== 0) {
    return (
      <div>
        {
          displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question} answerCount={answerCount}/>)
        }
        {displayMoreQuestionsButton && (
          <MoreQuestionsButton onClick={incrementCount}/>
        )
        }
        {!displayMoreQuestionsButton && (
          <LessQuestionsButton onClick={decrementCount}/>
        )
        }
      </div>
    )
  }

  return (
    <div>
      <p>No Questions Asked Yet!</p>
    </div>
  )
};

export default QuestionsList;