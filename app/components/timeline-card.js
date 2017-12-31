//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {
    Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Right, Body
} from "native-base";
import ReadMore from "react-native-read-more-text";
import Male from '../assets/male.png'
import Female from '../assets/female.jpg'

import ImageView from "../components/image-view";

// create a component
class TimeLineCard extends Component {

    constructor(props) {
        super(props);

        this.caption = this.props.data.title;
        this.des = this.props.data.description;
        this.type = this.props.data.type;
        this.timestamp = this.props.data.timestamp;

        this.username = this.props.data.username;
        this.image = this.props.data.imageUrl;

        this.state = {
            isVisible: false
        }

        this.viewImage = this.viewImage.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
    }

    viewImage() {
        this.setState({
            isVisible: !this.state.isVisible
        })
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
                    <View>
                        <Text style={styles.caption} >{this.caption}</Text>
                        <ReadMore
                            numberOfLines={4}>
                            <Text>{this.des}</Text>
                        </ReadMore>
                    </View>
                )
            case 'image':
                return (
                    <View>
                        <ReadMore
                            numberOfLines={4}>
                            <Text>{this.des}</Text>
                        </ReadMore>
                        <TouchableOpacity
                            key={this.image}
                            onPress={this.viewImage}
                            activeOpacity={0.8}>
                            <Image source={{ uri: this.image }} style={styles.image}
                                resizeMode='cover' />
                        </TouchableOpacity>
                    </View>

                )
            default: //events
                return (
                    <View>
                        <Text style={styles.caption}>{this.des}</Text>
                        <TouchableOpacity
                            key={this.image}
                            onPress={this.viewImage}
                            activeOpacity={0.8}>
                            <Image source={{ uri: this.image }} style={styles.image}
                                resizeMode='cover' />
                        </TouchableOpacity>
                    </View>
                );
        }
    }

    cardComment() {
        if (this.props.withComment) {
            return (
                <Button transparent >
                    <Icon active name="chatbubbles" style={styles.icon} />
                    <Text onPress={this.viewDetails}>Comments</Text>
                </Button>
            )
        }
    }

    viewDetails() {
        this.setState({
            isVisible: false
        });
        this.props.navigate("Details", this.props.data);
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
                    </Left>
                    <Right>
                        {this.cardComment()}
                    </Right>
                </CardItem>

                <ImageView
                    data={this.props.data}
                    isVisible={this.state.isVisible}
                    viewImage={this.viewImage}
                    viewDetails={this.viewDetails}
                    withComment={this.props.withComment} />
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginRight: 5,
    },
    image: {
        width: '100%',
        height: 300,
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
