import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';

// Sean
// Remember sync and to GIT PULL

const QuestionsAnswers = ({productInfo}) => {
  // console.log('this is productInfo', productInfo);
  const [questions, setQuestions] = useState({});

  useEffect(() => {

    if (productInfo && productInfo.id !== undefined) {
      let url = '/qa/questions';

      axios.get(url, {
        //change back to productInfo.id for product_id value below
        params: {product_id: 37312}
        })
        .then(result => setQuestions(result.data))
        .catch(err => console.log(err));
    }

  }, [productInfo]);

  if (!productInfo) {
    return (
      <div>
        <h1>Questions and Answers Section</h1>
        <p>Invalid Product ID</p>
        <progress></progress>
    </div>
    )
  }

  return(
    <div>
      <h1>Questions and Answers Section</h1>
      <QuestionsList questions={questions} />
    </div>
  )
};

export default QuestionsAnswers;
