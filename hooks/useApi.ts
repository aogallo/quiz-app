import { useEffect, useState } from 'react'
import { getQuestions } from '../service/getQuestions'
import { QuestionType } from '../screens/QuestionScreen'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState<QuestionType[]>([])

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data)
      setIsLoading(false)
    })
  }, [])

  return {
    questions,
    isLoading,
  }
}

export default useApi
