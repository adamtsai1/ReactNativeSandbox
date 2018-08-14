import React from 'react';
import { View } from 'react-native';

export const FormRow = ({ children }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            {children}
        </View>
    );
};
