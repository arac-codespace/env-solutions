import React from "react"
import Radium, {Style} from "radium"

import GetIndustryImg from "./GetIndustryImg"

/*
light-green: #defeec
lime-green: #22cf6d
mid-green: #008037
dark-green: #005f2d
*/
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
    backgroundColor:'#22cf6d',
    padding: '0.4em'
  },
  project: {
    padding: '0',
    marginBottom: '1em',
    '@media screen and (min-width: 992px)':{
      marginTop: "3em"
    }
  },
  projectImg: {
    width: '100%'
  },  
  anchor: {
    color: 'white'
  }
}

@Radium
export default class ProjectDetails extends React.Component {
  render() {
  	let details = this.props.details;
    let filterValue = this.props.filterValue;

    // Filters by industry
    if (filterValue) {
      // Filter keeps records that return true!      
      const isIndustry = (item) => item.get_industry === filterValue;
      (filterValue === "Featured") ? details : details = details.filter(isIndustry)
    }

    // Limits number of projects that can be displayed at any one time
    if (details.length > 2) {
      details = details.slice(0,6)
    }

    return (
    	<div className="row justify-content-around">    
	    	{details.map(item => (
		    	<div key={item.id} className="col-12 col-md-5" style={[styles.project]}>
					  <div className="projectDetailsContainer" style={[styles.projectDetailsContainer]}>
							<div className="projectDetails" style={[styles.projectDetails]}>
								<h6>{item.title}</h6>
								<p style={styles.projectDetailsLocation}>{item.client}</p>
							</div>
				      <div className = 'projectMetaTags' style={[styles.projectMetaTags]}>
                <a href="#" style={[styles.anchor]}><GetIndustryImg iconName={item.get_industry} style={{height:"2em", fill:'currentColor'}} className="imgSvg"/></a>                
				      </div>
				    </div>
				  	<a href="#"><img src="http://via.placeholder.com/800x600" className='img-fluid' style={[styles.projectImg]}></img></a>
			    </div>
	    	))}         
	    </div>
    )
  }
}


