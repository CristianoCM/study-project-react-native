import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';
import If from './If';

function parOuImpar(n) {
    const r = n % 2 == 0 ? 'Par' : 'Ímpar';
    return <Text style={Padrao.ex}>{r}</Text>
}

export default (props) =>
    <View>
        <Text style={Padrao.numero}>{props.numero}</Text>
        { parOuImpar(props.numero) }
        {/* <If condition={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If condition={props.numero % 2 != 0}>
            <Text style={Padrao.ex}>Ímpar</Text>
        </If> */}
    </View>