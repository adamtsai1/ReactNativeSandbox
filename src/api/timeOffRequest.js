import moment from 'moment/src/moment';
import { simulateDelay } from './common';
import timeOffRequests from '../data/timeOffRequests.json';

let lastId = timeOffRequests.data.reduce((highestId, timeOffRequest) => (timeOffRequest.id > highestId ? timeOffRequest.id : highestId), 0);

export const createTimeOffRequest = (timeOffRequestValues) => {
    return simulateDelay(500).then(() => {
        lastId += 1;
        return {
            data: { ...timeOffRequestValues, id: lastId },
        };
    });
};

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(500).then(() => ({
        data: timeOffRequests.data
            .filter(timeOffRequest => timeOffRequest.status === type)
            .map(timeOffRequest => transform(timeOffRequest)),
    }));
};

const transform = (timeOffRequest) => ({
    ...timeOffRequest,
    start_date: moment(timeOffRequest.start_date, 'YYYY-MM-DD').utc().toDate(),
    end_date: moment(timeOffRequest.end_date, 'YYYY-MM-DD').utc().toDate(),
    return_date: moment(timeOffRequest.return_date, 'YYYY-MM-DD').utc().toDate(),
});
