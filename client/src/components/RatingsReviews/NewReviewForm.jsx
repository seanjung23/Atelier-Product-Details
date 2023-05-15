import react, { useState, useRef } from 'react';
import RatingSelectionStars from './RatingSelectionStars.jsx';
import NewReviewCharacteristics from './NewReviewCharacteristics.jsx';

const NewReviewForm = ({productInfo, reviewMetaData, setDisplayNewReviewForm}) => {

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
    e.preventDefault();
    console.log(doYouRecommend, yourStarRating);
    console.log(ReviewFormSummary);
    console.log(reviewFormBody);
    console.log(ReviewFormEmail);
    console.log(sizeCharacteristic);
    console.log(widthCharacteristic);
    console.log(comfortCharacteristic);
    console.log(qualityCharacteristic);
    console.log(lengthCharacteristic);
    console.log(fitCharacteristic);

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
      return setDisplayNewReviewForm(false);
    }
  }

  let handleReviewFormBodyOnChange = function (e) {
    setReviewFormBody(e.target.value);
  }

  let handleRecommendClick = function (e) {
    setDoYouRecommend(e.target.value);
  }

  let closeNewReviewWindow = function () {
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

  return (
    <div className='newReviewModal'>
      <div className='newReviewModalContent'>
        <button className='reviewModalClose'onClick={closeNewReviewWindow}>x</button>
        <form onSubmit={handleReviewFormSubmit}>
          <h3>Write Your Review</h3>
          <p>About the {productInfo.name}</p>
          <div>
            Overall Rating *
            </div>
            <RatingSelectionStars setYourStarRating={setYourStarRating}/>
            {starMeaningSelection(yourStarRating)}
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
                fitCharacteristic={fitCharacteristic}
                setFitCharacteristic={setFitCharacteristic}
               />
             </div>
            </div>
            Review Summary
            <div>
              <input placeholder='Example: Best purchase ever!'
              ref={ReviewFormSummary} maxLength='60'/>
            </div>
            Review Body *
            <div>
              <input placeholder='Why did you like the product or not?'
              onChange={handleReviewFormBodyOnChange} maxLength='1000'/>
              {ifEnoughCharactersAreInTheBody()}
            </div>
            <div>
              Upload Your Photos
              {reviewPhotoSet.length < 5 && <input type='file' accept='image/*'
              onChange={handleNewReviewPhotoInput}/>}
              <div>
                {reviewPhotoSet.map(function(photo, index) {
                  return (<img key={index}
                  src={URL.createObjectURL(photo)}/>)
                })}
              </div>
            </div>
            What is your nickname?
            <div>
              <input placeholder='Example: jackson11!'
              ref={ReviewFormNickname}/>
              <p>For privacy reasons, do not use your full name or email   address</p>
            </div>
            Your email
            <div>
              <input placeholder='Example: jackson11@email.com'
              ref={ReviewFormEmail} type='email'/>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
          <input type='submit'/>
          {submitError &&
          <div className='errorMessage'>
            You must enter the following:
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