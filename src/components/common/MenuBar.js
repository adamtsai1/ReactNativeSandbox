// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { MenuIcon } from './MenuIcon';

// App
import { changeActiveTab } from '../../actions/appActions';

class MenuBarComponent extends Component {
    changeActiveTab(tabName) {
        this.props.changeActiveTab(tabName);
        this.props.navigate(tabName);
    }

    render() {
        const { containerStyle } = styles;
        const getIsIconActive = (tabName) => this.props.activeTab === tabName;

        return (
            <View style={containerStyle}>
                <MenuIcon
                    active={getIsIconActive('Dashboard')}
                    iconLabel="Dashboard"
                    iconName="tachometer"
                    onPress={() => this.changeActiveTab('Dashboard')}
                />

                <MenuIcon
                    active={getIsIconActive('Request')}
                    iconLabel="Request Time Off"
                    iconName="calendar"
                    onPress={() => this.changeActiveTab('Request')}
                />

                <MenuIcon
                    active={getIsIconActive('RequestHistory')}
                    iconLabel="History"
                    iconName="history"
                    onPress={() => this.changeActiveTab('RequestHistory')}
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
    navigate: PropTypes.func,
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
