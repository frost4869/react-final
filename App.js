import React from 'react';
import { StyleSheet, Text, View, UIManager, StatusBar } from 'react-native';
import { Root } from "./app/config/routes";
import { Spinner, Container } from "native-base";
import { Expo, Font, AppLoading } from 'expo'
const Roboto_font = require('native-base/Fonts/Roboto.ttf');
const Roboto_medium_font = require('native-base/Fonts/Roboto_medium.ttf');
import { RkTheme } from "react-native-ui-kitten";
import { AvatarTypes } from "./app/components/avatar/types";

RkTheme.registerComponent('Avatar', AvatarTypes);

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false
    }
  }

  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />
    }

    return (
      <Container>
        {/* <StatusBar hidden /> */}
        <Root />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/////
