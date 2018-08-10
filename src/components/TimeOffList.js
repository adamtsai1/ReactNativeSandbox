import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

// App
import { TimeOffListItem } from './TimeOffListItem';
import { Colors } from '../utility';

export const TimeOffList = ({ items, title }) => {
    const {
        contentContainerStyle,
        headerStyle,
        titleStyle,
    } = styles;

    let content;
    if (!items) {
        content = <Text>Loading...</Text>;
    } else if (items.length === 0) {
        content = <Text>No requests</Text>;
    } else {
        content = items.map(item => <TimeOffListItem item={item} />);
    }

    return (
        <View>
            <View style={headerStyle}>
                <Text style={titleStyle}>{title}</Text>
            </View>

            <View style={contentContainerStyle}>
                {content}
            </View>
        </View>
    );
};

TimeOffList.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
};

const styles = {
    contentContainerStyle: {
        padding: 10,
    },
    headerStyle: {
        backgroundColor: Colors.lightestGray,
        padding: 10,
    },
    titleStyle: {
        alignSelf: 'center',
        color: Colors.darkGray,
    },
};
