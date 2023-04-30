import React from "react";

export default function ComParametro(props) {
    const { titulo, subtitulo, sessao } = props

    return (
        <div>
            <p>{ sessao }</p>
            <h1>{ titulo }</h1>
            <h2>{ subtitulo }</h2>
        </div>
    )
}