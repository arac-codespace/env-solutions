import React from "react"

import Headline from "../components/Headline"

import Radium from "radium"

const styles = {
  project: {
    padding: '0',
    marginBottom: '1em',
    '@media screen and (min-width: 992px)':{
      marginTop: "3em"
    }
  },
  projectImg: {
    width: '100%',
  },

  // On mobile, container must lose the position: absolute
  projectDetailsContainer: {
    width: '100%',
    '@media screen and (min-width: 992px)':{
      position: "absolute",
      top: "-3em",
    }    
  },

  // On mobile, details must change to 100%
  projectDetails: {
    padding: '1em 2em',
    backgroundColor: 'white',
    width: '100%',
    '@media screen and (min-width: 992px)':{
      width: "85%",
    }    
  },

  projectDetailsLocation: {
    marginBottom: '0em',
  },

  projectMetaTags: {
    position: 'absolute',
  }
}

@Radium
export default class HomeProjects extends React.Component {

  state={
    projects:[]
  };

  async componentDidMount() {
    try {
      const res = await fetch('/projects/api/');
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
      <div className="row justify-content-around">
        {this.state.projects.map(item => (
          <div className="col-12 col-md-5" style={[styles.project]}>
            <div className="projectDetailsContainer" style={[styles.projectDetailsContainer]}>
              <div key={item.id} className="projectDetails" style={[styles.projectDetails]}>
                <Headline>{item.title}</Headline>
                <p style={[styles.projectDetailsLocation]}>{item.location}</p>
              </div>
              <div className = 'projectMetaTags' style={[styles.projectMetaTags]}>
                <a href="#"><img src="http://via.placeholder.com/45x45/00ffff" className='img-fluid'></img></a>
              </div>
            </div>
              <a href="#"><img src="http://via.placeholder.com/800x600" className='img-fluid' style={[styles.projectImg]}></img></a>
          </div>
        ))}
      </div>
    )
  }
}
