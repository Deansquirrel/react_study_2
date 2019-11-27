import React, {Component} from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import {RandInt} from "../../common/common";
import {GetTableHeight, GetViewPadding} from "./common";

export class Table11 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:GetData()
        }
    }

    componentDidMount() {
        this.rJob=setInterval(()=>{
            this.setState({
                data:GetData()
            })
        },3000);
    }

    componentWillUnmount() {
        clearInterval(this.rJob);
    }

    render() {
        const data = this.state.data;
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
                        name={"year"}
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
                    <Geom type="line" color={'#E6B33D'} position="year*value" size={2} />
                    <Geom
                        type="point"
                        position="year*value"
                        color={'#E6B33D'}
                        size={4}
                        shape={"circle"}
                        style={{
                            stroke: "#E6B33D",
                            lineWidth: 1
                        }}
                    >
                        {/*<Label content={"value"} />*/}
                    </Geom>
                </Chart>
            </div>
        )
    }
}

const GetData = () => {
    return [
        {year: "1991",value: RandInt(5,10)},
        {year: "1992",value: RandInt(5,20)},
        {year: "1993",value: RandInt(10,30)},
        {year: "1994",value: RandInt(20,40)},
        {year: "1995",value: RandInt(30,50)},
        {year: "1996",value: RandInt(40,60)},
        {year: "1997",value: RandInt(50,70)},
        {year: "1998",value: RandInt(60,80)},
        {year: "1999",value: RandInt(70,90)}
    ]
};

// 定义度量
const cols = {
    value: {
        alias:'value',

        tickCount:5
    },
    year:{alias:"year",range:[0.05,0.95]}
};
