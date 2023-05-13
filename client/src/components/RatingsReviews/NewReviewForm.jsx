import react, { useState, useRef } from 'react';
import RatingSelectionStars from './RatingSelectionStars.jsx';
import NewReviewCharacteristics from './NewReviewCharacteristics.jsx';

const NewReviewForm = ({productInfo, reviewMetaData}) => {

  const [doYouRecommend, setDoYouRecommend] = useState('');
  const [yourStarRating, setYourStarRating] = useState('');
  const [sizeCharacteristic, setSizeCharacteristic] = useState(0);
  const [widthCharacteristic, setWidthCharacteristic] = useState(0);
  const [comfortCharacteristic, setComfortCharacteristic] = useState(0);
  const [qualityCharacteristic, setQualityCharacteristic] = useState(0);
  const [lengthCharacteristic, setLengthCharacteristic] = useState(0);
  const [fitCharacteristic, setFitCharacteristic] = useState(0);

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
    console.log(sizeCharacteristic);
    console.log(widthCharacteristic);
    console.log(comfortCharacteristic);
    console.log(qualityCharacteristic);
    console.log(lengthCharacteristic);
    console.log(fitCharacteristic);
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
            <input type='radio' value='Yes' name='newReviewRecommend'
            onClick={handleRecommendClick}/>
            <label>Yes</label>
            <input type='radio' value='No' name='newReviewRecommend'
            onClick={handleRecommendClick}/>
            <label>No</label>
          </div>
        </div>
        <div>
          Characteristics *
          <div>
            <NewReviewCharacteristics reviewMetaData={reviewMetaData}
            sizeCharacteristic={sizeCharacteristic}
            setSizeCharacteristic={setSizeCharacteristic}
            widthCharacteristic={widthCharacteristic}
            setWidthCharacteristic={setWidthCharacteristic}
            comfortCharacteristic={comfortCharacteristic}
            setComfortCharacteristic={setComfortCharacteristic}
            qualityCharacteristic={qualityCharacteristic}
            setQualityCharacteristic={setQualityCharacteristic}
            lengthCharacteristic={lengthCharacteristic}
            setLengthCharacteristic={setLengthCharacteristic}
            fitCharacteristic={setFitCharacteristic}
            />
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