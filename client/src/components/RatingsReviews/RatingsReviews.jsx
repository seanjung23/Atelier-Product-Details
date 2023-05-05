import React, { useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';

// John
// Remember sync and to GIT PULL

const RatingsReviews = ({productInfo}) => {

  // PRODUCT ID Will need PASSED DOWN Later
  let product_id = 37315;

  let url = '/reviews/';
  useEffect(() => {
    if (productInfo) {
      axios.get(url, {
        params: {product_id}
       })
       .then(result =>console.log('REVIEWS RESULT:', result))
       .catch(err => console.log('ERROR OBTAINING REVIEWS:', err));
    }
  }, [productInfo]);

  return(
    <div>
      <h1>Ratings and Reviews Section</h1>
      <ReviewsList />
    </div>
  )
};

export default RatingsReviews;