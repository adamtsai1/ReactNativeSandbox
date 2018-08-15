import { combineReducers } from 'redux';
import {
    DETAILS_CHANGE,
    END_DATE_CHANGE,
    RETURN_DATE_CHANGE,
    START_DATE_CHANGE,
} from '../actions/timeOffFormActionTypes';

const INITIAL_STATE = {
    details: '',
    endDate: null,
    returnDate: null,
    startDate: null,
};

const details = (state = INITIAL_STATE.details, action) => {
    switch (action.type) {
        case DETAILS_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const endDate = (state = INITIAL_STATE.endDate, action) => {
    switch (action.type) {
        case END_DATE_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const returnDate = (state = INITIAL_STATE.returnDate, action) => {
    switch (action.type) {
        case RETURN_DATE_CHANGE:
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
    details,
    endDate,
    returnDate,
    startDate,
});
