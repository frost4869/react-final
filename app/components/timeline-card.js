//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
    Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Right, Body
} from "native-base";
import ReadMore from "react-native-read-more-text";
import Moment from "moment";

import Male from '../assets/male.png'
import Female from '../assets/female.jpg'

import ImageView from "../components/image-view";
import ImageGridView from "react-native-super-grid";

import Image from "react-native-image-progress";
import {ProgressCircle} from "react-native-progress/Circle";


// create a component
class TimeLineCard extends Component {

    constructor(props) {
        super(props);

        this.users = require('../assets/users.json')

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
        switch (this.props.data.type) {
            case 'event':
                return (
                    <CardItem>
                        <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.title}>{this.props.data.title}</Text>
                            <Text note>{Moment(this.props.data.timestamp).format('MMM, DD [at] hh:ss a')}</Text>
                        </Body>
                    </CardItem >
                )
            default:
                return (
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/male.png')} />
                            <Body>
                                <Text style={styles.title}>Username</Text>
                                <Text note>{Moment(this.props.data.timestamp).format('MMM, DD [at] hh:ss a')}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                );
        }
    }

    CardDetails(props) {
        switch (this.props.data.type) {
            case 'story':
                return (
                    <View style={styles.container}>
                        <Text style={styles.caption} >{this.props.data.title}</Text>
                        <ReadMore
                            numberOfLines={4}>
                            <Text>{this.props.data.description}</Text>
                        </ReadMore>
                    </View>
                )
            case 'image':
                return (
                    <View style={styles.container}>
                        <ReadMore
                            numberOfLines={4}>
                            <Text>{this.props.data.description}</Text>
                        </ReadMore>
                        <TouchableOpacity
                            key={this.props.data.imageUrl}
                            onPress={this.viewImage}
                            activeOpacity={0.8}>
                            <Image source={{ uri: this.props.data.imageUrl }} style={styles.image}
                                resizeMode='cover' />
                        </TouchableOpacity>
                    </View>

                )
            default: //events
                return (
                    <View style={styles.container}>
                        <Text style={styles.caption}>{this.props.data.description}</Text>
                        <TouchableOpacity
                            key={this.props.data.imageUrl}
                            onPress={this.viewImage}
                            activeOpacity={0.8}>
                            <Image source={{ uri: this.props.data.imageUrl }} style={styles.image}
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

export class ImagesGrid extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isVisible: false,
            currentImage: '',
        }

        this.renderItem = this.renderItem.bind(this);
        this.viewImage = this.viewImage.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
        this.showImageView = this.showImageView.bind(this);
    }

    viewImage(image) {
        this.showImageView();
        this.setState({
            currentImage: image
        })
    }

    showImageView() {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    viewDetails() {
        this.setState({
            isVisible: false
        });
        this.props.navigate("Details", this.state.currentImage);
    }

    renderItem(item) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    key={item.imageUrl}
                    onPress={() => this.viewImage(item)}
                    activeOpacity={0.8}>
                    <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: 150, borderRadius: 5, }} 
                        indicator={ProgressCircle}/>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageGridView
                    items={this.props.data}
                    renderItem={item => this.renderItem(item)}
                    itemDimension={130}
                    withComment />

                <ImageView
                    data={this.state.currentImage}
                    isVisible={this.state.isVisible}
                    viewImage={this.showImageView}
                    viewDetails={this.viewDetails}
                    withComment />
            </View>
        )
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
    },
    container: {
        flex: 1
    },
    itemContainer: {
        flex: 1,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
});

//make this component available to the app
export default TimeLineCard;
