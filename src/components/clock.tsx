import React, { Component } from "react";

type ClockState = {
  now: Date;
};

class Clock extends Component<{}, ClockState> {
  handle = 0;
  state = { now: new Date() };

  componentDidMount() {
    this.handle = window.setInterval(
      () => this.setState({ now: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;
    return <div>The time is: {now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
