// Dependencies
import React from 'react';
import { Dimensions, Image, View } from 'react-native';

// App
import { FM_TEXT_LOGO } from '../../images';

const win = Dimensions.get('window');
const Header = () => {
    const { containerStyle, logoStyle } = styles;
    return (
        <View style={containerStyle}>
            <Image source={FM_TEXT_LOGO} style={logoStyle} />
        </View>
    );
};

Header.propTypes = {};

export default Header;

const styles = {
    containerStyle: {},
    logoStyle: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 150,
    },
};
