import React, {Component} from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

import "./bizCharts.css";
import {RandInt} from "../../../common/common";

export class Chart0002 extends Component {
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
                    <Axis name="month" title />
                    <Axis
                        name="temperature"
                        label={{
                            formatter: val => `${val}°C`
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="line"
                        position="month*temperature"
                        size={2}
                        color={"city"}
                        shape={"smooth"}
                    >
                    </Geom>
                    <Geom
                        type="point"
                        position="month*temperature"
                        size={4}
                        shape={"circle"}
                        color={"city"}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1
                        }}
                    >
                    </Geom>
                </Chart>
            </div>
        )
    }
}

const GetData = () => {
    return [
        {month: "Jan",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Jan",city: "London",temperature: RandInt(0,10)},
        {month: "Feb",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Feb",city: "London",temperature: RandInt(0,10)},
        {month: "Mar",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Mar",city: "London",temperature: RandInt(0,10)},
        {month: "Apr",city: "Tokyo",temperature: RandInt(5,15)},
        {month: "Apr",city: "London",temperature: RandInt(0,15)},
        {month: "May",city: "Tokyo",temperature: RandInt(10,25)},
        {month: "May",city: "London",temperature: RandInt(10,20)},
        {month: "Jun",city: "Tokyo",temperature: RandInt(10,25)},
        {month: "Jun",city: "London",temperature: RandInt(10,20)},
        {month: "Jul",city: "Tokyo",temperature: RandInt(10,25)},
        {month: "Jul",city: "London",temperature: RandInt(10,20)},
        {month: "Aug",city: "Tokyo",temperature: RandInt(10,25)},
        {month: "Aug",city: "London",temperature: RandInt(10,20)},
        {month: "Sep",city: "Tokyo",temperature: RandInt(5,15)},
        {month: "Sep",city: "London",temperature: RandInt(0,15)},
        {month: "Oct",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Oct",city: "London",temperature: RandInt(0,10)},
        {month: "Nov",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Nov",city: "London",temperature: RandInt(0,10)},
        {month: "Dec",city: "Tokyo",temperature: RandInt(5,10)},
        {month: "Dec",city: "London",temperature: RandInt(0,10)}
    ]
};

// 定义度量
const cols = {
    month:{range:[0.05,0.95]},
};
