//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import TimeLine from "react-native-timeline-listview";
import Card from "../components/timeline-card";

// create a component
class TimelineList extends Component {

    constructor(props) {
        super(props)

        this.renderDetails = this.renderDetails.bind(this);
    }

    renderDetails(rowData, sectionId, rowId) {
        return (
            <Card
                data={rowData}
                navigate={this.props.navigate}
                withComment/>
        )
    }

    render() {
        const { data } = this.props;

        return (
            <TimeLine data={data}
                renderDetail={this.renderDetails}
                lineColor='#ec407a'
                timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                timeContainerStyle={{ minWidth: 50, marginTop: -5, marginLeft: 5 }}
                detailContainerStyle={{ marginLeft: -15 }}
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
