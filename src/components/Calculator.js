import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };
  return (
    <div className="calc-page">
      <div className="calc-header">
          <h2>Let's do some math!</h2>
        </div>
      <div id="calculator">
        <div id="input-area">
          <span id="input-field">
            {state.total}
            {state.operation}
            {state.next}
          </span>
        </div>
        <div id="button-area">
          <div className="row row-1">
            <button onClick={handleClick} type="button" className="calc-button first-line">AC</button>
            <button onClick={handleClick} type="button" className="calc-button first-line">+/-</button>
            <button onClick={handleClick} type="button" className="calc-button first-line">%</button>
            <button onClick={handleClick} type="button" className="orange-button calc-button first-line">÷</button>
          </div>
          <div className="row row-2">
            <button onClick={handleClick} type="button" className="calc-button second-line">7</button>
            <button onClick={handleClick} type="button" className="calc-button second-line">8</button>
            <button onClick={handleClick} type="button" className="calc-button second-line">9</button>
            <button onClick={handleClick} type="button" className="orange-button calc-button second-line">x</button>
          </div>
          <div className="row row-3">
            <button onClick={handleClick} type="button" className="calc-button third-line">4</button>
            <button onClick={handleClick} type="button" className="calc-button third-line">5</button>
            <button onClick={handleClick} type="button" className="calc-button third-line">6</button>
            <button onClick={handleClick} type="button" className="orange-button calc-button third-line">-</button>
          </div>
          <div className="row row-4">
            <button onClick={handleClick} type="button" className="calc-button forth-line">1</button>
            <button onClick={handleClick} type="button" className="calc-button forth-line">2</button>
            <button onClick={handleClick} type="button" className="calc-button forth-line">3</button>
            <button onClick={handleClick} type="button" className="orange-button calc-button forth-line">+</button>
          </div>
          <div className="row row-5">
            <button onClick={handleClick} type="button" className="calc-button fifth-line" id="zero-button">0</button>
            <button onClick={handleClick} type="button" className="calc-button fifth-line">.</button>
            <button onClick={handleClick} type="button" className="orange-button calc-button fifth-line">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
