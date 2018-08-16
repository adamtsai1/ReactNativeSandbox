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
    TIME_OFF_REQUEST_MODEL_RESET,
} from '../actions/timeOffFormActionTypes';

const INITIAL_STATE = {
    daysOut: 0,
    daysUsed: 0,
    details: '',
    endDate: null,
    id: 0,
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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.daysOut;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.daysUsed;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.details;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.endDate;

        default:
            return state;
    }
};

const id = (state = INITIAL_STATE.id, action) => {
    switch (action.type) {
        case TIME_OFF_REQUEST_MODEL_LOAD:
            return action.payload.id;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.managerComments;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.returnDate;

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

        case TIME_OFF_REQUEST_MODEL_RESET:
            return INITIAL_STATE.startDate;

        default:
            return state;
    }
};

export default combineReducers({
    daysOut,
    daysUsed,
    details,
    endDate,
    id,
    managerComments,
    returnDate,
    startDate,
});
