//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, RefreshControl, Image } from 'react-native';
import TimeLine from "react-native-timeline-listview";
import Card from "../components/timeline-card";

// create a component
class TimelineList extends Component {

    constructor(props) {
        super(props)

        this.renderDetails = this.renderDetails.bind(this);
        this.renderCircle = this.renderCircle.bind(this);
    }

    renderDetails(rowData, sectionId, rowId) {
        return (
            <Card
                data={rowData}
                navigate={this.props.navigate}
                withComment />
        )
    }

    renderCircle(rowData, sectionId, rowId){
        let iconPath = '../assets/icons/' + rowData.icon;
        return (
            <Image source={require('../assets/icons/hearts.png')} 
                style={{width: 30, height: 30, right: 0}}/>
        )
    }

    render() {
        const { data } = this.props;

        return (
            <TimeLine data={data}
                renderDetail={this.renderDetails}
                lineColor='#ec407a'
                // timeStyle={{width: 0, textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                timeStyle={{ display: 'none' }}
                // timeContainerStyle={{ minWidth: 50, marginTop: -5, marginLeft: 5 }}
                timeContainerStyle={{backgroundColor: 'red', minWidth: 0 }}
                detailContainerStyle={{ marginLeft: 10, marginTop: -5 }}
                circleSize={30}
                circleColor='rgba(0,0,0,0)'
                options={{
                    style: { paddingTop: 5 },
                }}
                innerCircle={'icon'} />
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
export default TimelineList;
