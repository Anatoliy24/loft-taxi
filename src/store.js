import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import authReducer from "./reducers/reducerAuth";
import {authMiddleware} from "./middelwares/authMiddleware";
import {regMiddleware} from "./middelwares/regMiddleware";
import {profileMiddleware} from "./middelwares/profileMiddleware";
import profileReducer from "./reducers/reducerProfile";



// export default  combineReducers({auth: authReducer, profile:profileReducer})

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


// import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import {authMiddleware} from "./middelwares/authMiddleware";
// import {profileMiddleware} from "./middelwares/profileMiddleware";
// import {regMiddleware} from "./middelwares/regMiddleware";
// import authReducer from "./reducers/reducerAuth";
// import profileReducer from "./reducers/reducerProfile";
//
//
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist:['auth', 'profile'],
//     blacklist:[],
// }
//
// const persistedReducer = persistReducer(
//     persistConfig,
//     combineReducers({
//         auth: authReducer,
//         profile:profileReducer
//     })
// )
//
// let store = createStore(persistedReducer,
//     compose(
//         applyMiddleware(authMiddleware),
//         applyMiddleware(profileMiddleware),
//         applyMiddleware(regMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__
//         && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )
// let persistor = persistStore(store)
//
// const getPersistor = () => persistor;
// const getStore = () => store;
// const getState = () => {
//     return store.getState();
// };
// export {
//     getStore,
//     getState,
//     getPersistor
// };