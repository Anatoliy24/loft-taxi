import {PROFILE_DATA_SAVE} from "../actions/profileAction";
import {GET_LOGGED_OUT} from "../actions/authAction";

export const initialState = {
    nameUser: localStorage.getItem('nameUser'),
    numberCard: localStorage.getItem('numberCard'),
    expiryDate: localStorage.getItem('expiryDate'),
    cvc: localStorage.getItem('cvc'),
    token: localStorage.getItem('token')
}

export default function profileReducer(state = initialState, action) {
    const reducers = {
        [PROFILE_DATA_SAVE]: (payload) => {
            return payload
        },
        [GET_LOGGED_OUT]: () => {
            return {}
        },
    }

    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

