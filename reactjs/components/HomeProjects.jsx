import React from "react"
import Radium, {StyleRoot} from 'radium';

import HomeFilters from "./HomeFilters"
import ProjectDetails from "./ProjectDetails"

const styles = {
	filters: {
	    padding: '1em',
	    display: 'none',
	    backgroundColor: '#005f2d',
	    color: 'white',
	    textAlign: 'center',
	    '@media screen and (min-width: 768px)':{
	      display: "block",
	    },      
	    '@media screen and (min-width: 992px)':{
			margin: '-1em 0'
	    }         
	},
	mobileProjectTitle: {
		padding: '1em',
		color: 'white',
		textAlign: 'center',		
	    display: 'block', 
	    '@media screen and (min-width: 992px)':{
			display: 'none'
	    }         
	}	
}

@Radium
export default class HomeProjects extends React.Component {
	render() {
	  	let {details} = this.props

		return(
			<div className="featuredProjects">
				<div className="container">
					<div className="row justify-content-around">
						<div className="filters col-12 col-lg-3" style={[styles.filters]}>
							<h4>Choose an industry to view recent projects</h4>
								<HomeFilters details={details} />
						</div>
						<div className="projects col-12 col-lg-9 col-xl-8">
				      		<div style={[styles.mobileProjectTitle]}>
				      			<h4>Featured Projects</h4>
				      		</div>						
							<ProjectDetails details={details}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}