import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';

// Sean
// Remember sync and to GIT PULL

const QuestionsAnswers = ({productInfo}) => {
  // console.log('this is productInfo', productInfo);
  const [questions, setQuestions] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState({});

  useEffect(() => {
    if (productInfo && productInfo.id !== undefined) {
      let url = '/qa/questions';

      axios.get(url, {
        //change back to productInfo.id for product_id value below 37311 37312(seller) 37325
        params: {product_id: 37325}
        })
        .then(result => setQuestions(result.data))
        .catch(err => console.log(err));
    }
  }, [productInfo]);

  const retrieveQuery = (query) => {
    let test = {};

    test.product_id = questions.product_id;

    test.results = questions.results.filter((question) => {
      return question.question_body.toLowerCase().includes(query);
    })

    setFilteredQuestions(test);
  };

  if (!productInfo) {
    return (
      <div>
        <h1>Questions and Answers Section</h1>
        <progress></progress>
      </div>
    )
  }

  return(
    <div>
      <h1>Questions and Answers Section</h1>
      <SearchQuestions retrieveQuery={retrieveQuery} />
      {filteredQuestions.results !== undefined && <QuestionsList questions={filteredQuestions} />}
      {filteredQuestions.results === undefined && <QuestionsList questions={questions} />}
    </div>
  )
};

export default QuestionsAnswers;
