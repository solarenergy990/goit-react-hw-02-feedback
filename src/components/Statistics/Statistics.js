import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotalFeedback,
  onPositivePercentage,
}) => {
  return (
    <Section title="Statistics">
      {onPositivePercentage ? (
        <ul className="list">
          <li>Good: {onGood}</li>
          <li>Neutral: {onNeutral}</li>
          <li>Bad: {onBad}</li>
          <li>Total: {onTotalFeedback}</li>
          <li>Positive feedback: {onPositivePercentage}</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.string,
};
