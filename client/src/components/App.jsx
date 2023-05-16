import React, { useState, useEffect} from 'react';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';// John
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';// Sean
import RelatedItemsComparison from './RelatedItemsComparison/RelatedItemsComparison.jsx';// Xinhuang
import Overview from './Overview/Overview.jsx';// Together
import axios from 'axios';



const App = () => {

  const [productInfo, setProductInfo] = useState({});
  const [product_id, setProduct_id] = useState(37315)
  useEffect(() => {
    //// USE THE SAME PRODUCT_ID LATER WHEN WE PUT EVERYTHING TOGETHER



    let url = '/products/' + product_id;

    axios.get(url)
      .then(result => setProductInfo(result.data))
      .catch(err => console.log(err));


  }, [product_id]);

  if(productInfo.id === undefined) {
    return (<></>)
  }
  return(
    <div>
      <div id='FullApp'></div>

      <div className="overviewDiv">
        <Overview productInfo={productInfo}/>
      </div>

      <div className="relatedItemsComparsionDiv">
        <RelatedItemsComparison productInfo={productInfo} setProduct_id={setProduct_id}/>
      </div>

      <div className="questionAnswersDiv">
        <QuestionsAnswers productInfo={productInfo}/>
      </div>

      <div id="ratingsReviews" className="ratingsReviews">
        <RatingsReviews productInfo={productInfo}/>
      </div>

    </div>
  )
};

export default App;