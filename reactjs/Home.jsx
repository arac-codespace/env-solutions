import React from "react"
import { render } from "react-dom"

import HomeProjects from "./containers/HomeProjects"

// Required for media queries
import {StyleRoot} from 'radium';

class Home extends React.Component {
  render() {
    return (
    	<StyleRoot>
      		<HomeProjects/>
      	</StyleRoot>
    )
  }
}

render(<Home/>, document.getElementById('HomeProjects'))