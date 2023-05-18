import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {EmptyStar, FullStar, OneQuarterStar, ThreeQuarterStar, HalfStar} from '../icons/ReviewRatingStarsSVG.jsx';
import Checkmark from '../icons/ReviewCheckmark.jsx';
import ReviewImageModal from './ReviewImageModal.jsx';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

// John
// Remember sync and to GIT PULL

const Review = ({oneReview, starArrayMaker}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  const [showMore, setShowMore] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageModalContent, setImageModalContent] = useState('');
  const [helpfulFeedbackGiven, setHelpfulFeedbackGiven] = useState(false);
  const [reportGiven, setReportGiven] = useState(false);

  let handleImageOnClick = function (e) {

    interactionAPI('Review Image', 'Ratings and Reviews');

    setShowImageModal(true);
    setImageModalContent(e.target.currentSrc);
  }

  let showMoreOnClick = function () {

    interactionAPI('Show More', 'Ratings and Reviews');

    setShowMore(true);
  }

  let dateAdjuster = function () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    let year = oneReview.date.slice(0, 4);
    let month = oneReview.date.slice(5, 7);
    let day = oneReview.date.slice(8, 10);
    let wordMonth = months[Number(month) - 1];
    // Use this instead of day if you want Jan 1 23 instead of Jan 01 23
    // let noZeroDayFormat = day.replace(0, '');
    let newDateFormat = wordMonth + ' ' + day + ', ' + year;
    return newDateFormat;
  }

  let oneReviewStarArray = starArrayMaker(oneReview.rating)

  let reviewTitle = oneReview.summary;
  if (oneReview.summary.length > 60) {
    reviewTitle = oneReview.summary.slice(0, 60) + '...';
  }

  // NEED TO ATTACH THIS FUNCTION TO APPROPRIATE SERVER API CALL
  const ReviewHelpfulnessUpdater = function () {
    axios.put(`/reviews/${oneReview.review_id}/helpful`)
      .then((result) => {setHelpfulFeedbackGiven(true)})
      .catch((err) => {console.log(err)});
  }

  const ReviewReportUpdater = function () {
    axios.put(`/reviews/${oneReview.review_id}/report`)
      .then((result) => {setReportGiven(true)})
      .catch((err) => {console.log(err)})
  }

  let wasItHelpfulClickHandler = function (e) {
    if (e.target.textContent.includes('Yes')) {
      ReviewHelpfulnessUpdater();

      interactionAPI('Review Helpfulness: Yes', 'Ratings and Reviews');

    } else if (e.target.textContent.includes('Report')) {
      ReviewReportUpdater();

      interactionAPI('Review Report', 'Ratings and Reviews');

    }
  }

  let handlingLongReviews = function () {
    if (oneReview.body.length > 250 && !showMore) {
      return (
        <div className='oneReviewBody'>
          {oneReview.body.slice(0, 250) + '...'}
          <div className='linkToClick'
          onClick={showMoreOnClick}>Show More</div>
        </div>
        )
    }
    return (
      <div className='oneReviewBody'>
        {oneReview.body}
      </div>
    )
  }

  return(
    <div className='oneReview'>
      <div>
        <div className='oneReviewRatingStars'>
          {oneReviewStarArray.map((element, index)=> {
            if (element === 1) {
              return <FullStar key={index}/>
           } else if (element >= 0.25 && element < 0.5) {
              return <OneQuarterStar key={index}/>
           } else if (element >= 0.50 && element < 0.75) {
              return <HalfStar key={index}/>
           } else if (element >= 0.75 && element < 1) {
            return <ThreeQuarterStar key={index}/>
           } else if (element >= 0 && element < 0.25){
             return <EmptyStar key={index}/>
           }
           })}
        </div>
        <div className='reviewerNameAndDate'>
          {oneReview.reviewer_name}
          {oneReview.reviewer_name.length > 0 && <span>, </span>}
          {dateAdjuster()}
        </div>
        {oneReview.response && <div className='responseFromSeller'>
          <strong> Response from Seller </strong>
        <div> {oneReview.response}</div>
        </div>}
      </div>
      <p><strong>{reviewTitle}</strong></p>
      {handlingLongReviews()}
        <div>
          {oneReview.photos.map((photo, index) =>{
            return (<img className='oneReviewImage'
            onClick={handleImageOnClick} src={photo.url} key={index}/>)
          })}
          {showImageModal && <ReviewImageModal setShowImageModal={setShowImageModal}
          imageModalContent={imageModalContent}/>}
        </div>
      {oneReview.recommend && <p><Checkmark /> I recommend this product</p>}
      {!helpfulFeedbackGiven && <div>
        Was this review helpful?
        <div className='wasItHelpful'
        onClick={wasItHelpfulClickHandler}>Yes{'('}{oneReview.helpfulness}{')'}</div>
        <span className='wasItHelpfulLine'> | </span>
        {!reportGiven && <div className='wasItHelpful'
        onClick={wasItHelpfulClickHandler}>Report</div>}
        {reportGiven && <span> Reported</span>}
      </div>}
      {helpfulFeedbackGiven && <div>
        Thank you
        <span className='wasItHelpfulLine'> | </span>
        {!reportGiven && <div className='wasItHelpful'
        onClick={wasItHelpfulClickHandler}>Report</div>}
        {reportGiven && <span> Reported</span>}
      </div>}
    </div>
  )
};

export default Review;