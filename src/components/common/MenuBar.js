// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { MenuIcon } from './MenuIcon';

// App
import { changeActiveTab } from '../../actions/appActions';

class MenuBarComponent extends Component {
    setActiveTab(tabName) {
        debugger

        this.props.changeActiveTab(tabName);
    }

    render() {
        const { containerStyle } = styles;
        const getIsIconActive = (tabName) => this.props.activeTab === tabName;

        return (
            <View style={containerStyle}>
                <MenuIcon
                    active={getIsIconActive('dashboard')}
                    iconLabel="Dashboard"
                    iconName="tachometer"
                    onPress={() => this.setActiveTab('dashboard')}
                />

                <MenuIcon
                    active={getIsIconActive('request')}
                    iconLabel="Request Time Off"
                    iconName="calendar"
                    onPress={() => this.setActiveTab('request')}
                />

                <MenuIcon
                    active={getIsIconActive('history')}
                    iconLabel="History"
                    iconName="history"
                    onPress={() => this.props.changeActiveTab('history')}
                />

                <MenuIcon
                    iconLabel="Settings"
                    iconName="bars"
                />
            </View>
        );
    }
}

MenuBarComponent.propTypes = {
    activeTab: PropTypes.string,
    changeActiveTab: PropTypes.func,
};

const styles = {
    containerStyle: {
        backgroundColor: '#555',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
};

const mapStateToProps = (state) => ({
    activeTab: state.app.activeTab,
});

export const MenuBar = connect(mapStateToProps, { changeActiveTab })(MenuBarComponent);
