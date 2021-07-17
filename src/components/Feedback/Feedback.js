import React, { Component } from "react";
// import Section from "../Section/Section";

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrement = (evt) => {
    console.log(evt.target.textContent);
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
    console.log(totalFeedback);
    return totalFeedback;
  };

  render() {
    return (
      <div>
        <div className="feedback">
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <div className="statistics">
          <h3>Statistics</h3>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback}2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
