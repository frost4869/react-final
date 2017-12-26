//import liraries
import React, { Component } from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, Button } from "react-native-elements";
import StoryCard from "../components/story_card";

// const data = `{"stories":[{"username":"David Beckham","avatar":"https://i.pinimg.com/originals/fe/d3/66/fed366a009cfc31f551211b37ee4a0b9.jpg","message":"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","time":"24-12-2017"},{"username":"David Beckham","avatar":"https://i.pinimg.com/originals/fe/d3/66/fed366a009cfc31f551211b37ee4a0b9.jpg","message":"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","time":"24-12-2017"},{"username":"David Beckham","avatar":"https://i.pinimg.com/originals/fe/d3/66/fed366a009cfc31f551211b37ee4a0b9.jpg","message":"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","time":"24-12-2017"},{"username":"David Beckham","avatar":"https://i.pinimg.com/originals/fe/d3/66/fed366a009cfc31f551211b37ee4a0b9.jpg","message":"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s","time":"24-12-2017"}]}`;

// create a component
class Stories extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: false
    };
    this.createNewStory = this.createNewStory.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
  }

  render() {
    const { stories } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/story_bg.jpg")}
      >
        <FlatList
          data={stories}
          keyExtractor={(item, index) => index}
          renderItem={item => <StoryCard item={item.item} />}
          ItemSeparatorComponent={this.renderSeparator}
          showsVerticalScrollIndicator={false}
          style={{ margin: 16 }}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.newButton}
          onPress={this.createNewStory}
        >
          <View>
            <Icon size={30} color="#FFFFFF" name="add" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  createNewStory = () => {
    this.props.navigation.navigate("CreateStory", {
      onSave: this.addNewStory
    });
  };

  addNewStory = story => {
    this.setState({ stories: [...this.state.stories, story] });
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginTop: 8,
    marginBottom: 8
  },
  separator: {
    height: 16,
    width: "100%",
    backgroundColor: "transparent"
  },
  newButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#ee6e73",
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 8
  }
});

//make this component available to the app
export default Stories;
