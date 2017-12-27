//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Card from '../components/timeline-card'
import { Avatar } from "../components/avatar";
import { Container, Content, Grid, Row, Col, Icon, H2, H3, H1 } from "native-base";
import { RkStyleSheet } from "react-native-ui-kitten";
import MaleAvatar from '../assets/male.png';
import FemaleAvatar from '../assets/female.jpg';
import Cover from "../assets/cover.jpg";
import { LinearGradient } from "expo";

// create a component
class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={Cover} style={styles.header} >
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={styles.linearGradient}>
                            <Grid>
                                <Row size={60}>

                                </Row>
                                <Row size={40}>
                                    <Col size={41} style={styles.avatar}>
                                        <Avatar img={MaleAvatar} rkType='big' />
                                        <Text style={styles.name}>Anthony</Text>
                                    </Col>

                                    <Col style={styles.centered} size={20}>
                                        <Icon style={styles.heart} name='heart' />
                                        <Text style={styles.dayCounter}>789</Text>
                                    </Col>

                                    <Col size={41} style={styles.avatar}>
                                        <Avatar img={FemaleAvatar} rkType='big' />
                                        <Text style={styles.name}>Monica</Text>
                                    </Col>
                                </Row>
                                <Row size={10} style={styles.centered}>
                                    <H1 style={styles.description}>..loving since 2015</H1>
                                </Row>
                            </Grid>
                        </LinearGradient>
                    </ImageBackground>
                    <Card />
                    <Card />
                    <Card />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = RkStyleSheet.create(theme => ({
    header: {
        paddingTop: 25,
        paddingBottom: 17,
        height: 500,
    },
    avatar: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heart: {
        color: '#f04a4b',
        fontSize: 80
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontFamily: "Satisfy",
        color: 'white',
        fontSize: 30
    },
    linearGradient: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
    },
    dayCounter: {
        fontFamily: 'IndieFlower',
        fontSize: 35,
        color: 'white',
        position: 'absolute',
        top: '35%'
    },
    description: {
        fontFamily: 'GochiHand',
        color: '#ff77b0'
    }
}));


//make this component available to the app
export default Home;
