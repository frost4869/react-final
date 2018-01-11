//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, ActivityIndicator, ListView, ScrollView, RefreshControl, AsyncStorage } from 'react-native';
import { fetchImages } from "../helpers/fetch-data";
import Card from "../components/timeline-card";
import { ImagesGrid } from "../components/timeline-card";
import ActionButton from "react-native-action-button";
import { Icon } from "react-native-elements";
import { ImagePicker } from "expo";
// create a component
class Photos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: [],
            loading: false,
            show: false,
        }
        this.loadImages = this.loadImages.bind(this)
    }

    componentDidMount() {
        this.loadImages();
    }

    loadImages() {
        this.setState({
            images: [],
            loading: true
        })
        fetchImages().then(data => {
            this.setState({
                images: data,
                loading: false,
            })
        });
    }

    uploadFromDevice = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            quality: 1
        })

        this.handleImagePicked(pickerResult)
    }

    takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            base64: true,
            quality: 1
        })

        this.handleImagePicked(pickerResult)
    }

    handleImagePicked = async pickerResult => {
        if (pickerResult.cancelled != true) {
            const navigate = this.props.navigation.navigate;
            navigate("CreatePhoto", pickerResult);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.loading}
                            onRefresh={this.loadImages} />
                    }>
                    <ImagesGrid data={this.state.images} navigate={this.props.navigation.navigate} />
                </ScrollView>
                <ActionButton buttonColor='#ec407a'>
                    <ActionButton.Item title='Pick from library' color='#FF4081' onPress={this.uploadFromDevice}>
                        <Icon name='image'
                            color='#fff'
                            underlayColor='transparent'
                            size={24} />
                    </ActionButton.Item>
                    <ActionButton.Item title='Take a photo' color='#FF80AB' onPress={this.takePhoto}>
                        <Icon name='camera'
                            color='#fff'
                            underlayColor='transparent'
                            size={24} />
                    </ActionButton.Item>
                </ActionButton>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
    },
});

//make this component available to the app
export default Photos;
