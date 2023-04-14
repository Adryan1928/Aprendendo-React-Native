import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';




import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confimation } from '../pages/Confirmation';


const StackRoutes = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <StackRoutes.Navigator
            screenOptions = {{
                contentStyle: {
                        backgroundColor: colors.white,
                    },

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
                name='Confimation'
                component={Confimation}
            />

        </StackRoutes.Navigator>
    )
}

export default AppRoutes;