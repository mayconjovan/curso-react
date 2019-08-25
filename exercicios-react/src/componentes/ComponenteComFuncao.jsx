import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']
let num = Math.random()
export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
}
