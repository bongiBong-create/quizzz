import '../app/styles/app.css';
import { useState } from 'react';
import { motion } from "framer-motion"
import { div } from 'framer-motion/client';

function App() {
  const [score, setScore] = useState(1)
  const [quest, setQuest] = useState(1)
  const [result, setResult] = useState(0)
  const [play, setPlay] = useState(true);

  const questions = [
    {
      question: 'Какая планета в Солнечной системе известна как "Красная планета" ?',
      answers: ["Венера", "Марс", "Юпитер", "Сатурн"],
      correctAnswer: "Марс"
    },
    {
      question: 'Кто написал роман "Война и мир" ?',
      answers: ["Лев Толстой", "Федор Достоевский", "Александр Пушкин", "Иван Тургенев"],
      correctAnswer: "Лев Толстой"
    },
    {
      question: 'Какой химический элемент обозначается символом "O" ?',
      answers: ["Водород", "Кислород", "Углерод", "Азот"],
      correctAnswer: "Кислород"
    },
    {
      question: 'Какая река является самой длинной в мире?',
      answers: ["Нил", "Амазонка", "Янцзы", "Миссисипи"],
      correctAnswer: "Амазонка"
    },
    {
      question: 'Кто был первым президентом США ?',
      answers: ["Джордж Вашингтон", "Томас Джефферсон", "Авраам Линкольн", "Джон Адамс"],
      correctAnswer: "Джордж Вашингтон"
    },
    {
      question: 'Какой город был столицей Византийской империи ?',
      answers: ["Рим", "Константинополь", "Афины", "Александрия"],
      correctAnswer: "Константинополь"
    },
  ]

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
      {
        score === questions.length ? <div className='el__container'>
          <div className="el"></div>
          <div className="el"></div>
          <div className="el"></div>
          <div className="el"></div>
          <div className="el"></div>
        </div> : ""
    }
      <h1 className='title'>Quiz</h1>
      {
        play ? <button className='play remove' onClick={handlePlay}>Играть</button> : (
          <div className="quiz">
            {
              score === questions.length ? (
                <div className="show-score">
                  <div className='info'>Твой результат {result}/{questions.length}</div>
                  <button className='remove' onClick={(handleRemove)}>Заново</button>
                </div>) : (
                <motion.div
                  initial={{ opacity: 0, x: -2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="quiz-container">
                  <div className="question"><span>{quest}.</span> {questions[score].question}</div>
                  <div
                    className="answers">
                    {questions[score].answers.map((answer, i) => {
                      return <button
                        key={i}
                        className='answer-btn'
                        onClick={() => handleClick(answer)}>
                        {answer}
                      </button>
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
