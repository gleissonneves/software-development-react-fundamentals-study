import './input.css'
import React, { useState } from "react";


const InputForm = function inputForm(props) {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }


    return (
        <div className="content-input">
            <h2>{ valor }</h2>

            <div className="flex-coll">
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined}/>
            </div>
        </div>
    );
}

export default InputForm
