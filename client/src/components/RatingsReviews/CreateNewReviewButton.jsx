import react, { useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const CreateNewReviewButton = ({handleWriteReviewOnClick}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  let handleNewReviewOnClick = function () {
    handleWriteReviewOnClick()
    interactionAPI('Add A Review Button', 'Ratings and Reviews');
  }

  return (
    <div className='moreReviewsButton'>
      <button className='more-questions-button' onClick={handleNewReviewOnClick}>Add A Review</button>
    </div>
  )
}

export default CreateNewReviewButton;