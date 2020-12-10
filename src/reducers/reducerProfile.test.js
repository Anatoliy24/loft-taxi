import React from 'react';
import {PROFILE_DATA_SAVE} from "../actions/actionProfile";
import profileReducer , {initialState} from "./reducerProfile";


describe('authorization', () => {
    it('FETCH_AUTH_REQUEST', () => {
        const action = {
            type: PROFILE_DATA_SAVE,
            payload: {
                nameUser: '',
                numberCard: '',
                dateCard:'',
                cvc:''
            }

        }
        expect(profileReducer(initialState, action)).toEqual({
            nameUser: action.payload.nameUser,
            numberCard: action.payload.numberCard,
            dateCard: action.payload.dateCard,
            cvc: action.payload.cvc
        })
    })

})
