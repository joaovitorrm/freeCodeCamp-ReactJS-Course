import React from "react"

import Card from "./components/Card"
import Nav from "./components/Nav"

export default function App() {

    return (
        <>
            <Nav />
            <div className="cards">
                <Card status="sold out" nota="5.0" vendas="6" localizacao="USA" descricao="Passeio aquatico" valor="136" />
                <Card status="disponivel" nota="4.0" vendas="46" localizacao="USA" descricao="Corrida olimpica" valor="136"/>
                <Card status="sold out" nota="4.5" vendas="85" localizacao="USA" descricao="Tirolesa" valor="136"/>
                <Card status="sold out" nota="4.8" vendas="60" localizacao="USA" descricao="Assistir filmes" valor="136"/>
            </div>
        </>
    )
}