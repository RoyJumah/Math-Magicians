import React from 'react';
import '../css/style.css';
import calculate from '../../logic/Calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    const newCalculation = calculate({ total, next, operation }, buttonName);
    if (newCalculation) {
      this.setState({ ...newCalculation });
    }
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{total}</div>
          <div className="current-operand">{next || total}</div>
        </div>
        <button type="button" onClick={() => this.handleClick('AC')}>
          AC
        </button>
        <button type="button" onClick={() => this.handleClick('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => this.handleClick('%')}>
          %
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => this.handleClick('÷')}
        >
          /
        </button>
        <button type="button" onClick={() => this.handleClick('7')}>
          7
        </button>
        <button type="button" onClick={() => this.handleClick('8')}>
          8
        </button>
        <button type="button" onClick={() => this.handleClick('9')}>
          9
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => this.handleClick('x')}
        >
          x
        </button>
        <button type="button" onClick={() => this.handleClick('4')}>
          4
        </button>
        <button type="button" onClick={() => this.handleClick('5')}>
          5
        </button>
        <button type="button" onClick={() => this.handleClick('6')}>
          6
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => this.handleClick('-')}
        >
          -
        </button>
        <button type="button" onClick={() => this.handleClick('1')}>
          1
        </button>
        <button type="button" onClick={() => this.handleClick('2')}>
          2
        </button>
        <button type="button" onClick={() => this.handleClick('3')}>
          3
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => this.handleClick('+')}
        >
          +
        </button>
        <button
          type="button"
          className="span-two"
          onClick={() => this.handleClick('0')}
        >
          0
        </button>
        <button type="button" onClick={() => this.handleClick('.')}>
          .
        </button>
        <button
          type="button"
          className="special__operators"
          onClick={() => this.handleClick('=')}
        >
          =
        </button>
      </div>
    );
  }
}
