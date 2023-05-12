import react from 'react';

const CreateNewReviewButton = ({handleWriteReviewOnClick}) => {

  return (
    <div className='createNewReviewButton'>
      <button onClick={handleWriteReviewOnClick}>Add A Review</button>
    </div>
  )
}

export default CreateNewReviewButton;