import React from "react";

import JokesData from "../jokesData";

import Joke from "./Joke";

export default function MainJokes() {

    const [jokes, setJokes] = React.useState(JokesData.map(joke => {return {...joke, isShown: false}}));

    function toggle(id) {
        setJokes(prevJokes => prevJokes.map(joke =>
                joke.id === id ? {...joke, isShown: !joke.isShown} : joke
        ))
    }

    const jokesElements = jokes.map(j => (
        <Joke 
            key = {j.id}
            id = {j.id}
            setup = {j.setup}
            punchline = {j.punchline}
            isShown = {j.isShown}
            toggle = {() => toggle(j.id)}
        />
    ))

    return (
        <div className="jokes-container">

            {jokesElements}

        </div>
    )
}