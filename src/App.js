import React, { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import Contact from './views/Contact';
import SingleProject from './views/SingleProject';
import NotFound from './views/NotFound';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/project" component={Project} exact />
            <Route path="/projects/:id" component={SingleProject} exact />
            <Route path="/contact" component={Contact} exact />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
