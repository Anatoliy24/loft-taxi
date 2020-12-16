import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../api"
import {FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS} from "../actions/routeAction";




function* handleFetchAddressSaga(action) {
    try {
        const response = yield call(api.fetchAddressList);
        yield put({type:FETCH_ADDRESS_SUCCESS, payload:response.addresses})

    }catch (error){
        console.log(error)
    }


}

export function* fetchAddressSaga() {
    yield takeLatest(FETCH_ADDRESS_REQUEST, handleFetchAddressSaga)
}