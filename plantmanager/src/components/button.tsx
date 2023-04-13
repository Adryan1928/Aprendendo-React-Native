import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface buttonProps {
    title: string
}

export function Button({title} : buttonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonIcon}>
                    {title}
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,        
    },
    buttonIcon:{        
        fontSize: 32,
        color: colors.white
    }
})