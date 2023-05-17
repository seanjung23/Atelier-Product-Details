import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';;
import SortMenu from './SortMenu.jsx';
import InnerReviewList from './InnerReviewList.jsx';
import CreateNewReviewButton from './CreateNewReviewButton.jsx';
import NewReviewForm from './NewReviewForm.jsx';

// John
// Remember sync and to GIT PULL

const ReviewsList = ({reviewInfo, setSortSelection, starArrayMaker,
  productInfo, reviewMetaData}) => {

  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);
  const [displayNewReviewForm, setDisplayNewReviewForm] = useState(false);

  let currentlyDisplayedReviews = [];
  const moreReviewsClickHandler = function () {
    setReviewsDisplayed(reviewsDisplayed + 2);
  }


  const whetherToDisplayMoreReviewsButton = function() {
    if (reviewInfo.length > 0
      && reviewsDisplayed < reviewInfo.length) {
        return (
          <div className='moreReviewsButton'>
            <MoreReviewsButton
      moreReviewsClickHandler={moreReviewsClickHandler}/>
          </div>
        )
      }
  }

  let handleWriteReviewOnClick = function () {
    setDisplayNewReviewForm(!displayNewReviewForm);
  }

  if (reviewInfo) {
    currentlyDisplayedReviews = reviewInfo.slice(0, reviewsDisplayed);
  }

  if (reviewInfo) {
    return(
      <div className='ReviewsList'>
        <SortMenu setSortSelection={setSortSelection}/>
        <InnerReviewList currentlyDisplayedReviews={currentlyDisplayedReviews} starArrayMaker={starArrayMaker}/>
        <div>
        {whetherToDisplayMoreReviewsButton()}
        {reviewMetaData.characteristics && <CreateNewReviewButton handleWriteReviewOnClick={handleWriteReviewOnClick}/>}
        </div>
        {displayNewReviewForm && <NewReviewForm productInfo={productInfo}
        reviewMetaData={reviewMetaData} setDisplayNewReviewForm={setDisplayNewReviewForm}/>}
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