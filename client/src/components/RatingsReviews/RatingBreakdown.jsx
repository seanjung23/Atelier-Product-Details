import React from 'react';


const RatingBreakdown = ({reviewMetaData, reviewInfo}) => {

  // console.log('META DATA:', reviewMetaData);
  if (reviewInfo) {
    return (
      <div className='RatingBreakdown'>
        <h1>

        </h1>
        -----RATING BREAKDOWN-----TOTAL REVIEWS: {reviewInfo.length}
      </div>
    )
  }
  return (
    <div>
      REVIEW BREAKDOWN LOADING
    </div>
  )
};

export default RatingBreakdown;
