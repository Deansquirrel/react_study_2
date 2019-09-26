import moment from "moment";

import store from "./store";
import {PageManagerTestTypeDataAction} from "./actions";

export const RefreshTypeData = (type = "") => {
    if(type===""){
        return;
    }
    const nd = GetSingleTypeData(type);
    const nmd = store.getState().page.manager.test.typeData.map((item)=>{
        if(item.hasOwnProperty("type")&&item.type===type){
            return nd;
        } else {
            return item;
        }
    });
    store.dispatch(PageManagerTestTypeDataAction(nmd));
};

const GetSingleTypeData = (type = "") => {
    if(type===""){
        return {}
    } else {
        return {
            type:type,
            data:"test data " + type,
            lastUpdate:new moment().format("YYYY-MM-DD HH:mm:ss"),
        }
    }
};
