import React from 'react';
import {PROFILE_DATA_SAVE} from "../actions/profileAction";
import profileReducer , {initialState} from "./profileReducer";


describe('authorization', () => {
    it('FETCH_AUTH_REQUEST', () => {
        const action = {
            type: PROFILE_DATA_SAVE,
            payload: {
                nameUser: '',
                numberCard: '',
                expiryDate:'',
                cvc:''
            }

        }
        expect(profileReducer(initialState, action)).toEqual({
            nameUser: action.payload.nameUser,
            numberCard: action.payload.numberCard,
            expiryDate: action.payload.expiryDate,
            cvc: action.payload.cvc
        })
    })

})
