import renderer from 'react-test-renderer';
import ReviewsList from '../client/src/components/RatingsReviews/ReviewsList.jsx';

it ('renders two or less reviews on startup', () => {
  const component = renderer.create(
    <ReviewsList />,
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot;
})