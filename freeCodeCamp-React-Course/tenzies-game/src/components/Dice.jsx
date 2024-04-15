import React from "react";

export default function Dice(props) {
    return (
        <div className={ (props.toggled ? "toggled" : "") + " dice"} onClick={props.handleClick}>
            <h1 className="valor">{props.value}</h1>
        </div>
    )
}