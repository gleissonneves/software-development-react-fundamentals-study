import React from 'react'

const DiretaFilho = function diretaFilho(props) {
    const { name, idade } = props
    
    return (
        <div>
            <p> { name } - { idade } </p>
        </div>
    )
}

export default DiretaFilho;
