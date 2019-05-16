import React, { Component } from 'react'

class ListBox extends Component {
  render() {
    return (
      <li>
        <p>{this.props.food.name}</p>
      </li>
    )
  }
}
export default ListBox;



