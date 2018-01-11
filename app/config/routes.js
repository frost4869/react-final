//import liraries
import React, { Component } from "react";
import { Text, View, ImageBackground, StyleSheet, LinearGradient, AsyncStorage } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  DrawerItems
} from "react-navigation";
import { Icon, Grid, Row, Col } from "native-base";
import Home from "../screens/Home";
import Stories from "../screens/Stories";
import Photos from "../screens/Photos";
import Events from "../screens/Events";
import CreateStory from "../screens/CreateStory";
import Details from "../screens/Details";
import CreatePhoto from "../screens/CreatePhoto";
import Cover from "../assets/cover.jpg";
import DrawerHeader from "../components/drawer-header";

export const FooterTab = TabNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" />,
        header: null
      }
    },
    Stories: {
      screen: Stories,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="book" />
      }
    },
    Photos: {
      screen: Photos,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="images" />,
        header: null
      }
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="calendar" />,
        header: null
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#ec407a"
      }
    }
  }
);

export const StackScreens = StackNavigator(
  {
    BottomNav: {
      screen: FooterTab
    },
    CreateStory: {
      screen: CreateStory
    },
    Details: {
      screen: Details
    },
    CreatePhoto: {
      screen: CreatePhoto
    }
  },
)

const DrawerContent = async (props) => {

  

  return (
    <View>
      <View
        style={{
          backgroundColor: '#f50057',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 30 }}>
          {startDate}
      </Text>
      </View>
      <DrawerItems {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
  },
  dayCounter: {
    color: 'white',
    fontSize: 75,
    fontWeight: '100',
    fontFamily: 'RobotoLight',
    textShadowOffset:
      {
        width: 1.5, height: 1.5
      },
    marginLeft: 10
  },
  header: {
    paddingTop: 25,
    paddingBottom: 17,
    height: 300,
  },
})

export const Drawer = DrawerNavigator(
  {
    Home: {
      screen: StackScreens,
    },
    Stories: {
      screen: Stories,
    },
    Photos: {
      screen: Photos,
    },
    Events: {
      screen: Events,
    },
  }, {
    contentComponent: DrawerHeader
  }
);