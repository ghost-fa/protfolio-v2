import React, { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
