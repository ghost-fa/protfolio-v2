import React, { Component, Fragment } from 'react';
import Man from '../images/Man.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <img src={Man} className=" img-fluid" alt="man walk on tran" />

        <main className="container to mt-5 ">
          <section className="m-auto">
            <h1 className="h1 text-center">
              Welcome To My First Project Online
            </h1>

            <h2 className="mt-5 mb-5">Here you will know :</h2>

            <ol className="h4  ">
              <li className="pb-3  ">who I am</li>
              <li className="pb-3  ">what I study and what I do</li>
              <li className="pb-3 ">what I like</li>
            </ol>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default Home;
