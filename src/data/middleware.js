export const ywMiddleware = store => next => action => {
    // console.log("before action");
    // console.log(action.type);
    //
    // let result = next(action);
    //
    // console.log("after action");
    //
    // return result;
    return next(action);
} ;

export const loggerMiddleware = store => next => action => {
    return next(action);
} ;
