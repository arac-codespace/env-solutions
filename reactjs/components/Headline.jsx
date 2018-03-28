import React from "react"

export default class Headline extends React.Component {
  render() {
    return (
      <h6>{ this.props.children }</h6>
    )
  }
}