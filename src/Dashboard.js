import React from 'react';
import Classes from './Dashboard.module.css'
import {Link} from 'react-router-dom'

export default function Dashboard(props)
{

    return(
        <div className={Classes.DashContainer}>
            <div className={Classes.title}>Quizzacal</div>
            <div className={Classes.description}> Technical quizzes about a wide variety of topics like: #Linux #DevOps #Programming Languages
            #Cloud #Docker #Kubernetes </div>
            <Link to="/startQuizz"  style={{ textDecoration: 'none' }}> 
                <div className={Classes.startquiz} >Start</div>
            </Link>
        </div>

    )
}


