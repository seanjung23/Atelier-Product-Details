import React, { useState, useEffect, createContext} from 'react';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';// John
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';// Sean
import RelatedItemsComparison from './RelatedItemsComparison/RelatedItemsComparison.jsx';// Xinhuang
import Overview from './Overview/Overview.jsx';// Together
import axios from 'axios';
import {InteractionAPIContext} from './InteractionAPI.jsx';


const App = () => {

  const [productInfo, setProductInfo] = useState({});

  const interactionAPI = (element, widget) => {
    let time = new Date();
    let params =
      {
        element: element,
        widget: widget,
        time: time
      };


    axios.post('/interactions', params)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }


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
<InteractionAPIContext.Provider value={interactionAPI}>
    <div>
      <div id='FullApp'></div>

      <div>
        <h1 className="app-title">JSX</h1>
      </div>

      <div className="overviewDiv">
        <Overview productInfo={productInfo}/>
      </div>


      <div className="relatedItemsComparsionDiv">
        <RelatedItemsComparison productInfo={productInfo} setProduct_id={setProduct_id}/>
      </div>

      <InteractionAPIContext.Provider value={interactionAPI}>
        <div className="questionAnswersDiv">
          <QuestionsAnswers productInfo={productInfo}/>
        </div>
      </InteractionAPIContext.Provider>

      <InteractionAPIContext.Provider value={interactionAPI}>
      <div id="ratingsReviews" className="ratingsReviews">
        <RatingsReviews productInfo={productInfo}/>
      </div>
      </InteractionAPIContext.Provider>
    </div>
    </InteractionAPIContext.Provider>
  )
};

export default App;