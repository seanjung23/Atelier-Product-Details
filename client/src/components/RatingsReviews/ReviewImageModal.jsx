import react from 'react';

const ReviewImageModal = ({setShowImageModal, imageModalContent}) => {

  let handleCloseImageModal = function () {
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