import './App.css';
import React from 'react';
import Dashboard from './Dashboard.js';
import QuestionPage from './QuestionsPage.js'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  const [allQuestions, setallQuestions] = React.useState()

  
  async function fetchQuestions() {
    let filtredData = [];
    const res = await fetch("https://quizapi.io/api/v1/questions?limit=10", {
      headers: {
        "X-Api-Key": process.env.REACT_APP_API_TOKEN
      }
    })
    const data = await res.json()

     data.forEach((el) => filtredData.push({
      question: el.question,
      answers: el.answers,
      correctAnswers: el.correct_answers
    }))
    return filtredData
  }

  async function waitUntilSetallQuestions() {
    setallQuestions(await fetchQuestions())
  }
  
  
  React.useEffect(() => {
    waitUntilSetallQuestions()
    
  }, [])
  
  return (
    <div className="App">
      <div className="main">
        <div className="green-shadow"> </div>
        <div className="blue-shadow-box">
          <div className="blue-shadow"> </div>
        </div>
        <Routes>
            <Route exact path="/" element={ <Dashboard/>} />
            <Route exact path="/startQuizz" element={ <QuestionPage allQR={allQuestions}/>} />
          </Routes>

      </div>
    </div>
  );
}

