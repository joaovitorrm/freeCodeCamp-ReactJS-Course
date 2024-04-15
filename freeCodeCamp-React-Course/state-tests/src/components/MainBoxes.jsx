import React from "react";

import boxes from "../boxes";
import Caixa from "./Caixa";

export default function MainBoxes() {

    const [caixas, setCaixas] = React.useState(boxes);

    const caixasElementos = caixas.map(c => (
        <Caixa 
            on={c.on}
            key={c.id}
            id={c.id}
            handleClick={() => toggle(c.id)}
        />
    ))

    function toggle(id) {
        setCaixas(prevBoxes => prevBoxes.map(box => box.id == id ? {...box, on: !box.on} : box));        
    }

    return(
        <>
        
            <h1>Caixas</h1>

            <div className="boxes-container">

                {caixasElementos}

            </div>

        </>
    )
}