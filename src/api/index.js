// -----------------------------
// Public
// -----------------------------

export const login = (userName, password) => {
    return simulateDelay(2000).then(() => ({ data: { token: 'ABC123' }}));
};

export const resetPassword = (email) => {
    return simulateDelay(2000).then(() => ({ data: { success: true, email }}));
};


// -----------------------------
// Private
// -----------------------------

const simulateDelay = (delay) => {
    return new Promise((resolve, reject) => {
        resolve();
    }, delay);
};
