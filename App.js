import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// App
import { LOGIN_SUCCESS } from './src/actions/authActionTypes';
import reducers from './src/reducers';
import Router from './src/Router';
import './src/ReactotronConfig';

class AppComponent extends Component {
    render() {
        const loggerMiddleware = createLogger();
        const store = Reactotron.createStore(
            reducers,
            {},
            applyMiddleware(
                ReduxThunk,
                loggerMiddleware,
            ));

        Reactotron.onCustomCommand('login', () => {
            const token = 'ABC123';
            AsyncStorage.setItem('auth_token', token);
            store.dispatch({ type: LOGIN_SUCCESS, payload: { token } });
        });

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

const App = Reactotron.overlay(AppComponent);
export default App;
