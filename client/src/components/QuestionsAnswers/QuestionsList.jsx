import React, {useState} from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import MoreQuestionsButton from './MoreQuestionsButton.jsx';

const QuestionsList = ({questions}) => {
  // console.log('these are questions', questions);
  // const displayMoreQuestionsButton
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
    // fix this later to limit display questions
    // console.log('this is questionCount', questionCount);
    setQuestionCount(0);
    setAnswerCount(0);
  };

  if (displayedQuestions.length !== 0) {
    return (
      <div>
        {
          displayedQuestions.map((question, index) => <QuestionsListEntry key={index} question={question} answerCount={answerCount}/>)
        }
        <MoreQuestionsButton onClick={incrementCount}/>
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