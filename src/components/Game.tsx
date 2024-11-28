import { FC } from 'react'
import { questions } from '../data'
import '../index.scss'

interface IProps {
  question: {
    title: string
    variants: string[]
    correct: number
  }
  onClickVariant: (id: any) => void
  step: number
}

export const Game: FC<IProps> = ({ question, onClickVariant, step }) => {
  const percentage = Math.round((step / questions.length) * 100)

  return (
    <>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, id) => (
          <li onClick={() => onClickVariant(id + 1)} key={id}>
            <span className='circle'></span>
            {item}
          </li>
        ))}
      </ul>
      <div className='progress-container'>
        <span className='progress-status'>0</span>
        <div className='progress'>
          <div
            style={{ width: `${percentage}%` }}
            className='progress__inner'
          ></div>
        </div>

        <span className='progress-status'>{questions.length}</span>
      </div>
    </>
  )
}
