import React from 'react';
import { 
    TouchableOpacity, Text, StyleSheet
} from 'react-native';
import colors from '../styles/colors';

export function ButtonComfirmar () {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text : {
        fontSize: 16,
        color: colors.white,

    }
})