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

        this.renderImageViewFooter = this.renderImageViewFooter.bind(this);
    }

    renderImageViewFooter() {
        let title = this.props.data.title ? this.props.data.title : '';
        let comment = this.props.withComment ? (
            <Button transparent>
                <Icon active name="chatbubbles" style={styles.footerText} />
                <Text style={styles.footerText} onPress={this.props.viewDetails}>Comments</Text>
            </Button>
        ) : null
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>{title}</Text>
                <ReadMore
                    numberOfLines={2}>
                    <Text style={styles.footerText}>{this.props.data.description}</Text>
                </ReadMore>
                <Divider style={{ marginVertical: 10 }} />
                <Right>
                    {comment}
                </Right>
            </View>
        )
    }

    render() {
        const { isVisible, viewImage } = this.props;
        return (
            <ImageView source={{ uri: this.props.data.imageUrl }}
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
