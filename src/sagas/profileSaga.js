import {takeLatest, call} from "redux-saga/effects";
import * as api from "../api"
import {PROFILE_DATA_SAVE} from "../actions/profileAction";


function* handleSaveProfileSaga(action) {
    try {
        const response = yield call(api.saveProfile, action.payload);
    } catch (error) {
        console.log(error)
    }
}

export function* profileSaga() {
    yield takeLatest(PROFILE_DATA_SAVE, handleSaveProfileSaga)
}