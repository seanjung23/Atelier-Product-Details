import React from 'react';


const RatingBreakdown = ({reviewMetaData, reviewInfo}) => {

  // console.log('META DATA:', reviewMetaData);

  return (
    <div className='RatingBreakdown'>
      <h1>

      </h1>
      -----RATING BREAKDOWN-----TOTAL REVIEWS: {reviewInfo.length}
    </div>
  )
};

export default RatingBreakdown;
