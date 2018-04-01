// Based on https://github.com/jhamlet/svg-react-loader/issues/2
import React from "react"

export default class GetIndustryImg extends React.Component {
    render () {
        const context = require.context('!babel!svg-react!../assets/imgs', false, /\.svg$/);
        // We use './' since context is relative to '../files'
        const fileName = this.props.iconName.replace(/\s/g , "_").toLowerCase();
        const path = './' + fileName + '.svg';

        let element = React.createElement(context(path), this.props);

        return element;
    }
}
