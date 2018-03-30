import React from "react"
import { render } from "react-dom"
import {StyleRoot} from 'radium';

import HomeProjects from "./containers/HomeProjects"

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