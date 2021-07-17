import React from "react";

const Section = (props) => {
  console.log(props);
  const { title } = props;
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
