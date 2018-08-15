import { simulateDelay } from './common';

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(500).then(() => {
        if (type === 'pending') {
            return {
                data: [{
                    id: 1,
                    start_date: '2018-11-1',
                    end_date: '2018-11-3',
                    total_days: 3,
                    total_hours: 24,
                    status: 'pending',
                    details: 'Going out of town',
                    managerComments: '',
                }, {
                    id: 2,
                    start_date: '2018-12-20',
                    end_date: '2018-12-20',
                    total_days: 1,
                    total_hours: 8,
                    status: 'pending',
                    details: 'Doctor appointment',
                    managerComments: '',
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
                    details: 'Vacation',
                    managerComments: 'Approved',
                }, {
                    id: 4,
                    start_date: '2018-10-10',
                    end_date: '2018-10-10',
                    total_days: 1,
                    total_hours: 8,
                    status: 'approved',
                    details: 'Moving',
                    managerComments: 'Have fun',
                }],
            };
        }
    });
};
