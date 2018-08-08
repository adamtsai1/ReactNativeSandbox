import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const MenuIcon = ({ active, iconLabel, iconName }) => {
    const { containerStyle, iconStyle, textStyle } = styles;
    const iconColor = active ? '#fff' : '#d1de3a';
    const updatedTextStyle = { ...textStyle, color: active ? '#fff' : textStyle.color };

    return (
        <View style={containerStyle}>
            <Icon
                name={iconName}
                size={28}
                style={iconStyle}
                color={iconColor}
            />
            <Text style={updatedTextStyle}>{iconLabel}</Text>
        </View>
    );
};

MenuIcon.propTypes = {
    active: PropTypes.bool,
    iconLabel: PropTypes.string,
    iconName: PropTypes.string,
};

const styles = {
    containerStyle: {
        width: 64,
    },
    iconStyle: {
        alignSelf: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#d1de3a',
        fontSize: 12,
        marginTop: 4,
    },
};
