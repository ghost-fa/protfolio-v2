import React, { Component, Fragment } from 'react';
import Office from '../images/Office.PNG';
import Study from '../components/Study';
import Hobbies from '../components/Hobbies';
class About extends Component {
  componentDidMount() {
    document.title = 'About | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <img src={Office} className=" img-fluid" alt="office image" />
        <section className="container">
          <h2 className="ml-5 pb-2">who i am:</h2>
          <ul className="h5 font-weight-bold mb-5">
            <li>I am Fayad Alkhadra i born in Damascus 19-3-1989. </li>
            <li>I study accounting in Damascus I graduated in 1-01-2011 </li>
            <li>I work in Clothing factory </li>
            <li>
              and then I come Germany I study B1 and then I join the course web
              develiper
            </li>
            <li>I enjoy coding </li>
            <li>I hope I will be good and learn more and more </li>
          </ul>
        </section>
        <Study />
        <Hobbies />
      </Fragment>
    );
  }
}

export default About;
