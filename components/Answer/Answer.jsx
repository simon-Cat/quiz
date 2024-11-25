import Style from "@/components/Answer/Answer.module.css"
const Answer = ({ question, selectedAnswer, isRight }) => {
  return (
    <article
      className={`${Style.container} ${
        isRight ? Style.container_answer_right : Style.container_answer_wrong
      }`}
    >
      <h2 className={Style.container__question}>{question.text}</h2>
      <p className={Style.container__answer}>{selectedAnswer}</p>
    </article>
  )
}

export default Answer
