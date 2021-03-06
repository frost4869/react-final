//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform, AsyncStorage, ActivityIndicator } from 'react-native';
import { Avatar } from "../components/avatar";
import { Container, Content, Grid, Row, Col, Icon, H2, H3, H1, Body } from "native-base";
import { RkStyleSheet } from "react-native-ui-kitten";
import MaleAvatar from '../assets/male.png';
import FemaleAvatar from '../assets/female.jpg';
import Cover from "../assets/cover.jpg";
import { LinearGradient } from "expo";
import Moment from "moment";
import TimeLine from "../components/time-line";
import { fetchCoupleInfo, fetchImages, fetchStories } from "../helpers/fetch-data";

// create a component
class Home extends Component {

    constructor(props) {
        super(props)

        this.events = [
            {
                timestamp: Moment().valueOf(),
                title: 'First dinner together !',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                imageUrl: 'https://www.bolde.com/wp-content/uploads/2017/03/iStock-504535670.jpg',
                type: 'event',
                icon: (require('../assets/icons/heart.png'))
            },
            {
                timestamp: Moment().valueOf(),
                title: "2 years !!",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                type: 'event',
                icon: (require('../assets/icons/heart.png'))
            }
        ]
        this.state = {
            data: [],
            isRefreshing: false,
            loading: true,
            startDate: 0,
            days: 0,
        }

        this.fetchData = this.fetchData.bind(this);
    }

    async componentDidMount() {

        let start_date = await AsyncStorage.getItem("start_date");
        start_date = Moment(parseInt(start_date));
        let now = Moment();
        this.setState({ days: now.diff(start_date, 'days') });

        this.fetchData();
    }

    fetchData() {
        let posts = []
        fetchImages().then((images) => {
            posts = posts.concat(images)
            fetchStories().then((stories) => {
                posts = posts.concat(stories)
                posts = posts.concat(this.events)

                this.setState({
                    data: posts,
                    loading: false
                })
            })
        })
    }

    refresh() {
        this.setState({
            isRefreshing: true
        }, () => {
            this.setState({
                data: this.data,
                isRefreshing: false
            })
        })
    }

    loadmore() {
        this.setState({
            loading: true,
        }, () => {
            this.setState({
                data: this.state.data.concat(this.data)
            })
        })
    }

    render() {
        let content;
        if (this.state.loading) {
            content = <ActivityIndicator color='#ec407a' size={40} />
        } else {
            content = <TimeLine data={this.state.data}
                loadmore={this.loadmore}
                refresh={this.refresh}
                isRefreshing={this.state.isRefreshing}
                navigate={this.props.navigation.navigate} />
        }

        return (
            <Container style={styles.container}>
                <Content>
                    <ImageBackground source={Cover} style={styles.header} >
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={styles.linearGradient}>
                            <Grid>
                                <Row size={60}>
                                    <Text style={styles.dayCounter}>
                                        {this.state.days}
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
                        <Text style={styles.description}>Our sweet memories</Text>
                    </Body>

                    {content}

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
