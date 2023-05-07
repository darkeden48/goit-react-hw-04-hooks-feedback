import React, { useState } from "react";
import "./index.css";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

interface AppState{
good:number;
neutral:number;
bad:number;
}
interface AppProps{

}

export default function App(e:AppState) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = (feedbackId:string):void => {
    switch (feedbackId) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };
  const total = good + neutral + bad;
  const positivePercentage = Number(((good / total) * 100).toFixed(0));
  const buttonTitles = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave Feedback">
        <Feedback options={buttonTitles} onLeaveFeedback={onFeedback} />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}