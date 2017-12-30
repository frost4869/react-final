//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ImageView from "react-native-image-view";
import { Divider } from "react-native-elements";
import { Text, Button, Icon, Right } from "native-base";
import ReadMore from "react-native-read-more-text";
// create a component
class CustomeImageView extends Component {

    constructor(props) {
        super(props)

        this.imageUrl = props.data.imageUrl;
        this.des = props.data.description;
        this.title = props.data.title;

        this.viewDetails = props.viewDetails;

        this.renderImageViewFooter = this.renderImageViewFooter.bind(this);
    }

    renderImageViewFooter() {
        let title = this.title ? this.title : '';
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>{title}</Text>
                <ReadMore
                    numberOfLines={2}>
                    <Text style={styles.footerText}>{this.des}</Text>
                </ReadMore>
                <Divider style={{ marginVertical: 10 }} />
                <Right>
                    <Button transparent>
                        <Icon active name="chatbubbles" style={styles.footerText} />
                        <Text style={styles.footerText} onPress={this.viewDetails}>Comments</Text>
                    </Button>
                </Right>
            </View>
        )
    }

    render() {
        const { isVisible, viewImage, viewDetails } = this.props;
        return (
            <ImageView source={{ uri: this.imageUrl }}
                isVisible={isVisible}
                imageWidth={Dimensions.get('window').width}
                onClose={viewImage}
                animationType='fade'
                renderFooter={this.renderImageViewFooter} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    footer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    footerTitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },

});

//make this component available to the app
export default CustomeImageView;
