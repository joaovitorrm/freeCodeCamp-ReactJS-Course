import React from "react";

export default function Card(props) {
    return (
        <div className="card">

            <div className="card-status">{props.status}</div>
            <img className="card-image" />
            <div className="card-like">
                &#11088;
                <div className="card-like-amount">{props.nota}</div>
                <div className="card-like-sold">({props.vendas})</div>
                .
                <div className="card-like-location">{props.localizacao}</div>
            </div>
            <div className="card-description">{props.descricao}</div>
            <div className="card-price">
                <div className="card-price-value">From ${props.valor}</div>
                /
                <div className="card-price-type">person</div>
            </div>

        </div>
    )
}