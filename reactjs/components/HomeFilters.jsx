import React from "react"
import Radium, {Style} from "radium"
import GetIndustryImg from "../components/GetIndustryImg"

const styles = {

  	industry: {
		minWidth: "12em",
		textAlign: 'center',
		backgroundColor: '#005f2d',
	    marginBottom: '1em',
	    padding: '0.5em 1em',
	    color: 	'white',
	    cursor: 'pointer',
	    border: 'none',
	    boxShadow: 'inset 0px -0.35em 0px -1px #22cf6d',
	    ':focus': {
	    	outline: '5px auto transparent'
	    },
	    ':hover': {
	    	backgroundColor: '#008037'
	    },
	    // TRANSITIONS
    	transition: 'box-shadow 0.5s ease-out, background-color 0.5s ease-out',
    	// QUERIES
	    '@media screen and (min-width: 992px)':{
	    	// minWidth: '14em'
		},	    
  	},
  	industryList: {
	    '@media screen and (min-width: 768px)':{
			float: 'left',
		    width: '30%',
		    fontSize: '0.8em',
		    marginRight: '3%'
	    },
	    '@media screen and (min-width: 992px)':{
			float: 'none'
		} 		
  	},
  	spanStyle: {
	    fontWeight: 'bold', 
	    fontSize: "1.35em", 
	    '@media screen and (min-width: 768px)':{
	    	fontSize: '1em'
		},
		'@media screen and (min-width: 1200px)' :{
			fontSize: '1.2em'
		}	    	
  	},
  	inactive: {
  		color: '#ffffff5e',
  		boxShadow:'inset 0px -0.35em 0px -1px #22ce6c66'
  	}
}


@Radium
export default class HomeProjects extends React.Component {

	render() {
		const onClickFilter = this.props.onClick;
		return ( 
			<div className="row justify-content-around">
				{this.props.industries.map( (item,index) => (
					// Apply inactive style to all items except the btn that matches current filterValue
	                <button onClick= {()=> {onClickFilter(item)}} key={"Home_" + item + "_" + index} className="col-4 col-md-3" style={[styles.industry, this.props.filterValue !== item ? styles.inactive:null ]}>
	                	<span style={[styles.spanStyle]}>{item}</span>
	                	<GetIndustryImg iconname={item} style={{height:"1.5em", marginLeft: "1em", float:'right', fill:'currentColor'}} className="imgSvg"/>
	                </button>
				))}
				
			</div>
		)
	}
}