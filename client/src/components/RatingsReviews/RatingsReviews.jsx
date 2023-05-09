import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';

// John
// Remember sync and to GIT PULL
//--------------- NEEDS REVIEW FOR LOADING ICON


const RatingsReviews = ({productInfo}) => {

  const [sortSelection, setSortSelection] = useState('relevant');
  const [reviewInfo, setReviewInfo] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});

  // PRODUCT ID Will need PASSED DOWN Later
  let product_id = 37315;

  let reviewInfoRetriever = function (countNumber) {
    axios.get(reviewUrl, {
      params: {product_id: product_id, sort: sortSelection,
        count: countNumber, page: 1}
     })
     .then((result) => {
      setReviewInfo(result.data.results);
      // recursively call the info retriever until all reviews
      // are retrieved, no matter how high the number
      if (result.data.results.length === countNumber) {
        reviewInfoRetriever((countNumber * 2));
      }})
     .catch(err => console.log('ERROR OBTAINING REVIEWS:', err));
  }

  let reviewUrl = '/reviews/';
  useEffect(() => {
    if (productInfo) {
      // Set to page to any number that's reasonable for reviews
      reviewInfoRetriever(100);
    }
  }, [productInfo, sortSelection]);

  let reviewMetaDataUrl = '/reviews/meta'
  useEffect(() => {
    if (productInfo) {
      axios.get(reviewMetaDataUrl, {
        params: {product_id: product_id}
       })
       .then((result) => {
        setReviewMetaData(result.data);
        })
       .catch(err => console.log('ERROR OBTAINING REVIEWS:', err));
    }
  }, [productInfo]);

  // Metadata calculations
  let allRatings;
  let averageRatingOverall;
  let totalRatings;

  if (reviewMetaData.ratings) {
    allRatings = reviewMetaData.ratings;
    totalRatings = (Number(allRatings[1])
    + Number(allRatings[2]) + Number(allRatings[3])
    + Number(allRatings[4]) + Number(allRatings[5]));
    averageRatingOverall = (
      Number(allRatings[1]) + Number(allRatings[2] * 2)
      + Number(allRatings[3] * 3)
      + Number(allRatings[4] * 4) + Number(allRatings[5] * 5)
    )/totalRatings;
  }

  let roundedAverageRatingOverall = (
    (Math.round(averageRatingOverall * 10))/10
  )

  if (!productInfo) {
    return (
      <div>
        <progress></progress>
      </div>
    )
  }

  return(
    <div>
      <h1>Ratings and Reviews Section</h1>
      <RatingBreakdown reviewMetaData={reviewMetaData} reviewInfo={reviewInfo} roundedAverageRatingOverall={roundedAverageRatingOverall} totalRatings={totalRatings}/>
      <ReviewsList reviewInfo={reviewInfo} setSortSelection={setSortSelection}/>
    </div>
  )
};

export default RatingsReviews;