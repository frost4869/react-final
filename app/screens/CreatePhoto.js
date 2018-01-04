//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, ActivityIndicator, Dimensions, TextInput, ActivityIndicatorIOS } from 'react-native';
import { Icon } from "react-native-elements";
import Uploader from "../helpers/cloudinary";
import { Card, Thumbnail, CardItem, Left, Body, Container, Content } from "native-base";


let handleSave = null;
// create a component
class CreatePhoto extends Component {

    static navigationOptions = navigation => {
        return {
            title: "New Photo",
            headerTitleStyle: {
                color: "#FFFFFF"
            },
            headerStyle: {
                backgroundColor: "#ec407a",
                marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
            },
            headerTintColor: "#FFFFFF",
            headerRight: (
                <Icon
                    size={24}
                    name="send"
                    color="#FFFFFF"
                    underlayColor="transparent"
                    iconStyle={{ padding: 16 }}
                    onPress={() => handleSave()}
                />
            )
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            isUploading: false,
            caption: ''
        }

        this.photoObj = this.props.navigation.state.params;
        this.savePhoto = this.savePhoto.bind(this)
    }

    componentDidMount() {
        handleSave = this.savePhoto;
    }

    savePhoto = () => {
        this.setState({
            isUploading: true
        })
        Uploader(this.photoObj.base64).then(imageUrl => {
            console.log(imageUrl)
            this.setState({
                isUploading: false,
            })
        })
    }

    render() {
        if (this.state.isUploading) {
            return <ActivityIndicator size={40} style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }} />
        }
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/male.png')} />
                                <Body>
                                    <Text style={styles.username}>Username</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={styles.container}>
                                <TextInput placeholder="Write something..." multiline={true} style={styles.input}
                                    onChangeText={val => this.setState({caption: val})} />
                                <Image source={{ uri: this.photoObj.uri }}
                                    style={styles.image} />
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'cover'
    },
    input: {
        width: '100%',
        marginVertical: 10
    },
    username: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default CreatePhoto;
