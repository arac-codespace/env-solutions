import React from "react"
import { render } from "react-dom"
import {StyleRoot} from 'radium';

import HomeProjectsContainer from "./containers/HomeProjectsContainer"

class Home extends React.Component {
	render() {
		return (
			<StyleRoot>
				<HomeProjectsContainer/>
			</StyleRoot>
		)
	}
}

render(<Home/>, document.getElementById("FeaturedProjects"));
