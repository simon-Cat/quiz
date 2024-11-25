export const shuffleArray = (array) => {
  const arrayCopy = [...array]
  const shuffledArray = []

  for (let i = arrayCopy.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length)
    const randomArrayElement = arrayCopy.splice(randomIndex, 1)[0]

    const answersCopy = [...randomArrayElement["answers"]]
    const shuffledAnswers = []

    for (let j = answersCopy.length; j > 0; j--) {
      const randomAnswerIndex = Math.floor(Math.random() * answersCopy.length)
      const randomAnswerElement = answersCopy.splice(randomAnswerIndex, 1)[0]

      shuffledAnswers.push(randomAnswerElement)
    }

    randomArrayElement["answers"] = shuffledAnswers

    shuffledArray.push(randomArrayElement)
  }

  return shuffledArray
}
