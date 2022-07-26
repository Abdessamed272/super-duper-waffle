import React from "react";
import App from "./App.js";
import Classes from './Endpage.module.css'
import {Link} from 'react-router-dom'



export default  function EndPage() {
    return (
        <div className={Classes.endGame}>
            <div > You reached the 10th questions! 🎊 </div>
            <br/>
            <div >  Hope you enjoyed the quiz..</div>
            <div >  Not Enough ?</div>
            <Link to="/"  style={{ textDecoration: 'none' }}>
                <div className={Classes.returnDashboard} > Play again </div>
            </Link>
        </div>
    )

}

//