export const loggerMiddleware = (state: any) => (next: any) => (action: any) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log(`type:`, action.type);
    console.log(`payload:`, action.payload);
    console.log(`current state:`, state.getState());
  
    next(action);
  
    console.log(`next state`, state.getState());
  };