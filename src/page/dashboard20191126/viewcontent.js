import React from "react";
import {GsList} from "./gsList";

export const ViewContent = ({title,list,table,onClickFun}) => {
    return (
        <div className={"viewContent"} style={{height:"100%"}}>
            <div style={{float:"right",width:"250px",backgroundColor:"white"}}>
                <GsList title={title} list={list} onClickFun={onClickFun} />
            </div>
            <div style={{backgroundColor:"white",marginRight:"266px"}}>
                {table}
            </div>
            <div style={{height:"100%"}}>

            </div>
        </div>
    )
};
