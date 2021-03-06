import React from "react"
import Radium, {StyleRoot} from 'radium';

import HomeFilters from "./HomeFilters"
import ProjectDetails from "./ProjectDetails"
import { CSSTransition, TransitionGroup } from 'react-transition-group' // ES6

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
			margin: '-1em 0',
	    },
	    '@media screen and (min-width: 1200px)':{
	    	minWidth: '28%'
	    }
	},
	projects: {
		marginTop: '30px'
	},
	mobileProjectTitle: {
		padding: '1em',
		color: 'white',
		textAlign: 'center',		
	    display: 'block', 
	    '@media screen and (min-width: 768px)':{
			display: 'none'
	    }         
	}	
}

@Radium
export default class HomeProjects extends React.Component {
	render() {
	  	let projects = this.props.projects
	  	let onClick = this.props.onClick
	  	let filterValue = this.props.filterValue
	  	let industries = this.props.industries
	  	let projectsTransition = this.props.projectsTransition
	  	const toggleTransition = this.props.toggleTransition

	  	console.log("HomeProjects transition = " + toggleTransition)

		return(
			<div className="featuredProjects">
				<div className="container">
					<div className="row justify-content-around">
						<div className="filters col-12 col-lg-3" style={[styles.filters]}>
							<h4>Choose an industry to view recent projects</h4>
							<HomeFilters onClick={onClick} industries = {industries} filterValue = {filterValue}/>
						</div>
						<div className="projects col-12 col-lg-9 col-xl-8" style={[styles.projects]}>
				      		<div style={[styles.mobileProjectTitle]}>
				      			<h4>Featured Projects</h4>
				      		</div>
							<ProjectDetails projects={projects} filterValue = {filterValue}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}