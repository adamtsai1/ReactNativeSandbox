import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const MenuIcon = ({ iconName, tintColor, onPress }) => {
    const { containerStyle, iconStyle } = styles;

    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name={iconName}
                    size={28}
                    style={iconStyle}
                    color={tintColor}
                />
            </TouchableOpacity>
        </View>
    );
};

MenuIcon.propTypes = {
    iconName: PropTypes.string,
    tintColor: PropTypes.string,
    onPress: PropTypes.func,
};

const styles = {
    containerStyle: {
        width: 64,
    },
    iconStyle: {
        alignSelf: 'center',
    },
};
