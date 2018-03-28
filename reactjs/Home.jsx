import React from "react"
import { render } from "react-dom"

import HomeProjects from "./containers/HomeProjects"

class Home extends React.Component {
  render() {
    return (
      <HomeProjects/>
    )
  }
}

render(<Home/>, document.getElementById('HomeProjects'))