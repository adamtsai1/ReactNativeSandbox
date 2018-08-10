import { simulateDelay } from './common';

export const login = (userName, password) => {
    return simulateDelay(2000).then(() => {
        if (userName.toUpperCase() === 'ADAM.TSAI@FOSTERMADE.CO' && password === 'test') {
            const token = 'ABC123';
            return { data: { token } };
        }

        throw new Error('Invalid credentials.');
    });
};

export const resetPassword = (email) => {
    return simulateDelay(2000).then(() => ({ data: { success: true, email } }));
};
