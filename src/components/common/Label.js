import React from 'react';
import { Text } from 'react-native';

export const Label = ({ children }) => {
    return (
        <Text style={{ marginBottom: 4 }}>
            {children}
        </Text>
    );
};
