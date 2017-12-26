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
// create a component
class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={Cover} style={styles.header} >
                        <Grid>
                            <Row size={60}>

                            </Row>
                            <Row size={40}>
                                <Col size={41} style={styles.avatar}>
                                    <Avatar img={MaleAvatar} rkType='big' />
                                    <H2>Anthony</H2>
                                </Col>

                                <Col style={styles.centered} size={20}>
                                    <Icon style={styles.heart} name='heart' />
                                    <H3 style={{ position: 'absolute', top: '41%' }}>789</H3>
                                </Col>

                                <Col size={41} style={styles.avatar}>
                                    <Avatar img={FemaleAvatar} rkType='big' />
                                    <H2>Monica</H2>
                                </Col>
                            </Row>
                            <Row size={10} style={styles.centered}>
                                <H2>..loving since 2015</H2>
                            </Row>
                        </Grid>
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
    }
}));


//make this component available to the app
export default Home;
