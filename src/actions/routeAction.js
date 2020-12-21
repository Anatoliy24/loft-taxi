import {createAction} from 'redux-actions';


export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

export const FETCH_ROUTING_REQUEST = 'FETCH_ROUTING_REQUEST';
export const FETCH_ROUTING_SUCCESS = 'FETCH_ROUTING_SUCCESS';
export const FETCH_ROUTING_FAILURE = 'FETCH_ROUTING_FAILURE';

export const fetchAddressRequest = createAction(FETCH_ADDRESS_REQUEST);
export const fetchAddressSuccess = createAction(FETCH_ADDRESS_SUCCESS);
export const fetchAddressFailure = createAction(FETCH_ADDRESS_FAILURE);

export const fetchRoutingRequest = createAction(FETCH_ROUTING_REQUEST);
export const fetchRoutingSuccess = createAction(FETCH_ROUTING_SUCCESS);
export const fetchRoutingFailure = createAction(FETCH_ROUTING_FAILURE);



