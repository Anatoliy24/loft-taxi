import {

    GET_LOGGED_IN,
    GET_LOGGED_OUT,
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE


} from '../actions/actionAuth';
import {PROFILE_DATA_SAVE} from "../actions/actionProfile";

const initialState = {
    nameUser:'',
    numberCard:'',
    dateCard:'',
    cvc:''
}

export default function profileReducer(state = initialState, action) {
    const reducers = {
        [PROFILE_DATA_SAVE]: (payload) => {
            return payload
        },

    //     [GET_LOGGED_OUT]: () => {
    //         return  {...state, isLoggedIn: false, messageError: false}
    //     },
    //     [FETCH_AUTH_REQUEST]:() => {
    //         return {...state, isFetching: true, isFetched: false}
    //     },
    //     [FETCH_AUTH_SUCCESS]:(payload) => {
    //         return {...state, isFetching: false, isFetched: true, token: payload}
    //     },
    //     [FETCH_AUTH_FAILURE]:(payload) => {
    //         return {...state, isFetching: true, isFetched: false,  error: payload}
    //     }
    //
    }

    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

