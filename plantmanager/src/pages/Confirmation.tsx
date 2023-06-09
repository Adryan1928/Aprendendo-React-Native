import React from 'react';
import { 
    View, SafeAreaView, StyleSheet, Text
} from 'react-native';

import colors from '../styles/colors';

interface Params {
    title : string,
    subTitle : string,
    buttonTitle : string,
    icon : 'smile' | 'hug',
    nextScreen : string
}

const emojis = {
    hug : '🤗',
    smile : '😄'
}

// Componentes
import { ButtonComfirmar } from '../components/buttonComfirmar';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Confimation () {
    const navigation = useNavigation()
    const routes = useRoute()

    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params

    function handleMoveOn () {
        navigation.navigate(nextScreen as never)
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content} >
                <Text style={styles.emoji}>
                {emojis[icon]}
                </Text>

                <Text style={styles.title} >
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subTitle}
                </Text>

                <View style={styles.footer} >
                    <ButtonComfirmar
                        title={buttonTitle}
                        onPress={handleMoveOn}
                    />
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