import React from "react";
import {Row,Col} from 'antd';
import {GsList} from "./gsList";
import {GetTitleHeight, GetViewPadding} from "./common";

export const ViewContent = ({title,value,list,table,onClickFun}) => {

    return (
        <div className={"viewContent"} style={{height:"100%"}}>
            <div style={{float:"right",width:"250px"}}>
                <GsList list={list} onClickFun={onClickFun} />
            </div>
            <ViewTitle title={title} value={value} />
            <div style={{backgroundColor:"white",marginRight:"266px"}}>
                {table}
            </div>
        </div>
    )
};

const ViewTitle = ({title,value}) => {
    const titleHeight = GetTitleHeight();
    return (
        <Row
            gutter={GetViewPadding()}
            style={{
                height:titleHeight,
                color:"#E6B33D",
                marginRight: 266,
            }}
        >
            <Col span={15} style={{
                fontSize:titleHeight * 0.6,
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                overflow:"hidden"
            }}>
                {title}
            </Col>
            <Col span={9} style={{
                textAlign:"right",
                fontSize:titleHeight * 0.6,
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                overflow:"hidden"
            }}>
                {value}
            </Col>
        </Row>

    )
};
