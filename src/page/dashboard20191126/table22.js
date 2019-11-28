import React from "react";
import {GetTableHeight, GetViewPadding} from "./common";

export const Table22 = ({data=[]}) => {
    const tableHeight = GetTableHeight();
    const p = GetViewPadding();
    const d = data.length===1?data[0].d:"";
    const kc = data.length===1?data[0].kc:"";
    const fontSize = (tableHeight * 0.5 - p*2) * 0.6;
    console.log(data);
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
                {kc}
            </div>
            <div style={{
                height:"50%",
                width:"100%",
                padding:p,
                fontSize:fontSize,
                color:d>30?"#E6B33D":"red",
                textAlign:"right",
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                overflow:"hidden"
            }}>
                {d}
            </div>
        </div>
    )
};
