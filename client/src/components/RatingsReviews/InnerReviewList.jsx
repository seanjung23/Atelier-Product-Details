import react from 'react';
import Review from './Review.jsx';

const InnerReviewList = ({currentlyDisplayedReviews, starArrayMaker}) => {

  return (
    <div className='innerReviewList'>
        {currentlyDisplayedReviews.map(function(oneReview, index) {
        return <Review oneReview={oneReview} key={index} starArrayMaker={starArrayMaker}/>
        })}
    </div>
  )
}

export default InnerReviewList;