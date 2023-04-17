import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import colors from '../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Img from '../assets/watering.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header () {
    const [userName, setUserName] = useState<string>()

    useEffect(() => {
        async function loadStoregeUserName ()  {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }

        loadStoregeUserName()
    },[] )

    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.greeting} >Olá,</Text>
                <Text style={styles.userName} >{userName}</Text>
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