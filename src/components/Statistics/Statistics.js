import React from "react";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotalFeedback,
  onPositivePercentage,
}) => {
  return (
    <div className="statistics">
      <h3 className="title">Statistics</h3>
      <ul className="list">
        <li>Good: {onGood}</li>
        <li>Neutral: {onNeutral}</li>
        <li>Bad: {onBad}</li>
        <li>Total: {onTotalFeedback}</li>
        <li>Positive feedback: {onPositivePercentage}</li>
      </ul>
    </div>
  );
};

export default Statistics;
