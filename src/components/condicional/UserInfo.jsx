import React from "react";

import If, { Else, ElseIf } from './If'

export default props => {
    const { nome } = props.usuario || { nome: false };

    return (
        <div>
            <If test={nome}>
                Seja bem vindo {nome}

                <Else>
                    Oi pessoa
                </Else>
            </If>
        </div>
    )
}