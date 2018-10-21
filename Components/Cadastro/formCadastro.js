import React from 'react';
import { 
     StyleSheet,
     Text,
     View,
     TextInput,
     TouchableOpacity
 } from 'react-native';

export default class FormCadastro extends React.Component {
    render() {
        return(
            <View style={styles.form}>
                <Text style={styles.header}>Registro</Text>

                <TextInput style={styles.TextInput} placeholder="Seu Nome" underlineColorAndroid={'transparent'}></TextInput>

                 <TextInput style={styles.TextInput} placeholder="Seu email" underlineColorAndroid={'transparent'}></TextInput>

                  <TextInput style={styles.TextInput} placeholder="Senha" secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>

                 <TextInput style={styles.TextInput} placeholder="Endereço" underlineColorAndroid={'transparent'}></TextInput>

                  <TextInput style={styles.TextInput} placeholder="Necessidade especial" underlineColorAndroid={'transparent'}></TextInput>

                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Cadastrar</Text>
                  </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        alignSelf: 'stretch',
    },
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
    },
    btntext: {
        color: '#000000',
        fontWeight: 'bold',
        alignItems: "center",
    }
});