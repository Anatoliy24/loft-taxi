
import { fork, all} from "redux-saga/effects";
import {profileSaga} from "./profileSaga";
import {authorizationSaga} from "./authorizationSaga";
import {registrationSaga} from "./registrationSaga";
import {fetchAddressSaga} from "./addressListSaga";
import {routingSaga} from "./routingSaga";


export default function* rootSaga() {
    yield all([
        fork(profileSaga),
        fork(authorizationSaga),
        fork(registrationSaga),
        fork(fetchAddressSaga),
        fork(routingSaga),
    ]);


}