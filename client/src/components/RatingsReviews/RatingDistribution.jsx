import react, { useState, useEffect } from 'react';


let RatingDistribution = ({reviewMetaData, totalRatings, setFilterSettings, filterSettings}) => {

  const [currentFilterSettings, setCurrentFilterSettings] = useState({});

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

  console.log(filterSettings);

  return (
    <div>
      Rating Breakdown--
      <div onClick={()=> {handleBreakdownOnClick(5)}}>
      5 Stars
        <div className='FiveRatingBar'>
          <div className='FiveRatingBarFill'>

          </div>
        </div>
        NUMBER OF REVIEWS, BUT SHOULD JUST BE NUMBER:
       {reviewMetaData.ratings[5]}
      </div>
      <div onClick={()=> {handleBreakdownOnClick(4)}}>
      4 Stars
        <div className='FourRatingBar'>
          <div className='FourRatingBarFill'>

          </div>
        </div>
        NUMBER OF REVIEWS, BUT SHOULD JUST BE NUMBER:
        {reviewMetaData.ratings[4]}
      </div>
      <div onClick={()=> {handleBreakdownOnClick(3)}}>
      3 Stars
        <div className='ThreeRatingBar'>
          <div className='ThreeRatingBarFill'>

          </div>
        </div>
        NUMBER OF REVIEWS, BUT SHOULD JUST BE NUMBER:
        {reviewMetaData.ratings[3]}
      </div>
      <div onClick={()=> {handleBreakdownOnClick(2)}}>
      2 Stars
        <div className='TwoRatingBar'>
          <div className='TwoRatingBarFill'>

          </div>
        </div>
        NUMBER OF REVIEWS, BUT SHOULD JUST BE NUMBER:
        {reviewMetaData.ratings[2]}
      </div>
      <div onClick={()=> {handleBreakdownOnClick(1)}}>
      1 Stars
        <div className='OneRatingBar'>
          <div className='OneRatingBarFill'>

          </div>
        </div>
        NUMBER OF REVIEWS, BUT SHOULD JUST BE NUMBER:
        {reviewMetaData.ratings[1]}
      </div>
    </div>
  )
}

export default RatingDistribution;