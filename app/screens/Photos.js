//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native';
import { fetchImages } from "../helpers/fetch-data";
import Card from "../components/timeline-card";
import { ImagesGrid } from "../components/timeline-card";
// create a component
class Photos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            images: [],
        })
        fetchImages().then(data => {
            this.setState({
                images: data,
                loading: false
            })
        });
    }

    render() {
        let content;
        if (this.state.loading) {
            content = <ActivityIndicator size='large'/>
        } else {
            const { images } = this.state;
            content = (
                <ImagesGrid data={images} navigate={this.props.navigation.navigate}/>
            )
        }

        return (
            <View style={styles.container}>
                {content}
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
