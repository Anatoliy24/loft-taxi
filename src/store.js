import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import authReducer from "./reducers/authReducer";
import {authMiddleware} from "./middelwares/authMiddleware";
import {regMiddleware} from "./middelwares/regMiddleware";
import {profileMiddleware} from "./middelwares/profileMiddleware";
import profileReducer from "./reducers/profileReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
import addressReducer from "./reducers/addressReducer";
import routingReducer from "./reducers/routingReducer";

const sagaMiddleware = createSagaMiddleware();


export default createStore(
    combineReducers({
        auth: authReducer,
        profile:profileReducer,
        addressList: addressReducer,
        routingMap: routingReducer
    }),
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)
sagaMiddleware.run(rootSaga);