import React from "react"
import { render } from "react-dom"
import {StyleRoot} from 'radium';

import HomeProjects from "./containers/HomeProjects"
import HomeFilters from "./containers/HomeFilters"


class Projects extends React.Component {
  render() {
    return (
    	<StyleRoot>
      		<HomeProjects/>
      	</StyleRoot>
    )
  }
}

class Filters extends React.Component {
	render() {
		return (
			<StyleRoot>
				<HomeFilters/>
			</StyleRoot>

		)
	}
}

render(<Projects/>, document.getElementById('HomeProjects'))
render(<Filters/>, document.getElementById('HomeFilters'))