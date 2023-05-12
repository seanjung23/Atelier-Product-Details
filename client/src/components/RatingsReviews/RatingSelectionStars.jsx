import react, {useState} from 'react';
import {EmptyStar, FullStar} from '../icons/ReviewRatingStarsSVG.jsx'


const RatingSelectionStars = () => {

  let starSetDefault = [0, 0, 0, 0, 0];
  let starSet1 = [1, 0, 0, 0, 0];
  let starSet2 = [1, 1, 0, 0, 0];
  let starSet3 = [1, 1, 1, 0, 0];
  let starSet4 = [1, 1, 1, 1, 0];
  let starSet5 = [1, 1, 1, 1, 1];

  const [filledStars, setFilledStars] = useState(starSetDefault);


  let whichStarToDisplay = function (starValue) {
    if (starValue === 0) {
      return <EmptyStar />
    }
    return <FullStar />
  }

  let changeStarSelection = function (currentStarSet) {
    return function () {setFilledStars(currentStarSet)};
  }

  let selectableStarMaker = function (starSet, whichStarInSet) {
    return (
    <div className='selectableStarSet'
    onClick={changeStarSelection(starSet)}>
      {whichStarToDisplay(filledStars[whichStarInSet])}
    </div>
    )
  }

  return (
    <div className='selectableStarSetGroup'>
      {selectableStarMaker(starSet1, 0)}
      {selectableStarMaker(starSet2, 1)}
      {selectableStarMaker(starSet3, 2)}
      {selectableStarMaker(starSet4, 3)}
      {selectableStarMaker(starSet5, 4)}
    </div>
  )
}

export default RatingSelectionStars;