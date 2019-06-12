import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Cristiano', nota: 9.1 },
    { id: 3, nome: 'Ana', nota: 8.5 },
    { id: 4, nome: 'Maria', nota: 5.4 },
    { id: 5, nome: 'Marlene', nota: 9.7 },
    { id: 6, nome: 'Carlos', nota: 8.8 },
    { id: 7, nome: 'Eduardo', nota: 7.6 },
    { id: 8, nome: 'Minato', nota: 6.2 },
    { id: 9, nome: 'Elsa', nota: 10.0 },
    { id: 10, nome: 'Natália', nota: 4.3 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Cristiano', nota: 9.1 },
    { id: 13, nome: 'Ana', nota: 8.5 },
    { id: 14, nome: 'Maria', nota: 5.4 },
    { id: 15, nome: 'Marlene', nota: 9.7 },
    { id: 16, nome: 'Carlos', nota: 8.8 },
    { id: 17, nome: 'Eduardo', nota: 7.6 },
    { id: 18, nome: 'Minato', nota: 6.2 },
    { id: 19, nome: 'Elsa', nota: 10.0 },
    { id: 20, nome: 'Natália', nota: 4.3 },
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    // alignItems alinha de acordo com a cross-axis, o alinhamento secundário
    alignItems: 'center',
    // justifyContent alinha de acordo com a main-axis, o alinhamento principal
    justifyContent: 'space-between',
    // O main axis é definido através do flexDirection, quando row, passa a ser a linha, e assim por diante. Consequentemente, o cross-axis passaria a ser o que sobrou (coluna, no ex atrás).
    flexDirection: 'row',
};

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    // Destructuring pegando as propriedades dentro de um elemento
    const renderItems = ({ item }) => {
        return <Aluno {...item}></Aluno>;
    }

    return (
        <ScrollView>
            {/* O parâmetro keyExtractor cria um ID único, em string, para cada elemento */}
            <FlatList data={alunos} renderItem={renderItems} keyExtractor={(_, index) => index.toString()}></FlatList>
        </ScrollView>
    );
}