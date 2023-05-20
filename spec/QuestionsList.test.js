/** @jest-environment jsdom */
import renderer from 'react-test-renderer';
import QuestionsList from '../client/src/components/QuestionsAnswers/QuestionsList.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testData = require('./QuestionStubs.js');
const user = userEvent.setup();

describe ('The questions list should render elements', () => {
  it ('questions list should exist on the DOM', () => {
    const component = renderer.create(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('expect the "More Questions" button to exist when more than 2 questions are present', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    expect(list.queryByRole('button', {name: 'More Questions'})).toBeDefined();
  });

  it ('expect the "More Questions" button to exist when less than 3 questions are present', () => {
    let shortQuestionsList = testData.questions.results.slice(0, 2);

    const list = render(
      <QuestionsList questions={shortQuestionsList} productInfo={testData.productInfo}/>
    );

    expect(list.queryByRole('button', {name: 'More Questions'})).toBeDefined();
  });

  it ('expect the "More Questions" button to not exist when all questions are displayed', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    const MoreQuestionsButton = list.queryByRole('button', {name: 'More Questions'});

    fireEvent.click(MoreQuestionsButton);
    fireEvent.click(MoreQuestionsButton);
    fireEvent.click(MoreQuestionsButton);
    fireEvent.click(MoreQuestionsButton);

    expect(list.queryByRole('button', {name: 'More Questions'})).toBeNull();
  });

  it ('expect the "Add A Question +" button to exist when questions are present', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    expect(list.queryByRole('button', {name: 'Add A Question +'})).toBeDefined();
  });

  it ('expect the "Add A Question +" button to exist when questions are not present', () => {
    let shortQuestionsList = testData.questions.results.slice(0, 0);

    const list = render(
      <QuestionsList questions={shortQuestionsList} productInfo={testData.productInfo}/>
    );

    expect(list.queryByRole('button', {name: 'Add A Question +'})).toBeDefined();
  });

  it ('expect a form to appear when the  "Add A Question +" button is clicked', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    const AddQuestionButton = list.queryByRole('button', {name: 'Add A Question +'});

    fireEvent.click(AddQuestionButton);

    expect(list.queryByRole('form')).toBeDefined();
    expect(list.queryByText('Ask Your Question')).toBeDefined();
  });
});

describe ('The question form should contain specific elements', () => {
  it ('expect question form to prompt user with specific questions', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    const AddQuestionButton = list.queryByRole('button', {name: 'Add A Question +'});

    fireEvent.click(AddQuestionButton);

    expect(list.queryByText('Your Question:')).toBeDefined();
    expect(list.queryByText('What is your nickname:')).toBeDefined();
    expect(list.queryByText('Your email:')).toBeDefined();
  });

  it ('expect the "Cancel" and "Submit Question" button to exist when question form is opened', () => {
    const list = render(
      <QuestionsList questions={testData.questions} productInfo={testData.productInfo}/>
    );

    const AddQuestionButton = list.queryByRole('button', {name: 'Add A Question +'});

    fireEvent.click(AddQuestionButton);

    expect(list.queryByRole('button', {name: 'Cancel'})).toBeDefined();
    expect(list.queryByRole('button', {name: 'Submit Question'})).toBeDefined();
  });
});
