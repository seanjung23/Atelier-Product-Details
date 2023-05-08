import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';;
import SortMenu from './SortMenu.jsx';

// John
// Remember sync and to GIT PULL

const ReviewsList = ({reviewInfo, setSortSelection}) => {


  // console.log('REVIEW INFORMATION:', reviewInfo);

// We'll need to iterate through the review info and pass it
// as props to the reviews list. We'll also only need to display
// Two reviews initially
// Below the review list should be a show more button
// We'll keep track of the length of the array
  //console.log('LENGTH OF REVIEWINFO', reviewInfo.length);
// Only display the show more button if the reviewInfo.length is
// Greater than 2
// Each time the button is pressed, we'll add 2
// If the number of reviews to be displayed is greater
// than the length of the reviews, display all reviews
// and do not display the moreReviews button

  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);

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