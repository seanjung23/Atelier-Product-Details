import React from 'react';
import OverallRatingStars from './OverallRatingStars.jsx';
import RatingDistribution from './RatingDistribution.jsx';


const RatingBreakdown = ({reviewMetaData, reviewInfo, roundedAverageRatingOverall, totalRatings, starArray}) => {


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
