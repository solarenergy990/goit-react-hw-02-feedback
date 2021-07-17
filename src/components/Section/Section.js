import React from "react";
import s from "./Section.module.css";

const Section = (props) => {
  const { title } = props;
  return (
    <section className={s.section}>
      {title.trim() && <h2 className={s.title}>{title}</h2>}
      <div className={s.container}>{props.children}</div>
    </section>
  );
};

export default Section;
