//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import { Container, Content, Item, Input, Left, Right } from "native-base";
import { EvenPost, ImagePost, StoryPost } from "../components/posts";
import Comment from "../components/comment";
import Data from "../assets/comments.json";
import { Divider } from "react-native-elements";
import Card from "../components/timeline-card";
import Moment from "moment";
// create a component
class Details extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            comment: '',
            currentId: 8
        }

        this.textInput = null;
        this.sendComment = this.sendComment.bind(this)
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

    sendComment() {
        this.setState({
            comments: this.state.comments.concat({
                id: this.state.currentId + 1,
                text: this.state.comment,
                time: 1123
            })
        })
    }

    render() {
        let navigate = this.props.navigation;
        let data = navigate.state.params;

        return (
            <Container>
                <Content>
                    <View>
                        <Card
                            data={data}
                            navigate={navigate} />
                    </View>

                    <Item rounded>
                        <Left>
                            <Input placeholder='Say something...' style={{ width: '100%' }}
                                onChangeText={value => { this.setState({ comment: value }) }} 
                                ref={input => {this.textInput = input}}/>
                        </Left>
                        <Right>
                            <Icon name="send" iconStyle={{ padding: 16 }} onPress={this.sendComment} />
                        </Right>
                    </Item>

                    <FlatList
                        data={this.state.comments}
                        keyExtractor={(comment) => comment.id}
                        renderItem={(comment) => <Comment cmt={comment} />} />

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
export default Details;
