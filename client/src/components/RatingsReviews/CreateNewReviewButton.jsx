import react from 'react';

const CreateNewReviewButton = ({handleWriteReviewOnClick}) => {

  return (
    <div className='moreReviewsButton'>
      <button className='more-questions-button' onClick={handleWriteReviewOnClick}>Add A Review</button>
    </div>
  )
}

export default CreateNewReviewButton;