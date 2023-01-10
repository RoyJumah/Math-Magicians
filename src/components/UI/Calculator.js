/* eslint-disable */
import React from 'react';
import '../css/style.css';
// import calculate from '../../logic/Calculate';
// import operate from '../../logic/operate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="special__operators">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="special__operators">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="special__operators">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="special__operators">+</button>
        <button className="span-two">0</button>
        <button>.</button>
        <button className="special__operators">=</button>
      </div>
    );
  }
}
