import { FC } from 'react'
import { questions } from '../data'
import '../index.scss'

interface IProps {
  correct: number
  userAnswers: number[]
}

export const Result: FC<IProps> = ({ correct, userAnswers }) => {
  return (
    <>
      <div className='result'>
        <h1>
          Вы ответили правильно на {correct} вопросов из {questions.length}
        </h1>
        {correct === questions.length / 2 ? (
          <h2>Так держать!</h2>
        ) : correct === questions.length ? (
          <h2>Вы действительно разбираетесь в IT!</h2>
        ) : (
          <h1>Нужно подучить теорию!</h1>
        )}
        <div className='questions-list'>
          {questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correct
            return (
              <div
                key={index}
                className={`question-item ${
                  isCorrect ? 'correct' : 'incorrect'
                }`}
              >
                <h2>{question.title}</h2>
                <p>
                  {userAnswers[index] !== undefined
                    ? question.variants[userAnswers[index]]
                    : 'Не отвечено'}
                </p>
              </div>
            )
          })}
        </div>
        <a href='/'>
          <button>Попробовать снова</button>
        </a>
      </div>
    </>
  )
}
