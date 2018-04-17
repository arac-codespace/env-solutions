import React from "react"
import Radium, {Style} from "radium"

import GetIndustryImg from "./GetIndustryImg"
import { CSSTransition, TransitionGroup } from 'react-transition-group' // ES6

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
      top: "-3.5em",
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
    // padding: '0.4em'
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
  },
  metaImgContainer: {
    display:"block",
    float: 'left',
    backgroundColor: "#22cf6d",
    padding: '0.4em 0.6em',
    color: 'white',
    maxHeight: '3rem',
    height: '3rem'
  },
  metaLocationContainer: {
    display: "block",
    float: 'left',
    backgroundColor:'#005f2d',    
    padding: '0.4em 0.6em',
    color: 'white',
    lineHeight: '30px',
    maxHeight: '3rem',
    height: '3rem',
    fontSize: "1.25rem",
    fontWeight: "bold"
  }
}

@Radium
export default class ProjectDetails extends React.Component {

  getImage(item){
    return <GetIndustryImg iconname={item.get_industry} style={{height:"2em", fill:'currentColor'}} className="imgSvg"/>
  }
  render() {
  	let details = this.props.details;
    let filterValue = this.props.filterValue;
    console.log("ProjectDetails render fired!")
    // Filters by industry
    if (filterValue && filterValue !== "Featured") {
      // Filter keeps records that return true!      
      const isIndustry = (item) => item.get_industry === filterValue;
      details = details.filter(isIndustry);
    } else if (filterValue && filterValue === "Featured") {
      const isFeatured = (item) => item.isFeatured;
      details = details.filter(isFeatured);
    }

    // Limits number of projects that can be displayed at any one time
    if (details.length > 5) {
      details = details.slice(0,5)
    }

    // Enlarges image if projects is odd
    let classNameEven = " col-md-5";
    let classNameOdd = details.length%2 == 0 ? " col-md-5": " col-md-10";
    

    return (
        <div className="row justify-content-around">
          {details.map((item,index) => (              
  		    	<div key={item.id} className={"col-12" + (index==0 ? classNameOdd:classNameEven)} style={[styles.project]}>
  					  <div className="projectDetailsContainer" style={[styles.projectDetailsContainer]}>
  							<div className="projectDetails" style={[styles.projectDetails]}>
  								<h4>{item.title}</h4>
  								<p style={styles.projectDetailsLocation}>{item.client}</p>
  							</div>
  				      <div className = 'projectMetaTags' style={[styles.projectMetaTags]}>
                    <a style={[styles.metaImgContainer]} href="#">{this.getImage(item)}</a>                
  				          <span style={[styles.metaLocationContainer]}>{item.location}</span>
                </div>
  				    </div>
  				  	<a href="#"><img src="http://via.placeholder.com/800x600" className='img-fluid' style={[styles.projectImg]}></img></a>
  			    </div>
          ))}         
        </div>
    )
  }
}


