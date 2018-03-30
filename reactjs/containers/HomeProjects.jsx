import React from "react"

import ProjectDetails from "../components/ProjectDetails"

import Radium from "radium"


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
      <ProjectDetails details={this.state.projects}></ProjectDetails>
    )
  }
}
