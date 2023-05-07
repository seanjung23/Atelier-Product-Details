import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';;
import SortMenu from './SortMenu.jsx';

// John
// Remember sync and to GIT PULL

const ReviewsList = ({reviewInfo, setSortSelection}) => {


  console.log('REVIEW INFORMATION:', reviewInfo);


  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);

  console.log(reviewsDisplayed);
  const moreReviewsClickHandler = function () {
    setReviewsDisplayed(reviewsDisplayed + 2);
  }

  const whetherToDisplayMoreReviewsButton = function() {
    if (reviewInfo.length > 2
      && reviewsDisplayed < reviewInfo.length) {
        return (
          <div>
            <MoreReviewsButton
      moreReviewsClickHandler={moreReviewsClickHandler}/>
          </div>
        )
      }
  }

  let currentlyDisplayedReviews = [];

  if (reviewInfo) {
    currentlyDisplayedReviews = reviewInfo.slice(0, reviewsDisplayed);
  }

  return(
    <div className='ReviewsList'>
      <h2>Reviews List Section</h2>
      <SortMenu setSortSelection={setSortSelection}/>
      {currentlyDisplayedReviews.map(function(oneReview, index) {
      return <Review oneReview={oneReview} key={index}/>
      })}
      {whetherToDisplayMoreReviewsButton()}
    </div>
  )
};

export default ReviewsList;