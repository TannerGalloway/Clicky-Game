import React from "react";
import "./header.css";
function Header(props)
{
    // create the header
    return(
        <header>
            <div className = "row">
                <div className = "col">
                    <a href= "/">Clicky Game</a>
                </div>

                <div className = "col">
                    <h4>{props.statment}</h4>
                </div>

                <div className = "col-3">
                    <h4>Score: {props.score} | TopScore: {props.topScore}</h4>
                </div>
            </div>
        </header>
    );
}
 export default Header;