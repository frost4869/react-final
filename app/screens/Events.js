//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  PixelRatio,
  AppRegistry
} from "react-native";
import { Button } from "react-native-elements";
import { ImagePicker } from 'expo'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import EventCard from '../components/event-cart'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton } from 'react-native-popup-dialog'
import FloatingLabel from 'react-native-floating-label';
import t from 'tcomb-form-native'

const Form = t.form.Form
const CreateEvent = t.struct({
  titleEvent: t.String,
  content: t.String,
})

const slideAnimation = new SlideAnimation({
  slideForm: 'bottom',
})

// create a component
class Events extends Component {

  state = {
    events: [],
    value: {},
    images: [],
    uploading: false,
    options: {
      fields: {
        titleEvent: {
          factory: FloatingLabel,
        },
        content: {
          factory: FloatingLabel,
        },

      }
    }
  }

  selectPhotoTapped = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    if (!result.cancelled) {
      this.setState({ images: result.uri })
    }
  }

  takePhotoTapped = async () => {
    let cameraresult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
  }

  addNewEvent = () => {
    const paramEventInput = this.refs.form.getValue();
    const event = {
      title: paramEventInput.titleEvent,
      content: paramEventInput.content
    }
    console.warn('title: ', event.title)
    this.setState({
      events: [...this.state.events, event]
    })
    this.popupDialog.dismiss();
  }

  createNewEventTapped = () => {
    this.popupDialog.show();
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  handleImagePicker = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({ uploading: true })

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        this.setState({ images: uploadResult.location })
      }
    } catch (e) {
      alert('Upload failed!');
    } finally {
      this.setState({ uploading: false })
    }
  }

  render() {
    let { events } = this.state
    return (
      <View style={styles.container}>
        <Text>Under Development</Text>
      </View>
    );
  }
}



// define your styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupCreateDialog: {
    alignItems: 'center',
    alignItems: 'center',
    height: 600,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
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
  },
  separator: {
    height: 16,
    width: "100%",
    backgroundColor: "transparent"
  },
});

//make this component available to the app
export default Events;
