import renderer from 'react-test-renderer';
import ReviewsList from '../client/src/components/RatingsReviews/ReviewsList.jsx';

it ('expect the reviews list to exist', () => {
  const component = renderer.create(
    <ReviewsList />,
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})