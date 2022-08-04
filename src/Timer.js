import React from "react";
import ReactDOM from "react-dom/client";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconde: 60,
    };
  }
  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        seconde: this.state.seconde - 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    if (this.state.seconde === 0) {
      clearInterval(interval);
    }
  }
  render() {
    return <h2 className="timer">{this.state.seconde}</h2>;
  }
}

export default Timer;
