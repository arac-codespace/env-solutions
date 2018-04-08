import React from "react"
import ProjectDetails from "../components/ProjectDetails"
import HomeProjects from "../components/HomeProjects"

export default class HomeProjectsContainer extends React.Component {

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
        // <ProjectDetails details={this.state.projects}></ProjectDetails>
        <HomeProjects details={this.state.projects}/>
    )
  }
}
