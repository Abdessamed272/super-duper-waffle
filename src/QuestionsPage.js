import React from 'react'
import Answers from './Answers'
import Classes from './QuestionPage.module.css'
import { nanoid } from "nanoid"
import EndPage from './EndPage.js'


export default function QuestionPage(props) {
    const questionsandAnswers = props.allQR

    const [showAnswers, setShowAnswers] = React.useState(false)
    const [indexQuestion, setIndexQuestion] = React.useState(0)
    const [answers, setAnswers] = React.useState(getAnswerObject(indexQuestion))
    const [question, setQuestion] = React.useState(getQuestion(indexQuestion))


    function getAnswerObject(indexQuestion) {
        if (indexQuestion != questionsandAnswers.length) {
            const listanswers = questionsandAnswers[indexQuestion].answers
            const listcorrectAnswers = questionsandAnswers[indexQuestion].correctAnswers

            const answersArray = []
            Object.entries(listanswers).map((item, index) => {
                if (item[1] != null) {
                    answersArray.push(
                        {
                            id: nanoid(),
                            answer: item[1],
                            correctAnswer: listcorrectAnswers[Object.keys(listcorrectAnswers)[index]] === "true",
                            isHeld: false
                        })
                }

            })
            return answersArray
        } else
            return []
    }

    function getQuestion(indexQuestion) {
        if (indexQuestion != questionsandAnswers.length)
            return questionsandAnswers[indexQuestion].question
        else
            return ""
    }

    React.useEffect(() => {

        setAnswers(() => {
            return getAnswerObject(indexQuestion)

        })

        setQuestion(() => {
            return getQuestion(indexQuestion)

        })


    }, [indexQuestion])

    if (indexQuestion < questionsandAnswers.length) {
        return (
            <div className= {Classes.questionPageMain}>

                <div className={Classes.question}> {question}</div>
                    <Answers listAnswers={answers} setChoosedAnwer={setAnswers} showAnswers={showAnswers} />
                

                {!showAnswers && <div className={Classes.checkAnswers} onClick={() => setShowAnswers(true)}>Check answers</div>}
                {showAnswers && <div className={Classes.checkAnswers} onClick={() => {
                    setShowAnswers(false)
                    setIndexQuestion((prevquestion) => prevquestion + 1)
                }}> Next question</div>}

            </div>
        )
    } else {
        return (
            <EndPage />
        )

    }
}