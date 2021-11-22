import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <div id="input-area">
          <input id="input-field" dir="rtl" />
        </div>
        <div id="button-area">
          <div className="row row-1">
            <button type="button" className="calc-button first-line">AC</button>
            <button type="button" className="calc-button first-line">+/-</button>
            <button type="button" className="calc-button first-line">%</button>
            <button type="button" className="orange-button calc-button first-line">/</button>
          </div>
          <div className="row row-2">
            <button type="button" className="calc-button second-line">7</button>
            <button type="button" className="calc-button second-line">8</button>
            <button type="button" className="calc-button second-line">9</button>
            <button type="button" className="orange-button calc-button second-line">x</button>
          </div>
          <div className="row row-3">
            <button type="button" className="calc-button third-line">4</button>
            <button type="button" className="calc-button third-line">5</button>
            <button type="button" className="calc-button third-line">6</button>
            <button type="button" className="orange-button calc-button third-line">-</button>
          </div>
          <div className="row row-4">
            <button type="button" className="calc-button forth-line">1</button>
            <button type="button" className="calc-button forth-line">2</button>
            <button type="button" className="calc-button forth-line">3</button>
            <button type="button" className="orange-button calc-button forth-line">+</button>
          </div>
          <div className="row row-5">
            <button type="button" className="calc-button fifth-line" id="zero-button">0</button>
            <button type="button" className="calc-button fifth-line">.</button>
            <button type="button" className="orange-button calc-button fifth-line">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
