import React from 'react'
import Answer from './Answer.js'
import Classes from './Answers.module.css'


export default function Answers(props) {

    function holdAnswer(id) {
        props.setChoosedAnwer(prevAnswers => {
            return prevAnswers.map(answer => {
                return (answer.id === id) ? { ...answer, isHeld: !answer.isHeld } : answer
            })
        })
    }
    const listOfAnswers = props.listAnswers.map(answerElement => {
        return <Answer key={answerElement.id} id={answerElement.id}
            answer={answerElement.answer}
            isHeld={answerElement.isHeld}
            isCorrectAnswer={answerElement.correctAnswer}
            holdAnswer={() => holdAnswer(answerElement.id)}
            showAnswers={props.showAnswers}

        />

    })

    return (
        <ol className={Classes.answersList}>

            {listOfAnswers}
        </ol>
    )

}