//import liraries
import React, { Component } from "react";
import { Card, CardItem } from "native-base";
import { View, Text, StyleSheet, Image } from "react-native";
import { User } from "../helpers/constants";
var moment = require("moment");

// create a component
class StoryCard extends Component {
  render() {
    const { item } = this.props;
    const timeString = moment(item.time).format("HH:mm - DD/MM/YYYY");
    // fake current user
    const userId = User.uId;
    const backgroundStyle = {
      backgroundColor: userId == item.userId ? "#F1F8E9" : "#F06292"
    };
    const textStyle = { color: userId == item.userId ? "#000000" : "#FFFFFF" };

    return (
      <Card style={[styles.item, backgroundStyle]}>
        <View style={styles.itemHeader}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <View style={{ marginLeft: 8 }}>
            <Text style={[styles.username, textStyle]}>{item.username}</Text>
            <Text style={[styles.time, textStyle]}>{timeString}</Text>
          </View>
        </View>
        <Text style={[styles.message, textStyle]}>{item.message}</Text>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: "#F1F8E9"
  },
  itemBackground: {
    width: "100%",
    height: "100%"
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000"
  },
  time: {
    fontSize: 11,
    color: "#9E9E9E"
  },
  message: {
    fontSize: 14,
    color: "#000000",
    fontStyle: "italic",
    marginTop: 8
  }
});

//make this component available to the app
export default StoryCard;
