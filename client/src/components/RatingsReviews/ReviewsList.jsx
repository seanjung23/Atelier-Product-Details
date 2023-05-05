import React from 'react';
import Review from './Review.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';;

// John
// Remember sync and to GIT PULL

const ReviewsList = ({reviewInfo}) => {

// We'll need to iterate through the review info and pass it
// as props to the reviews list. We'll also only need to display
// Two reviews initially
// Below the review list should be a show more button


  return(
    <div>
      <h2>Reviews List Section</h2>
      <Review />
      <MoreReviewsButton />
    </div>
  )
};

export default ReviewsList;