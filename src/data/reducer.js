import C from "./constants"

export const app = (state={},action={}) =>{
    switch (action.type) {
        case C.AppWsAddress:
            return {
                ...state,
                wsAddress:action.wsAddress,
            };
        case C.AppVersion:
            return {
                ...state,
                version:action.version,
            };
        case C.AppWsVersion:
            return {
                ...state,
                wsVersion:action.wsVersion,
            };
        default:
            return state;
    }
};

export const page =(state={},action={}) => {
    switch (action.type) {
        case C.PageManagerTestCurrType:
        case C.PageManagerTestTypeData:
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
        case C.PageManagerTestCurrType:
        case C.PageManagerTestTypeData:
            return {
                ...state,
                test:pageManagerTest(state.test,action),
            };
        default:
            return state;
    }
};

const pageManagerTest = (state={},action={}) => {
    switch (action.type) {
        case C.PageManagerTestCurrType:
            return {
                ...state,
                currType:action.currType,
            };
        case C.PageManagerTestTypeData:
            return {
                ...state,
                typeData:action.typeData
            };
        default:
            return state;
    }
};
