import React from 'react'
import Classes from './Answer.module.css'

export default function Answer(props)
{

    if(props.showAnswers)
    return(
       <div className={props.isCorrectAnswer? Classes.correctAnswer : (props.isHeld && !props.isCorrectAnswer)? Classes.wrongAnswer : Classes.answer }>
            {props.answer}
        </div>
    )
    else 
    return(
        <div onClick={props.holdAnswer} className={props.isHeld? Classes.heldAnswer :Classes.answer}>
             {props.answer}
         </div>
     )
}

