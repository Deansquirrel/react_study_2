import React, {Component} from "react";
import {Chart, Geom, Axis, Tooltip,Coord} from 'bizcharts';

import {RandInt} from "../../../common/common";

export class Chart0007 extends Component {
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
                <Chart height={400} data={data} forceFit>
                    <Coord transpose />
                    <Axis name="x" />
                    <Axis name="y" />
                    <Tooltip />
                    <Geom type="interval" position="x*y" />
                </Chart>
            </div>
        )
    }
}

const GetData = () => {
    return [
        {x: "分类一",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类二",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类三",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类四",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类五",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类六",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类七",y: [RandInt(20,80), RandInt(80,160)]},
        {x: "分类八",y: [RandInt(20,80), RandInt(80,160)]}
    ]
};
