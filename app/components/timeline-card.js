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

    constructor(props) {
        super(props);

        this.caption = this.props.caption;
        this.des = this.props.des;
        this.type = this.props.type;
        this.timestamp = this.props.timestamp;

        this.username = this.props.username;
        this.image = this.props.image;
    }

    CardHeader(props) {
        switch (this.type) {
            case 'event':
                return (
                    <CardItem>
                        <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.title}>{this.caption}</Text>
                            <Text note>{this.timestamp}</Text>
                        </Body>
                    </CardItem >
                )
            default:
                return (
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/male.png')} />
                            <Body>
                                <Text style={styles.title}>{this.username}</Text>
                                <Text note>Posted {this.timestamp}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                );
        }
    }

    CardDetails(props) {
        switch (this.type) {
            case 'story':
                return (
                    <Body>
                        <Text style={styles.caption}>{this.caption}</Text>
                        <Text>{this.des}</Text>
                    </Body>
                )
            case 'image':
                return (
                    <Body>
                        <Text style={styles.caption}>{this.des}</Text>
                        <Image source={require('../assets/female.jpg')}
                            style={styles.image} />
                    </Body>

                )
            default:
                console.log(this.image)
                return (
                    <Body>
                        <Text style={styles.caption}>{this.des}</Text>
                        <Image source={{ uri: this.image, width: "100%", height: 300 }}/>
                    </Body>
                );
        }
    }

    render() {

        return (
            <Card style={styles.card}>

                {this.CardHeader()}

                <CardItem>
                    {this.CardDetails()}
                </CardItem>

                <CardItem >
                    <Left>
                        <Button transparent >
                            <Icon active name="heart" style={styles.icon} />
                            <Text>Love</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent >
                            <Icon active name="chatbubbles" style={styles.icon} />
                            <Text>Comments</Text>
                        </Button>
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
        marginRight: 5
    },
    image: {
        width: '100%',
    },
    title: {
        fontWeight: 'bold'
    },
    caption: {
        marginBottom: 10,
    },
    icon: {
        color: '#ec407a'
    }
});

//make this component available to the app
export default TimeLineCard;
