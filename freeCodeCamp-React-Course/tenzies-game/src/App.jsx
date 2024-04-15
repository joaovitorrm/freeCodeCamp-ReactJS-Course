import React from "react";

import Main from "./components/Main"
import Dice from "./components/Dice"

export default function App() {

    const [dices, setDices] = React.useState(createRandomDices());
    const [gameReset, setGameReset] = React.useState(false);

    React.useEffect(() => {
        let value = dices[0].value;
        let allSameNumber = dices.every(dice => dice.value == value);
        let allToggled = dices.every(dice => dice.toggled == true);
        if (allSameNumber && allToggled) {
            setGameReset(true);
        }
    }, dices)

    function createRandomDices() {
        const randomDices = []
        for (let i = 0; i < 10; i++) {
            randomDices.push({
                value: createRandomValue(),
                toggled: false,
                id: i
            })
        }
        return randomDices
    }

    function createRandomValue() {
        return Math.ceil(Math.random() * 6);
    }

    function toggleDice(id) {
        setDices(prevDices => prevDices.map(dice => dice.id == id ? {...dice, toggled: !dice.toggled} : dice));
    }

    function rolarDados() {
        if (!gameReset) {
            setDices(prevDices => prevDices.map(dice => dice.toggled == true ? dice : {...dice, value: createRandomValue()}));
        } else {
            setDices(createRandomDices());
            setGameReset(false)
        }
        
    }

    const dicesElements = dices.map((dice, id) => 
        <Dice 
            value={dice.value}
            toggled={dice.toggled}
            handleClick={() => toggleDice(dice.id)}
            id={dice.id}
            key={dice.id}
        />
    )

    return (
        <div className="main-container">
            <Main />
            <div className="dices-container">
                {dicesElements}
            </div>
            <input type="button" value={gameReset ? "Recomeçar" : "Rolar"} className="rolar-input" onClick={rolarDados}/>
        </div>
    )
}