import React from "react";
import "./jumbotron.css";

function jumbotron()
{
    // create the jumbotron
    return(
       <div className = "jumbotron jumbotron-fluid">
       <h1 className="display-4 text-center">Clicky Game</h1>
       <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
       </div>
    );
}

export default jumbotron;