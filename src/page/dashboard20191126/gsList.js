import React from "react";
import {Table} from "antd";
import {GetMHeight} from "./common";

export const GsList = ({title,list,onClickFun=(k)=>{console.log(k)}}) => {

    const columns = [{
            title: title,
            dataIndex: 'name',
        }];

    const data = [];

    for(let i=0;i<list.length;i++){
        data.push({
            key:i,
            name:list[i]
        });
    }

    const tHeight = GetMHeight();

    const onClickRow = (record) => {
        return {
            onClick:()=>{
                onClickFun(record.key);
            }
        }
    };

    return (

        <div>
            <Table
                onRow={onClickRow}
                columns={columns}
                dataSource={data}
                showHeader={false}
                pagination={false}
                scroll={{ y:tHeight }} />
        </div>

    )
};


