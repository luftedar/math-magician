import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentValue: 0,calculateObject:{}};
  }
  
  render() {
    const clickbutton = (inp) => (event) => {     
      let calculateData = calculate(this.state.calculateObject,inp);
      this.setState({
        calculateObject: calculateData
      })
      this.setState({
        currentValue: calculateData.next
      })
      if (calculateData.next === null && calculateData.operation === null) {
        this.setState({
          currentValue: calculateData.total
        })
      }
      if (calculateData.next === null && calculateData.operation !== null) {
        this.setState({
          currentValue: calculateData.operation
        })
      }
      if (inp === 'ac') {
        this.setState({
          calculateObject:{},
          currentValue:0
        })
        
      }
  }
    return (
      <div id="calculator">
        <div id="input-area">
          <span id="input-field">{this.state.currentValue}</span>
        </div>
        <div id="button-area">
          <div className="row row-1">
            <button onClick={clickbutton('ac')} type="button" className="calc-button first-line">AC</button>
            <button onClick={clickbutton('+/-')} type="button" className="calc-button first-line">+/-</button>
            <button onClick={clickbutton('%')} type="button" className="calc-button first-line">%</button>
            <button onClick={clickbutton('÷')} type="button" className="orange-button calc-button first-line">÷</button>
          </div>
          <div className="row row-2">
            <button onClick={clickbutton('7')} type="button" className="calc-button second-line">7</button>
            <button onClick={clickbutton('8')} type="button" className="calc-button second-line">8</button>
            <button onClick={clickbutton('9')} type="button" className="calc-button second-line">9</button>
            <button onClick={clickbutton('x')} type="button" className="orange-button calc-button second-line">x</button>
          </div>
          <div className="row row-3">
            <button onClick={clickbutton('4')} type="button" className="calc-button third-line">4</button>
            <button onClick={clickbutton('5')} type="button" className="calc-button third-line">5</button>
            <button onClick={clickbutton('6')} type="button" className="calc-button third-line">6</button>
            <button onClick={clickbutton('-')} type="button" className="orange-button calc-button third-line">-</button>
          </div>
          <div className="row row-4">
            <button onClick={clickbutton('1')} type="button" className="calc-button forth-line">1</button>
            <button onClick={clickbutton('2')} type="button" className="calc-button forth-line">2</button>
            <button onClick={clickbutton('3')} type="button" className="calc-button forth-line">3</button>
            <button onClick={clickbutton('+')} type="button" className="orange-button calc-button forth-line">+</button>
          </div>
          <div className="row row-5">
            <button onClick={clickbutton('0')} type="button" className="calc-button fifth-line" id="zero-button">0</button>
            <button onClick={clickbutton('.')} type="button" className="calc-button fifth-line">.</button>
            <button onClick={clickbutton('=')} type="button" className="orange-button calc-button fifth-line">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
