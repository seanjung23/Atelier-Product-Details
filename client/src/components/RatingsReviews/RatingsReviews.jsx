import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';

// John
// Remember sync and to GIT PULL
//--------------- NEEDS REVIEW FOR LOADING ICON
// To get all reviews without hardcoding a set limit (100 reviews)
// We could recursively perform an axios call until the array
// of reviews we get in return does not equal the count of reviews
// we need. We could concatenate our new reviews to our existing
// review info


const RatingsReviews = ({productInfo}) => {

  const [sortSelection, setSortSelection] = useState('relevant');
  const [reviewInfo, setReviewInfo] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});

  // PRODUCT ID Will need PASSED DOWN Later
  let product_id = 37315;

  let reviewUrl = '/reviews/';
  useEffect(() => {
    if (productInfo) {
      axios.get(reviewUrl, {
        params: {product_id: product_id, sort: sortSelection,
          count: 100, page: 1}
       })
       .then((result) => {
        console.log('REVIEWS RESULT:', result)
        setReviewInfo(result.data.results);
        })
       .catch(err => console.log('ERROR OBTAINING REVIEWS:', err));
    }
  }, [productInfo, sortSelection]);

  let reviewMetaDataUrl = '/reviews/meta'
  useEffect(() => {
    if (productInfo) {
      axios.get(reviewMetaDataUrl, {
        params: {product_id: product_id}
       })
       .then((result) => {
        console.log('META DATA RESULT:', result)
        setReviewMetaData(result.data);
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
      <RatingBreakdown reviewMetaData={reviewMetaData}/>
      <ReviewsList reviewInfo={reviewInfo} setSortSelection={setSortSelection}/>
    </div>
  )
};

export default RatingsReviews;