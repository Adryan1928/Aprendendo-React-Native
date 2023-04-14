import React from 'react';
import { 
    View, SafeAreaView, StyleSheet, Text
} from 'react-native';

import colors from '../styles/colors';

// Componentes
import { ButtonComfirmar } from '../components/buttonComfirmar';

export function Confimation () {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content} >
                <Text style={styles.emoji}>
                😄
                </Text>

                <Text style={styles.title} >
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado
                </Text>

                <View style={styles.footer} >
                    <ButtonComfirmar/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,
    },
    emoji: {
        fontSize: 78,        
    },
    footer: {
        width: '100%',        
        paddingHorizontal: 50,
        marginTop: 20
    }
})