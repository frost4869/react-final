import React, { Component } from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Progress.Circle
        style={this.props.style}
        size={30}
        borderColor={"#009688"}
        borderWidth={2}
        indeterminate={true}
      />
    );
  }
}

ProgressBar.propTypes = {
  style: View.propTypes.style
};
