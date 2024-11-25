import Style from "@/components/Questinon/Questinon.module.css"
import AnswerOption from "@/components/AnswerOption/AnswerOption"
import { useState, useEffect } from "react"

const Questinon = ({ question, questionIndex, selectAnswerHandler, classModifier = "" }) => {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false)
  const [isInputDiasbled, setIsInputDiasbled] = useState(false)

  useEffect(() => {
    isAnswerSelected ? setIsInputDiasbled(true) : setIsInputDiasbled(false)
  }, [isAnswerSelected])

  const selectAnswer = (selectedAnswerId) => {
    setIsAnswerSelected(true)
    selectAnswerHandler(questionIndex, selectedAnswerId)
  }

  return (
    <fieldset className={`${Style.question} ${classModifier}`}>
      <legend className={Style.question__title}>{question?.text}</legend>
      {question?.answers.map((answer, index) => (
        <AnswerOption
          key={answer.id}
          answer={answer}
          answerIndex={index}
          selectAnswerHandler={selectAnswer}
          classModifier={Style.question__answerOption}
          isInputDiasbled={isInputDiasbled}
        />
      ))}
    </fieldset>
  )
}

export default Questinon
