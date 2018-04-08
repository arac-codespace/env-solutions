import React from "react"
import Radium, {Style} from "radium"
import GetIndustryImg from "../components/GetIndustryImg"

const styles = {

  // On mobile, container must lose the position: absolute
  	industry: {
		minWidth: "12em",
		textAlign: 'center',
		backgroundColor: '#005f2d',
	    marginBottom: '1em',
	    padding: '0.5em 0.8em',
	    color: 	'white',
	    cursor: 'pointer',
	    ':hover': {
	    	backgroundColor: '#008037'
	    },
	    '@media screen and (min-width: 992px)':{
	    	minWidth: '14em'
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
  	}
}

@Radium
export default class HomeProjects extends React.Component {

	render() {

		const industries = ['Commercial', 
							'Education', 
							'Financial',
							'Generation',
							'Government',
							'Health Care',
							'Industrial',
							'Oil and Gas',
							'Transportation',
							'Utilities']

        var industryList = industries.map(function(item, index){
                        return (
	                        <div key={"Home_" + item + "_" + index} className="col-4 col-md-3" style={[styles.industry]}>
	                        	<span style={[styles.spanStyle]}>{item}</span>
	                        	<GetIndustryImg iconName={item} style={{height:"1.5em", marginLeft: "1em", float:'right'}} className="imgSvg"/>
	                        </div>
                        );
                      })
		return ( 
			<div className="row justify-content-around">{ industryList }
		        <Style
		          scopeSelector=".imgSvg"
		          rules={{
		            polygon: {fill:'white !important'},
		            path: {
		              fill: 'white !important'
		            }
		          }}
		        />  				
			</div>
		)
	}
}