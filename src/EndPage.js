import React from "react";
import App from "./App.js";
import Classes from './Endpage.module.css'
import {Link} from 'react-router-dom'



export default  function EndPage() {
    return (
        <div className={Classes.endGame}>
            <div >  Hope you enjoyed the quiz 🎊</div>
            <br/>
            <div >  Not Enough ?</div>
            <Link to="/"  style={{ textDecoration: 'none' }}>
                <div className={Classes.returnDashboard} > Play again </div>
            </Link>
        </div>
    )

}

//