import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';;
import SortMenu from './SortMenu.jsx';
import InnerReviewList from './InnerReviewList.jsx';

// John
// Remember sync and to GIT PULL

const ReviewsList = ({reviewInfo, setSortSelection, starArrayMaker}) => {

  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);

  let currentlyDisplayedReviews = [];
  // console.log(reviewsDisplayed);
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

  if (reviewInfo) {
    currentlyDisplayedReviews = reviewInfo.slice(0, reviewsDisplayed);
  }

  if (reviewInfo) {
    return(
      <div className='ReviewsList'>
        <h2>Reviews List Section</h2>
        <SortMenu setSortSelection={setSortSelection}/>
        <InnerReviewList currentlyDisplayedReviews={currentlyDisplayedReviews} starArrayMaker={starArrayMaker}/>
        {whetherToDisplayMoreReviewsButton()}
      </div>
    )
  }
  return(
    <div>
      <progress></progress>
    </div>
  )
};

export default ReviewsList;