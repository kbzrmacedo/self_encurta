import React from 'react';
import { 
     StyleSheet,
     Text,
     View
 } from 'react-native';

 import Form from './formCadastro';

export default class Cadastro extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Form/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 245, 196)',
        paddingLeft: 60,
        paddingRight: 60,
    },
});