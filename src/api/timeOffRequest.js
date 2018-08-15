import { simulateDelay } from './common';

export const fetchTimeOffRequests = (userId, type) => {
    return simulateDelay(500).then(() => {
        if (type === 'pending') {
            return {
                data: [{
                    id: 1,
                    start_date: new Date(2018, 10, 1),
                    end_date: new Date(2018, 10, 3),
                    return_date: new Date(2018, 10, 4),
                    days_out: 3,
                    days_used: 3,
                    status: 'pending',
                    details: 'Going out of town',
                    manager_comments: '',
                }, {
                    id: 2,
                    start_date: new Date(2018, 11, 20),
                    end_date: new Date(2018, 11, 20),
                    return_date: new Date(2018, 11, 21),
                    days_out: 1,
                    days_used: 1,
                    status: 'pending',
                    details: 'Doctor appointment',
                    manager_comments: '',
                }],
            };
        } else if (type === 'upcoming') {
            return {
                data: [{
                    id: 3,
                    start_date: new Date(2018, 9, 18),
                    end_date: new Date(2018, 9, 19),
                    return_date: new Date(2018, 9, 20),
                    days_out: 2,
                    days_used: 2,
                    status: 'approved',
                    details: 'Vacation',
                    manager_comments: 'Approved',
                }, {
                    id: 4,
                    start_date: new Date(2018, 10, 10),
                    end_date: new Date(2018, 10, 10),
                    return_date: new Date(2018, 10, 11),
                    days_out: 1,
                    days_used: 1,
                    status: 'approved',
                    details: 'Moving',
                    manager_comments: 'Have fun',
                }],
            };
        }
    });
};
