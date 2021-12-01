import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
