// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

// App
import { incrementSplashCounter } from '../actions/appActions';
import { setAuthToken } from '../actions/authActions';

class SplashPage extends Component {
    constructor() {
        super();
        this.holdTime = 1;
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

        const routeName = this.props.authToken.length > 0 ? 'Dashboard' : 'Login';
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })],
        });
        this.props.navigation.dispatch(resetAction);
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

SplashPage.propTypes = {
    // Dependencies,
    navigation: PropTypes.object,

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

export default connect(mapStateToProps, {
    incrementSplashCounter,
    setAuthToken,
})(SplashPage);
