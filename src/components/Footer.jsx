import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-5">
        <div className="container ">
          <div className="row">
            <p className=" col-6 ">&copy;2018-web-up developer website</p>
            <div className="text-right  col-6">
              <p>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                    className="display-4 "
                    icon={faFacebookSquare}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon className="display-4" icon={faSnapchat} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
