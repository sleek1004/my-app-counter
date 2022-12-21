import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <span className={this.classBadges()}>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
  classBadges() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
