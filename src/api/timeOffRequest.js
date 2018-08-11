import { simulateDelay } from './common';

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(2000).then(() => {
        if (type === 'pending') {
            return {
                data: [{
                    id: 1,
                    start_date: '2018-11-1',
                    end_date: '2018-11-3',
                    total_days: 3,
                    total_hours: 24,
                    status: 'pending',
                }, {
                    id: 2,
                    start_date: '2018-12-20',
                    end_date: '2018-12-20',
                    total_days: 1,
                    total_hours: 8,
                    status: 'pending',
                }],
            };
        } else if (type === 'upcoming') {
            return {
                data: [{
                    id: 3,
                    start_date: '2018-9-18',
                    end_date: '2018-9-19',
                    total_days: 2,
                    total_hours: 16,
                    status: 'approved',
                }, {
                    id: 4,
                    start_date: '2018-10-10',
                    end_date: '2018-10-10',
                    total_days: 1,
                    total_hours: 8,
                    status: 'approved',
                }],
            };
        }
    });
};
