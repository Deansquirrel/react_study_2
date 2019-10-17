import C from "./constants"

export const global = (state={},action={}) => {
    if(!action.hasOwnProperty("type")){
        return state;
    }
    switch (action.type){
        case C.GlobalVersion:
            if(!action.hasOwnProperty("version")){
                console.warn("unknown property version");
                return state;
            }
            return {
                ...state,
                version:action.version
            };
        case C.GlobalResVersion:
            if(!action.hasOwnProperty("resVersion")){
                console.warn("unknown property resVersion");
                return state;
            }
            return {
                ...state,
                resVersion:action.resVersion,
            };
        default:
            return state
    }
};

export const user = (state={},action={}) => {
    if (!action.hasOwnProperty("type")) {
        return state;
    }
    switch (action.type) {
        case C.UserIsAuthenticated:
            if(!action.hasOwnProperty("isAuthenticated")){
                console.warn("unknown property isAuthenticated");
                return state;
            }
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            };
        case C.UserConnectId:
            if(!action.hasOwnProperty("connectId")){
                console.warn("unknown property connectId");
                return state;
            }
            return {
                ...state,
                connectId: action.connectId,
            };
        default:
            return state;
    }
};

export const page = (state={},action={}) => {
    if (!action.hasOwnProperty("type")) {
        return state;
    }
    switch (action.type) {
        case C.PageManagerMenuOpenKey:
        case C.PageManagerMenuSelectedKey:
            return {
                ...state,
                manager:pageManager(state.manager,action),
            };
        default:
            return state;
    }
};

const pageManager = (state={},action={}) => {
    switch (action.type) {
        case C.PageManagerMenuOpenKey:
            if(!action.hasOwnProperty("menuOpenKey")){
                console.warn("unknown property menuOpenKey");
                return state;
            }
            return {
                ...state,
                menuOpenKey: action.menuOpenKey,
            };
        case C.PageManagerMenuSelectedKey:
            if(!action.hasOwnProperty("menuSelectedKey")){
                console.warn("unknown property menuSelectedKey");
                return state;
            }
            return {
                ...state,
                menuSelectedKey: action.menuSelectedKey,
            };
        default:
            return state;
    }
};

//
// export const app = (state={},action={}) =>{
//     switch (action.type) {
//         case C.AppWsAddress:
//             return {
//                 ...state,
//                 wsAddress:action.wsAddress,
//             };
//         case C.AppVersion:
//             return {
//                 ...state,
//                 version:action.version,
//             };
//         case C.AppWsVersion:
//             return {
//                 ...state,
//                 wsVersion:action.wsVersion,
//             };
//         default:
//             return state;
//     }
// };
//
// export const page =(state={},action={}) => {
//     switch (action.type) {
//         case C.PageManagerTestCurrType:
//         case C.PageManagerTestTypeData:
//             return {
//                 ...state,
//                 manager:pageManager(state.manager,action),
//             };
//         default:
//             return state;
//     }
// };
//
// const pageManager = (state={},action={}) => {
//     switch (action.type) {
//         case C.PageManagerTestCurrType:
//         case C.PageManagerTestTypeData:
//             return {
//                 ...state,
//                 test:pageManagerTest(state.test,action),
//             };
//         default:
//             return state;
//     }
// };
//
// const pageManagerTest = (state={},action={}) => {
//     switch (action.type) {
//         case C.PageManagerTestCurrType:
//             return {
//                 ...state,
//                 currType:action.currType,
//             };
//         case C.PageManagerTestTypeData:
//             return {
//                 ...state,
//                 typeData:action.typeData
//             };
//         default:
//             return state;
//     }
// };
