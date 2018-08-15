import { combineReducers } from 'redux';
import {
    DAYS_OUT_CHANGE,
    DAYS_USED_CHANGE,
    DETAILS_CHANGE,
    END_DATE_CHANGE,
    MANAGER_COMMENTS_CHANGE,
    RETURN_DATE_CHANGE,
    START_DATE_CHANGE,
    TIME_OFF_REQUEST_MODEL_LOAD,
} from '../actions/timeOffFormActionTypes';

const INITIAL_STATE = {
    daysOut: 0,
    daysUsed: 0,
    details: '',
    endDate: null,
    managerComments: '',
    returnDate: null,
    startDate: null,
};

const daysOut = (state = INITIAL_STATE.daysOut, action) => {
    switch (action.type) {
        case DAYS_OUT_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.days_out;

        default:
            return state;
    }
};

const daysUsed = (state = INITIAL_STATE.daysUsed, action) => {
    switch (action.type) {
        case DAYS_USED_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.days_used;

        default:
            return state;
    }
};

const details = (state = INITIAL_STATE.details, action) => {
    switch (action.type) {
        case DETAILS_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.details;

        default:
            return state;
    }
};

const endDate = (state = INITIAL_STATE.endDate, action) => {
    switch (action.type) {
        case END_DATE_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.end_date;

        default:
            return state;
    }
};

const managerComments = (state = INITIAL_STATE.managerComments, action) => {
    switch (action.type) {
        case MANAGER_COMMENTS_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.manager_comments;

        default:
            return state;
    }
};

const returnDate = (state = INITIAL_STATE.returnDate, action) => {
    switch (action.type) {
        case RETURN_DATE_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.return_date;

        default:
            return state;
    }
};

const startDate = (state = INITIAL_STATE.startDate, action) => {
    switch (action.type) {
        case START_DATE_CHANGE:
            return action.payload;

        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.start_date;

        default:
            return state;
    }
};

export default combineReducers({
    daysOut,
    daysUsed,
    details,
    endDate,
    managerComments,
    returnDate,
    startDate,
});
