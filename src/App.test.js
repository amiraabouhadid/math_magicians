import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import operate from './logic/operate';
import calculate from './logic/calculate';
import Home from './pages/Home';
import CalculatePage from './pages/CalculatePage';
import Quote from './pages/Quote';

describe('operate mathematical functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('adds 2 - 1 to equal 1', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });
  test('adds 2 / 1 to equal 2', () => {
    expect(operate(2, 1, '÷')).toBe('2');
  });
  test('adds 2 / 1 to equal 2', () => {
    expect(operate(2, 1, '÷')).toBe('2');
  });
  test('adds 2 x 1 to equal 2', () => {
    expect(operate(2, 1, 'x')).toBe('2');
  });
  test("adds 2 / 0 to return can't divide by zero", () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('returns modulo of 1%2', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });
  test("returns can't find module as can't divide by 0", () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
describe('calculate logic ', () => {
  test('AC button', () => {
    expect(calculate({ total: 0, next: null, operation: null }, 'AC')).toStrictEqual({ total: 0, next: null, operation: null });
  });
  test('= button in case of operation and next value', () => {
    expect(calculate({ total: 0, next: '3', operation: '+' }, '=')).toStrictEqual({ total: '3', next: null, operation: null });
  });
  test('= button in case of no operation', () => {
    expect(calculate({ total: 0, next: null, operation: null }, '=')).toStrictEqual({ });
  });
  test('+/- button in case of next value', () => {
    expect(calculate({ total: 0, next: '3', operation: null }, '+/-')).toStrictEqual({ total: 0, next: '-3', operation: null });
  });
  test('+/- button in case of total ', () => {
    expect(calculate({ total: '1', next: null, operation: null }, '+/-')).toStrictEqual({ total: '-1', next: null, operation: null });
  });
  test('+/- button in case of no total or next value', () => {
    expect(calculate({ total: 0, next: null, operation: null }, '+/-')).toStrictEqual({ });
  });
  test('Number button in case of 0 and next is 0 ', () => {
    expect(calculate({ total: '0', next: '0', operation: null }, '0')).toStrictEqual({ });
  });
  test('Number button in case of number with existing next value and operation ', () => {
    expect(calculate({ total: 0, next: '3', operation: '+' }, '3')).toStrictEqual({ total: 0, next: '33', operation: '+' });
  });
  test('Number button in case of number with existing operation but no next value', () => {
    expect(calculate({ total: 0, next: null, operation: '+' }, '3')).toStrictEqual({ total: 0, next: '3', operation: '+' });
  });
  test('Number button in case of number with existing next value and no operation', () => {
    expect(calculate({ total: 0, next: '3', operation: null }, '3')).toStrictEqual({ total: 0, next: '33' });
  });
  test('Number button in case of number with no  next value and no operation', () => {
    expect(calculate({ total: 0, next: null, operation: null }, '3')).toStrictEqual({ total: 0, next: '3' });
  });
  test('. button when no total, next or operation is given', () => {
    expect(calculate({ total: 0, next: null, operation: null }, '.')).toStrictEqual({ total: '0.' });
  });
  test('. button when only next  is given and does not include .', () => {
    expect(calculate({ total: 0, next: '3', operation: null }, '.')).toStrictEqual({ total: 0, next: '3.', operation: null });
  });
  test('. button when only next  is given and does include .', () => {
    expect(calculate({ total: 0, next: '3.', operation: null }, '.')).toStrictEqual({ total: 0, next: '3.', operation: null });
  });
  test('. button when only operation is given', () => {
    expect(calculate({ total: 0, next: null, operation: '+' }, '.')).toStrictEqual({ next: '0.' });
  });
  test('. button when only total is given and does not include .', () => {
    expect(calculate({ total: '3', next: null, operation: null }, '.')).toStrictEqual({ total: '3.' });
  });
  test('. button when only total is given and includes .', () => {
    expect(calculate({ total: '3.', next: null, operation: null }, '.')).toStrictEqual({ });
  });
  test("User pressed an operation after pressing '='", () => {
    expect(calculate({ total: '3.', next: null, operation: null }, '+')).toStrictEqual({ total: '3.', next: null, operation: '+' });
  });
  test('User pressed an operation button and there is an existing operation and no next value', () => {
    expect(calculate({ total: '3.', next: null, operation: '+' }, '-')).toStrictEqual({ total: '3.', next: null, operation: '-' });
  });
  test('User pressed an operation button and there is an existing operation and a next value', () => {
    expect(calculate({ total: '3', next: '1', operation: '+' }, '-')).toStrictEqual({ total: '4', next: null, operation: '-' });
  });
  test("The user hasn't typed a number yet and no next value, just save the operation", () => {
    expect(calculate({ total: 0, next: null, operation: null }, '-')).toStrictEqual({ operation: '-' });
  });
  test("The user hasn't typed a number yet but with next value, just save the operation", () => {
    expect(calculate({ total: 0, next: '3', operation: null }, '-')).toStrictEqual({ total: '3', next: null, operation: '-' });
  });
});
describe('home page component', () => {
  test('renders header text', () => {
    render(<Home />);
    const headerElement = screen.getByText(/Welcome to our page!/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('renders correctly', () => {
    const home = renderer
      .create(<Home />)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
describe('quote page component', () => {
  test('renders correctly', () => {
    const quote = renderer
      .create(<Quote />)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});
describe('calculator page component', () => {
  test('renders correctly', () => {
    const calculatePage = renderer
      .create(<CalculatePage />)
      .toJSON();
    expect(calculatePage).toMatchSnapshot();
  });
  test('renders header text', () => {
    render(<CalculatePage />);
    const header3Element = screen.getByText(/Lets do some math!/i);
    expect(header3Element).toBeInTheDocument();
  });
  test('renders AC button', () => {
    render(<CalculatePage />);
    const ACButton = screen.getByText(/AC/i);
    expect(ACButton).toBeInTheDocument();
  });
  test('renders numbers buttons and total set at 0', () => {
    render(<CalculatePage />);
    const NumbersButtons = screen.getAllByText(/[0-9]/i);
    expect(NumbersButtons).toHaveLength(11);
  });
  test('renders equal button', () => {
    render(<CalculatePage />);
    const EqualButton = screen.getByText('=');
    expect(EqualButton).toBeInTheDocument();
  });
  test('renders operations buttons', () => {
    render(<CalculatePage />);
    const OperationsButtons = screen.getAllByText(/[(x)(+)(÷)(-)]{1}/i);
    expect(OperationsButtons).toHaveLength(4);
  });
  test('renders +/- button', () => {
    render(<CalculatePage />);
    const ChangeSignButton = screen.getByText('+/-');
    expect(ChangeSignButton).toBeInTheDocument();
  });
});
