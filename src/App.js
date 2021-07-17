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
  onLeaveFeedback = (evt) => {
    if (evt.target.textContent === "Good") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        };
      });
    } else if (evt.target.textContent === "Neutral") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    } else if (evt.target.textContent === "Bad") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  countTotalFeedback = () => {
    let totalFeedback = this.state.good + this.state.neutral + this.state.bad;

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let positive = (this.state.good * 100) / total;
    if (!isNaN(positive)) {
      return `${Math.floor(positive)}%`;
    }
  };

  render() {
    return (
      <div>
        <Feedback
          props={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
          onTotalFeedback={this.countTotalFeedback()}
          onPositiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default App;
