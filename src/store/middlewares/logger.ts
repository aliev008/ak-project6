import { RootState } from "../store";
import { Middleware } from 'redux';

export const loggerMiddleware: Middleware<{}, RootState> = (state) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log(`type:`, action.type);
    console.log(`payload:`, action.payload);
    console.log(`current state:`, state.getState());
  
    next(action);
  
    console.log(`next state`, state.getState());
  };