import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  createComponent = (array, index) => {
    let Component = array[index];
    if (index === array.length - 1) return <Component />;
    return (
      <Component>{this.createComponent(array, index + 1)}</Component>
    );
  };

  render() {
    return (
      <div>{this.createComponent(this.props.components, 0)}</div>
    );
  }
}
