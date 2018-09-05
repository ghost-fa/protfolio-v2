import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faHtml5,
  faCss3,
  faSass,
  faPhp
} from '@fortawesome/free-brands-svg-icons';
import Html from '../images/Html.jpeg';
const Study = () => {
  return (
    <Fragment>
      <main className="container">
        <h2 className="mt-5 text-center  ">What I Study </h2>

        <p className="col-12">
          I study now web development. I like it so much and I hope I can learn
          more and more. I learn in DEVUGEES. When you are developer you will
          not stop learning. When I started I fell in love with coding, it makes
          me I reall want to learn more
        </p>
        <div className="row  text-center mt-5">
          <div className="col-lg-4 ">
            <NavLink to="/https://github.com/ghost-fa">
              <FontAwesomeIcon
                className="text-dark display-2"
                icon={faGithub}
              />
            </NavLink>
            <p>Github</p>
          </div>

          <div class="col-lg-4">
            <FontAwesomeIcon
              className=" text-warning display-2"
              icon={faHtml5}
            />
            <p class="text-center ">HTML </p>
          </div>
          <div class="col-lg-4">
            <FontAwesomeIcon className="display-2 text-primary" icon={faCss3} />
            <p class="text-center">css</p>
          </div>

          <div class="col-lg-4 mt-2">
            <FontAwesomeIcon className="text-danger display-2" icon={faSass} />
          </div>

          <div class="col-lg-4">
            <NavLink to="https://www.sololearn.com/">
              <img src={Html} class="img-thumbnail" alt="" />
            </NavLink>
          </div>
          <div class="col-lg-4 text-center">
            <FontAwesomeIcon
              className="display-2 col-lg-12 text-center"
              icon={faPhp}
            />
            <progress class="  " value="35" max="100" />&frac14;
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Study;
