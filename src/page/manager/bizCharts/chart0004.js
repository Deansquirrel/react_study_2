import React, {Component} from "react";
import {Chart, Geom, Axis, Tooltip,Guide} from 'bizcharts';

import {RandInt} from "../../../common/common";

const { Line } = Guide;

export class Chart0004 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            maxVal:0,
            minVal:0,
            leftTitle:"",
            rightTitle:"",
            maxTitle:"",
            minTitle:"",
        };
        this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData();
        this.rJob=setInterval(()=>{
            this.updateData();
        },3000);
    }

    componentWillUnmount() {
        clearInterval(this.rJob);
    }

    updateData = () => {
        const data = GetData();
        let maxVal=0,minVal=0,leftTitle="",rightTitle="",maxTitle="",minTitle="";
        data.map((item)=>{
            if(item.hasOwnProperty("date")&&item.hasOwnProperty("buyin")){
                if(rightTitle===""||item.date>rightTitle){
                    rightTitle = item.date;
                }
                if(leftTitle===""||item.date<leftTitle){
                    leftTitle = item.date;
                }
                if(maxVal===0||item.buyin>maxVal){
                    maxVal=item.buyin;
                    maxTitle=item.date;
                }
                if(minVal===0||item.buyin<minVal){
                    minVal=item.buyin;
                    minTitle=item.date;
                }
            }
            return item;
        });
        this.setState({
            data:data,
            maxVal:maxVal,
            maxTitle:maxTitle,
            minVal:minVal,
            minTitle:minTitle,
            leftTitle:leftTitle,
            rightTitle:rightTitle,
        });
    };

    render() {
        const data = this.state.data;
        const maxVal = this.state.maxVal;
        const maxLineLeft = {date:this.state.leftTitle,buyin:this.state.maxVal};
        const maxLineRight = {date:this.state.rightTitle,buyin:this.state.maxVal};
        const minVal = this.state.minVal;
        const minLineLeft = {date:this.state.leftTitle,buyin:this.state.minVal};
        const minLineRight = {date:this.state.rightTitle,buyin:this.state.minVal};
        const showPoint = GetPointTicks(data,[maxVal,minVal]);
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
                            if(showPoint.indexOf(val)>=0){
                                return 3;
                            }
                            return 0;
                        }]}
                        shape={"circle"}
                        style={{
                            lineWidth: 2
                        }}
                    />
                    <Guide>
                        <Line
                            top={true}
                            start={maxLineLeft}
                            end={maxLineRight}
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
                                content:'Max值' + maxVal + '万',
                                offsetY:-5
                            }}
                        />
                        <Line
                            top={true}
                            start={minLineLeft}
                            end={minLineRight}
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
                                content:'Min值' + minVal + '万',
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

const GetPointTicks = (data=[],val=[])=>{
    let r = [];
    data.map((item)=>{
        if(item.hasOwnProperty("date")&&item.hasOwnProperty("buyin")){
            if(val.indexOf(item.buyin)>=0&&r.indexOf(item.date)<0){
                r.push(item.date);
            }
        }
        return item;
    }) ;
    return r;
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
