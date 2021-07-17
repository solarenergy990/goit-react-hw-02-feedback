import React from "react";
import PropTypes from "prop-types";
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
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={props} />
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

Feedback.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onPositiveFeedback: PropTypes.string,
};
