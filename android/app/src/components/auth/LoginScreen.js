import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useForm } from "react-hook-form";

import { InputProxy } from '../../proxies/inputProxy';

const USERNAME = "Usuario";
const PASSWORD = "Contraseña";

export const LoginScreen = (props) => {
    const { navigation } = props;
    const { register, handleSubmit, setValue, errors } = useForm();

    const handlePressRegister = () => {
        console.log('navigation: ', navigation);
        navigation.navigate('register');
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {
        register(USERNAME, { required: true, max: 80, pattern: /\w+?@\w+?\x2E.+/ });
        register(PASSWORD, { required: true, max: 80 });
    }, [register])

    return (
        <View style={styles.containerLogin}>
            <View style={styles.containerLoginImage}>
                <Image style={styles.loginImage}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlIQYpxjTRnTvxG6xEQw1VJCCEW7V6Mbz-A&usqp=CAU' }}
                />
            </View>
            <View style={styles.loginForm}>
                <InputProxy
                    placeholder="Correo electrónico o teléfono"
                    name={USERNAME}
                    errors={errors[USERNAME]}
                    onChangeProxy={text => setValue(USERNAME, text)} />
                <InputProxy
                    placeholder="Contraseña"
                    name={PASSWORD}
                    errors={errors[PASSWORD]}
                    onChangeProxy={text => setValue(PASSWORD, text)} />
                <Button
                    style={styles.buttonLogin}
                    color='#ffffff'
                    title="Iniciar sesión"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
            <View style={styles.containerRegister}>
                <Pressable onPress={handlePressRegister}>
                    <Text style={styles.text}>Registrarme</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    containerLoginImage: {
        padding: 0,
        margin: 0,
        height: '25%'
    },
    loginImage: {
        flex: 1,
        width: null,
        height: '100%'
        // resizeMode: 'contain'
    },
    buttonLogin: {
        paddingTop: 10
    },
    loginForm: {
        paddingBottom: 0,
        height: '30%'
    },
    containerRegister: {
        height: '10%',
    },
    text: {
        textAlign: 'right',
        fontSize: 15,
        paddingTop: 10,
        paddingRight: 15,
        color: 'blue'
    }
})


