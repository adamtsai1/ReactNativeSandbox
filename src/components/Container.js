import React from 'react';
import { View } from 'react-native';

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
