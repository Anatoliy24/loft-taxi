import { createAction, handleActions, combineActions } from 'redux-actions';



export const GET_LOGGED_OUT = 'GET_LOGGED_OUT';

export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST:';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';

export const FETCH_REG_REQUEST = 'FETCH_REG_REQUEST:';
export const FETCH_REG_SUCCESS = 'FETCH_REG_SUCCESS';
export const FETCH_REG_FAILURE = 'FETCH_REG_FAILURE';



export const getLoggetOut = createAction(GET_LOGGED_OUT);
export const fetchAuthRequest = createAction(FETCH_AUTH_REQUEST);
export const fetchAuthSuccess = createAction(FETCH_AUTH_SUCCESS);
export const fetchAuthFailure = createAction(FETCH_AUTH_FAILURE);



export const fetchRegRequest = createAction(FETCH_REG_REQUEST);
export const fetchRegSuccess = createAction(FETCH_REG_SUCCESS);
export const fetchRegFailure = createAction(FETCH_REG_FAILURE);