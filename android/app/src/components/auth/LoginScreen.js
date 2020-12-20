import React from 'react';
import { View, Text, Pressable } from 'react-native';


export const LoginScreen = (props) => {
    const { navigation } = props;
    const handlePressregister = () => {
        console.log('navigation: ', navigation);
        navigation.navigate('register');
    }

    return (
        <View>
            <Text>I'm screen</Text>
            <Pressable onPress={handlePressregister}>
                <Text>Registrarme</Text>
            </Pressable>
        </View>
    )
}


