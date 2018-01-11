import React from 'react';
import { StyleSheet, Text, View, UIManager, StatusBar, AsyncStorage, ActivityIndicator } from 'react-native';
import { Drawer, StackScreens } from "./app/config/routes";
import { Spinner, Container } from "native-base";
import { Expo, Font, AppLoading } from 'expo'
import { RkTheme } from "react-native-ui-kitten";
import { AvatarTypes } from "./app/components/avatar/types";
import {
  fetchUser01Info,
  fetchUser02Info,
  fetchCoupleInfo
} from "./app/helpers/fetch-data";
import "./app/helpers/global";

RkTheme.registerComponent('Avatar', AvatarTypes);

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false
    }
    this.LoadUser01Data = this.LoadUser01Data.bind(this)
    this.LoadCoupleInfo = this.LoadCoupleInfo.bind(this)
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    await this.LoadUser01Data();
    await this.LoadCoupleInfo();
    await this.loadFonts();
    this.setState({ ready: true });
  }

  async LoadCoupleInfo() {
    try {
      let info = await AsyncStorage.getItem("start_date");
      if (info == null || info == "") {
        fetchCoupleInfo().then(async (startDate) => {
          await AsyncStorage.setItem("start_date", startDate.toString());
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async LoadUser01Data() {
    try {
      await AsyncStorage.getItem("user", (user) => {
        if (user == null || user == "") {
          fetchUser01Info().then(async user => {
            await AsyncStorage.setItem("user", JSON.stringify(user))
            console.log("user done")
          })
        }
      })

    } catch (error) {
      console.error(error);
    }
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

  }

  render() {
    if (!this.state.ready) {
      return <ActivityIndicator size={50} style={styles.container} />
    }

    return (

      <Container>
        <Drawer />
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
