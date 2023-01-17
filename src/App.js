import React from 'react';
import { Route } from 'react-router-dom';
import Calculator from './components/Pages/Calculator';
import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import MainHeader from './components/MainHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>

          <Route exact path="/calculator">
            <Calculator />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
