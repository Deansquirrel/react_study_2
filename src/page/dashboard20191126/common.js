import {RandInt} from "../../common/common";
import moment from "moment";

const GetMHeight = () => {
    return document.body.clientHeight  * 0.5 - 16 - 16 - 1;
};

export const GetTitleHeight = () => {
    return GetMHeight() * 0.15;
};

export const GetTableHeight = () => {
    return GetMHeight() * 0.85;
};

export const GetViewPadding = () => {
    return GetTableHeight() * 0.1;
};

export const GetTestD1Data = (count=0,days=30) => {
    if(count>1000||count<=0){
        count=1000;
    }
    if(days>30||days<=0){
        days=30;
    }
    let idList = [];
    let id = -1;
    for(let i=0;i<count;i++){
        while(1===1){
            id = RandInt(1,1000);
            if(idList.indexOf(id)<0){
                idList.push(id);
                break;
            }
        }
    }
    let gs=[];
    let data=[];
    let i=0;
    idList.forEach((item)=>{
        gs.push({
            id:item,
            index:i,
            name:"货品" + item
        });
        i = i+1;
        for(let i=0;i<days;i++){
            let today = new moment();
            data.push({
                id:item,
                data:today.day(-i).format("YYYY-MM-DD"),
                num:RandInt(10,100)
            })
        }
    });
    return {
        gs:gs,
        data:data
    };
};
