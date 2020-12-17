import {takeLatest, call, put} from "redux-saga/effects";
import * as api from "../api"
import {FETCH_ROUTING_REQUEST, FETCH_ROUTING_SUCCESS} from "../actions/routeAction";


function* handleGetRoutingSaga(action) {
    const coordinates = {addressFrom: action.payload.addressFrom, addressTo: action.payload.addressTo}

    try {
        const response = yield call(api.getRouting, coordinates.addressFrom, coordinates.addressTo);
        yield put({type: FETCH_ROUTING_SUCCESS, payload: response})

    } catch (error) {
        console.log(error)
    }


}

export function* routingSaga() {
    yield takeLatest(FETCH_ROUTING_REQUEST, handleGetRoutingSaga)
}