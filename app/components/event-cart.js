import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

export default class EventCard extends Component {
    render() {
        const { item } = this.props;

        return (
            <View style={styles.item}>
                <View style={styles.itemHeader}>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={styles.username}>{item.title}</Text>
                        {/* <Text style={styles.time}>{item.time}</Text> */}
                    </View>
                </View>
                <Text style={styles.message}>{item.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
      padding: 16,
      backgroundColor: "#F1F8E9",
      shadowColor: "#0000",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 4
    },
    itemBackground: {
      width: "100%",
      height: "100%"
    },
    itemHeader: {
      flexDirection: "row",
      alignItems: "center"
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24
    },
    username: {
      fontSize: 14,
      color: "#000000"
    },
    time: {
      fontSize: 12,
      color: "#9E9E9E"
    },
    message: {
      fontSize: 14,
      color: "#000000",
      fontStyle: "italic",
      marginTop:8
    }
  });
