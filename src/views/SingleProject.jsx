import React, { Component, Fragment } from 'react';
import { Badge } from 'reactstrap';
import projects from '../projects.json';

class SingleProject extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const project = projects[id] || {};
    document.title = `${project.title} | Fayad alkhadra`;
  }

  render() {
    const id = this.props.match.params.id;
    const project = projects[id] || {};
    return (
      <Fragment>
        <h2>{project.title}</h2>
        <img className="img-fluid" src={project.imageUrl} alt={project.title} />
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <Badge key={tag} color="primary" pill>
              {tag}
            </Badge>
          ))}
        </div>
        <a href={project.projectUrl}>see online</a>
      </Fragment>
    );
  }
}

export default SingleProject;
