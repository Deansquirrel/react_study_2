import React, {Component} from "react";
import {Chart, Geom, Axis, Tooltip} from 'bizcharts';
import {RandInt} from "../../common/common";
import {GetMHeight} from "./common";


export class Table12 extends Component {
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
        const tHeight = GetMHeight();
        return (
            <div>
                <Chart height={tHeight} data={data} scale={cols} forceFit>
                    <Axis name="year" />
                    <Axis name="sales" />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom type="interval" position="year*sales" />
                </Chart>
            </div>
        )
    }
}

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
    sales: {tickInterval: 20},
};
