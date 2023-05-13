import react, { useState, useRef } from 'react';
import RatingSelectionStars from './RatingSelectionStars.jsx';
import NewReviewCharacteristics from './NewReviewCharacteristics.jsx';

const NewReviewForm = ({productInfo, reviewMetaData}) => {

  const [doYouRecommend, setDoYouRecommend] = useState('');
  const [yourStarRating, setYourStarRating] = useState('');
  let ReviewFormSummary = useRef();
  let ReviewFormBody = useRef();
  let ReviewFormNickname = useRef();
  let ReviewFormEmail = useRef();

  console.log(reviewMetaData.characteristics);

  let handleReviewFormSubmit = function (e) {
    e.preventDefault();
    console.log(doYouRecommend, yourStarRating);
    console.log(ReviewFormSummary.current.value);
    console.log(ReviewFormBody.current.value);
    console.log(ReviewFormEmail.current.value);
  }

  let handleRecommendClick = function (e) {
    setDoYouRecommend(e.target.value);
  }


  return (
    <form>
      <h3>Write Your Review</h3>
      <p>About the {productInfo.name}</p>
      <div>
        Overall Rating *
        </div>
        <RatingSelectionStars setYourStarRating={setYourStarRating}/>
        <div>
        Do you recommend this product? *
          <div>
            <input type='radio' value='Yes' name='recommend'
            onClick={handleRecommendClick}/>
            <label>Yes</label>
            <input type='radio' value='No' name='recommend'
            onClick={handleRecommendClick}/>
            <label>No</label>
          </div>
        </div>
        <div>
          Characteristics *
          <div>
            <NewReviewCharacteristics reviewMetaData={reviewMetaData}/>
          </div>
        </div>
        Review Summary
        <div>
          <input placeholder='Example: Best purchase ever!'
          ref={ReviewFormSummary}/>
        </div>
        Review Body *
        <div>
          <input placeholder='Why did you like the product or not?'
          ref={ReviewFormBody}/>
        </div>
        What is your nickname?
        <div>
          <input placeholder='Example: jackson11!'
          ref={ReviewFormNickname}/>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        Your email
        <div>
          <input placeholder='Example: jackson11@email.com'
          ref={ReviewFormEmail}/>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
      <input type='submit' onClick={handleReviewFormSubmit}/>
    </form>
  )
}

export default NewReviewForm;