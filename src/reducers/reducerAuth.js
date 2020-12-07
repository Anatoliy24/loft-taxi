import {

    GET_LOGGED_IN,
    GET_LOGGED_OUT,
    FETCH_AUTH_REQUEST,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE


} from '../actions/actionAuth';

const initialState = {
    isLoggedIn: false,
    // email: '',
    // password: '',
    messageError:false,
    isFetching: false,
    isFetched: false,
    error:''
}
// const emailDefault = 'myemail@email';
// const passwordDefault = '123';

export default function authReducer(state = initialState, action) {
    const reducers = {
        // [GET_LOGGED_IN]: (payload) => {
        //     const isLoggedIn =  payload.email == emailDefault && payload.password == passwordDefault
        //     return {...state,  messageError: !isLoggedIn}
        // },

        [GET_LOGGED_OUT]: () => {
            return  {...state, isLoggedIn: false, messageError: false}
        },
        [FETCH_AUTH_REQUEST]:() => {
            return {...state, isFetching: true, isFetched: false}
        },
        [FETCH_AUTH_SUCCESS]:(payload) => {
            return {...state, isFetching: false, isLoggedIn: true, isFetched: true, token: payload}
        },
        [FETCH_AUTH_FAILURE]:(payload) => {
            return {...state, isFetching: true, isFetched: false,  error: payload}
        }

    }


    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

// function users(state = initialState, action) {
//
//     switch (action.type) {
//         case FETCH_USERS_REQUEST:
//             return {
//                 ...state,
//                 isFetching: true,
//                 isFetched: false
//             }
//         case FETCH_USERS_SUCCESS:
//             return {
//                 ...state,
//                 isFetched: true,
//                 isFetching: false,
//                 users: action.payload
//             }
//         case FETCH_USERS_FAILURE:
//             return {
//                 ...state,
//                 isFetched: true,
//                 isFetching: false,
//                 error: action.error
//             }
//         default:
//             return state;
//     }
// }

// export default ( users )