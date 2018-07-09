import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

export const Page = ({ children, title }) => {
    const {
        headerStyle,
        innerPageStyle,
        outerPageStyle,
    } = styles;

    return (
        <View style={outerPageStyle}>
            <Text style={headerStyle}>{title}</Text>

            <View style={innerPageStyle}>
                {children}
            </View>
        </View>
    );
};

Page.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
};

const styles = {
    headerStyle: {
        backgroundColor: '#d1de3a',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        padding: 10,
        textAlign: 'center',
    },
    innerPageStyle: {
        padding: 10,
    },
    outerPageStyle: {
        backgroundColor: '#fff',
    },
};
