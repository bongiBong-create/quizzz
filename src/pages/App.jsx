import '../app/styles/app.css';

import { useState } from 'react';
import { motion } from "framer-motion"
import { questions } from '../app/data/data';

import Button from '../ui/button';

function App() {
  const [score, setScore] = useState(1)
  const [quest, setQuest] = useState(1)
  const [result, setResult] = useState(0)
  const [play, setPlay] = useState(true);

  const handleClick = (answer) => {
    if (answer === questions[score].correctAnswer) {
      setResult((result) => result += 1);
    }
    setScore((score) => score += 1);
    setQuest((quest) => quest += 1);
  }

  const handleRemove = () => {
    setScore(0)
    setQuest(1)
    setResult(0);
    setPlay((play) => !play)
  }

  const handlePlay = () => {
    setPlay((play) => !play)
  }

  return (
    <div className="app">
      <h1 className='title'>Quiz</h1>
      {
        play ? <Button
          className='play remove'
          handleClick={handlePlay}
          text="Начать"
        /> : (
          <div className="quiz">
            {
              score === questions.length ? (
                <div className="show-score">
                  <div className='info'>Твой результат {result}/{questions.length}</div>
                  <Button
                    className='remove'
                    handleClick={handleRemove}
                    text="Заново"
                  />
                </div>) : (
                <motion.div
                  initial={{ opacity: 0, x: -2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="quiz-container">
                  <div className="question">
                    <span>{quest}.</span> {questions[score].question}
                  </div>
                  <div
                    className="answers">
                    {questions[score].answers.map((answer, i) => {
                      return <Button
                        key={i}
                        answer={answer}
                        className="answer-btn"
                        handleClick={handleClick}
                      />
                    })
                    }
                  </div>
                </motion.div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default App
