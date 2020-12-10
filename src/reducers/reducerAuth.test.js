import React from 'react';
import {FETCH_AUTH_FAILURE, FETCH_AUTH_REQUEST, FETCH_AUTH_SUCCESS, GET_LOGGED_OUT} from "../actions/actionAuth";
import authReducer, {initialState} from "./reducerAuth";


describe('authorization', () => {
    it('FETCH_AUTH_REQUEST', () => {
        const action = {
            type: FETCH_AUTH_REQUEST
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
            isFetching: true,
        })
    })
    it('FETCH_AUTH_SUCCESS', () => {
        const action = {
            type: FETCH_AUTH_SUCCESS,
            payload:''
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: true,
            isFetched: true,
            token:action.payload
        })
    })
    it('FETCH_AUTH_FAILURE', () => {
        const action = {
            type: FETCH_AUTH_FAILURE,
            payload:'Ошибка авторизации'
        }
        expect(authReducer(initialState, action)).toEqual({
            isLoggedIn: false,
            messageError:true,
            isFetching: true,
            isFetched: false,
            error:action.payload,
        })
    })
    it('GET_LOGGED_OUT', () => {
        const action = {
            type: GET_LOGGED_OUT
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
        })
    })
})
