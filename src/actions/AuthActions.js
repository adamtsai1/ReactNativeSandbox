import { CHANGE_PASSWORD_TEXT, CHANGE_USER_NAME_TEXT } from './actionTypes';

export const changePasswordText = (password) => {
    return {
        type: CHANGE_PASSWORD_TEXT,
        payload: password,
    };
};

export const changeUserNameText = (userName) => {
    return {
        type: CHANGE_USER_NAME_TEXT,
        payload: userName,
    };
};
