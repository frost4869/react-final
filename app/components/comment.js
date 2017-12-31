//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from "./avatar";
import { RkStyleSheet } from "react-native-ui-kitten";
import Moment from "moment";
// create a component
class Comment extends Component {
    render() {
        const cmt = this.props.cmt;
        return (
            <View style={styles.container}>
                <Avatar rkType='circle' style={styles.avatar} img={require('../assets/male.png')} />
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Text style={{ fontWeight: 'bold' }}>Some Name</Text>
                        <Text>
                            {Moment().add(cmt.item.time, 'seconds').format('LT')}
                        </Text>
                    </View>
                    <Text>{cmt.item.text}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = RkStyleSheet.create(theme => ({
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
}));

//make this component available to the app
export default Comment;
