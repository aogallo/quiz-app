import { QuestionType } from '../screens/QuestionScreen'

export const getQuestions = async () => {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard',
    )
    const json = await response.json()
    const data = json.results.map((question: QuestionType) => {
      const answers = [...question.incorrect_answers, question.correct_answer]

      return {
        ...question,
        question: question.question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'"),
        all_answers: answers.sort(() => Math.random() - 0.5),
      }
    })
    return data
  } catch (error) {
    return []
  }
}
