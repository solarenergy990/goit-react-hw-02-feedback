import React from "react";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotalFeedback,
  onPositivePercentage,
}) => {
  console.log(
    "values:",
    onGood,
    onNeutral,
    onBad,
    onTotalFeedback,
    onPositivePercentage
  );
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
/* <Notification message="No feedback given" />; */
