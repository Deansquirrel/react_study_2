import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import {GetTableHeight, GetViewPadding} from "./common";

export const Table11 = ({data=[]}) => {
        const tableHeight = GetTableHeight();
        const p = GetViewPadding();
        return (
            <div style={{backgroundColor:"#172C3C"}}>
                <Chart
                    background={{fill:"#172C3C"}}
                    plotBackground={{fill:"#172C3C"}}
                    height={tableHeight}
                    data={data}
                    scale={cols}
                    forceFit
                    padding={{left:p,bottom:p,top:p,right:p*0.5}}
                >
                    <Legend />
                    <Axis
                        name={"value"}
                        label={{
                            textStyle:{
                                fill:"#E6B33D"
                            }
                        }}
                    />
                    <Axis
                        name={"title"}
                        label={{
                            textStyle:{
                                fill:"#E6B33D"
                            }
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "cross",
                            style:{
                                stroke:"#D96831",
                                lineWidth:1
                            }
                        }}
                    />
                    <Geom type="line" color={'#E6B33D'} position="title*value" size={2} />
                </Chart>
            </div>
        )
};

// 定义度量
const cols = {
    value: {
        alias:'value',
        tickCount:5
    },
    title:{alias:"title",range:[0.05,0.95]}
};
