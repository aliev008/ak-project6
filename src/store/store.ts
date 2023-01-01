import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (state: any) => (next: any) => (action: any) => {
    if (!action.type) {
        return next(action);
    }

    console.log(`type:`, action.type);
    console.log(`payload:`, action.payload);
    console.log(`current state:`, state.getState());

    next(action);

    console.log(`next state`, state.getState());
}

// const middlewares = [logger];
const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);