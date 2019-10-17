import {applyMiddleware, combineReducers, createStore} from "redux";
// import {applyMiddleware} from "redux";

import {loggerMiddleware, ywMiddleware} from "./middleware";
import defaultState from "./defaultState";
import {global,user,page} from "./reducer";

const store = createStore(
    combineReducers({global,user,page}),
    defaultState,
    applyMiddleware(ywMiddleware,loggerMiddleware)
    // applyMiddleware(logger)
    // applyMiddleware(thunk,logger)
);

export default store;


// import {applyMiddleware, combineReducers, createStore} from "redux";
// // import {applyMiddleware} from "redux";
// // import {createLogger} from 'redux-logger';
// // import thunk from 'redux-thunk';
//
// import {app} from "./reducer";
// import {page} from "./reducer";
// import {loggerMiddleware, ywMiddleware} from "./middleware";
//
// // const logger = createLogger();
//
// const defaultState = {
//     app:{
//         wsAddress:"",
//         version:"",
//         wsVersion:"",
//     },
//     page:{
//         login:{
//             name:"",
//             pwd:"",
//         },
//         manager:{
//             test:{
//                 a:"",
//                 b:"bbb",
//                 currType:"",
//                 typeData:[
//                     {
//                         type:"react js",
//                         data:"",
//                         lastUpdate:"",
//                     },
//                     {
//                         type:"front js",
//                         data:"",
//                         lastUpdate:"",
//                     }
//                 ],
//             }
//         }
//     }
// };
//
// const store = createStore(
//     combineReducers({app,page}),
//     defaultState,
//     applyMiddleware(ywMiddleware,loggerMiddleware)
//     // applyMiddleware(logger)
//     // applyMiddleware(thunk,logger)
// );
//
// export default store;
