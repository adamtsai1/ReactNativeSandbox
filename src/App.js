import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// App
import reducers from './reducers';
import Router from './Router';
import './ReactotronConfig';

export default class App extends Component {
    render() {
        const loggerMiddleware = createLogger();
        const store = Reactotron.createStore(
            reducers,
            {},
            applyMiddleware(
                ReduxThunk,
                loggerMiddleware,
            ));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
