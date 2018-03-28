import React from "react"

import Headline from "../components/Headline"

export default class HomeProjects extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-5 project">
        <div className="project-details-container">
          <div className="project-details">
            <Headline>Holly Street Power Plant Decommissioning</Headline>
            <p>Location</p>
          </div>
          <div className = 'project-meta-tags'>
            <a href="#"><img src="http://via.placeholder.com/45x45/00ffff" className='img-fluid'></img></a>
          </div>
        </div>
          <a href="#"><img src="http://via.placeholder.com/800x600" className='img-fluid project-img'></img></a>
      </div>
    )
  }
}
