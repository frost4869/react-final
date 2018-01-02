//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AutoHeightImage from "react-native-auto-height-image";
// create a component
export class ImagePost extends Component {
    render() {
        const {data} = this.props;
        let {width} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <AutoHeightImage width={width} imageURL={data.imageUrl}/>
            </View>
        );
    }
}

export class StoryPost extends Component {
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <Text>StoryPost</Text>
            </View>
        );
    }
}

export class EvenPost extends Component {
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <Text>EvenPost</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative'
    },
    image: {
        position: 'absolute',
        top: 0, 
        right: 0,
        left: 0,
        bottom: 0,
    }
});

