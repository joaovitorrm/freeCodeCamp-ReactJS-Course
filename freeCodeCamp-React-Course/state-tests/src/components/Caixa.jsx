import React from "react";

export default function Caixa(props) {

    return (
        <div className={"caixa " + (props.on ? "on" : "off")} onClick={props.handleClick}>

        </div>
    )
}