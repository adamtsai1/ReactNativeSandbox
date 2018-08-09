// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

// App
import { incrementSplashCounter } from '../../../actions/appActions';
import { setAuthToken } from '../../../actions/authActions';
import AppNavigationService from '../../../AppNavigationService';

class SplashPageComponent extends Component {
    constructor() {
        super();
        this.holdTime = 2;
    }

    componentDidMount() {
        AsyncStorage.getItem('auth_token')
            .then(item => {
                if (item) {
                    Reactotron.log(`Auth token: ${item}`);
                    Reactotron.display({
                        name: 'Oh hi',
                        important: true,
                        preview: 'this is a test',
                        value: { a: 1, b: 2, c: 3 },
                        image: 'http://placekitten.com/g/400/400',
                    });

                    this.props.setAuthToken(item);
                } else {
                    this.forceUpdate(); // To trigger componentDidUpdate
                }
            });
    }

    componentDidUpdate() {
        if (this.props.splashCounter < this.holdTime) {
            setTimeout(() => {
                this.props.incrementSplashCounter();
            }, 1000);

            return;
        }

        const flowName = this.props.authToken.length > 0 ? 'Main' : 'Auth';
        AppNavigationService.navigate(flowName);
    }

    render() {
        if (this.props.splashCounter < this.holdTime) {
            const { containerStyle, textStyle } = styles;
            return (
                <View style={containerStyle}>
                    <Text style={textStyle}>Loading...</Text>
                    <Text style={{ alignSelf: 'center' }}>Auth Token: {this.props.authToken}</Text>
                    <Text style={{ alignSelf: 'center' }}>Splash counter: {this.props.splashCounter}</Text>
                </View>
            );
        }

        return <View />;
    }
}

SplashPageComponent.propTypes = {
    // Dependencies,
    screenProps: PropTypes.object,

    // Properties
    authToken: PropTypes.string,
    splashCounter: PropTypes.number,

    // Functions
    incrementSplashCounter: PropTypes.func,
    setAuthToken: PropTypes.func,
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
    },
};

const mapStateToProps = (state) => ({
    authToken: state.auth.authToken,
    splashCounter: state.app.splashCounter,
});

export const SplashPage = connect(mapStateToProps, {
    incrementSplashCounter,
    setAuthToken,
})(SplashPageComponent);
