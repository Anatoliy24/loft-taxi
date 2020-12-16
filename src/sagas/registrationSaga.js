import {call, put, takeLatest} from "redux-saga/effects";
import * as api from "../api";
import {FETCH_REG_REQUEST, fetchRegRequest, fetchRegSuccess} from "../actions/authAction";

function* handleRegSaga(action) {
    const dataReg = {email: action.payload.email, password: action.payload.password, name: action.payload.name, surname: action.payload.surName}
    try {
        const response = yield call(api.registration, dataReg);
        console.log(response)
        alert('Регистрация успешно выполнена')

    }catch (error){
        console.log(error)
        alert('Произошел сбой' + error)

    }


}

export function* registrationSaga() {
    yield takeLatest(FETCH_REG_REQUEST, handleRegSaga)
}