//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import { EvenPost, ImagePost, StoryPost } from "../components/posts";
import Comment from "../components/comment";
import Data from "../assets/comments.json";
import { Divider } from "react-native-elements";
// create a component
class Details extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this.setState({
            comments: Data
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.type === 'image' ?
                navigation.state.params.description :
                navigation.state.params.title,
            headerTitleStyle: {
                color: "#FFFFFF"
            },
            headerStyle: {
                backgroundColor: "#ec407a",
                marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
            },
            headerTintColor: "#FFFFFF",
            headerLeft: (
                <Icon
                    size={24}
                    name="arrow-back"
                    color="#FFFFFF"
                    iconStyle={{ padding: 16 }}
                    onPress={() => navigation.goBack()}
                />
            )
        };
    };

    renderDetails() {
        let navigate = this.props.navigation;
        let data = navigate.state.params;

        let content;

        return (
            <View>
                {content}
                <FlatList
                    data={this.state.comments}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={(comment) => comment.id}
                    renderItem={(comment) => <Comment cmt={comment} />} />
            </View>
        )
    }

    render() {
        return (
            this.renderDetails()
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
export default Details;
