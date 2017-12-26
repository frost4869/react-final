//import liraries
import React, { Component } from "react";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from "react-navigation";
import { Icon } from "native-base";
import Home from "../screens/Home";
import Stories from "../screens/Stories";
import Photos from "../screens/Photos";
import Events from "../screens/Events";
import CreateStory from "../screens/CreateStory";

export const FooterTab = TabNavigator(
  {
    Home: {
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
        tabBarIcon: ({ tintColor }) => <Icon name="images" />
      }
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="calendar" />
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

export const Drawer = DrawerNavigator(
  {
    Home: {
      screen: FooterTab
    },
  }
);

export const Root = StackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
    CreateStory: {
      screen: CreateStory                                                                                                                                                                                                                 
    }
  },
)