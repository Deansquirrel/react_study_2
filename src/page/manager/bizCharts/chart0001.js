import React, {Component} from "react";
import { Chart, Geom, Axis, Tooltip, Legend,Label } from 'bizcharts';

import "./bizCharts.css";
import {RandInt} from "../../../common/common";

export class Chart0001 extends Component {
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
        return (
            <div>
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Legend />
                    <Axis name="year" title />
                    <Axis name="value" title />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom type="line" position="year*value" size={2} />
                    <Geom
                        type="point"
                        position="year*value"
                        size={4}
                        shape={"circle"}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1
                        }}
                    >
                        <Label content={"value"} />
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
    value: { alias:'value',range:[0,0.9]},
    year:{alias:"year",range:[0.05,0.95]}
};
