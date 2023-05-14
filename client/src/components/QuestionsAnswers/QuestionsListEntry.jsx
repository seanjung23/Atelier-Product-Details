import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';

const QuestionsListEntry = ({question, productInfo}) => {
  // console.log('this is question', question);
  const [answers, setAnswers] = useState([]);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  useEffect(() => {
    let url = '/qa/questions/' + question.question_id + '/answers'
    let params = {
      question_id: question.question_id,
      page: 1,
      count: 1000
    }

    axios.get(url, { params })
      .then((result) => setAnswers(result.data.results))
      .catch((err) => console.log(err));
  }, [question])

  const changeShowAnswerModal = () => {
    setShowAnswerModal(!showAnswerModal);
  };

  return (
    <div>
      <h4>Q:</h4>
      <p className="questionBody">{question.question_body}</p>&nbsp;
      <p className="questionBody">
        <span>Helpful?</span> <a href="">Yes ({question.question_helpfulness})</a> <b>|</b>&nbsp;
        {/* fix this section for adding answers */}
        <a href="javacript:void(0)" onClick={() => changeShowAnswerModal()}>Add Answer</a>
      </p>
      <AnswersList answers={answers} question={question} productInfo={productInfo} showAnswerModal={showAnswerModal} changeShowAnswerModal={changeShowAnswerModal} />
    </div>
  )
};

export default QuestionsListEntry;