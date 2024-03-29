import { useState } from 'react'

const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  let [selected, setSelected] = useState(0)
  let randomAnecdote = Math.floor(Math.random() * anecdotes.length)
  let randomizeAnecdote = () => setSelected(randomAnecdote)
  console.log("tyttyy" + selected)
  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Button
        handleClick={randomizeAnecdote}
        text='next anecdote' />
    </div>
  )
}

export default App