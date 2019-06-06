import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../estilo/Padrao';

export default class Evento extends Component {

    state = {
        texto: '',
        texto2: null
    };

    alterarTexto = texto => {
        // Como tanto a propriedade quanto o valor possuem o mesmo nome, pode-se manter escrito apenas texto
        // equivale a: this.setState({ texto: texto })
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                {/* Componente controlado, onde há atualização do estado a partir do evento onChangeText */}
                <Text style={Padrao.font50}>{ this.state.texto }</Text>
                <TextInput 
                    value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}
                >
                </TextInput>

                {/* Componente não controlado, onde não há controle de estado */}
                <TextInput
                    value={this.state.texto2}
                    style={Padrao.input}
                >
                </TextInput>
            </View>
        )
    }

}