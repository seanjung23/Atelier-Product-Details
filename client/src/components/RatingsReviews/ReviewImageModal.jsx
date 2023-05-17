import react, { useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const ReviewImageModal = ({setShowImageModal, imageModalContent}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  let handleCloseImageModal = function () {
    interactionAPI('Image Close', 'Ratings and Reviews');
    setShowImageModal(false);
  }

  return (
    <div className='newReviewModal'>
      <button className='reviewImageModalClose' onClick={handleCloseImageModal}>x</button>
      <img src={imageModalContent}/>
    </div>
  )
}

export default ReviewImageModal;