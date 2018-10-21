import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {    
        return (
            <View>
                <TextInput style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='rgba(0,0,0,0.6)'
                    keyboarType='email-address'
                    returnKeyType='next'
                    autoCorret={false}
                    //onChange={(text) => { this.handleEmail(text) }}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                />

                <TextInput style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='rgba(0,0,0,0.6)'
                    returnKeyType='go'
                    secureTextEntry
                    autoCorret={false}
                    //onChange={(text) => { this.handlePassword(text) }}
                    ref={"txtPassword"}
    
                />
           
               
 
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        alignSelf: 'stretch',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: '#000000',
        marginBottom: 20,
        paddingHorizontal: 10,
        marginLeft: 25,
        marginRight: 25,

    },
   
 
});
