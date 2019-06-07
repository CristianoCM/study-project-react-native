import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome="Gilberto" sobrenome="Machado"></Avo>,
        navigationOptions: { title: 'Comunicação Direta' }
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19}></ValidarProps>,
        navigationOptions: { title: 'Validador de Props' }
    },
    Plataformas: Plataformas,
    Contador: {
        screen: () => <Contador numeroIncial={100}></Contador>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo"></Inverter>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}></ParImpar>,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexível!"></Simples>
    }
}, { drawerWidth: 300 });