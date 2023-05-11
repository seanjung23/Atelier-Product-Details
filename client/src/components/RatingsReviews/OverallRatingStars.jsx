import React from 'react';
import {EmptyStar, FullStar, OneQuarterStar, ThreeQuarterStar, HalfStar} from '../icons/ReviewRatingStarsSVG.jsx'

let OverallRatingStars = ({starArray}) => {
  // CHANGE CLASS NAME ONCE COMPLETED

  return (
    <div className='averageRatingStarSet'>
    {starArray.map((element, index)=> {
      if (element === 1) {
        return <FullStar key={index}/>
      } else if (element >= 0.25 && element < 0.5) {
        return <OneQuarterStar key={index}/>
      } else if (element >= 0.50 && element < 0.75) {
        return <HalfStar key={index}/>
      } else if (element >= 0.75 && element < 1) {
        return <ThreeQuarterStar key={index}/>
      } else if (element >= 0 && element < 0.25){
        return <EmptyStar key={index}/>
      }
    })}
    </div>
  )
}

export default OverallRatingStars;