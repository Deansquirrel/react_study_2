import React, {Component} from "react";
import {Chart, Geom, Axis, Label, Tooltip,Guide} from 'bizcharts';

import {RandInt} from "../../../common/common";

const { Line } = Guide;

export class Chart0003 extends Component {
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
        const avg = GetAvg(data);
        const maxT = GetMax(data);
        const minT = GetMin(data);
        return (
            <div>
                <Chart height={400} data={data} scale={cols(data)} forceFit>
                    <Axis name="buyin" visible={false} />
                    <Axis
                        name="date"
                        label={{
                            textStyle:{
                                fill:'#aaaaaa'
                            }
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="line"
                        position="date*buyin"
                    >
                    </Geom>
                    <Geom
                        type="point"
                        position="date*buyin"
                        size={['date',(val)=>{
                            const ticks = Ticks(data);
                            if(ticks.indexOf(val)>=0){
                                return 3;
                            }
                            return 0;
                        }]}
                        shape={"circle"}
                        style={{
                            lineWidth: 2
                        }}
                    >
                        <Label
                            content={["date*buyin",(date,buyin)=>{
                                const ticks = Ticks(data);
                                if(ticks.indexOf(date)>=0){
                                    return buyin+'万';
                                }
                                    return '';
                                }]}
                            textStyle={{
                                fill: '#7a7a7a',
                                fontSize: 12,
                                stroke: 'white',
                                lineWidth: 2,
                                fontWeight: 300
                            }}
                        />
                    </Geom>
                    <Guide>
                        <Line
                            top={true}
                            start={minT}
                            end={maxT}
                            lineStyle={{
                                stroke:'#595959',
                                lineWidth:1,
                                lineDash:[3,3]
                            }}
                            text={{
                                position:"start",
                                style:{
                                    fill:'#8c8c8c',
                                    fontSize:12,
                                    fontWeight:300
                                },
                                content:'均线值' + avg + '万',
                                offsetY:-5
                            }}
                        />
                    </Guide>
                </Chart>
            </div>
        )
    }
}

const Ticks = (data=[])=>{
    let r = [];
    const l = data.length;
    for(let i=0;i<l;i++){
        if(i%8===0){
            if(data[i].hasOwnProperty("date")){
                r.push(data[i].date);
            }
        }
    }
    return r;
};

const GetAvg = (data=[]) => {
    let sum=0;
    let counter = 0;
    data.map((item)=>{
        if(item.hasOwnProperty("buyin")&&item.hasOwnProperty("date")){
            counter=counter+1;
            sum=sum+item.buyin;
        }
            return item;
    });
    if(counter>0){
        return (sum/counter).toFixed(3);
    } else {
        return 0;
    }
};

const GetMax = (data=[]) => {
    const avg = GetAvg(data);
    if(data.length===0){
        return {};
    }
    const r = data[data.length-1];
    if(r.hasOwnProperty("date")){
        return {
            date:r.date,
            buyin:avg
        };
    } else {
        return {};
    }
};

const GetMin = (data=[]) => {
    const avg = GetAvg(data);
    if(data.length===0){
        return {};
    }
    const r = data[0];
    if(r.hasOwnProperty("date")){
        return {
            date:r.date,
            buyin:avg
        };
    } else {
        return {};
    }
};

const GetData = () => {
    return [
        {date:"2012-10",buyin:RandInt(2000,1000)},
        {date:"2012-11",buyin:RandInt(2000,1000)},
        {date:"2012-12",buyin:RandInt(2000,1000)},
        {date:"2013-01",buyin:RandInt(2000,1000)},
        {date:"2013-02",buyin:RandInt(2000,1000)},
        {date:"2013-03",buyin:RandInt(2000,1000)},
        {date:"2013-04",buyin:RandInt(2000,1000)},
        {date:"2013-05",buyin:RandInt(2000,1000)},
        {date:"2013-06",buyin:RandInt(2000,1000)},
        {date:"2013-07",buyin:RandInt(2000,1000)},
        {date:"2013-08",buyin:RandInt(2000,1000)},
        {date:"2013-09",buyin:RandInt(2000,1000)},
        {date:"2013-10",buyin:RandInt(2000,1000)},
        {date:"2013-11",buyin:RandInt(2000,1000)},
        {date:"2013-12",buyin:RandInt(2000,1000)},
        {date:"2014-01",buyin:RandInt(2000,1000)},
        {date:"2014-02",buyin:RandInt(2000,1000)},
        {date:"2014-03",buyin:RandInt(2000,1000)},
        {date:"2014-04",buyin:RandInt(2000,1000)},
        {date:"2014-05",buyin:RandInt(2000,1000)},
        {date:"2014-06",buyin:RandInt(2000,1000)},
        {date:"2014-07",buyin:RandInt(2000,1000)},
        {date:"2014-08",buyin:RandInt(2000,1000)},
        {date:"2014-09",buyin:RandInt(2000,1000)},
        {date:"2014-10",buyin:RandInt(2000,1000)}
        // {date:"2014-11",buyin:RandInt(2000,1000)},
        // {date:"2014-12",buyin:RandInt(2000,1000)},
        // {date:"2015-01",buyin:RandInt(2000,1000)},
        // {date:"2015-02",buyin:RandInt(2000,1000)},
        // {date:"2015-03",buyin:RandInt(2000,1000)},
        // {date:"2015-04",buyin:RandInt(2000,1000)},
        // {date:"2015-05",buyin:RandInt(2000,1000)},
        // {date:"2015-06",buyin:RandInt(2000,1000)},
        // {date:"2015-07",buyin:RandInt(2000,1000)},
        // {date:"2015-08",buyin:RandInt(2000,1000)},
        // {date:"2015-09",buyin:RandInt(2000,1000)},
        // {date:"2015-10",buyin:RandInt(2000,1000)},
        // {date:"2015-11",buyin:RandInt(2000,1000)},
        // {date:"2015-12",buyin:RandInt(2000,1000)},
        // {date:"2016-01",buyin:RandInt(2000,1000)},
        // {date:"2016-02",buyin:RandInt(2000,1000)}
        // {date:"2016-03",buyin:RandInt(2000,1000)},
        // {date:"2016-04",buyin:RandInt(2000,1000)},
        // {date:"2016-05",buyin:RandInt(2000,1000)},
        // {date:"2016-06",buyin:RandInt(2000,1000)},
        // {date:"2016-07",buyin:RandInt(2000,1000)},
        // {date:"2016-08",buyin:RandInt(2000,1000)},
        // {date:"2016-09",buyin:RandInt(2000,1000)},
        // {date:"2016-10",buyin:RandInt(2000,1000)},
        // {date:"2016-11",buyin:RandInt(2000,1000)},
        // {date:"2016-12",buyin:RandInt(2000,1000)},
        // {date:"2017-01",buyin:RandInt(2000,1000)},
        // {date:"2017-02",buyin:RandInt(2000,1000)},
        // {date:"2017-03",buyin:RandInt(2000,1000)},
        // {date:"2017-04",buyin:RandInt(2000,1000)},
        // {date:"2017-05",buyin:RandInt(2000,1000)},
        // {date:"2017-06",buyin:RandInt(2000,1000)},
        // {date:"2017-07",buyin:RandInt(2000,1000)},
        // {date:"2017-08",buyin:RandInt(2000,1000)},
        // {date:"2017-09",buyin:RandInt(2000,1000)},
        // {date:"2017-10",buyin:RandInt(2000,1000)},
        // {date:"2017-11",buyin:RandInt(2000,1000)},
        // {date:"2017-12",buyin:RandInt(2000,1000)},
        // {date:"2018-01",buyin:RandInt(2000,1000)},
        // {date:"2018-02",buyin:RandInt(2000,1000)}
    ]
};

// 定义度量
const cols = (data={}) => {
    const ticks = Ticks(data);
    return {
      date:{range:[0.05,0.95],ticks:ticks},
      buyin:{min:0}
    }
};
