import {
    PROFILE_DATA_SAVE,
} from "../actions/actionProfile";

export const profileMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === PROFILE_DATA_SAVE) {
        const dataProfile = {
            username: action.payload.nameUser,
            numberCard: action.payload.numberCard,
            dateCard: action.payload.dateCard,
            cvc: action.payload.cvc
        }

    }
    return result;
};