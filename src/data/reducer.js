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

export const dashboard20191126 = (state={},action={}) => {
    if (!action.hasOwnProperty("type")) {
        return state;
    }
    switch (action.type) {
        case C.Dashboard20191126Curr:
            if(!action.hasOwnProperty("curr")){
                console.warn("unknown property curr");
                return state;
            }
            return {
                ...state,
                curr: action.curr,
            };
        case C.Dashboard20191126D1:
            if(!action.hasOwnProperty("d1")){
                console.warn("unknown property d1");
                return state;
            }
            return {
                ...state,
                d1: action.d1,
            };
        case C.Dashboard20191126D2:
            if(!action.hasOwnProperty("d2")){
                console.warn("unknown property d2");
                return state;
            }
            return {
                ...state,
                d2: action.d2,
            };
        case C.Dashboard20191126D3:
            if(!action.hasOwnProperty("d3")){
                console.warn("unknown property d3");
                return state;
            }
            return {
                ...state,
                d3: action.d3,
            };
        case C.Dashboard20191126D4:
            if(!action.hasOwnProperty("d4")){
                console.warn("unknown property d4");
                return state;
            }
            return {
                ...state,
                d4: action.d4,
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
