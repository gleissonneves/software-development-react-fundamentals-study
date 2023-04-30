import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParam from './components/basicos/ComParametro'
import Fragmaento from './components/basicos/Fragmaento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'
import ProdutoList from './components/repeticao/TabelaProduto'

import ParOuImpar from './components/condicional/ParOuImpar'
import UserInfo from './components/condicional/UserInfo'

import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

import InputForm from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

const styleH1 = {
    textAlign: 'center', 
    marginTop: '30px', 
    marginBottom: '30px', 
}

const usuario = { nome: 'Gleisson' };

// https://colorhunt.co/
export default () => (
    <>
        <h1 style={ styleH1 }> Fundamentos React </h1>
        
        <article className="app">
            <Card title="#014 - desafio | Mega sena" color="#B33030">
                <Mega/>
            </Card>

            <Card title="#013 - desafio | Contador" color="#B33030">
                <Contador/>
            </Card>

            <Card title="#012 - formulario input" color="#42C2FF">
                <InputForm/>
            </Card>

            <Card title="#011 - Comunicaçao 02 indireta" color="#B8FFF9">
                <IndiretaPai/>
            </Card>

            <Card title="#010 - Comunicaçao 01 direta" color="#495371">
                <DiretaPai/>
            </Card>

            <Card title="#009 - Tabela de produtos" color="#395B64">
                <ParOuImpar num={3}/>
                <ParOuImpar num={2}/>
                
                <UserInfo usuario={usuario}/>
                <UserInfo/>
            </Card>

            <Card title="#008 - Tabela de produtos" color="#B33030">
                <ProdutoList/>
            </Card>

            <Card title="#007 - Lista de repetição" color="#B33030">
                <ListaAlunos/>
            </Card>

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
            
            <Card title="#004 - Aula/desafio" color="#B33030">
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
