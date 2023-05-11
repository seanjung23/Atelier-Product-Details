import React from 'react';
import OverallRatingStars from './OverallRatingStars.jsx';
import RatingDistribution from './RatingDistribution.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';


const RatingBreakdown = ({reviewMetaData, reviewInfo, roundedAverageRatingOverall, totalRatings, starArray, setFilterSettings,
filterSettings}) => {


  if (reviewInfo && roundedAverageRatingOverall) {
    return (
      <div className='RatingBreakdown'>
        <div className='averageReviewRating'>
          <h2 className='averageReviewRatingText'>
            {roundedAverageRatingOverall}
          </h2>
          <OverallRatingStars starArray={starArray}/>
        </div>
        <div>
        Total Reviews: {reviewInfo.length}
        </div>
        <div className='ratingBreakdownTitle'>
        Rating Breakdown
        </div>
        <RatingDistribution reviewMetaData={reviewMetaData}
        totalRatings={totalRatings} setFilterSettings={setFilterSettings}
        filterSettings={filterSettings}/>

        <ProductBreakdown reviewMetaData={reviewMetaData}/>
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
