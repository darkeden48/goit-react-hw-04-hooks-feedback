// import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import f from "./Feedback.module.css";

interface FeedProps{
  options:string[]; 
  onLeaveFeedback:(option:string)=>void;
}

export default function Feedback({ options, onLeaveFeedback }:FeedProps) {
  return (
    <ul>
      {options.map((option) => (
        <li className={f.element} key={option}>
          <button
            className={f.button}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
