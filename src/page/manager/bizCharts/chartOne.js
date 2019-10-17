import React, {Component} from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

import "./bizCharts.css";
import {RandInt} from "../../../common/common";

export class ChartOne extends Component {
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
        },1500);
    }

    componentWillUnmount() {
        clearInterval(this.rJob);
    }

    render() {
        const data = this.state.data;
        return (
            <div className={"ContentMargin"}>
                <Chart forceFit={true} height={500} data={data} scale={cols} style={{background:"white",paddingTop:"64px"}}>
                    <Axis name="genre" title/>
                    <Axis name="sold" title/>
                    <Legend position="top" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </div>
        )
    }
}

// // 数据源
// const data = [
//     { genre: 'Sports', sold: 275, income: 2300 },
//     { genre: 'Strategy', sold: 115, income: 667 },
//     { genre: 'Action', sold: 120, income: 982 },
//     { genre: 'Shooter', sold: 350, income: 5271 },
//     { genre: 'Other', sold: 150, income: 3710 }
// ];

const GetData = () => {
    return [
        { genre: 'Sports', sold: RandInt(0,100), income: 2300 },
        { genre: 'Strategy', sold: RandInt(0,100), income: 667 },
        { genre: 'Action', sold: RandInt(0,100), income: 982 },
        { genre: 'Shooter', sold: RandInt(0,100), income: 5271 },
        { genre: 'A', sold: RandInt(0,100), income: 2300 },
        { genre: 'B', sold: RandInt(0,100), income: 667 },
        { genre: 'C', sold: RandInt(0,100), income: 982 },
        { genre: 'D', sold: RandInt(0,100), income: 5271 },
        { genre: 'E', sold: RandInt(0,100), income: 2300 },
        { genre: 'F', sold: RandInt(0,100), income: 667 },
        { genre: 'G', sold: RandInt(0,100), income: 982 },
        { genre: 'H', sold: RandInt(0,100), income: 5271 },
        { genre: 'I', sold: RandInt(0,100), income: 2300 },
        { genre: 'J', sold: RandInt(0,100), income: 667 },
        { genre: 'K', sold: RandInt(0,100), income: 982 },
        { genre: 'L', sold: RandInt(0,100), income: 5271 },
        { genre: 'Other', sold: RandInt(0,100), income: 3710 }
    ]
};

// 定义度量
const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
};
