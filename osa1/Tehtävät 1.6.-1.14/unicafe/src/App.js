import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positives }) => {
  return (
    <div>
      {!all ? (
        <div>No feedback given</div>
      ) : (
        <div>
          <table>
            <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positives} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = (props) => (
  <button style={{ margin: 5}} onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let average = (good * 1 + neutral * 0 + bad * -1) / all
  let positives = good / all

  return (
    <div style={{
      margin: 20
    }}>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average.toFixed(2)}
        positives={positives.toFixed(2) + " %"}
      />
    </div>
  )
}

export default App
