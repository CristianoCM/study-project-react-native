import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default (props) => 
    <View>
        <Text style={Padrao.ex}>{props.texto}</Text>
    </View>