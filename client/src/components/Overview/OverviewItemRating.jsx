import react from 'react';

import {EmptyStar, FullStar, OneQuarterStar, ThreeQuarterStar, HalfStar} from '../icons/OverviewItemRatingStarsSVG.jsx'

export default function({itemRating, itemReviews}) {

  var avgRating = Math.floor(4 * itemRating) /4;

  var fullStarCount = Math.floor(avgRating);

  var emptyStarCount = 4 - fullStarCount;
  var partialStar = avgRating - fullStarCount;
  var starArray = [];

  for (var i =0; i < 5; i++) {
    if (i < fullStarCount) {
      starArray[i] = 1;
    } else if(i === fullStarCount) {
      starArray[i] = partialStar;
    } else {
      starArray[i] = 0;
    }
  }

  itemRating = itemRating.toFixed(2);


  return (
    <>
    {starArray.map((e, i)=> {
      if (e === 1) {
        return <FullStar key={i}/>
      } else if (e === 0.25) {
        return <OneQuarterStar key={i}/>
      } else if (e === 0.50) {
        return <HalfStar key={i}/>
      } else if (e === 0.75) {
        return <ThreeQuarterStar key={i}/>
      } else {
        return <EmptyStar key={i}/>
      }
    })}
    <span className="relatedItemRatingTooltip"> <a href="#ratingsReviews" >Read all {itemReviews} reviews</a></span>
    </>

  )
}