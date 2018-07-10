import { combineReducers } from 'redux';
import {
    API_ERROR,
    API_REQUEST,
    API_SUCCESS,
} from '../actions/appActionTypes';

const INITIAL_STATE = {
    loading: false,
};

const loading = (state = INITIAL_STATE.loading, action) => {
    switch (action.type) {
        case API_ERROR:
            return false;

        case API_REQUEST:
            return true;

        case API_SUCCESS:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    loading,
});
