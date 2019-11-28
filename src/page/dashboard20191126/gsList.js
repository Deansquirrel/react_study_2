import React from "react";
import {Table} from "antd";
import {GetTableHeight, GetTitleHeight} from "./common";

import "./gsList.css"

export const GsList = ({list,onClickFun=(k)=>{console.log(k)}}) => {

    const columns = [{
        title: "title",
        dataIndex: 'name',
    }];

    let data = [];

    list.forEach((item)=>{
        data.push({
            key:item.id,
            name:item.title
        });
    });

    const tHeight = GetTitleHeight() + GetTableHeight();

    const onClickRow = (record) => {
        return {
            onClick:()=>{
                onClickFun(record.key);
            }
        }
    };

    if(data.length>0){
        return (
            <Table
                bordered={true}
                rowClassName={"gsListRow"}
                onRow={onClickRow}
                columns={columns}
                dataSource={data}
                showHeader={false}
                pagination={false}
                scroll={{ y:tHeight}} />
        )
    }else{
        return (
            <div style={{width:"100%",height:tHeight,borderWidth:1,borderColor:"white"}}>
            </div>
        )
    }


};

//
// export const GsList2 = ({list,onClickFun=(k)=>{console.log(k)}}) => {
//     const tHeight = GetTitleHeight() + GetTableHeight();
//     const listHeight = GetTitleHeight();
//     return (
//         <List
//             style={{
//                 height:tHeight,
//                 overflowY:"scroll",
//             }}
//             bordered={false}
//             split={false}
//             pagination={false}
//             itemLayout="horizontal"
//             dataSource={list}
//             renderItem={item => (
//                 <List.Item style={{
//                     backgroundColor:"#264862",
//                     padding:1
//                 }}>
//                     <div
//                         onClick={()=>onClickFun(item.id)}
//                         style={{
//                             width:"100%",
//                             height:listHeight,
//                             backgroundColor:"green",
//                             borderColor:"red",
//                             borderWidth:1,
//                             verticalAlign:"middle",
//                             whiteSpace:"nowrap",
//                             textOverflow:"ellipsis",
//                             overflow:"hidden"
//                         }}
//                     >
//                         <span style={{
//                             paddingLeft:16,
//                             paddingRight:16,
//                             fontSize:listHeight * 0.8 * 0.6,
//                             color:"white",
//                             backgroundColor:"blue",
//                             borderColor:"red",
//                             borderWidth:1
//                         }}>
//                             {item.title}
//                         </span>
//                     </div>
//                 </List.Item>
//             )}
//         />
//     )
// };
