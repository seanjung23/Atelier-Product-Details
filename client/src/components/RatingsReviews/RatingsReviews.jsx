import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';

// John
// Remember sync and to GIT PULL

const RatingsReviews = ({productInfo}) => {


  const [reviewInfo, setReviewInfo] = useState([]);
  // PRODUCT ID Will need PASSED DOWN Later
  let product_id = 37315;

  let url = '/reviews/';
  useEffect(() => {
    if (productInfo) {
      axios.get(url, {
        params: {product_id}
       })
       .then((result) => {
        //console.log('REVIEWS RESULT:', result)
        setReviewInfo(result.data.results);
        })
       .catch(err => console.log('ERROR OBTAINING REVIEWS:', err));
    }
  }, [productInfo]);

  if (!productInfo) {
    return (
      <div>
        Reviews Loading - CONSIDER USING ICON
      </div>
    )
  }

  return(
    <div>
      <h1>Ratings and Reviews Section</h1>
      <ReviewsList reviewInfo={reviewInfo}/>
    </div>
  )
};

export default RatingsReviews;