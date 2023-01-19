import calculate from '../../logic/Calculate';

describe('calculate', () => {
  test('AC button resets all values', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, 'AC');
    expect(newState).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('number button updates next value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '4');
    expect(newState).toEqual({
      total: '5',
      next: '34',
      operation: '+',
    });
  });
  test('operation button updates operation', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, 'x');
    expect(newState).toEqual({
      total: '8',
      next: null,
      operation: 'x',
    });
  });
  test('decimal point button updates next value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '.');
    expect(newState).toEqual({
      total: '5',
      next: '3.',
      operation: '+',
    });
  });
  test('equals button updates total value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '=');
    expect(newState).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });
  test('negative button changes next value to negative', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '+/-');
    expect(newState).toEqual({
      total: '5',
      next: '-3',
      operation: '+',
    });
  });
});
