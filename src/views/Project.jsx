import React, { Component, Fragment } from 'react';
import Berlin from '../images/Berlin6.jpg';
import Tokyo from '../images/Tokyo.jpg';
import Paris from '../images/Paris.jpg';
import Architecture from '../images/Architecture.jpg';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from 'reactstrap';
class Project extends Component {
  componentDidMount() {
    document.title = 'Project | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <img width="100%" src={Berlin} className=" img-fluid" alt="" />
        <CardDeck className="container   m-auto">
          <div className=" d-flex mt-5 mb-5 ">
            <Card className=" justify-content-around">
              <CardImg top width="100%" src={Tokyo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Tokyo in night</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={Paris} alt="Card image cap" />
              <CardBody>
                <CardTitle>Paris in night</CardTitle>

                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={Architecture}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Architecture in night</CardTitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </CardDeck>
      </Fragment>
    );
  }
}

export default Project;
