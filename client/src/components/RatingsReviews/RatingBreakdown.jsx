import React from 'react';
import OverallRatingStars from './OverallRatingStars.jsx';
import RatingDistribution from './RatingDistribution.jsx';


const RatingBreakdown = ({reviewMetaData, reviewInfo, roundedAverageRatingOverall, totalRatings}) => {

  let fullStarCount = Math.floor(roundedAverageRatingOverall);
  let emptyStarCount = 4 - fullStarCount;
  let partialStar = roundedAverageRatingOverall - fullStarCount;
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStarCount) {
      starArray[i] = 1;
    } else if(i === fullStarCount) {
      starArray[i] = partialStar;
    } else {
      starArray[i] = 0;
    }
  }

  // console.log('META DATA:', reviewMetaData);
  if (reviewInfo && roundedAverageRatingOverall) {
    return (
      <div className='RatingBreakdown'>
        <h2>
          --AVG RATING: {roundedAverageRatingOverall}
          <OverallRatingStars starArray={starArray}/>
        </h2>

        -----RATING BREAKDOWN-----TOTAL REVIEWS: {reviewInfo.length}
        <RatingDistribution reviewMetaData={reviewMetaData}
        totalRatings={totalRatings}/>
      </div>
    )
  }
  return (
    <div>
      <progress></progress>
    </div>
  )
};

export default RatingBreakdown;
