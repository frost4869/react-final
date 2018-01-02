import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Modal } from "react-native";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

var screen = Dimensions.get("window");

export default class ProgressDialog extends Component {
  render() {
    return (
      <Modal
        visible={this.props.isOpen}
        transparent={true}
        onRequestClose={() => {}}
      >
        <View style={styles.modal}>
          <View style={styles.container}>
            <ProgressBar />
            <Text style={styles.text}>Please wait...</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#00000080",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flexDirection: "row",
    width: screen.width * 0.8,
    height: 80,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 5
  },
  text: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 16
  }
});
