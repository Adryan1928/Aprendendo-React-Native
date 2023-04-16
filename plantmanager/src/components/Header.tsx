import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import colors from '../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Img from '../assets/watering.png'

export function Header () {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.greeting} >Olá,</Text>
                <Text style={styles.userName} >Adryan</Text>
            </View>
            <Image style={styles.image} source={Img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,  
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        // fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        // fontFamily: fonts.heading,
        fontWeight: 'bold',
        color: colors.heading,
        lineHeight: 40
    }
});