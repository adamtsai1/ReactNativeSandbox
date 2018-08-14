import {
    END_DATE_CHANGE,
    START_DATE_CHANGE,
} from './timeOffFormActionTypes';

export const changeEndDateValue = (endDate) => ({
    type: END_DATE_CHANGE,
    payload: endDate,
});

export const changeStartDateValue = (startDate) => ({
    type: START_DATE_CHANGE,
    payload: startDate,
});
