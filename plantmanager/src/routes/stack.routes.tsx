import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';


import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confimation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';


const StackRoutes = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <StackRoutes.Navigator
            screenOptions = {{
                contentStyle: {
                        backgroundColor: colors.white,
                    },
                headerShown: false,

                // cardStyle
            }}
        >
            <StackRoutes.Screen 
                name='Welcome'
                component={Welcome}
            />

            <StackRoutes.Screen 
                name='UserIdentification'
                component={UserIdentification}
            />

            <StackRoutes.Screen 
                name='Confirmation'
                component={Confimation}
            />

            <StackRoutes.Screen 
                name='PlantSelect'
                component={PlantSelect}
            />

            {/* <StackRoutes.Screen
                name='PlantSave'
                component={PlantSave}
            /> */}

            <StackRoutes.Screen
                name='MyPlants'
                component={MyPlants}
            />

        </StackRoutes.Navigator>
    )
}

export default AppRoutes;