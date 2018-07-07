import React from 'react';
import { View } from 'react-native';

/* eslint-disable import/prefer-default-export */
export const Container = ({ children, style }) => {
    const { containerStyle } = styles;
    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
    },
};
