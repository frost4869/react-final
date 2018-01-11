//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { DrawerItems } from "react-navigation";
import Moment from "moment";
// create a component
class DrawerHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            days: 0
        }
    }

    async componentDidMount() {
        let start_date = await AsyncStorage.getItem("start_date");
        start_date = Moment(parseInt(start_date));
        let now = Moment();
        this.setState({ days: now.diff(start_date, 'days') });
    }

    render() {
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
                        {this.state.days} days
                    </Text>
                </View>
                <DrawerItems {...this.props} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DrawerHeader;
