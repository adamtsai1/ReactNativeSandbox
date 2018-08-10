import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export const PageBody = ({ children, style }) => {
    const { containerStyle } = styles;

    return (
        <View style={[style, containerStyle]}>
            {children}
        </View>
    );
};

PageBody.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

const styles = {
    containerStyle: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
    },
};
