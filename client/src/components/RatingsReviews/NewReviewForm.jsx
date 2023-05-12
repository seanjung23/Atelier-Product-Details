import react from 'react';

const NewReviewForm = ({productInfo}) => {

  return (
    <form>
      <h3>Write Your Review</h3>
      <p>About the {productInfo.name}</p>
      <div>
        Overall Rating *
        </div>
        <div>
        Do you recommend this product? *
          <div>
            <input type='radio' value='Yes' name='recommend'/>
            <label>Yes</label>
            <input type='radio' value='No' name='recommend'/>
            <label>No</label>
          </div>

        </div>

      <input type='submit'/>
    </form>
  )
}

export default NewReviewForm;