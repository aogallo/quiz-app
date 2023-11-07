import { QuestionType } from '../screens/QuestionScreen'
import { formatString } from '../util/formatString'

export const getQuestions = async () => {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard',
    )
    const json = await response.json()
    const data = json.results.map((question: QuestionType) => {
      const incorrect_answers = question.incorrect_answers.map((answer) =>
        formatString(answer),
      )
      const correct_answer = formatString(question.correct_answer)
      const answers = [...incorrect_answers, correct_answer]

      return {
        ...question,
        question: formatString(question.question),
        correct_answer,
        all_answers: answers.sort(() => Math.random() - 0.5),
      }
    })
    return data
  } catch (error) {
    return []
  }
}
