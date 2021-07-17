import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Container from "../Container/Container";
// import Notification from "../Notification/Notification";
// import Section from "../Section/Section";

const Feedback = ({
  props,
  onLeaveFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) => {
  const { good, neutral, bad } = props;
  // static defaultProps = {
  //   initialValue: 0,
  // };

  // state = {
  //   good: this.props.initialValue,
  //   neutral: this.props.initialValue,
  //   bad: this.props.initialValue,
  // };

  // onLeaveFeedback = (evt) => {
  //   if (evt.target.textContent === "Good") {
  //     this.setState((prevState) => {
  //       return {
  //         good: prevState.good + 1,
  //       };
  //     });
  //   } else if (evt.target.textContent === "Neutral") {
  //     this.setState((prevState) => {
  //       return {
  //         neutral: prevState.neutral + 1,
  //       };
  //     });
  //   } else if (evt.target.textContent === "Bad") {
  //     this.setState((prevState) => {
  //       return {
  //         bad: prevState.bad + 1,
  //       };
  //     });
  //   }
  // };

  // countTotalFeedback = () => {
  //   let totalFeedback = this.state.good + this.state.neutral + this.state.bad;

  //   return totalFeedback;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   let total = this.countTotalFeedback();
  //   let positive = (this.state.good * 100) / total;
  //   if (!isNaN(positive)) {
  //     return `${Math.floor(positive)}%`;
  //   }
  // };

  // render() {
  return (
    <Container>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        onGood={good}
        onNeutral={neutral}
        onBad={bad}
        onTotalFeedback={onTotalFeedback}
        onPositivePercentage={onPositiveFeedback}
      />
    </Container>
  );
};
// }

export default Feedback;
