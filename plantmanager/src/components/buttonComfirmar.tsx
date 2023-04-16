import React from 'react';
import { 
    TouchableOpacity, Text, StyleSheet, TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';


interface buttonProps extends  TouchableOpacityProps {
    title : string
}

export function ButtonComfirmar ( {title, ...rest} : buttonProps ) {
    return (
        <TouchableOpacity style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
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