import React from 'react';
import { View } from 'react-native';

/* eslint-disable import/prefer-default-export */
export const Page = ({ children }) => {
    const { pageStyle } = styles;
    return (
        <View style={pageStyle}>
            {children}
        </View>
    );
};

const styles = {
    pageStyle: {
        backgroundColor: '#fff',
        padding: 10,
    },
};
