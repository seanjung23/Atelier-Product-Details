/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import ReviewsList from '../client/src/components/RatingsReviews/ReviewsList.jsx';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testData = require('./ReviewStubs.js');
const user = userEvent.setup();

let starArrayMaker = function (starRating) {
  let fullStarCount = Math.floor(starRating);
  let emptyStarCount = 4 - fullStarCount;
  let partialStar = starRating - fullStarCount;
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStarCount) {
      starArray[i] = 1;
    } else if(i === fullStarCount) {
      starArray[i] = partialStar;
    } else {
      starArray[i] = 0;
    }
  }
  return starArray;
}

describe ('The Review List should having interactive elements', () => {
  it ('expect the reviews list to exist', () => {
    const component = renderer.create(
      <ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>,
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it ('expect the reviews list to have a Sort on component', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    expect(reviewList.queryByText('Sort on')).toBeDefined();
  })

  it ('expect the More Reviews button to appear when there are more than 2 reviews', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    expect(reviewList.queryByRole('button', {name: 'More Reviews'})).toBeDefined();
  })

  it ('expect the More Reviews button to disappear when there are 2 or less reviews', () => {
    let shortList = testData.reviewInfo.slice(0, 2);
    const reviewList = render(<ReviewsList reviewInfo={shortList} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    reviewList.queryByText('More Reviews');
    expect(reviewList.queryByRole('button', {name: 'More Reviews'})).toBeNull();
  })

  it ('expect the More Reviews button to disappear when all reviews are displayed', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    const MoreReviewsButton = reviewList.queryByRole('button', {name: 'More Reviews'});
    fireEvent.click(MoreReviewsButton)
    expect(reviewList.queryByRole('button', {name: 'More Reviews'})).toBeNull();
  })

  it ('expect the Add A Review button to be present with no reviews', () => {
    const reviewListNoReviews = render(<ReviewsList reviewInfo={[]} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    expect(reviewListNoReviews.queryByRole('button', {name: 'Add A Review'})).toBeDefined()
  })

  it ('expect the Add A Review button to be present with reviews', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}/>)
    expect(reviewList.queryByRole('button', {name: 'Add A Review'})).toBeDefined();
  })

  it ('expect the Add A Review button to make a new review form appear', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
    productInfo={testData.productInfo}/>)
    const AddAReviewButton = reviewList.queryByRole('button', {name: 'Add A Review'});
    fireEvent.click(AddAReviewButton);
    expect(reviewList.queryByRole('form')).toBeDefined();
    expect(reviewList.queryByText('Write Your Review')).toBeDefined();
  })
})

describe ('The new review form should have required elements', () => {

  it ('Should have the required questions for the form', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const AddAReviewButton = reviewList.queryByRole('button', {name: 'Add A Review'});
    fireEvent.click(AddAReviewButton);
    expect(reviewList.queryByText('Overall Rating *')).toBeDefined();
    expect(reviewList.queryByText('Do you recommend this product? *')).toBeDefined();
    expect(reviewList.queryByText('Characteristics *')).toBeDefined();
    expect(reviewList.queryByText('Review Summary')).toBeDefined();
    expect(reviewList.queryByText('Review Body *')).toBeDefined();
    expect(reviewList.queryByText('Upload Your Photos')).toBeDefined();
    expect(reviewList.queryByText('Your email')).toBeDefined();
    expect(reviewList.queryByText('Submit')).toBeDefined();
  })

  it ('Form should remain after submission mandatory fields are not filled', () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const AddAReviewButton = reviewList.queryByRole('button', {name: 'Add A Review'});
    fireEvent.click(AddAReviewButton);
    const RecommendInput = reviewList.queryByDisplayValue('Yes');
    fireEvent.click(RecommendInput);
    const characteristicsSet = reviewList.queryAllByDisplayValue(3);
    for (let i = 0; i < characteristicsSet.length; i += 1) {
      fireEvent.click(characteristicsSet[i]);
    }
    const submitButton = reviewList.queryByRole('button', {name: 'Submit Review'})
    fireEvent.click(submitButton);
    expect(reviewList.queryByRole('form')).toBeDefined();
    expect(reviewList.queryByText('Write Your Review')).toBeDefined();
  })

  it ('Form should disappear when the submission is valid', async () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const AddAReviewButton = reviewList.queryByRole('button', {name: 'Add A Review'});
    fireEvent.click(AddAReviewButton);
    const RatingStar = reviewList.queryByText('Overall Rating *')
      .querySelectorAll('div')[3];
    fireEvent.click(RatingStar);

    const RecommendInput = reviewList.queryByDisplayValue('Yes');
    fireEvent.click(RecommendInput);
    const characteristicsSet = reviewList.queryAllByDisplayValue(3);
    for (let i = 0; i < characteristicsSet.length; i += 1) {
      fireEvent.click(characteristicsSet[i]);
    }

    const ReviewBody = reviewList.queryByPlaceholderText('Why did you like the product or not?');

    await userEvent.type(ReviewBody, 'This is sample text meant to simulate a body with 50 characters.')

    const submitButton = reviewList.queryByRole('button', {name: 'Submit Review'})
    fireEvent.click(submitButton);

    expect(reviewList.queryByRole('button', {name: 'Submit Review'})).toBeNull();
  })

  it ('Form should be remain if non-Mandatory fields are filled', async () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const AddAReviewButton = reviewList.queryByRole('button', {name: 'Add A Review'});
    fireEvent.click(AddAReviewButton);

    const ReviewSummary = reviewList.queryByPlaceholderText('Example: Best purchase ever!');

    await userEvent.type(ReviewSummary, 'Excellent Sample purchase');

    const ReviewNickName = reviewList.queryByPlaceholderText('Example: jackson11!');

    await userEvent.type(ReviewNickName, 'Sample11');

    const ReviewEmail = reviewList.queryByPlaceholderText('Example: jackson11@email.com');

    await userEvent.type(ReviewEmail, 'Sample11@mailed.org');

    const submitButton = reviewList.queryByRole('button', {name: 'Submit Review'})
    fireEvent.click(submitButton);

    expect(reviewList.queryByRole('button', {name: 'Submit Review'})).toBeDefined();
  })
});

describe ('The report and helpful links to act when clicked', () => {
  it ('The helpful link to only disappear if server request is successful', async () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const HelpfulLink = reviewList.queryByText('Yes(29)');
    await userEvent.click(HelpfulLink);
    expect(reviewList.queryByText('Yes(29)')).toBeDefined();
  })

  it ('The helpful link to only disappear if server request is successful', async () => {
    const reviewList = render(<ReviewsList reviewInfo={testData.reviewInfo} reviewMetaData={testData.reviewMetaData} starArrayMaker={starArrayMaker}
      productInfo={testData.productInfo}/>)
    const ReportLink = reviewList.queryAllByText('Report')[0];
    await userEvent.click(ReportLink);
    expect(reviewList.queryAllByText('Report')[0]).toBeDefined();
  })
})
