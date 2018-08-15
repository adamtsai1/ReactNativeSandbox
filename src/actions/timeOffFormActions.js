import {
    DETAILS_CHANGE,
    END_DATE_CHANGE,
    RETURN_DATE_CHANGE,
    START_DATE_CHANGE,
} from './timeOffFormActionTypes';

export const changeDetailsText = (details) => ({
    type: DETAILS_CHANGE,
    payload: details,
});

export const changeEndDateValue = (endDate) => ({
    type: END_DATE_CHANGE,
    payload: endDate,
});

export const changeReturnDateValue = (returnDate) => ({
    type: RETURN_DATE_CHANGE,
    payload: returnDate,
});

export const changeStartDateValue = (startDate) => ({
    type: START_DATE_CHANGE,
    payload: startDate,
});
