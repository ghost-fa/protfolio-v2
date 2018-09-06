import React, { Component, Fragment } from 'react';
import Berlin from '../images/Berlin6.jpg';

import { Card, CardBody, CardTitle, CardDeck,  Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

class Project extends Component {
  componentDidMount() {
    document.title = 'Project | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <img width="100%" src={Berlin} className="mb-5 img-fluid" alt="" />
        <CardDeck className="container d-flex  justify-content-center m-auto ">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
              </CardBody>
              <img
                width="100%"
                src={project.thumbnailUrl}
                alt={project.title}
              />
              <CardBody>
                <div>
                  {project.tags.map(tag => (
                    <Button key={tag} className=" m-2 text-center" color="info" >
                      {tag}
                    </Button>
                  ))}
                </div>
                <Link className="btn btn-dark text-align-center" to={`/projects/${i}`}>
                  go to project > >
                </Link>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Fragment>
    );
  }
}

export default Project;
