import React from 'react';
import OverallRatingStars from './OverallRatingStars.jsx';
import RatingDistribution from './RatingDistribution.jsx';


const RatingBreakdown = ({reviewMetaData, reviewInfo, roundedAverageRatingOverall, totalRatings, starArray, setFilterSettings,
filterSettings}) => {

  if (reviewInfo && roundedAverageRatingOverall) {
    return (
      <div className='RatingBreakdown'>
        <h2>
          --AVG RATING: {roundedAverageRatingOverall}
          <OverallRatingStars starArray={starArray}/>
        </h2>

        -----RATING BREAKDOWN-----TOTAL REVIEWS: {reviewInfo.length}
        <RatingDistribution reviewMetaData={reviewMetaData}
        totalRatings={totalRatings} setFilterSettings={setFilterSettings}
        filterSettings={filterSettings}/>
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
