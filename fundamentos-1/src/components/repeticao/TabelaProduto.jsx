import React from 'react';

import { produtosList } from '../../base/produtos'

export default () => {
    const trProduto = produtosList.map((item, i) => {
        return (
            <tr key={`tr_${i}`}>
                <td>{ item.produto }</td>
                <td>{ item.preco }</td>
            </tr>
        )
    });

    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                { trProduto }
            </tbody>
        </table>
    )
}