import React from "react"
import Radium from "radium"

const styles = {

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
  },
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
}

@Radium
export default class ProjectDetails extends React.Component {
  render() {
  	let {details} = this.props
    return (
    	<div className="row justify-content-around">
	    	{details.map(item => (
		    	<div key={item.id} className="col-12 col-md-5" style={[styles.project]}>
					  <div className="projectDetailsContainer" style={[styles.projectDetailsContainer]}>
							<div className="projectDetails" style={[styles.projectDetails]}>
								<h6>{item.title}</h6>
								<p style={styles.projectDetailsLocation}>{item.location}</p>
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

