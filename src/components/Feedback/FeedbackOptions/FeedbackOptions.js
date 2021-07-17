import React from "react";
import Section from "../../Section/Section";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <button type="button" className={s.button} onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" className={s.button} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" className={s.button} onClick={onLeaveFeedback}>
        Bad
      </button>
    </Section>
  );
};

export default FeedbackOptions;
