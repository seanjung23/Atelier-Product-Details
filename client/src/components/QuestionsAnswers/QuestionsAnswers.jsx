import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const QuestionsAnswers = ({productInfo}) => {
  const interactionAPI = useContext(InteractionAPIContext);
  const [questions, setQuestions] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState({});

  useEffect(() => {
    if (productInfo && productInfo.id !== undefined) {
      let url = '/qa/questions';
      let params = {
        product_id: productInfo.id,
        page: 1,
        count: 1000
      };

      axios.get(url, {params})
        .then(result => setQuestions(result.data))
        .catch(err => console.log(err));
    }
  }, [productInfo]);

  const retrieveQuery = (query) => {
    interactionAPI("Search Questions SearchBar", "QuestionsAnswers");

    let temp = {};

    temp.product_id = questions.product_id;

    temp.results = questions.results.filter((question) => {
      return question.question_body.toLowerCase().includes(query);
    })

    setFilteredQuestions(temp);
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
      <h1>Questions & Answers</h1>
      <SearchQuestions retrieveQuery={retrieveQuery} />
      {filteredQuestions.results !== undefined && <QuestionsList questions={filteredQuestions} productInfo={productInfo} />}
      {filteredQuestions.results === undefined && <QuestionsList questions={questions} productInfo={productInfo} />}
    </div>
  )
};

export default QuestionsAnswers;
