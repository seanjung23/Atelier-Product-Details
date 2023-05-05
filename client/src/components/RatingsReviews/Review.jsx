import React, { useEffect } from 'react';
import axios from 'axios';

// John
// Remember sync and to GIT PULL

const Review = ({oneReview}) => {

  return(
    <div>
      <div>------------PLACEHOLDER SEPERATION-------------</div>
      <div>
        <span>
          STARS: {oneReview.rating} ----------------------
        </span>
        <span>
          REVIEWER NAME: {oneReview.reviewer_name}
        </span>
      </div>
      <p>REVIEW TITLE: {oneReview.summary}</p>
      <p>REVIEW BODY: {oneReview.body}</p>
      <div>------------PLACEHOLDER SEPERATION-------------</div>
    </div>
  )
};

export default Review;