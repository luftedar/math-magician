import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator">
        <div id="input-area">
          <span id="input-field">
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div id="button-area">
          <div className="row row-1">
            <button onClick={this.handleClick} type="button" className="calc-button first-line">AC</button>
            <button onClick={this.handleClick} type="button" className="calc-button first-line">+/-</button>
            <button onClick={this.handleClick} type="button" className="calc-button first-line">%</button>
            <button onClick={this.handleClick} type="button" className="orange-button calc-button first-line">÷</button>
          </div>
          <div className="row row-2">
            <button onClick={this.handleClick} type="button" className="calc-button second-line">7</button>
            <button onClick={this.handleClick} type="button" className="calc-button second-line">8</button>
            <button onClick={this.handleClick} type="button" className="calc-button second-line">9</button>
            <button onClick={this.handleClick} type="button" className="orange-button calc-button second-line">x</button>
          </div>
          <div className="row row-3">
            <button onClick={this.handleClick} type="button" className="calc-button third-line">4</button>
            <button onClick={this.handleClick} type="button" className="calc-button third-line">5</button>
            <button onClick={this.handleClick} type="button" className="calc-button third-line">6</button>
            <button onClick={this.handleClick} type="button" className="orange-button calc-button third-line">-</button>
          </div>
          <div className="row row-4">
            <button onClick={this.handleClick} type="button" className="calc-button forth-line">1</button>
            <button onClick={this.handleClick} type="button" className="calc-button forth-line">2</button>
            <button onClick={this.handleClick} type="button" className="calc-button forth-line">3</button>
            <button onClick={this.handleClick} type="button" className="orange-button calc-button forth-line">+</button>
          </div>
          <div className="row row-5">
            <button onClick={this.handleClick} type="button" className="calc-button fifth-line" id="zero-button">0</button>
            <button onClick={this.handleClick} type="button" className="calc-button fifth-line">.</button>
            <button onClick={this.handleClick} type="button" className="orange-button calc-button fifth-line">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
