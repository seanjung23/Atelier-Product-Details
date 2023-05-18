import react, { useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

// John
// Remember sync and to GIT PULL

const MoreReviewsButton = ({moreReviewsClickHandler}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  let handleMoreReviewClick = function () {
    moreReviewsClickHandler()
    interactionAPI('More Reviews Button', 'Ratings and Reviews');
  }

  return(
    <div>
      <button className='more-questions-button' onClick={handleMoreReviewClick}>More Reviews</button>
    </div>
  )
};

export default MoreReviewsButton;