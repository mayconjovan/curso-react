import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        //this.alterarNumero(1)
        //this.state.numero++
        //console.log(this)
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
        //this.alterarNumero(-1)
        //this.state.numero++
        //console.log(this)
    }
    alterarNumero = (diferenca) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
        //this.state.numero++
        //console.log(this)
    }
    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    inc 10
                    </button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec 10
                </button>
            </div>
        )
    }


    /* 
    SOLUÇÃO 1
    funcao bind
    constructor(props) {
        super(props)
        this.maisUm = this.maisUm.bind(this)
    }
    solução 2 funcao arrow no on click
    <button onClick={() => this.maisUm()}>Inc</button>
    

    solução 3
    função arrow
     maisUm = () => {
        //this.props.numero++
        console.log(this)
    }
    */
}