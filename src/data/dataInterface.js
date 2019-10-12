// import axios from 'axios';
// import moment from "moment";
//
// import store from "./store";
//
// import {PageManagerTestTypeDataAction} from "./actions";

// export const RefreshTypeData = (type = "") => {
//     if(type===""){
//         return;
//     }
//     const nd = GetSingleTypeData(type);
//     const nmd = store.getState().page.manager.test.typeData.map((item)=>{
//         if(item.hasOwnProperty("type")&&item.type===type){
//             return nd;
//         } else {
//             return item;
//         }
//     });
//     store.dispatch(PageManagerTestTypeDataAction(nmd));
// };
//
// const GetSingleTypeData = (type = "") => {
//     if(type===""){
//         return {}
//     } else {
//         return {
//             type:type,
//             data:"test data " + type,
//             lastUpdate:new moment().format("YYYY-MM-DD HH:mm:ss"),
//         }
//     }
// };
//
// export const GetVersion = (successFunc=f=>f,errFunc=f=>f) => {
//     const url = "/version";
//     axios.get(url)
//         .then((response)=>{
//             if(response.status===200){
//                 let infoData = response.data;
//                 console.log(infoData);
//                 successFunc(infoData);
//             } else {
//                 const errMsg = "http error: " +
//                     "status-" + response.status +
//                     ",statusText-" + response.statusText +
//                     ",data-" + JSON.stringify(response.data);
//                 console.log(errMsg);
//                 errFunc(errMsg);
//             }
//         })
//         .catch((err)=>{
//             errFunc(err.toString());
//         })
//         .finally(()=>{
//             console.log("GetVersion finally");
//         });
// };

// export const GetUser = () => {
//     const url = "https://api.randomuser.me";
//     axios.get(url)
//         .then((response)=>{
//             if(response.status===200){
//                 let infoData = response.data;
//                 console.log(infoData);
//             } else {
//                 const errMsg = "http error: " +
//                     "status-" + response.status +
//                     ",statusText-" + response.statusText +
//                     ",data-" + JSON.stringify(response.data);
//                 console.log(errMsg);
//             }
//         })
//         .catch((err)=>{
//             console.log(err.toString());
//         })
//         .finally(()=>{
//             console.log("finally");
//         });
//     return {}
// };

// //Welcome页面获取心跳异常信息
// export const GetHeartbeatErrData = (baseAddress="",typeList="",successFunc=f=>f,errFunc=f=>f) => {
//     if(baseAddress===""){
//         errFunc("address is empty");
//         return
//     }
//     let data = {"heartbeatClientType":typeList};
//     const url = baseAddress + "/watchersupport/welcome";
//     axios.post(url,data)
//         .then(function(response){
//             if(response.status===200){
//                 let infoData = response.data;
//                 if(infoData.errcode !== undefined) {
//                     if(infoData.errcode===200){
//                         if(infoData.heartbeatData !== undefined){
//                             successFunc(infoData.heartbeatData);
//                         } else {
//                             errFunc("get data err:data return do not contain heartbeatData");
//                         }
//                     } else {
//                         errFunc(infoData.errmsg);
//                     }
//                 } else {
//                     errFunc("get data err:data return do not contain errcode");
//                 }
//             } else {
//                 const errMsg = "http error: " +
//                     "status-" + response.status +
//                     ",statusText-" + response.statusText +
//                     ",data-" + JSON.stringify(response.data);
//                 errFunc(errMsg);
//             }
//         })
//         .catch(function(error){
//             errFunc(error.toString())
//         })
// };
