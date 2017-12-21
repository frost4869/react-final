//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Right, Body
} from "native-base";

import Male from '../assets/male.png'
import Female from '../assets/female.jpg'


// create a component
class TimeLineCard extends Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/male.png')} />
                        <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/female.jpg')} style={{ height: 300, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginLeft: 10, 
        marginRight: 10
    }
});

//make this component available to the app
export default TimeLineCard;
