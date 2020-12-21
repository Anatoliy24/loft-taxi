import {FETCH_ROUTING_SUCCESS} from "../actions/routeAction";

export const initialState = {
    coordinates: []
}

export default function routingReducer(state = initialState, action) {
    const reducers = {
        [FETCH_ROUTING_SUCCESS]: (payload) => {
            return {...state, coordinates: payload}
        },
    }
    if (reducers[action.type]) {
        return reducers[action.type](action.payload);
    }
    return state
}

