import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  ImageBackground
} from "react-native";

import { NavigationActions } from "react-navigation";

import { Icon } from "react-native-elements";

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
          iconStyle={{ padding: 16 }}
          onPress={() => handleSave()}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    handleSave = this.save;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/note_bg.jpeg")}
        >
          <TextInput
            value={this.state.text}
            multiline={true}
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
      const story = {
        username: "David Beckham",
        avatar:
          "https://i.pinimg.com/originals/fe/d3/66/fed366a009cfc31f551211b37ee4a0b9.jpg",
        message: this.state.text,
        time: "27-12-2017"
      };
      const backAction = NavigationActions.back();
      this.props.navigation.dispatch(backAction);
      this.props.navigation.state.params.onSave(story);
    } else {
      alert("Please enter a message");
    }
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
