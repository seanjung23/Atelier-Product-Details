import react, { useState, useEffect, useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';


const RatingDistribution = ({reviewMetaData, totalRatings, setFilterSettings, filterSettings}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  useEffect(() =>{
    let barMaker = function (outerClass, innerClass, lengthBar) {
      let outerElement = document.getElementsByClassName(outerClass);
      let innerElement = document.getElementsByClassName(innerClass);
      outerElement[0].style.border = 'solid';
      outerElement[0].style.height = '0.5em';
      outerElement[0].style.backgroundColor = 'lightgray';
      innerElement[0].style.backgroundColor = 'green';
      innerElement[0].style.height = '100%';
      if (lengthBar || lengthBar === 0) {
        innerElement[0].style.width = lengthBar.toString() + '%'
      } else {
        innerElement[0].style.width = '0';
      }
    }

    let fillBarLength = function (ratingKey) {
      if (!totalRatings || reviewMetaData.ratings[ratingKey] === 0) {
        return 0;
      }
      return ((reviewMetaData.ratings[ratingKey]/totalRatings) * 100);
    }

    if (reviewMetaData.ratings) {
      barMaker('FiveRatingBar', 'FiveRatingBarFill', fillBarLength(5));
      barMaker('FourRatingBar', 'FourRatingBarFill', fillBarLength(4));
      barMaker('ThreeRatingBar', 'ThreeRatingBarFill', fillBarLength(3));
      barMaker('TwoRatingBar', 'TwoRatingBarFill', fillBarLength(2));
      barMaker('OneRatingBar', 'OneRatingBarFill', fillBarLength(1));
    }
  }, [reviewMetaData])

  let handleBreakdownOnClick = function (starRating) {

    interactionAPI('Rating Breakdown', 'Ratings and Reviews');

    let newFilterSettings = {};
    let FilterSettingsKeys = Object.keys(filterSettings);
    for (let i = 0; i < FilterSettingsKeys.length; i += 1) {
      newFilterSettings[FilterSettingsKeys[i]] = true;
    }
    if (newFilterSettings[starRating]) {
      delete newFilterSettings[starRating]
      setFilterSettings(newFilterSettings);
      return;
    }
    newFilterSettings[starRating] = true;
    setFilterSettings(newFilterSettings);
  };

  let displayAppliedFilters = Object.keys(filterSettings);

  let removeAllFilters = function () {

    interactionAPI('Remove All Filters', 'Ratings and Reviews');

    setFilterSettings({});
  }

  let percentOfReviewsThatRecommend = Math.round(Number(
    reviewMetaData.recommended.true)
  / (Number(reviewMetaData.recommended.true)
  + Number(reviewMetaData.recommended.false)) * 100);

  return (
    <div>
      <div>
      {displayAppliedFilters.map((element, index) => {
        return (
        <div key={index}>Showing {element} Star Reviews</div>
        )
      })}
      {(displayAppliedFilters.length > 0)
      && <div className='linkToClick' onClick={removeAllFilters}>Remove all filters</div>}
      </div>
      <div className='starBarText'onClick={()=> {handleBreakdownOnClick(5)}}>
      5 Stars
        <div className='FiveRatingBar'>
          <div className='FiveRatingBarFill'>
          </div>
        </div>
       {reviewMetaData.ratings[5] || '0'}
      </div>
      <div className='starBarText' onClick={()=> {handleBreakdownOnClick(4)}}>
      4 Stars
        <div className='FourRatingBar'>
          <div className='FourRatingBarFill'>
          </div>
        </div>
        {reviewMetaData.ratings[4] || '0'}
      </div>
      <div className='starBarText' onClick={()=> {handleBreakdownOnClick(3)}}>
      3 Stars
        <div className='ThreeRatingBar'>
          <div className='ThreeRatingBarFill'>

          </div>
        </div>
        {reviewMetaData.ratings[3] || '0'}
      </div>
      <div className='starBarText' onClick={()=> {handleBreakdownOnClick(2)}}>
      2 Stars
        <div className='TwoRatingBar'>
          <div className='TwoRatingBarFill'>

          </div>
        </div>
        {reviewMetaData.ratings[2] || '0'}
      </div>
      <div className='starBarText' onClick={()=> {handleBreakdownOnClick(1)}}>
      1 Stars
        <div className='OneRatingBar'>
          <div className='OneRatingBarFill'>

          </div>
        </div>
        {reviewMetaData.ratings[1] || '0'}
      </div>
      <p>
      {percentOfReviewsThatRecommend}% of reviews recommended this product
    </p>
    </div>
  )
}

export default RatingDistribution;