import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// App
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
    render() {
        const loggerMiddleware = createLogger();
        const store = createStore(
            reducers,
            {},
            applyMiddleware(
                ReduxThunk,
                // loggerMiddleware,
            ));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
};
