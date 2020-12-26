import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-elements';
// import MultiSelect from 'react-native-multiple-select';
// import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';

import { InputProxy } from "../../proxies/inputProxy";



const items = [{
    id: 'cc',
    name: 'Cedula'
},
{
    id: 'pa',
    name: 'Pasaporte'
},
{
    id: '16hbajsabsd',
    name: 'Calabar'
}];

const FirstName = "firstName";
const LastName = "lastName";
const Email = "email";
const IdType = "idType";
const ID = "id";

let renderCount = 0;

export const RegisterScreen = () => {

    const { register, handleSubmit, setValue, errors } = useForm();

    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        register(FirstName, { required: true, max: 80, });
        register(LastName, { required: true, max: 80 });
        register(Email, { required: true, max: 120, pattern: /\w+?@\w+?\x2E.+/ });
        register(IdType, { required: true, max: 80 });
        register(ID, { required: true, max: 80 });
    }, [register])

    renderCount++
    console.log('renderCount: ', renderCount);

    function handleChangeDocumentType(selected) {
        setSelectedItem(selected)
        setValue(IdType, selected)
    }

    function onSubmit(data) {
        console.log('data: ', data);
    }

    return (
        <View>
            <Card>
                <Card.Title> Registro </Card.Title>
                <Card.Divider />
                <InputProxy
                    placeholder="Nombre"
                    name={FirstName}
                    errors={errors[FirstName]}
                    onChangeProxy={text => setValue(FirstName, text)}
                />
                <InputProxy
                    placeholder="Apellido"
                    name={LastName}
                    errors={errors[LastName]}
                    onChangeProxy={text => setValue(LastName, text)}
                />
                <InputProxy
                    placeholder="Correo eletrónico"
                    name={Email}
                    errors={errors[Email]}
                    onChangeProxy={text => setValue(Email, text)}
                />
                <Picker
                    selectedValue={selectedItem}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={handleChangeDocumentType}
                >
                    <Picker.Item label="Tipo de documento" value={null} />
                    {items.map(item =>
                        <Picker.Item key={item.id} label={item.name} value={item.id} />
                    )}
                </Picker>
                <InputProxy
                    placeholder="Numero de Documento"
                    name={ID}
                    errors={errors[ID]}
                    onChangeProxy={text => setValue(ID, text)}
                />
                <Button
                    color='#ffffff'
                    title="Guardar"
                    onPress={handleSubmit(onSubmit)}
                />
            </Card>
            {/* <MultiSelect
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={handleChangeDocumentType}
                    selectedItems={selectedItem}
                    hideSubmitButton={true}
                    searchInputPlaceholderText="Tipo de documento"
                    selectText="Tipo de documento"
                /> */}
        </View>
    )
}