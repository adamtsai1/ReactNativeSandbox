import { simulateDelay } from './common';

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(2000).then(() => {
        if (type === 'pending') {
            return {
                data: [{
                    start_date: '2018-11-1',
                    end_date: '2018-11-3',
                    total_days: 3,
                    total_hours: 24,
                }, {
                    start_date: '2018-12-20',
                    end_date: '2018-12-20',
                    total_days: 1,
                    total_hours: 8,
                }],
            };
        } else if (type === 'upcoming') {
            return {
                data: [{
                    start_date: '2018-9-18',
                    end_date: '2018-9-19',
                    total_days: 2,
                    total_hours: 16,
                }, {
                    start_date: '2018-10-10',
                    end_date: '2018-10-10',
                    total_days: 1,
                    total_hours: 8,
                }],
            };
        }
    });
};
