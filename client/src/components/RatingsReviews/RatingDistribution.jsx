import react, { useEffect } from 'react';


let RatingDistribution = ({reviewMetaData, totalRatings}) => {

  useEffect(() =>{

    let barMaker = function (outerClass, innerClass, lengthBar) {
      let outerElement = document.getElementsByClassName(outerClass);
      let innerElement = document.getElementsByClassName(innerClass);
      outerElement[0].style.border = 'solid';
      outerElement[0].style.height = '0.5em';
      innerElement[0].style.backgroundColor = 'gray';
      innerElement[0].style.height = '100%';
    }

    if (document.getElementsByClassName('FiveRatingBar')) {
      barMaker('FiveRatingBar', 'FiveRatingBarFill');

    }

  }, [reviewMetaData])

  return (
    <div>
      Rating Breakdown
      <div className='FiveRatingBar'>
        <div className='FiveRatingBarFill'>

        </div>
      </div>
      <div className='FourRatingBar'>
        <div className='FourRatingBarFill'>

        </div>
      </div>
      <div className='ThreeRatingBar'>
        <div className='ThreeRatingBarFill'>

        </div>
      </div>
      <div className='TwoRatingBar'>
        <div className='TwoRatingBarFill'>

        </div>
      </div>
      <div className='OneRatingBar'>
        <div className='OneRatingBarFill'>

        </div>
      </div>
    </div>
  )
}

export default RatingDistribution;