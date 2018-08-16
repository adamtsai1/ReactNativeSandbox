import { simulateDelay } from './common';
import timeOffRequests from '../data/timeOffRequests.json';

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(500).then(() => ({
        data: timeOffRequests.data.filter(timeOffRequest => timeOffRequest.status === type),
    }));
};
