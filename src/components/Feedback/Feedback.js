import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Container from "../Container/Container";

const Feedback = ({
  props,
  onLeaveFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) => {
  const { good, neutral, bad } = props;

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

export default Feedback;
