import {
    PROFILE_DATA_SAVE,
} from "../actions/profileAction";

export const profileMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === PROFILE_DATA_SAVE) {
        const dataProfile = {
            username: action.payload.nameUser,
            numberCard: action.payload.numberCard,
            expiryDate: action.payload.expiryDate,
            cvc: action.payload.cvc,
            token: action.payload.token
        }

    }
    return result;
};