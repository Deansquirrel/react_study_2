import store from "../data/store";
import user from "./user";
import menu from "./menu";

export const GetUserInfo = () => {
    let rList = [];
    rList.push(...user);
    return rList;
};

export const GetMenuData = () => {
    let rList = [];
    rList.push(...menu);
    return rList;
};

export const checkLogin = () => {
    if(store.getState().hasOwnProperty("user")){
        if(store.getState().user.hasOwnProperty("isAuthenticated")){
            return store.getState().user.isAuthenticated
        }
    }
    return false;
};

export const RandInt = (min=0,max=100) => {
    if(min===max){
        return min
    }
    if(min>max){
        let t = min;
        min=max;
        max = t;
    }
    return min + Math.floor(Math.random()*(max-min));
};
