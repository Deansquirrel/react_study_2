import React from "react";
import {GetTableHeight, GetViewPadding} from "./common";

export const Table21 = ({data=[]}) => {
    const tableHeight = GetTableHeight();
    const p = GetViewPadding();
    const cw = data.length===1?data[0].cw:"";
    const kc = data.length===1?data[0].curr + " / " + data[0].total:"";
    const per = data.length===1?data[0].curr/data[0].total:0;
    const fontSize = (tableHeight * 0.5 - p*2) * 0.6;
    return (
        <div style={{
            height:tableHeight,
            backgroundColor:"#172C3C"
        }}>
            <div style={{
                height:"50%",
                padding:p,
                fontSize:fontSize,
                color:"#E6B33D",
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                overflow:"hidden"
            }}>
                {cw}
            </div>
            <div style={{
                height:"50%",
                width:"100%",
                padding:p,
                fontSize:fontSize,
                color:per<0.8?"#E6B33D":"red",
                textAlign:"right",
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                overflow:"hidden"
            }}>
                {kc}
            </div>
        </div>
    )
};
