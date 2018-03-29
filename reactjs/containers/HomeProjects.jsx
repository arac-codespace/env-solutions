import React from "react"

import Headline from "../components/Headline"


export default class HomeProjects extends React.Component {

  state={
    projects:[]
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/projects/api/');
      const projects = await res.json();
      this.setState({
        projects
      });
    } catch (e) {
      console.log(e);
    }
  }  

  render() {
    return (
      <div className="insert-projects row justify-content-around">
        {this.state.projects.map(item => (
          <div className="col-12 col-md-5 project">
            <div className="project-details-container">
              <div key={item.id} className="project-details">
                <Headline>{item.title}</Headline>
                <p>{item.location}</p>
              </div>
              <div className = 'project-meta-tags'>
                <a href="#"><img src="http://via.placeholder.com/45x45/00ffff" className='img-fluid'></img></a>
              </div>
            </div>
              <a href="#"><img src="http://via.placeholder.com/800x600" className='img-fluid project-img'></img></a>
          </div>
        ))}
      </div>
    )
  }
}
