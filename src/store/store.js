import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// createStore = configureStore
// createStore is deprecated
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { loggerMiddleware } from "./middleware/logger";

// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";


const persisiConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();


const persistedReducer = persistReducer(persisiConfig, rootReducer);

// const middleWares = [loggerMiddleware];
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
].filter(Boolean);

const composeEnhancet =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);