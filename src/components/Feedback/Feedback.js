import React from "react";
// import Section from "../Section/Section";

class Feedback extends React.Component {
  handleIncrement = () => {
    console.log("click");
  };

  render() {
    return (
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
    );
  }
}

export default Feedback;
