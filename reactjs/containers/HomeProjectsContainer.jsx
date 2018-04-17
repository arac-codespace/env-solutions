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
      industries: industries,
      width: window.innerWidth,
      projectsTransition: true
    };
    this.onClickFilter = this.onClickFilter.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.toggleTransition = this.toggleTransition.bind(this);
  };

  // https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);    
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

  // Triggered by resize event.  Changes filterValue when size is below
  // x pixels
  updateDimensions() {
      let windowWith = window.innerWidth
      let filterValue = this.state.filterValue
      this.setState({
        width: windowWith,
        filterValue: (windowWith<768)?"Featured":filterValue
      });
  }

  onClickFilter(industry) {
    // Change filterValue for project filtering in ProjectDetails component
    // Filter value also used for styling in home filters...
    this.setState({filterValue: industry})
    this.setState({projectsTransition: !this.state.projectsTransition})
  }  

  toggleTransition(){
    console.log("toggleTransition " + this.state.projectsTransition)
    this.setState({projectsTransition: !this.state.projectsTransition})
  }

  render() {
    console.log("HomeProjectsContainer transition = " + this.state.projectsTransition)
    return (
        <HomeProjects details={this.state.projects} onClick={this.onClickFilter} filterValue={this.state.filterValue} industries={this.state.industries} projectsTransition={this.state.projectsTransition} toggleTransition={this.toggleTransition}/>
    )
  }
}
