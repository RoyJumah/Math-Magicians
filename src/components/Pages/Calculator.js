import React, { useState } from 'react';
import '../css/style.css';
import calculate from '../../logic/Calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newCalculation = calculate(state, buttonName);
    if (newCalculation) {
      setState({ ...newCalculation });
    }
  };

  const { total, next, operation } = state;

  return (
    <div className="display-flex__calculator">
      <h1>Let&apos;s do some math!</h1>

      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand" data-testid="total-display">
            {total}
          </div>
          <div className="current-operand" data-testid="next-display">
            {next || total}
          </div>
          <div className="operation-display" data-testid="operation-display">
            {operation}
          </div>
        </div>
        <button
          id="AC"
          data-testid="AC"
          type="button"
          onClick={() => handleClick('AC')}
        >
          AC
        </button>
        <button
          id="+/-"
          data-testid="+/-"
          type="button"
          onClick={() => handleClick('+/-')}
        >
          +/-
        </button>
        <button
          id="%"
          data-testid="%"
          type="button"
          onClick={() => handleClick('%')}
        >
          %
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => handleClick('÷')}
          id="÷"
          data-testid="÷"
        >
          /
        </button>
        <button
          id="7"
          data-testid="7"
          type="button"
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          id="8"
          data-testid="8"
          type="button"
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          id="9"
          data-testid="9"
          type="button"
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => handleClick('x')}
          id="x"
          data-testid="x"
        >
          x
        </button>
        <button
          type="button"
          onClick={() => handleClick('4')}
          id="4"
          data-testid="4"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => handleClick('5')}
          id="5"
          data-testid="5"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => handleClick('6')}
          id="6"
          data-testid="6"
        >
          6
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => handleClick('-')}
          id="-"
          data-testid="-"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => handleClick('1')}
          id="1"
          data-testid="1"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => handleClick('2')}
          id="2"
          data-testid="2"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => handleClick('3')}
          id="3"
          data-testid="3"
        >
          3
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => handleClick('+')}
          id="+"
          data-testid="+"
        >
          +
        </button>
        <button
          type="button"
          className="span-two"
          onClick={() => handleClick('0')}
          id="0"
          data-testid="0"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => handleClick('.')}
          id="."
          data-testid="."
        >
          .
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => handleClick('=')}
          id="="
          data-testid="="
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
