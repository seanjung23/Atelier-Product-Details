import React from 'react';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';// John
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';//Sean
import RelatedItemsComparison from './RelatedItemsComparison/RelatedItemsComparison.jsx';//Xinhuang
import Overview from './Overview/Overview.jsx';//Together


const App = () => {

  return(
    <div>
      <div>Top of App</div>
      <Overview />
      <RelatedItemsComparison />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  )
};

export default App;