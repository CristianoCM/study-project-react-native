import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } };

export const Filho = props =>
    <View>
        {/* Os três pontos servem para inserir todas as propriedades contidas em uma variável/props em um elemento  */}
        {/* <Modal {...this.props} title='Modal heading' animation={false}>
            Com this.props contendo a: 1 e b: 2
            Equivale a: 
            <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}> */}
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {props.children}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome="André" sobrenome={props.sobrenome}>
            <Filho nome="Ana"></Filho>
            <Filho nome="Pedro"></Filho>
            <Filho nome="Rolisney"></Filho>
        </Pai>
        <Pai {...props} nome="Moises">
            <Filho nome="Rebeca"></Filho>
            <Filho nome="Renato"></Filho>
        </Pai>
    </View>


export default Avo;