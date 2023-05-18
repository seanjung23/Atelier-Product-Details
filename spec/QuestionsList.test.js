/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import QuestionsList from '../client/src/components/QuestionsAnswers/QuestionsList.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testData = require('./QuestionStubs.js');
const user = userEvent.setup();

describe ('The question list should render elements', () => {
  it ('questions list should exist on the DOM', () => {
    const component = renderer.create(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('expect the "More Answered Questions" button to exist when more than 2 questions are present', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    expect(list.queryByRole('button', {name: 'More Answered Questions'})).toBeDefined();
  });
});

// describe ('The answer modal should render proper elements', () => {
//   it ('answer modal should exist on DOM', () => {
//     const component = renderer.create(
//       <AnswerModal questions={testData.questions} productInfo={testData.productInfo}/>
//     );

//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });