import React from "react";

export default function Tarefa(props) {

    return (
        <div className="tarefa" id={props.id}>
            <input type="checkbox"/>
            <p>{props.tarefa}</p>
            <input type="button" value="X" className="remover-tarefa" onClick={() => props.handleRemove(props.id)}/>
        </div>
    )
}