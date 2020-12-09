import {PROFILE_DATA_SAVE} from "../actions/actionProfile";

const initialState = {
    nameUser: localStorage.getItem('nameUser'),
    numberCard: localStorage.getItem('numberCard'),
    dateCard:localStorage.getItem('dateCard'),
    cvc:localStorage.getItem('cvc')




}

export default function profileReducer(state = initialState, action) {
    const reducers = {
        [PROFILE_DATA_SAVE]: (payload) => {
            return payload
        },
    }

    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

