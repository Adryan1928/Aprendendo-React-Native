import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function Button() {
    const navigation = useNavigation()

    function handleStart () {
        navigation.navigate('UserIdentification' as never)
    }

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart} >
            <Feather name='chevron-right' style={styles.buttonIcon} />
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