import React from 'react';
import { Text } from 'react-native';

export const Label = ({ children, style }) => {
    return (
        <Text style={[style, { marginBottom: 4 }]}>
            {children}
        </Text>
    );
};
