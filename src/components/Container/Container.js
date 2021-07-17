import React from "react";
import s from "../Container/Container.module.css";

const Container = (props) => {
  return <div className={s.mainContainer}>{props.children}</div>;
};

export default Container;
