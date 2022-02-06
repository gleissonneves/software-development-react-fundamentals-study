import React from "react";
import { aluno } from '../../base/nota'

export default () => {
    const list = aluno.map((item, i) => {
        return <li key={i}> {item.nome} - {item.materia} | Nota:{item.nota}</li>
    })

    return (
        <ul>
            { list }
        </ul>
    );
}