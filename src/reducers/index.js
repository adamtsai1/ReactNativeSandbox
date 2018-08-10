import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import timeOffReducer from './timeOffReducer';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    timeOff: timeOffReducer,
});
