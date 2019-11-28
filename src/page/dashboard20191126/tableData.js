import store from "../../data/store";
import {jsonSort} from "../../common/common";

export const GetD1Id = (index = -1) => {
    if(index < 0){
        return -1;
    }
    const gs = store.getState().dashboard20191126.d1.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].hasOwnProperty("index")&&gs[i].index===index){
            return gs[i].id;
        }
    }
};

export const GetD1Title = (id=-1) => {
    const gs = store.getState().dashboard20191126.d1.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].id===id){
            return gs[i].name;
        }
    }
    return "";
};

export const GetD1Value = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d1.data;
    const data = d1Data.filter((item)=>{
        return item.hasOwnProperty("id")&&
            item.id===id&&
            item.hasOwnProperty("date")&&
            item.hasOwnProperty("num");
    });
    let currDate = "";
    let num = "";
    data.forEach((item)=>{
        if(item.date>=currDate){
            num = item.num;
        }
    });
    return num;
};

export const GetD1List = () => {
    const d1Gs = store.getState().dashboard20191126.d1.gs;
    return jsonSort(d1Gs,"index").map((item)=>{
        return {
            id:item.index,
            title:item.name
        }
    });
};

export const GetD1TableData = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d1.data.filter((item)=>{
        return item.hasOwnProperty("id")&&item.id===id;
    });
    return jsonSort(d1Data.map((item)=>{
        return {
            title:item.date,
            value:item.num
        }
    }),"date",true);
};

export const GetD2Id = (index = -1) => {
    if(index < 0){
        return -1;
    }
    const gs = store.getState().dashboard20191126.d2.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].hasOwnProperty("index")&&gs[i].index===index){
            return gs[i].id;
        }
    }
};

export const GetD2Title = (id=-1) => {
    const gs = store.getState().dashboard20191126.d2.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].id===id){
            return gs[i].name;
        }
    }
    return "";
};

export const GetD2Value = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d2.data;
    const data = d1Data.filter((item)=>{
        return item.hasOwnProperty("id")&&
            item.id===id&&
            item.hasOwnProperty("date")&&
            item.hasOwnProperty("num");
    });
    let currDate = "";
    let num = "";
    data.forEach((item)=>{
        if(item.date>=currDate){
            num = item.num;
        }
    });
    return num;
};

export const GetD2List = () => {
    const d1Gs = store.getState().dashboard20191126.d2.gs;
    return jsonSort(d1Gs,"index").map((item)=>{
        return {
            id:item.index,
            title:item.name
        }
    });
};

export const GetD2TableData = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d2.data.filter((item)=>{
        return item.hasOwnProperty("id")&&item.id===id;
    });
    return jsonSort(d1Data.map((item)=>{
        return {
            title:item.date,
            value:item.num
        }
    }),"date",true);
};

export const GetD3Id = (index = -1) => {
    if(index < 0){
        return -1;
    }
    const gs = store.getState().dashboard20191126.d3.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].hasOwnProperty("index")&&gs[i].index===index){
            return gs[i].id;
        }
    }
};

export const GetD3Title = (id=-1) => {
    const gs = store.getState().dashboard20191126.d3.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].id===id){
            return gs[i].name;
        }
    }
    return "";
};

export const GetD3Value = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d3.data;
    const data = d1Data.filter((item)=>{
        return item.hasOwnProperty("id")&&
            item.id===id;
    });
    if(data.length===1){
        if(data[0].hasOwnProperty("curr")&&data[0].hasOwnProperty("total")){
            return (data[0].curr/data[0].total).toFixed(2);
        }
    }
    return "";
};

export const GetD3List = () => {
    const d1Gs = store.getState().dashboard20191126.d3.gs;
    return jsonSort(d1Gs,"index").map((item)=>{
        return {
            id:item.index,
            title:item.name
        }
    });
};

export const GetD3TableData = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d3.data.filter((item)=>{
        return item.hasOwnProperty("id")&&item.id===id;
    });
    return jsonSort(d1Data.map((item)=>{
        return {
            cw:item.cw,
            curr:item.curr,
            total:item.total
        }
    }),"date",true);
};

export const GetD4Id = (index = -1) => {
    if(index < 0){
        return -1;
    }
    const gs = store.getState().dashboard20191126.d4.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].hasOwnProperty("index")&&gs[i].index===index){
            return gs[i].id;
        }
    }
};

export const GetD4Title = (id=-1) => {
    const gs = store.getState().dashboard20191126.d4.gs;
    for(let i in gs){
        if(gs[i].hasOwnProperty("id")&&gs[i].id===id){
            return gs[i].name;
        }
    }
    return "";
};

export const GetD4Value = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d4.data;
    const data = d1Data.filter((item)=>{
        return item.hasOwnProperty("id")&&
            item.id===id;
    });
    if(data.length===1){
        if(data[0].hasOwnProperty("curr")&&data[0].hasOwnProperty("total")){
            return (data[0].curr/data[0].total).toFixed(2);
        }
    }
    return "";
};

export const GetD4List = () => {
    const d1Gs = store.getState().dashboard20191126.d4.gs;
    return jsonSort(d1Gs,"index").map((item)=>{
        return {
            id:item.index,
            title:item.name
        }
    });
};

export const GetD4TableData = (id=-1) => {
    const d1Data = store.getState().dashboard20191126.d4.data.filter((item)=>{
        return item.hasOwnProperty("id")&&item.id===id;
    });
    return jsonSort(d1Data.map((item)=>{
        return {
            d:item.d,
            kc:item.kc
        }
    }),"date",true);
};
