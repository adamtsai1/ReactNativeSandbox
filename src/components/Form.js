import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export const Form = ({ children, style }) => {
    return (
        <View style={[style, { marginBottom: 26 }]}>{children}</View>
    );
};

Form.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};
