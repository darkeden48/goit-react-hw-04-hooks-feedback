import React, { useState } from "react";
import "./index.css";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = (feedbackId) => {
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
  const positivePercentage = ((good / total) * 100).toFixed(0);
  const buttonTitles = Object.keys({ good, neutral, bad });

  return (
    <div>
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
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = (total) => {
//     const { good, neutral, bad } = this.state;
//     total = neutral + good + bad;
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const positiveTotal = (good / (neutral + good + bad)) * 100;
//     return Math.trunc(positiveTotal);
//   };
//   addVote = (e) => {
//     const { name } = e.target;
//     this.setState((prevState) => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     const buttonTitles = Object.keys(this.state);
//     return (
//       <div>
//         <Section title="Please leave Feedback">
//           <Feedback options={buttonTitles} onLeaveFeedback={this.addVote} />
//         </Section>
//         {total !== 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }
