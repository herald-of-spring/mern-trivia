import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Auth from '../utils/Auth'
import { UPDATE_USER } from '../utils/mutations'
import { GET_ME } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/client'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}
function Question() {
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const { loading, data } = useQuery(GET_ME);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [options, setOptions] = useState([])
  const score = useSelector((state) => state.score)
  const encodedQuestions = useSelector((state) => state.questions)
  
  useEffect(() => {
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      }
    })
    setQuestions(decodedQuestions)
  }, [encodedQuestions])
  const questionIndex = useSelector((state) => state.index);
  const dispatch = useDispatch()
  const question = questions[questionIndex]
  const answer = question && question.correct_answer
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const handleFinish = async() => {
    let userData = data?.me || {};
    console.log(userData.questionsAnswered);
    const username = userData.username
    const newScore = userData.questionsCorrect + score;
    const newTotal = userData.questionsAnswered + 10;
    console.log(newTotal);
    console.log(newScore);
    console.log(username);
    const { updatedData } = await updateUser({
      variables: {username: username , questionsAnswered: newTotal, questionsCorrect: newScore },
    });
    console.log(updatedData);
    navigate('/final');
  }

  useEffect(() => {
    if (questionIndex >= 10) {
      console.log(questionIndex);
      handleFinish();
    }
    if (!question) {
      return;
    }
    let answers = [...question.incorrect_answers]
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)
    setOptions(answers)
  }, [question])
  const handleListItemClick = (event) => {

    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)
    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }
    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)
        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 2500)
    }
  }

  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }
    if (option === answer) {
      return `correct disabled`;
    }
    if (option === selectedAnswer) {
      return `selected disabled`;
    } else {
      return `disabled`;
    }
  }
  if (!question) {
    return <div>Loading</div>
  }
  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleListItemClick} className={getClass(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  )
}

export default Question