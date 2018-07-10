export const resetPassword = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: { success: true, email },
            });
        }, 3000);
    });
};
