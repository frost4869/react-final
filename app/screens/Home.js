//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';
import { Avatar } from "../components/avatar";
import { Container, Content, Grid, Row, Col, Icon, H2, H3, H1, Body } from "native-base";
import { RkStyleSheet } from "react-native-ui-kitten";
import MaleAvatar from '../assets/male.png';
import FemaleAvatar from '../assets/female.jpg';
import Cover from "../assets/cover.jpg";
import { LinearGradient } from "expo";
import Moment from "moment";
import TimeLine from "../components/time-line";
// create a component
class Home extends Component {

    constructor(props) {
        super(props)

        this.data = [
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
                type: 'image',
                username: 'Anthony',
                icon: (<Icon name='heart' />)
            },
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                title: 'Just some story',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                type: 'story',
                username: 'Monica'
            },
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                title: 'Story of our final project',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                type: 'story',
                username: 'Monica'
            },
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                type: 'image',
                username: 'Anthony'
            },
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                title: 'First dinner together !',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                imageUrl: 'https://www.bolde.com/wp-content/uploads/2017/03/iStock-504535670.jpg',
                type: 'event'
            },
            {
                time: new Date().getFullYear(),
                timestamp: Moment().format('MMM, DD [at] hh:ss a'),
                title: "2 years !!",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                type: 'event'
            }
        ]

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <ImageBackground source={Cover} style={styles.header} >
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={styles.linearGradient}>
                            <Grid>
                                <Row size={60}>
                                    <Text style={styles.dayCounter}>
                                        903
                                        <Text style={{ fontSize: 40, fontFamily: 'RobotoLight' }}>days</Text>
                                    </Text>
                                </Row>
                                <Row size={40}>
                                    <Col size={41} style={styles.avatar}>
                                        <Avatar img={MaleAvatar} rkType='big' />
                                        <Text style={styles.name}>Anthony</Text>
                                    </Col>

                                    <Col style={styles.centered} size={20}>
                                        <Icon style={styles.heart} name='heart' />
                                    </Col>

                                    <Col size={41} style={styles.avatar}>
                                        <Avatar img={FemaleAvatar} rkType='big' />
                                        <Text style={styles.name}>Monica</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </LinearGradient>
                    </ImageBackground>

                    <Body>
                        <Text style={styles.description}>Our sweet moments</Text>
                    </Body>

                    <TimeLine data={this.data}/>

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
        marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
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
        color: 'white',
        fontSize: 75,
        fontWeight: '100',
        fontFamily: 'RobotoLight',
        textShadowOffset:
            {
                width: 1.5, height: 1.5
            },
        marginLeft: 10
    },
    description: {
        fontFamily: 'GochiHand',
        color: '#ff77b0',
        fontSize: 40,
        marginTop: 15,
        marginBottom: 15
    }
}));


//make this component available to the app
export default Home;
