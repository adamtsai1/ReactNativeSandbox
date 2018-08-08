// Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

// Components
import { MenuIcon } from './MenuIcon';

export const MenuBar = ({ activeTab }) => {
    const { containerStyle } = styles;

    const getIsIconActive = (tabName) => {
        return activeTab === tabName;
    };

    return (
        <View style={containerStyle}>
            <MenuIcon active={getIsIconActive('dashboard')} iconLabel="Dashboard" iconName="tachometer" />
            <MenuIcon iconLabel="Request Time Off" iconName="calendar" />
            <MenuIcon iconLabel="History" iconName="history" />
            <MenuIcon iconLabel="Settings" iconName="bars" />
        </View>
    );
};

MenuBar.propTypes = {
    activeTab: PropTypes.string,
};

const styles = {
    containerStyle: {
        backgroundColor: '#555',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
};
