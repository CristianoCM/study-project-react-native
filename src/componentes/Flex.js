import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    // O item Norte de flex 1 vai pegar 1/toda a tela partes da tela.
    // O item Centro de flex 2 vai pegar 2/toda a tela partes da tela.
    // O item Sul sem flex vai ocupar apenas o necessário para caber o círculo, deixando o resto da tela ser igual aos outros itens com flex
    // Seria como se cada item ocupasse o seguinte espaço de tela: Sul=100px  Centro=66% - 100px  Norte=33% - 100px
    norte: {
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centro: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    sul: {
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
});

const Circulo = props => {
    return <View style={styles.circulo}></View>;
}

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    );
}