import React from 'react'
import Classes from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={Classes.errorTxt}>
      <div>We are unfortunately unable to Get Questions from quizapi.io API to start the game. 🙁</div>
      <br/>
      <div>Thus you see this message, please try again later</div>
    </div>
  )
}
