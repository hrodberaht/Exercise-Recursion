import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  // write recursive method here
  recursive = n => {
    const Comp = this.props.components[n];
    console.log(n);
    if (n <= 0) {
      return <Comp />;
    } else {
      return <Comp>{this.recursive(n - 1)}</Comp>;
    }
  };

  render() {
    return (
      <div>
        {/* invoke recursive method here */}
        {this.recursive(this.props.components.length - 1)}
      </div>
    );
  }
}
