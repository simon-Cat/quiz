import Style from "@/components/Quize/Quize.module.css"
import Questinon from "@/components/Questinon/Questinon"
import ProgressBar from "@/components/ProgressBar/ProgressBar"
import { useState, useEffect } from "react"
import { shuffleArray } from "@/utils/shuffleArray"
import QuizeResult from "../QuizeResult/QuizeResult"

const Quize = ({ quizeTitle, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [areQuestionsOver, setAreQuestionsOver] = useState(false)
  const [questionsShuffled, setQuestionsShuffled] = useState([])
  const [quizResults, setQuizResults] = useState([])

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions)
    setQuestionsShuffled(shuffledQuestions)
  }, [areQuestionsOver])

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions)
    setQuestionsShuffled(shuffledQuestions)
  }, [questions])

  const checkAreQuestionsOver = () => {
    return currentQuestionIndex === questionsShuffled.length - 1 ? true : false
  }

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(
      (previousIndexQuestion) => previousIndexQuestion + 1
    )
  }

  const selectAnswer = (questionIndex, answerIndex) => {
    const results = [...quizResults]
    const result = {
      question: questionsShuffled[questionIndex],
      answer: questionsShuffled[questionIndex]["answers"][answerIndex],
    }

    results.push(result)
    setQuizResults(results)

    if (checkAreQuestionsOver()) {
      setTimeout(() => {
        setAreQuestionsOver(true)
      }, 1000)
    } else {
      setTimeout(() => {
        goToNextQuestion()
      }, 1000)
    }
  }

  const startQuiz = () => {
    setCurrentQuestionIndex(0)
    setAreQuestionsOver(false)
    setQuestionsShuffled([])
    setQuizResults([])
  }

  return (
    <>
      {!areQuestionsOver ? (
        <section className={Style.quize}>
          <h1 className={Style.quize__title}>{quizeTitle}</h1>
          <form className={Style.quize__questions}>
            {questionsShuffled.map((question, index) => {
              if (index === currentQuestionIndex) {
                return (
                  <Questinon
                    key={question.id}
                    questionIndex={index}
                    question={question}
                    selectAnswerHandler={selectAnswer}
                  />
                )
              } else {
                return null
              }
            })}
          </form>
          {questionsShuffled.length && (
            <ProgressBar
              max={questionsShuffled.length - 1}
              currentProgress={currentQuestionIndex}
            />
          )}
        </section>
      ) : (
        <QuizeResult results={quizResults} tryAgainHandler={startQuiz} />
      )}
    </>
  )
}

export default Quize
