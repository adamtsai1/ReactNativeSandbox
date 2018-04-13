import React, { Component } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const {
        artist,
        image,
        thumbnail_image,
        title,
        url,
    } = album;

    const {
        headerContentStyle,
        headerTextStyle,
        imageStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image source={{ url: image }} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};

export default AlbumDetail;
