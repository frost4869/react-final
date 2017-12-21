//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/timeline-card'
import { Container, Content } from "native-base";
// create a component
class Home extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Card />
                    <Card />
                    <Card />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Home;
