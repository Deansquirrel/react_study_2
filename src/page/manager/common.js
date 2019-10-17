import {GetMenuData} from "../../common/common";

const menuData = GetMenuData();

const GetMenuSelectKV = () => {
    let menuKV = new Map();
    menuData.map((item)=>{
        if(item.hasOwnProperty("path")&&item.hasOwnProperty("key")){
            menuKV[item.path]=item.key;
        }else{
            if(item.hasOwnProperty("key")&&item.hasOwnProperty("child")&&item.child.length>0){
                item.child.map((subItem)=>{
                    if(subItem.hasOwnProperty("key")&&subItem.hasOwnProperty("path")){
                        menuKV[subItem.path]=subItem.key;
                    }
                    return subItem;
                });
            }
        }
        return item;
    });
    return menuKV;
};

export const GetMenuSelectKey = (url="") => {
    const menuKV = GetMenuSelectKV();
    const prefix = "/manager/";
    let result = "";
    for(let key in menuKV){
        if(prefix+key===url){
            return menuKV[key];
        }
    }
    return result;
};

const GetMenuOpenKV = () => {
    let menuKV = new Map();
    menuData.map((item)=>{
        if(item.hasOwnProperty("path")&&item.hasOwnProperty("key")){
            menuKV[item.path]=item.key;
        }else{
            if(item.hasOwnProperty("key")&&item.hasOwnProperty("child")&&item.child.length>0){
                const p = item.key;
                item.child.map((subItem)=>{
                    if(subItem.hasOwnProperty("key")&&subItem.hasOwnProperty("path")){
                        menuKV[subItem.path]=p;
                    }
                    return subItem;
                });
            }
        }
        return item;
    });
    return menuKV;
};

export const GetMenuOpenKey = (url) => {
    const menuKV = GetMenuOpenKV();
    const prefix = "/manager/";
    let result = "";
    for(let key in menuKV){
        if(prefix+key===url){
            return menuKV[key];
        }
    }
    return result;
};
