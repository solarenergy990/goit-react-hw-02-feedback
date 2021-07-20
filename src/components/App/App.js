import React, { Component } from "react";
// import Feedback from "../Feedback/Feedback";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Container from "../Container/Container";
import Section from "../Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (evt) => {
    this.setState((prevState) => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = (this.state.good * 100) / total;
    if (!isNaN(positive)) {
      return `${Math.floor(positive)}%`;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotalFeedback={this.countTotalFeedback()}
            onPositivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Container>

      // <Feedback
      //   props={this.state}
      //   onLeaveFeedback={this.onLeaveFeedback}
      //   onTotalFeedback={this.countTotalFeedback()}
      //   onPositiveFeedback={this.countPositiveFeedbackPercentage()}
      // />
    );
  }
}
export default App;
