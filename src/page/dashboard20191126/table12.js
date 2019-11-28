import React from "react";
import {Chart, Geom, Axis, Tooltip, Legend} from 'bizcharts';
import {RandInt} from "../../common/common";
import {GetTableHeight, GetViewPadding} from "./common";

export const Table12 = ({data=[]}) => {
    console.log(data);
    const tableHeight = GetTableHeight();
    const p = GetViewPadding();
    return (
        <div style={{backgroundColor:"#172C3C"}}>
            <Chart
                background={{fill:"#172C3C"}}
                plotBackground={{fill:"#172C3C"}}
                height={tableHeight}
                data={data.data}
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
                <Geom
                    type="interval"
                    position="title*value"
                    color={[
                        "title",
                        (title) => {
                            if (title === data.curr) {
                                return "#E6B33D";
                            }

                            return "rgba(230,179,61,0.3)";
                        }
                    ]}
                />
            </Chart>
        </div>
    )
};

// export class Table12 extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             data:GetData()
//         }
//     }
//
//     componentDidMount() {
//         this.rJob=setInterval(()=>{
//             this.setState({
//                 data:GetData()
//             })
//         },3000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.rJob);
//     }
//
//     render() {
//         const data = this.state.data;
//         const tableHeight = GetTableHeight();
//         return (
//             <div>
//                 <Chart height={tableHeight} data={data} scale={cols} forceFit>
//                     <Axis name="year" />
//                     <Axis name="sales" />
//                     <Tooltip
//                         crosshairs={{
//                             type: "y"
//                         }}
//                     />
//                     <Geom type="interval" position="year*sales" />
//                 </Chart>
//             </div>
//         )
//     }
// }
//
const GetData = () => {
    return [
        {year:"1951",sales:RandInt(20,150)},
        {year:"1952",sales:RandInt(20,150)},
        {year:"1953",sales:RandInt(20,150)},
        {year:"1954",sales:RandInt(20,150)},
        {year:"1955",sales:RandInt(20,150)},
        {year:"1956",sales:RandInt(20,150)},
        {year:"1957",sales:RandInt(20,150)},
        {year:"1958",sales:RandInt(20,150)},
        {year:"1959",sales:RandInt(20,150)},
        {year:"1960",sales:RandInt(20,150)}
    ]
};

// 定义度量
const cols = {
    value: {
        alias:'value',
        tickCount:5
    },
    title:{alias:"title",range:[0.05,0.95]}
};
