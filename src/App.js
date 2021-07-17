import React, { Component } from "react";
import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  render() {
    return (
      <div className="App">
        <Feedback />
      </div>
    );
  }
}
export default App;
