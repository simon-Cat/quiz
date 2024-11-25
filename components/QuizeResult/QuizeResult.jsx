import Style from "@/components/QuizeResult/QuizeResult.module.css"
import Answer from "@/components/Answer/Answer"
import { useState, useEffect } from "react"

const QuizeResult = ({ results, tryAgainHandler, classMofidier = "" }) => {
  const [rightAnswerCount, setRightAnswerCount] = useState(0)
  const [quizeResult, setQuizeResult] = useState({
    good: false,
    notBad: false,
    bad: false,
  })

  useEffect(() => {
    let rightAnswers = 0

    results.forEach((result) => {
      result.answer.isRight ? rightAnswers++ : null
    })

    setRightAnswerCount(rightAnswers)
  }, [results])

  useEffect(() => {
    const resultOfQuize = { ...quizeResult }

    if (rightAnswerCount === results.length) {
      resultOfQuize.good = true
      resultOfQuize.bad = false
    } else if (rightAnswerCount < results.length && rightAnswerCount !== 0) {
      resultOfQuize.notBad = true
      resultOfQuize.bad = false
    } else if (rightAnswerCount === 0) {
      resultOfQuize.bad = true
    }

    setQuizeResult(resultOfQuize)
  }, [rightAnswerCount])

  const tryAgain = () => {
    setRightAnswerCount()
    tryAgainHandler()
  }

  return (
    <section className={`${Style.quizeResult} ${classMofidier}`}>
      {quizeResult.good && (
        <>
          <h2 className={Style.quizeResult__title}>Поздравляем!</h2>
          <p className={Style.quizeResult__text}>
            Вы правильно ответили на все вопросы.
          </p>
          <p className={Style.quizeResult__text}>
            Вы действительно отлично разбираетесь в IT.{" "}
          </p>
        </>
      )}
      {quizeResult.notBad && (
        <>
          <h2 className={Style.quizeResult__title}>Хороший результат!</h2>
          <p className={Style.quizeResult__text}>
            Вы ответили правильно на {rightAnswerCount} вопросов.
          </p>
          <p className={Style.quizeResult__text}>Так держать!</p>
        </>
      )}
      {quizeResult.bad && (
        <>
          <h2 className={Style.quizeResult__title}>Упс :{"("}</h2>
          <p className={Style.quizeResult__text}>
            Вы неправильно ответили на все вопросы.{" "}
          </p>
          <p className={Style.quizeResult__text}>Нужно подучить теорию.</p>
        </>
      )}

      <ul className={Style.quizeResult__results}>
        {results.map((result) => (
          <Answer
            key={result.question.id}
            question={result.question}
            selectedAnswer={result.answer.text}
            isRight={result.answer.isRight}
          />
        ))}
      </ul>

      {(quizeResult.notBad || quizeResult.bad) && (
        <button
          className={Style.quizeResult__tryAgainButton}
          type="button"
          onClick={tryAgain}
        >
          Пройти еще раз
        </button>
      )}
    </section>
  )
}

export default QuizeResult
