import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParam from './components/basicos/ComParametro'
import Fragmaento from './components/basicos/Fragmaento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

const styleH1 = {
    textAlign: 'center', 
    marginBottom: '30px', 
}

export default () => (
    <>
        <h1 style={ styleH1 }> Fundamentos React </h1>
        
        <article className="app">
            <Card title="#006 - criando components com children/2" color="#C0ADFF">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>  

            <Card title="#005 - criando components com children/1" color="#BAA5FF">
                essa foi fácil
            </Card>   
            
            <Card title="#004 - Aula/desafio" color="#C4C6E7">
                <Aleatorio min={2} max={10} />
            </Card>
            
            <Card title="#003 - fragmento react" color="#CEB3AB">
                <Fragmaento/>
            </Card>
            
            <Card title="#002 - primeiro component" color="#B49A67">
                <ComParam
                    titulo='Oi component'
                    subtitulo='Sou um component lindão'
                    sessao={1}
                />
            </Card>
            
            <Card title="#001 - olá mundo/desafio" color="#466365">
                <Primeiro></Primeiro>
            </Card>
        </article>
    </>
)
