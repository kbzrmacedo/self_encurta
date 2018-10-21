import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { Container, Button } from 'native-base'

import FormLogin from './formLogin';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { goBack, navigate } = this.props.navigation;

        const nextPage = () => {
            ~
                navigate('Car');
        }

        const cadastrar = () => {
            ~
                navigate('Cadastro');
        }

        return (
            <Container>
                <Image
                    source={require('../../images/background.jpg')}
                    style={styles.container} />


                <View style={styles.overlayContainer}>
                    <FormLogin />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText} onPress={nextPage}>Entrar</Text>
                    </TouchableOpacity>

                  
                        <TouchableOpacity>
                            <Text style={styles.buttonCadastro} onPress={cadastrar}>Cadastre-se</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.buttonTermos}>Termos e condições</Text>
                        </TouchableOpacity>
            
                    
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width: 380,
        height: 350,

    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, 0)',
        marginTop: 25,

    },
    buttonCadastro: {
        marginLeft: 40,
        marginTop: 20
    },
    buttonTermos: {
        textAlign: 'right',
        marginRight: 35
    },
    buttonContainer: {
        backgroundColor: 'rgb(0, 245, 196)',
        paddingVertical: 15,
        marginLeft: 25,
        marginRight: 25,
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
        fontSize: 18

    },
});