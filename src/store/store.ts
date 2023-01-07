import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga"; 
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: any = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
