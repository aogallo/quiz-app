import { useEffect, useState } from 'react'
import { getQuestions } from '../service/getQuestions'
import { QuestionType } from '../screens/QuestionScreen'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [questions, setQuestions] = useState<QuestionType[]>([])

  useEffect(() => {
    getQuestions()
      .then((data) => {
        setQuestions(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error)
      })
  }, [])

  return {
    questions,
    isLoading,
    error,
  }
}

export default useApi
