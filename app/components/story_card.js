//import liraries
import React, { Component } from "react";
import { Card, CardItem } from "native-base";
import { View, Text, StyleSheet, Image } from "react-native";
import ReadMore from "react-native-read-more-text";

// create a component
class StoryCard extends Component {
  render() {
    const { item } = this.props;

    const backgroundStyle = {
      backgroundColor: item.backgroundColor
    };
    const textStyle = { color: item.textColor };

    return (
      <Card style={[styles.item, backgroundStyle]}>
        <View style={styles.itemHeader}>
          <Image style={styles.avatar} source={item.avatar} />
          <View style={{ marginLeft: 8 }}>
            <Text style={[styles.username, textStyle]}>{item.username}</Text>
            <Text style={[styles.time, textStyle]}>{item.timeString}</Text>
          </View>
        </View>
        <ReadMore numberOfLines={4}>
          <Text style={[styles.message, textStyle]}>{item.message}</Text>
        </ReadMore>
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
