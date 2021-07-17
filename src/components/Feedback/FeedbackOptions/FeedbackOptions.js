import React from "react";
import Section from "../../Section/Section";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </Section>
  );
};

export default FeedbackOptions;
