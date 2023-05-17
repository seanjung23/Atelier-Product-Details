/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import ReviewsList from '../client/src/components/RatingsReviews/ReviewsList.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';

const testData = require('./ReviewStubs.js');

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

describe (ReviewsList, () => {
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
    expect(reviewList.queryByText('Overall Rating *')).toBeDefined();
  })
})
