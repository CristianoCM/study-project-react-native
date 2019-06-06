import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroIncial
    }

    // Construtor com bind passando o contexto da classe Contador toda vez que a função maisUm é chamada só é
    // necessário caso não esteja-se usando arrow functions, pois nesse caso, o this passa a ser o onPress do botão.
    // Já utilizando as arrow functions, a referência do this passa a ser de fato a classe Contador.

    // constructor(props) {
    //     super(props);

    //     this.maisUm = this.maisUm.bind(this);
    // }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

    limpar = () => {
        this.setState({ numero: 0 });
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 50}}>{this.state.numero}</Text>
                <TouchableHighlight
                    // Ao usar a ação de uma função não é necessário utilizar os () no final, caso seja utilizado, 
                    // entende-se que o onPress está esperando this.maisUm() retornar algo (return da função) para
                    // que possa utilizar de parâmetro.
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}