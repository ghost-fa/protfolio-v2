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
        <img src={Office} className=" img-fluid" alt="office" />
        <section className="container">
          <h2 className=" pb-2">who i am:</h2>
          <ul className="h5 font-weight-bold ">
            <li className="pb-2">I am Fayad Alkhadra i born in Damascus 19-3-1989. </li>
            <li className="pb-2">I study accounting in Damascus I graduated in 1-01-2011 </li>
            <li className="pb-2">I work in Clothing factory </li>
            <li className="pb-2">
              and then I come Germany I study B1 and then I join the course web
              develiper
            </li>
            <li className="pb-2">I enjoy coding </li>
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
