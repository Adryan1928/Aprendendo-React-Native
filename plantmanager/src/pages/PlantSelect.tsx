import React, {useEffect, useState} from 'react'

import {
    View, Text, TouchableOpacity, StyleSheet, FlatList
} from 'react-native'


import colors from '../styles/colors';

import { EnviromentButton } from '../components/EnviromentButton';

// Componentes
import { Header } from '../components/Header';

// API
import api from '../services/api';



interface EnviromentProps {
    key: string,
    title : string
}

export function PlantSelect () {
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])

    useEffect(() => {
        async function fethEnviroment() {
            const {data} = await api.get('plants_environments')
            setEnviroments([{
                key: 'all',
                title: 'Todos'
            },
            ...data
        ])
        }
        fethEnviroment()
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Header/>
                <Text style={styles.title} >Em qual ambiente</Text>
                <Text style={styles.subtitle} >você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList 
                    data={enviroments}
                    renderItem={({ item }) => 
                        <EnviromentButton
                            title= {item.title}
                        />
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle = {styles.enviromentList }
                />
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        // fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        // fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
        paddingRight: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
});