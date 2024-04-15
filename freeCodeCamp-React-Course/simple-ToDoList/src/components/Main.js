import React from "react";

import Tarefa from "./Tarefa";

export default function Main() {

    const [tarefas, setTarefas] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    function handleClick(e) {
        e.preventDefault();
        let novaTarefa = document.querySelector(".nome-nova-tarefa").value;

        if (novaTarefa !== "") {
            setTarefas(t => [...t, <Tarefa tarefa={novaTarefa} key={counter} id={counter} handleRemove={handleRemove}/>]);
            setCounter(counter + 1);
        }

        document.querySelector(".nome-nova-tarefa").value = "";
    }

    function handleRemove(id) {
        setTarefas(t => {
            let tarefasDiv = document.getElementById("tarefas");
            let tarefaId = Array.prototype.indexOf.call(tarefasDiv.children, document.getElementById(id));
            t.splice(tarefaId, 1);
            return [...t]
        })
    }

    return (
        <div>
            
            <form className="form-tarefa">
                <h2>Criar Tarefa</h2>
                <input type="text" placeholder="Nome da tarefa" className="nome-nova-tarefa"/>
                <input type="submit" value="ADICIONAR" onClick={handleClick}/>
            </form>
            
            <div id="tarefas">
                {tarefas}
            </div>            

        </div>
    )
}