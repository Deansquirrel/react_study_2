import {combineReducers, createStore} from "redux";
// import {applyMiddleware} from "redux";
// import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';

import {app} from "./reducer";
import {page} from "./reducer";

// const logger = createLogger();

const defaultState = {
    app:{
        wsAddress:"",
        version:"",
        wsVersion:"",
    },
    page:{
        login:{
            name:"",
            pwd:"",
        },
        manager:{
            test:{
                a:"aaa",
                b:"bbb",
                currType:"",
                typeData:[
                    {
                        type:"react js",
                        data:"",
                        lastUpdate:"",
                    },
                    {
                        type:"front js",
                        data:"",
                        lastUpdate:"",
                    }
                ],
            }
        }
    }
};

const store = createStore(
    combineReducers({app,page}),
    defaultState,
    // applyMiddleware(logger)
    // applyMiddleware(thunk,logger)
);

export default store;
