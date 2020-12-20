import React, { useState } from "react";
import { Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';


export const InputProxy = ({ placeholder, name, errors, onChangeProxy }) => {
    const handleKeyUp = (name, text) => onChangeProxy(text);

    return (
        <>
            <Input 
                style={errors ? styles.inputSpace : undefined}
                placeholder={placeholder} 
                onChangeText={text => handleKeyUp(name, text)} 
            />
            <Text style={styles.textErrorColor}>
                {errors && errors.type == "required" && "El campo es requerido"}
                {errors && errors.type == "max" && "Máximo 120 caracteres"}
                {errors && errors.type == "min" && "Minimo 2 caracteres"}
                {/* {errors && errors.type == "pattern" && "No coincide el patron"} */}
                {errors && errors.type == "pattern" && errors.ref.name == "email" && "Debe ser un correo electrónico"}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    textErrorColor: {
        color: "red",
        marginTop: 0,
        paddingTop: 0
    },
    inputSpace: {
        marginBottom: 0,
        paddingBottom: 0,
        // paddingTop: 0,
        // marginTop: 0
    }
})