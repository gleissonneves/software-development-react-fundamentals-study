import React from "react"

export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor mínimo</h2>
            <p>Max: { max } e min: { min } </p>
            <p>Aleatório: { aleatorio }</p>
        </div>
    )
}