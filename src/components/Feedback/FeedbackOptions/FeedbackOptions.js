import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section/Section";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { good, neutral, bad } = options;
  return (
    <Section title="Please leave feedback">
      <button
        type="button"
        name="good"
        className={s.button}
        onClick={onLeaveFeedback}
        data-value={good}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.button}
        onClick={onLeaveFeedback}
        data-value={neutral}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.button}
        onClick={onLeaveFeedback}
        data-value={bad}
      >
        Bad
      </button>
    </Section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
