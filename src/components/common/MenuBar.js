import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const MenuBar = () => {
    return (
        <View>
            <Icon name="rocket" size={80} color="#bf1313" />
            <Text>Menu Bar</Text>
        </View>
    );
};
