import React from 'react';
import OverallRatingStars from './OverallRatingStars.jsx';
import RatingDistribution from './RatingDistribution.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';


const RatingBreakdown = ({reviewMetaData, reviewInfo, roundedAverageRatingOverall, totalRatings, starArray, setFilterSettings,
filterSettings}) => {

  console.log(reviewMetaData);

  if (reviewInfo && roundedAverageRatingOverall) {
    return (
      <div className='RatingBreakdown'>
        <h2>
          --AVG RATING REMOVE TEXT: {roundedAverageRatingOverall}
          <OverallRatingStars starArray={starArray}/>
        </h2>

        --------Rating Breakdown--------TOTAL REVIEWS: {reviewInfo.length}
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
