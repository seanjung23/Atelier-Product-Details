import React, { useEffect } from 'react';
import axios from 'axios';

// John
// Remember sync and to GIT PULL

const Review = ({oneReview}) => {

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

  return(
    <div>
      <div>------------PLACEHOLDER SEPERATION-------------</div>
      <div>
        <span>
          STARS: {oneReview.rating} ----------------------
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