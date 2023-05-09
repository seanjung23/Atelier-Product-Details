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
    let noZeroDayFormat = day.replace(0, '');
    let newDateFormat = wordMonth + ' ' + noZeroDayFormat + ', ' + year;
    return newDateFormat;
  }

  let oneReviewStarArray = starArrayMaker(oneReview.rating)

  return(
    <div>
      <div>------------PLACEHOLDER SEPERATION-------------</div>
      <div>
        <span>
          STARS:
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
           })} ----------------------
        </span>
        <span>
          REVIEWER NAME: {oneReview.reviewer_name}, DATE: {dateAdjuster()}
        </span>
      </div>
      <p>REVIEW TITLE: {oneReview.summary}</p>
      <p>REVIEW BODY: {oneReview.body}</p>
      {oneReview.recommend && <p>CHECKMARK HERE I recommend this product</p>}
      <div>------------PLACEHOLDER SEPERATION-------------</div>
    </div>
  )
};

export default Review;