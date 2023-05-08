import renderer from 'react-test-renderer';
import RelatedItemRating from './../client/src/components/RelatedItemsComparison/RelatedItemRating.jsx';

it('related item rating', () => {
  const component = renderer.create(
    <RelatedItemRating itemRating={3.34}></RelatedItemRating>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});