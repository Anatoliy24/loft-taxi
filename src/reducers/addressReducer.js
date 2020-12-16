import {FETCH_ADDRESS_SUCCESS} from "../actions/routeAction";

export const initialState = {
    addressItems: []
}

export default function addressReducer(state = initialState, action) {
    const reducers = {
        [FETCH_ADDRESS_SUCCESS]: (payload) => {
            return  {...state, addressItems:payload}
            // console.log('payload', payload)

        },
    }

    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

