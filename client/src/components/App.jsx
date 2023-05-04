import React, { useState, useEffect} from 'react';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';// John
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';//Sean
import RelatedItemsComparison from './RelatedItemsComparison/RelatedItemsComparison.jsx';//Xinhuang
import Overview from './Overview/Overview.jsx';//Together
import axios from 'axios';
require("dotenv").config();


const App = () => {

  let product_id = 40344;

  useEffect(()=>{
    let requestURL = process.env.API_URL + '/products/' + product_id;

    let config = {
      headers: {
        Authorization: process.env.API_TOKEN
      }
    };
    axios.get(requestURL, config)
      .then(data => setProductInfo(data))
      .catch(err => console.err(err));

  }
  , []);

  const [productInfo, setProductInfo] = useState({});






  return(
    <div>
      <div>Top of App</div>
      <Overview productInfo={productInfo}/>
      <RelatedItemsComparison productInfo={productInfo}/>
      <QuestionsAnswers productInfo={productInfo}/>
      <RatingsReviews productInfo={productInfo}/>
    </div>
  )
};

export default App;