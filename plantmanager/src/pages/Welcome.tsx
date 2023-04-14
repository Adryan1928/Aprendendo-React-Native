import React from "react";
import { 
    Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions 
} from "react-native";

import fonts from "../styles/fonts";

import wateringImg from '../assets/watering.png';
import colors from "../styles/colors";

// Componentes >>
import { Button } from "../components/button";

export function Welcome() {
    return (
        <SafeAreaView style= {styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de{'\n'}
                forma fácil
                </Text>
                <Image source={ wateringImg } style={styles.image} resizeMode="contain" ></Image>
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <Button/>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 35
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28 ,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },    
    image: {       
        height: Dimensions.get('window').width * 0.7
    },
    
})