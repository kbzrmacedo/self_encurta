import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Car extends Component {
    render() {
        const { navigate } = this.props.navigation;

        const nextPage = () => {
            ~
                navigate('detalhes');
        }
        return (
            <Container style={styles.container}>
                <Content>
                    <Item>
                        <Input placeholder='Buscar' style={styles.item}  />
                    </Item>
                    <Card>
                        <CardItem style={styles.containerCard}>
                            <Body>
                                <Image source={require('../../images/anuncio.jpg')} style={styles.anuncio} />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left><Text>TOP 10 PCD</Text></Left>
                        </CardItem>
                        <CardItem cardBody style={styles.card}>

                            <Icon active name="arrow-left" />
                            <Image source={require('../../images/fiat_uno.png')} style={styles.imageCard} />

                            <Body>
                                <Text style={styles.text}>UNO</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-right" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left><Text>Principais ofertas na sua cidade</Text></Left>
                        </CardItem>
                        <CardItem cardBody style={styles.cardOfertas}>

                            <Image source={require('../../images/celta.png')} style={styles.card2} />
                            <Body>
                                <Text>Celta</Text>
                                <Text>R$75,00 (Diária)</Text>
                            </Body>
                            <Right>
                                <Image source={require('../../images/localiza.jpg')} style={styles.imageLogo} />
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody style={styles.cardOfertas}>

                            <Image source={require('../../images/fiat_uno.png')} style={styles.card2} />
                            <Body>
                                <Text>Uno</Text>
                                <Text>R$60,00 (Diária)</Text>
                            </Body>
                            <Right>
                                <Image source={require('../../images/movida.jpg')} style={styles.imageLogo} />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body style={{ marginLeft: 150 }}>
                                <Icon active name="arrow-down" />
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(0, 245, 196)'
    },
    containerCard: {
        backgroundColor: '#ffffff',
    },
    anuncio: {
        width: 320,
        height: 40,
        flex: 1
    },
    card: {
        height: 125
    },
    imageCard: {
        height: 100,
        width: 300,
        flex: 3,
        marginLeft: 20,
    },
    text: {
        marginTop: 30,
        marginLeft: 20
    },
    card2: {
        width: 100,
        height: 50
    },
    imageLogo: {
        height: 70,
        width: 120,
        marginRight: 10,
        marginTop: 15
    },
    cardOfertas: {
        flex: 1,

    },
    item: {
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: '#FFFFFF'

    }

})