import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';

const Stack = createStackNavigator();

export const LoginStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}


