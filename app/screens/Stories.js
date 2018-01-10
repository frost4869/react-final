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
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Icon, Button } from "react-native-elements";
import StoryCard from "../components/story_card";
var moment = require("moment");
import { fetchStories } from "../helpers/fetch-data";

// create a component
class Stories extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      refreshing: false
    };
    this.loadStories = this.loadStories.bind(this);
    this.createNewStory = this.createNewStory.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
  }

  componentDidMount() {
    this.loadStories();
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
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true }, this.loadStories);
              }}
            />
          }
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

  loadStories = () => {
    fetchStories().then(data => {
      const user = global.user;
      const partner = global.partner;
      const stories = data.map(item => {
        const itsMe = user.id == item.userId;
        return {
          ...item,
          avatar: itsMe ? user.avatar : partner.avatar,
          username: itsMe ? user.username : partner.username,
          timeString: moment(item.timestamp).format("MMM, DD [at] hh:ss a"),
          backgroundColor: itsMe ? "#FFFFFF" : "#F06292",
          textColor: itsMe ? "#000000" : "#FFFFFF"
        };
      });
      this.setState({ stories: stories, refreshing: false });
    });
  };

  createNewStory = () => {
    this.props.navigation.navigate("CreateStory", {
      onSaved: this.loadStories
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
    backgroundColor: "#4CAF50",
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
