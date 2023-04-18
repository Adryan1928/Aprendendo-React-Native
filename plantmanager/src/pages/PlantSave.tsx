import React, { useState } from "react";
import {
    Alert, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity
} from 'react-native'

import { useRoute  } from "@react-navigation/core";
import DateTimePicker, {Event} from "@react-native-community/datetimepicker";


import { SvgFromUri } from "react-native-svg";
import colors from "../styles/colors";
import { getBottomSpace } from "react-native-iphone-x-helper";
import waterdrop from '../assets/waterdrop.png'
import { ButtonComfirmar } from "../components/buttonComfirmar";



interface Params {
    plant : {
        id: string,
        name: string,
        about: string,
        water_tips: string,
        photo: string,
        environments: [string],
        frequency: {
          times: number,
          repeat_every: string
        }
    }
}


export function PlantSave () {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [ShowDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')

    const route = useRoute()
    const { plant } = route.params as Params

    return (
        <View style={styles.container}>
            <ScrollView style={styles.plantInfo} >
                <SvgFromUri
                    uri={plant.photo}
                    width={150}
                    height={150}
                />
                <Text style={styles.plantName} >
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout} >
                    {plant.about}
                </Text>
            </ScrollView>
            <View style={styles.controller} >
                <View style={styles.tipContainer} >
                    <Image
                    source={waterdrop}
                    style={styles.tipImage}
                    />
                    <Text style={styles.tipText} >
                        {plant.water_tips}
                    </Text>
                </View>
                <Text style={styles.alertLabel} >
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                />

                <ButtonComfirmar
                    title="Cadastrar planta"
                    onPress={() => {}}
                ></ButtonComfirmar>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    scrollListContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
      },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    plantName: {
        // fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },
    plantAbout: {
        textAlign: 'center',
        // fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        // fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        // fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        // fontFamily: fonts.text
    }
});