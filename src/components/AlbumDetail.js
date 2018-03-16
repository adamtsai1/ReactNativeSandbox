import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

export default class AlbumDetail extends Component {
    static propTypes = {
        album: PropTypes.object.isRequired
    };

    render() {
        return (
            <Card>
                <Text>{this.props.album.title}</Text>
            </Card>
        );
    }
}
