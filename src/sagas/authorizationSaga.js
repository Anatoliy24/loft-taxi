import {takeLatest, call, put} from 'redux-saga/effects'
import {FETCH_AUTH_REQUEST, FETCH_AUTH_SUCCESS, fetchAuthFailure} from "../actions/authAction";
import * as api from "../api"


function* handleAuthSaga(action) {
    try {
        const response = yield call(api.authorize, action.payload);
        if (response) {
            yield put({type: FETCH_AUTH_SUCCESS, payload: response.token})
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', response.token);
        }

    } catch (error) {
        console.log(error)
        yield put(fetchAuthFailure())
    }
}

export function* authorizationSaga() {
    yield takeLatest(FETCH_AUTH_REQUEST, handleAuthSaga)
}