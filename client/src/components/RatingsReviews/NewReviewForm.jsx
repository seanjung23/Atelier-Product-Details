import react, { useState, useRef, useContext } from 'react';
import RatingSelectionStars from './RatingSelectionStars.jsx';
import NewReviewCharacteristics from './NewReviewCharacteristics.jsx';
import axios from 'axios';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const NewReviewForm = ({productInfo, reviewMetaData, setDisplayNewReviewForm}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  const [submitError, setSubmitError] = useState(false);
  const [doYouRecommend, setDoYouRecommend] = useState(null);
  const [yourStarRating, setYourStarRating] = useState(null);
  const [sizeCharacteristic, setSizeCharacteristic] = useState(0);
  const [widthCharacteristic, setWidthCharacteristic] = useState(0);
  const [comfortCharacteristic, setComfortCharacteristic] = useState(0);
  const [qualityCharacteristic, setQualityCharacteristic] = useState(0);
  const [lengthCharacteristic, setLengthCharacteristic] = useState(0);
  const [fitCharacteristic, setFitCharacteristic] = useState(0);
  const [reviewFormBody, setReviewFormBody] = useState('');
  const [missingRequirements, setMissingRequirements] = useState([]);
  const [reviewPhotoSet, setReviewPhotoSet] = useState([]);

  let ReviewFormSummary = useRef();
  let ReviewFormNickname = useRef();
  let ReviewFormEmail = useRef();

  let characteristicsValuePairs = {
    'Size' : sizeCharacteristic,
    'Comfort' : comfortCharacteristic,
    'Width' : widthCharacteristic,
    'Quality' : qualityCharacteristic,
    'Length' : lengthCharacteristic,
    'Fit' : fitCharacteristic
  }

  let characteristicsNeededForSubmission = function () {
    let neededCharacteristics = [];
    for (let key in reviewMetaData.characteristics) {
      neededCharacteristics.push(characteristicsValuePairs[key]);
    }
    return neededCharacteristics;
  }

  let missingSubmissionRequirements = [];

  let handleReviewFormSubmit = function (e) {

    interactionAPI('New Review Form: Submit', 'Ratings and Reviews');

    e.preventDefault();

    let completeReviewCharacteristics = {};

    for (let char in reviewMetaData.characteristics) {
      completeReviewCharacteristics[reviewMetaData.characteristics[char].id] =
      Number(characteristicsValuePairs[char]);
    }

    let completeReviewSubmissionInfo = {
      product_id: productInfo.id,
      rating: yourStarRating,
      body: reviewFormBody,
      recommend: doYouRecommend,
      summary: ReviewFormSummary.current.value,
      name: ReviewFormNickname.current.value,
      email: ReviewFormEmail.current.value,
      photos: [],
      characteristics: completeReviewCharacteristics
    };

    if (reviewPhotoSet.length > 0) {
      completeReviewSubmissionInfo.photos.push('https://photolib.noaa.gov/Portals/0//GravityImages/36644/ProportionalFixedWidth/sanc090786274x800x800.jpg')
    }

    if (ReviewFormEmail.current.value === '') {
      completeReviewSubmissionInfo.email = 'placeholder@notmail.com';
    }

    let isSubmissionValid = true;

    if (doYouRecommend === null) {
      missingSubmissionRequirements.push('Do you recommend this product?');
    }
    if (yourStarRating === null) {
      missingSubmissionRequirements.push('Overall Rating');
    }
    if (reviewFormBody.length < 50) {
      missingSubmissionRequirements.push('A review with at least 50 characters');
    }
    if (characteristicsNeededForSubmission().includes(0)) {
      missingSubmissionRequirements.push('A selection for each characteristic');
    }
    if (missingSubmissionRequirements.length > 0) {
      isSubmissionValid = false;
      setMissingRequirements(missingSubmissionRequirements);
      setSubmitError(true);
    }

    if (isSubmissionValid) {
      setSubmitError(false);
      axios.post('/reviews',
        completeReviewSubmissionInfo
      )
        .then((result) => {return})
        .catch((err) => {return console.log(err)})
      return setDisplayNewReviewForm(false);
    }
  }

  let handleReviewFormBodyOnChange = function (e) {
    setReviewFormBody(e.target.value);
  }

  let handleRecommendClick = function (e) {

    interactionAPI('New Review From: Recommend', 'Ratings and Reviews');

    if (e.target.value === 'Yes') {
      return setDoYouRecommend(true)
    }
    setDoYouRecommend(false);
  }

  let closeNewReviewWindow = function () {

    interactionAPI('Close New Review Form', 'Ratings and Reviews');

    setDisplayNewReviewForm(false);
  }

  let starMeaningSelection = function (yourStarRating) {
    let starMeanings = {
      '1' : 'Poor',
      '2' : 'Fair',
      '3' : 'Average',
      '4' : 'Good',
      '5' : 'Great'
    }
    if (starMeanings[yourStarRating]) {
      return (
        <span>
          {starMeanings[yourStarRating]}
        </span>
      )
    }
  }

  let ifEnoughCharactersAreInTheBody = function () {
    if (reviewFormBody.length < 50) {
      return (
        <div>Minimum required characters left: {50 - reviewFormBody.length}</div>
      )
    }
    return (
      <div>Minimum reached</div>
    )
  }

  let handleNewReviewPhotoInput = function (e) {
    let addedPhotoSet = reviewPhotoSet.slice();
    addedPhotoSet.push(e.target.files[0])
    setReviewPhotoSet(addedPhotoSet);
  }

  let handleReviewFormElementClick = function (element) {
    return function (e) {

      interactionAPI(`New Review Form: ${element}`, 'Ratings and Reviews');

    }
  }

  return (
    <div className='newReviewModal'>
      <div className='newReviewModalContent'>
        <button className='reviewModalClose'onClick={closeNewReviewWindow}>x</button>
        <form onSubmit={handleReviewFormSubmit}>
          <h3>Write Your Review</h3>
          <p>About the <strong>{productInfo.name}</strong></p>
          <div className='newReviewSelectionOption'>
            Overall Rating *
            <div>
              <RatingSelectionStars setYourStarRating={setYourStarRating}/>
              {starMeaningSelection(yourStarRating)}
            </div>
            </div>
            <div className='newReviewSelectionOption'>
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
            <div className='newReviewSelectionOption'>
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
                fitCharacteristic={fitCharacteristic}
                setFitCharacteristic={setFitCharacteristic}
               />
             </div>
            </div>
            <div className='newReviewSelectionOption'>
              Review Summary
              <div>
                <input className='reviewTextInput'placeholder='Example: Best purchase ever!' onClick={handleReviewFormElementClick('Review Summary')}
                ref={ReviewFormSummary} maxLength='60'/>
              </div>
            </div>
            <div className='newReviewSelectionOption'>
              Review Body *
              <div>
                <textarea placeholder='Why did you like the product or not?'
                onChange={handleReviewFormBodyOnChange} maxLength='1000'
                rows='5' onClick={handleReviewFormElementClick('Review Body')}/>
                {ifEnoughCharactersAreInTheBody()}
              </div>
            </div>
            <div className='newReviewSelectionOption'>
              Upload Your Photos
              {reviewPhotoSet.length < 5 && <input type='file' accept='image/*' onClick={handleReviewFormElementClick('Upload Your Photos')}
              onChange={handleNewReviewPhotoInput}/>}
              <div>
                {reviewPhotoSet.map(function(photo, index) {
                  return (<img className='oneReviewImage' key={index}
                  src={URL.createObjectURL(photo)}/>)
                })}
              </div>
            </div>
            <div className='newReviewSelectionOption'>
              What is your nickname?
              <div>
                <input className='reviewTextInput' placeholder='Example: jackson11!' onClick={handleReviewFormElementClick('What is your nickname?')}
                ref={ReviewFormNickname}/>
                <p>For privacy reasons, do not use your full name or email address</p>
              </div>
            </div>
            <div className='newReviewSelectionOption'>
              Your email
              <div>
                <input className='reviewTextInput' placeholder='Example: jackson11@email.com' onClick={handleReviewFormElementClick('Your email')}
                ref={ReviewFormEmail} type='email'/>
                <p>For authentication reasons, you will not be emailed</p>
              </div>
            </div>
          <input type='submit' value='Submit Review'/>
          {submitError &&
          <div className='errorMessage'>
            <strong>You must enter the following:</strong>
            {missingRequirements.map((requirement, index) => {
              return (<div key={index}>{requirement}</div>)
            })}
          </div>}
        </form>
      </div>
    </div>
  )
}

export default NewReviewForm;