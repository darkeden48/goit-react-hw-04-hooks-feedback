import React from "react";
import PropTypes from "prop-types";

type NotProps={
message:string
}

const Notification = (props:NotProps) =>{
  return <p>{props.message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
