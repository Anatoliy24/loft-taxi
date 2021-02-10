import {
    FETCH_REG_FAILURE,
    FETCH_REG_SUCCESS

} from '../actions/authAction';

export const initialState = {
    messageError: false,
    error: '',
}


export default function regReducer(state = initialState, action) {
    const reducers = {
        [FETCH_REG_SUCCESS]: () => {
            return {...state, messageError: false}
        },
        [FETCH_REG_FAILURE]: (payload) => {
            return {...state, messageError: true, error: payload}
        }

    }

    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

