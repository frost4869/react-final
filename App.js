import React from 'react';
import { StyleSheet, Text, View, UIManager, StatusBar } from 'react-native';
import { Drawer } from "./app/config/routes";
import { Spinner, Container } from "native-base";
import { Expo, Font, AppLoading } from 'expo'
import { RkTheme } from "react-native-ui-kitten";
import { AvatarTypes } from "./app/components/avatar/types";
import Toast, { DURATION } from "react-native-easy-toast";
import "./app/helpers/global";

RkTheme.registerComponent('Avatar', AvatarTypes);

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false
    }
  }

  componentWillMount() {
    console.disableYellowBox = true;
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      RobotoLight: require("./app/assets/fonts/Roboto-Light.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Anton: require("./app/assets/fonts/Anton-Regular.ttf"),
      GochiHand: require("./app/assets/fonts/GochiHand-Regular.ttf"),
      IndieFlower: require("./app/assets/fonts/IndieFlower.ttf"),
      Lobster: require("./app/assets/fonts/Lobster-Regular.ttf"),
      Pacifico: require("./app/assets/fonts/Pacifico-Regular.ttf"),
      Satisfy: require("./app/assets/fonts/Satisfy-Regular.ttf"),
    });
    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />
    }

    return (

      <Container>
          <Drawer />
          <Toast ref="toast"/>
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
