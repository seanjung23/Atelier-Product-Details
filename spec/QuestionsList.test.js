import renderer from 'react-test-renderer';
import QuestionsList from '../client/src/components/QuestionsAnswers/QuestionsList.jsx';

it ('Should output a list of questions and answers', () => {
  let data = {
    product_id: "37317",
    results: []
  }
  const component = renderer.create(
    <QuestionsList questions={data}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});