import Big from 'big.js';
import operate from '../../logic/Operate';

describe('operate', () => {
  it('should return null if either numberOne or numberTwo is not provided', () => {
    expect(operate(null, Big(1), '+')).toBe(null);
    expect(operate(Big(1), null, '+')).toBe(null);
  });
  it('should perform the correct operation and return the result as a string', () => {
    expect(operate(Big(1), Big(1), '+')).toBe('2');
    expect(operate(Big(5), Big(3), '-')).toBe('2');
    expect(operate(Big(2), Big(3), 'x')).toBe('6');
    expect(operate(Big(4), Big(2), '÷')).toBe('2');
    expect(operate(Big(5), Big(2), '%')).toBe('1');
  });
  it('should return an error message if trying to divide by 0', () => {
    expect(operate(Big(4), Big(0), '÷')).toBe("Can't divide by 0.");
    expect(operate(Big(5), Big(0), '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
  it('should return 0 if the operation is not one of +, -, x, ÷, or %', () => {
    expect(operate(Big(1), Big(1), 'invalid')).toBe(0);
    expect(operate(Big(5), Big(3), '*')).toBe(0);
    expect(operate(Big(2), Big(3), '^')).toBe(0);
  });
  it('should handle decimal numbers', () => {
    expect(operate(Big(1.5), Big(2), '+')).toBe('3.5');
    expect(operate(Big(5.5), Big(3.5), '-')).toBe('2');
    expect(operate(Big(2.5), Big(3), 'x')).toBe('7.5');
    expect(operate(Big(4.5), Big(2), '÷')).toBe('2.25');
    expect(operate(Big(5.5), Big(2), '%')).toBe('1.5');
  });

  it('should handle negative numbers', () => {
    expect(operate(Big(-1), Big(-1), '+')).toBe('-2');
    expect(operate(Big(-5), Big(-3), '-')).toBe('-2');
    expect(operate(Big(-2), Big(-3), 'x')).toBe('6');
    expect(operate(Big(-4), Big(-2), '÷')).toBe('2');
    expect(operate(Big(-5), Big(-2), '%')).toBe('-1');
  });

  it('should handle different operation', () => {
    expect(operate(Big(1), Big(1), '=')).toBe(0);
    expect(operate(Big(5), Big(3), '*')).toBe(0);
    expect(operate(Big(2), Big(3), '^')).toBe(0);
    expect(operate(Big(2), Big(3), '&')).toBe(0);
    expect(operate(Big(2), Big(3), '|')).toBe(0);
  });
});
