/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<p>{this.props.text}</p>);
  }
}

export default Display;
