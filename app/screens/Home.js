//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/timeline-card'
import { Avatar } from "../components/avatar";
import { Container, Content, Grid, Row, Col } from "native-base";
import { RkStyleSheet } from "react-native-ui-kitten";
import MaleAvatar from '../assets/male.png';
import FemaleAvatar from '../assets/female.jpg';


// create a component
class Home extends Component {

    render() {
        return (
            <Container>
                <Content>

                    <View style={[styles.bodered, styles.header]}>
                        <Grid>
                            <Row style={{backgroundColor: '#635DB7', height: 200}}>

                            </Row>
                            <Row style={{backgroundColor: '#00CE9F', height: 50}}>
                                <Col>
                                    <Avatar img={MaleAvatar} rkType='big' />
                                </Col>
                                <Col>
                                    <Avatar img={FemaleAvatar} rkType='big' />
                                </Col>
                            </Row>
                        </Grid>
                    </View>

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
    bodered: {
        borderBottomWidth: 1,
        borderColor: theme.colors.screen.base
    },
    header: {
        paddingTop: 25,
        paddingBottom: 17
    }
}));

//make this component available to the app
export default Home;
