import react from 'react';
import RatingSelectionStars from './RatingSelectionStars.jsx';

const NewReviewForm = ({productInfo}) => {

  let whichCharacteristicsToAdd = function () {
    return (
      <div>

      </div>
    )
  }

  return (
    <form>
      <h3>Write Your Review</h3>
      <p>About the {productInfo.name}</p>
      <div>
        Overall Rating *
        </div>
        <RatingSelectionStars />
        <div>
        Do you recommend this product? *
          <div>
            <input type='radio' value='Yes' name='recommend'/>
            <label>Yes</label>
            <input type='radio' value='No' name='recommend'/>
            <label>No</label>
          </div>
        </div>
        <div>
          Characteristics *
          <div>
          </div>
        </div>
        Review Summary
        <div>
          <input placeholder='Example: Best purchase ever!'/>
        </div>
        Review Body *
        <div>
          <input placeholder='Why did you like the product or not?'/>
        </div>
        What is your nickname?
        <div>
          <input placeholder='Example: jackson11!'/>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        Your email
        <div>
          <input placeholder='Example: jackson11@email.com'/>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
      <input type='submit'/>
    </form>
  )
}

export default NewReviewForm;