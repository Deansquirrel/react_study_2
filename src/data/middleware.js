export const ywMiddleware = store => next => action => {
    // console.log("============ywMiddleware================");
    // console.log(action);
    // let result = next(action);
    // console.log("============ywMiddleware================");
    // return result;
    return next(action);
} ;

export const loggerMiddleware = store => next => action => {
    // console.log("============loggerMiddleware================");
    // console.log(store.getState().global);
    // console.log("============================================");
    // let result = next(action);
    // console.log(store.getState().global);
    // console.log("============loggerMiddleware================");
    // return result;
    return next(action);
} ;
