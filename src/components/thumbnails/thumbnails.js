import React from "react";
import "./images.css";

function thumbnail(props)
{
    // create the layout fo the clickable images
    return(
        <div className = "click-image">
            <img src={props.image} alt={props.name} className="img-thumbnail" onClick={() => props.clickedImage(props.id)}></img>
        </div>
        
    );
}

export default thumbnail;