import React, { Component, Fragment } from 'react';
import Madred from '../images/Madred.JPG';

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <img src={Madred} className="mb-5 img-fluid" alt="Responsive image" />

        <form class="bg-dark  container m-auto">
          <div className=" mt-5">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="TYPE Your Email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Massege</label>
              <textarea
                name="messeag"
                placeholder="T ype Your Message"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-dark h2 col-lg-2 col-12 btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Contact;
