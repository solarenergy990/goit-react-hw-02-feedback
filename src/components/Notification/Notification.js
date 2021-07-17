import React from "react";

const Notification = (props) => {
  const { message } = props;
  return (
    <div className="notification">
      {message.trim() && <p>{message}</p>}
      {props.children}
    </div>
  );
};

export default Notification;
