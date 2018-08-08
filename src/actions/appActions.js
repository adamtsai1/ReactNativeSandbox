import { ACTIVE_TAB_CHANGE, SPLASH_COUNTER_INCREMENT } from './appActionTypes';

export const changeActiveTab = (pageName) => ({
    type: ACTIVE_TAB_CHANGE,
    payload: pageName,
});

export const incrementSplashCounter = () => ({
    type: SPLASH_COUNTER_INCREMENT,
});
