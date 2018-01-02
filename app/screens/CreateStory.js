import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  ImageBackground
} from "react-native";

import { NavigationActions } from "react-navigation";
import ProgressDialog from "../components/ProgressDialog";
import { Icon } from "react-native-elements";
import firebase from "../helpers/firebase";
import { User } from "../helpers/constants";
let handleSave = null;

class CreateStory extends Component {
  static navigationOptions = navigation => {
    return {
      title: "New story",
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
  };

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    handleSave = this.save;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressDialog isOpen={this.state.loading} />
        <ImageBackground
          style={styles.background}
          source={require("../assets/note_bg.jpeg")}
        >
          <TextInput
            value={this.state.text}
            multiline={true}
            placeholder="What's in your mind?"
            placeholderTextColor="#9E9E9E"
            underlineColorAndroid="transparent"
            onChangeText={value => {
              this.setState({ text: value });
            }}
            autoFocus={true}
            style={styles.input}
          />
        </ImageBackground>
      </View>
    );
  }

  save = () => {
    if (this.state.text.trim().length > 0) {
      const id = this.generateId();
      const story = {
        userId: User.uId,
        username: User.name,
        avatar: User.avatar,
        message: this.state.text,
        time: Date.now()
      };
      this.setState({ loading: true }, () => {
        firebase
          .database()
          .ref("stories/" + id)
          .set(story, error => {
            this.setState({ loading: false }, () => {
              if (error === null) {
                const backAction = NavigationActions.back();
                this.props.navigation.dispatch(backAction);
                this.props.navigation.state.params.onSaved();
              } else {
                alert("Failed to create story!");
              }
            });
          });
      });
    } else {
      alert("Please enter a message");
    }
  };

  generateId = () => {
    return Math.floor(Math.random() * 10000000000);
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  background: {
    width: "100%"
  },
  input: {
    height: "100%",
    padding: 16,
    fontSize: 18,
    color: "#000",
    fontStyle: "italic",
    textAlignVertical: "top"
  }
});

export default CreateStory;
