import React from 'react';

export default (props) => { 
    const { nome, sobrenome } = props;
    
    return (
        <p>{ nome } { sobrenome }</p>
    )
}