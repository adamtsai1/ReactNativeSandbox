import { combineReducers } from 'redux';
import {
    END_DATE_CHANGE,
    START_DATE_CHANGE,
} from '../actions/timeOffFormActionTypes';

const INITIAL_STATE = {
    endDate: null,
    startDate: null,
};

const endDate = (state = INITIAL_STATE.endDate, action) => {
    switch (action.type) {
        case END_DATE_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const startDate = (state = INITIAL_STATE.startDate, action) => {
    switch (action.type) {
        case START_DATE_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

export default combineReducers({
    endDate,
    startDate,
});
