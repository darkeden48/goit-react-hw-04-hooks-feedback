import PropTypes from "prop-types";
import React from "react";
import s from "./Statistics.module.css";

interface StatProps{
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics = ({ good, neutral, bad, total, positivePercentage }:StatProps) => {
  return (
    <div>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li className={s.total}>total: {total}</li>
        <li
          className={s.positive}
          style={{ color: positivePercentage > 50 ? "red" : "blue" }}
        >
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
export default Statistics;
