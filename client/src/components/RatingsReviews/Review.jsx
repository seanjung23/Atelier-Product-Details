import React, { useEffect } from 'react';
import axios from 'axios';
import {EmptyStar, FullStar, OneQuarterStar, ThreeQuarterStar, HalfStar} from '../icons/ReviewRatingStarsSVG.jsx'

// John
// Remember sync and to GIT PULL

const Review = ({oneReview, starArrayMaker}) => {


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
    axios.put(`/reviews/:${oneReview_id}/helpful`)
      .then((result) => {console.log(result)})
      .catch((err) => {console.logerr});
  }

  let wasItHelpfulClickHandler = function (e) {
    if (e.target.textContent.includes('Yes')) {
      console.log('FIX API REQEST and ADD HELPFULNESS updater');
    } else if (e.target.textContent.includes('No')) {
      return;
    }
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
          {oneReview.reviewer_name}, {dateAdjuster()}
        </div>
      </div>
      <p><strong>{reviewTitle}</strong></p>
      <div className='oneReviewBody'>
        {oneReview.body}
        </div>
        <div>
          {oneReview.photos.map((photo, index) =>{
            return (<img className='oneReviewImage' src={photo.url} key={index}/>)
          })}
        </div>
      {oneReview.recommend && <p>CHECKMARK HERE I recommend this product</p>}
      <div>
        Was this review helpful?
        <div className='wasItHelpful'
        onClick={wasItHelpfulClickHandler}>Yes{'('}{oneReview.helpfulness}{')'}</div>
        <div className='wasItHelpful'
        onClick={wasItHelpfulClickHandler}>No</div>
      </div>
    </div>
  )
};

export default Review;