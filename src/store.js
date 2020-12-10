import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import authReducer from "./reducers/reducerAuth";
import {authMiddleware} from "./middelwares/authMiddleware";
import {regMiddleware} from "./middelwares/regMiddleware";
import {profileMiddleware} from "./middelwares/profileMiddleware";
import profileReducer from "./reducers/reducerProfile";



export default createStore(
    combineReducers({auth: authReducer, profile:profileReducer}),
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(profileMiddleware),
        applyMiddleware(regMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)
