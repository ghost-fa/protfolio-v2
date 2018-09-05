import React, { Fragment } from 'react';
import Music from '../images/Music.jpg';
import Pool from '../images/Swimming-Pool.jpg';
import Horse from '../images/Horse.jpg';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';

const Hobbies = props => {
  return (
    <Fragment>
      <h2 className="text-center m-5">what i like</h2>
      <CardColumns className="container">
        <Card>
          <CardImg top width="100%" src={Music} alt="Card image cap" />
          <CardBody>
            <CardTitle>Music</CardTitle>
            <CardSubtitle>music make me feel happy and relaxing</CardSubtitle>
            <CardText className="mt-3">
              i like dancing and football and billiards
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src={Pool} alt="Card image cap" />
          <CardBody>
            <CardTitle>swimming</CardTitle>

            <CardText>
              i love swimming. i feel i am so relaxeing when i swimming
            </CardText>
          </CardBody>
        </Card>
        <Card className="text-center" body inverse color="dark">
          <CardTitle>i like also a lot of thing .</CardTitle>
          <CardSubtitle>Travel</CardSubtitle>
          <CardText>
            i love travel . i go dubai and jordan and turkey and madred . also
            italy and niederlande and sweden and paris
          </CardText>
        </Card>
        <Card>
          <CardImg top width="100%" src={Horse} alt="Card image cap" />
          <CardBody>
            <CardTitle>horses</CardTitle>

            <CardText>
              i love horses and i like riding . i wish i had one day
            </CardText>
          </CardBody>
        </Card>
        <Card body inverse className="text-center" color="dark">
          <CardTitle>miscellaneous</CardTitle>
          <CardText>
            i like meet new popel and be happy always you will see me smeil. and
            i like to see the people happy .
          </CardText>
        </Card>
      </CardColumns>
    </Fragment>
  );
};

export default Hobbies;
