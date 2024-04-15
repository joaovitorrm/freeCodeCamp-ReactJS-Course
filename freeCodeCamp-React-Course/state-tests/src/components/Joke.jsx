import React from "react";

export default function Joke(props) {
    return (
        <div className="joke-div">            

            {props.setup &&
            <h3>{props.setup}</h3>}

            {props.isShown &&
            <p>{props.punchline}</p>}

            <input
                type="button"
                value={props.isShown ? "Hide" : "Shown"}
                className="joke-input"
                onClick={props.toggle}
            />

            <hr/>
        </div>
    )
}