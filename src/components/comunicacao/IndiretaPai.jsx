import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const DiretaFilho = function diretaFilho(props) {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false)

    function fornecerInfomacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }
    
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfomacoes}></IndiretaFilho>
        </div>
    )
}

export default DiretaFilho;
