import Style from "@/components/AnswerOption/AnswerOption.module.css"
import { useState } from "react"

const AnswerOption = ({
  answer,
  answerIndex,
  selectAnswerHandler,
  isInputDiasbled,
  classModifier = "",
}) => {
  const [isSelected, setIsSelected] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()

    if (isInputDiasbled) {
      return
    } else {
      setIsSelected(true)
      selectAnswerHandler(answerIndex)
    }
  }
  return (
    <label
      className={`${Style.answerOption} ${classModifier}`}
      onClick={clickHandler}
    >
      <input
        type="radio"
        className={`${Style.answerOption__radioInput} ${
          isSelected ? Style.answerOption__radioInput_selected : ""
        }`}
        disabled={isInputDiasbled}
      />
      <span className={Style.answerOption__text}>{answer.text}</span>
    </label>
  )
}

export default AnswerOption
