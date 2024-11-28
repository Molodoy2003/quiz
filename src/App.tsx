import { FC, useState } from 'react'
import { Game } from './components/Game'
import { Result } from './components/Result'
import { questions } from './data'
import './index.scss'

export const App: FC = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const question = questions[step]

  const onClickVariant = (id: number) => {
    setStep(step + 1)

    if (id === question.correct) {
      setCorrect(correct + 1)
    }

    setUserAnswers([...userAnswers, id])
  }

  return (
    <>
      <h1 className='text-5xl font-extrabold mb-5'>Тестирование</h1>
      <div className='App'>
        {step !== questions.length ? (
          <Game
            step={step}
            onClickVariant={onClickVariant}
            question={question}
          />
        ) : (
          <Result userAnswers={userAnswers} correct={correct} />
        )}
      </div>
    </>
  )
}
