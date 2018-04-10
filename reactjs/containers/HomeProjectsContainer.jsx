import React from "react"
import ProjectDetails from "../components/ProjectDetails"
import HomeProjects from "../components/HomeProjects"


const industries = [
          'Featured',
          'Commercial', 
          'Education', 
          'Financial',
          'Generation',
          'Government',
          'Health Care',
          'Industrial',
          'Oil and Gas',
          'Transportation',
          'Utilities']


export default class HomeProjectsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      filterValue: "Featured",
      industries: industries
    };
    this.onClickFilter = this.onClickFilter.bind(this);
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

  onClickFilter(industry) {
    // Change filterValue for project filtering in ProjectDetails component
    // Filter value also used for styling in home filters...
    console.log('Filter value = ' + this.state.filterValue)
    console.log(industry)
    this.setState({filterValue: industry})
  }  

  render() {
    return (
        // <ProjectDetails details={this.state.projects}></ProjectDetails>
        <HomeProjects details={this.state.projects} onClick={this.onClickFilter} filterValue={this.state.filterValue} industries={this.state.industries}/>
    )
  }
}
