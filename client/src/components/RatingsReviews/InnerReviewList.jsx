import react, { useState } from 'react';
import Review from './Review.jsx';

const InnerReviewList = ({currentlyDisplayedReviews, starArrayMaker}) => {

  const [helpfulReviews, setHelpfulReviews] = useState({});
  const [reportedReviews, setReportedReviews] = useState({});

  let ifReviewWasHelpful = {...helpfulReviews};
  let ifReviewWasReported = {...reportedReviews};

  return (
    <div className='innerReviewList'>
        {currentlyDisplayedReviews.map(function(oneReview, index) {
        return <Review oneReview={oneReview} key={index} starArrayMaker={starArrayMaker} ifReviewWasHelpful={ifReviewWasHelpful}
        ifReviewWasReported={ifReviewWasReported}
        setHelpfulReviews={setHelpfulReviews}
        setReportedReviews={setReportedReviews}/>
        })}
    </div>
  )
}

export default InnerReviewList;