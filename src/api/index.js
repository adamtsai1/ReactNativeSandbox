// -----------------------------
// Public
// -----------------------------

export const login = (userName, password) => {
    return simulateDelay(2000).then(() => {
        if (userName === 'adam.tsai@fostermade.co' && password === 'test') {
            return {
                data: {
                    token: 'ABC123',
                },
            };
        }

        throw new Error('Invalid credentials.');
    });
};

export const resetPassword = (email) => {
    return simulateDelay(2000).then(() => ({ data: { success: true, email } }));
};


// -----------------------------
// Private
// -----------------------------

const simulateDelay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
