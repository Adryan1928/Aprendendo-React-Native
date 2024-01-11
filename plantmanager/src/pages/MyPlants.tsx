import React, { useEffect, useState } from "react";
import {
    StyleSheet, View, Text, Image, FlatList, Alert
} from 'react-native'
import colors from "../styles/colors";

import WaterDrop from '../assets/waterdrop.png'

// Componentes
import { Header } from "../components/Header";
import { PlantProps, loadPlant, removePlant } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { Load } from "../components/Load";
import { PlantCardSecondary } from "../components/PlantCardSecondary";

export function MyPlants () {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);    
    const [nextWaterd, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`,[
            {
                text: 'Não 🙏🏼',
                style: 'cancel'
            },
            {
                text: 'Sim 🥲',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);
                        setMyPlants((oldData) => 
                            oldData.filter((item) => item.id !== plant.id)
                        );                        
                    } catch (error) {
                        Alert.alert('Não foi possível remover! 🥲');
                    }
                }
            }
        ])
        
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            ) 
            
            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    },[])


    if(loading)
        return <Load />

    return (
        <View style={styles.container} >
            <Header/>

            <View style={styles.spotlight} >
                <Image style={styles.spotlightImage} source={WaterDrop} />

                <Text style={styles.spotlightText} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam, soluta, impedit blanditiis cum facere nihil libero tenetur molestias alias distinctio excepturi harum error fugiat nobis beatae exercitationem quasi dolorum!</Text>
            </View>

            <View style={styles.plants} >
                <Text style={styles.plantsTitle} >
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                       <PlantCardSecondary 
                            data={item} 
                            handleRemove={() => {handleRemove(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        // fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
});