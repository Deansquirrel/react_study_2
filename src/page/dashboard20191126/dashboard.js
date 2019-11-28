import React, {Component} from "react";
import {Row,Col} from 'antd';
import "./dashboard.css"
import {ViewContent} from "./viewcontent";
import {Table11} from "./table11";
import {Table12} from "./table12";
import {GetTestD1Data, GetTestD3Data, GetTestD4Data} from "./common";
import {RandInt} from "../../common/common";

import store from '../../data/store';
import {
    Dashboard20191126CurrAction,
    Dashboard20191126D1Action,
    Dashboard20191126D3Action,
    Dashboard20191126D4Action
} from "../../data/actions";
import {Table21} from "./table21";
import {
    GetD1Id,
    GetD1List,
    GetD1TableData,
    GetD1Title,
    GetD1Value,
    GetD2Id,
    GetD2List,
    GetD2TableData,
    GetD2Title,
    GetD2Value,
    GetD3Id,
    GetD3List,
    GetD3TableData,
    GetD3Title,
    GetD3Value,
    GetD4Id,
    GetD4List,
    GetD4TableData,
    GetD4Title,
    GetD4Value
} from "./tableData";
import {Table22} from "./table22";

const data = [
    {
        id:12345,
        title:"一二三四五六一二三四五六一二三四五六一二三四五六"
    },
    {
        id:1234,
        title:"a"
    }
];

const InitTestData = () => {
    const d1Data = GetTestD1Data(RandInt(3,20));
    store.dispatch(Dashboard20191126D1Action(d1Data.gs,d1Data.data));
    const d3Data = GetTestD3Data(RandInt(10,20));
    store.dispatch(Dashboard20191126D3Action(d3Data.gs,d3Data.data));
    const d4Data = GetTestD4Data(RandInt(10,20));
    store.dispatch(Dashboard20191126D4Action(d4Data.gs,d4Data.data));

    const curr = store.getState().dashboard20191126.curr;
    store.dispatch(Dashboard20191126CurrAction(d1Data.gs.length>0?0:-1,
        curr.d2,
        d3Data.gs.length>0?0:-1,
        d4Data.gs.length>0?0:-1,));
};

const addCurr = () => {
    const state = store.getState().dashboard20191126;
    const currD1 = state.d1.gs.length>0?(state.curr.d1>=state.d1.gs.length-1?0:state.curr.d1+1):-1;
    const currD2 = state.d2.gs.length>0?(state.curr.d2>=state.d2.gs.length-1?0:state.curr.d2+1):-1;
    const currD3 = state.d3.gs.length>0?(state.curr.d3>=state.d3.gs.length-1?0:state.curr.d3+1):-1;
    const currD4 = state.d4.gs.length>0?(state.curr.d4>=state.d4.gs.length-1?0:state.curr.d4+1):-1;
    store.dispatch(Dashboard20191126CurrAction(currD1,currD2,currD3,currD4));
};

export class Dashboard20191126 extends Component{
    componentDidMount() {
        window.addEventListener('resize',()=>this.forceUpdate());
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
        InitTestData();
        this.rUpdate = setInterval(()=>addCurr(),1000*5);
    }

    componentWillUnmount() {
        this.unsubscribe();
        clearInterval(this.rUpdate);
    }

    render() {
        console.log(store.getState());
        //================================================================================
        const currD1Index = store.getState().dashboard20191126.curr.d1;
        const currD1Id = GetD1Id(currD1Index);
        const currD1Value = GetD1Value(currD1Id);
        const currD1List = GetD1List();
        const currD1Title = (currD1Index+1) + "/" + currD1List.length + " " +  GetD1Title(currD1Id);
        const currD1TableData = GetD1TableData(currD1Id);
        //================================================================================
        const currD2Index = store.getState().dashboard20191126.curr.d2;
        const currD2Id = GetD2Id(currD2Index);
        const currD2Value = GetD2Value(currD2Id);
        const currD2List = GetD2List();
        const currD2Title = (currD2Index+1) + "/" + currD2List.length + " " +  GetD2Title(currD2Id);
        const currD2TableData = GetD2TableData(currD2Id);
        //================================================================================
        const currD3Index = store.getState().dashboard20191126.curr.d3;
        const currD3Id = GetD3Id(currD3Index);
        const currD3Value = GetD3Value(currD3Id);
        const currD3List = GetD3List();
        const currD3Title = (currD3Index+1) + "/" + currD3List.length + " " +  GetD3Title(currD3Id);
        const currD3TableData = GetD3TableData(currD3Id);
        //================================================================================
        const currD4Index = store.getState().dashboard20191126.curr.d4;
        const currD4Id = GetD4Id(currD4Index);
        const currD4Value = GetD4Value(currD4Id);
        const currD4List = GetD4List();
        const currD4Title = (currD4Index+1) + "/" + currD4List.length + " " +  GetD4Title(currD4Id);
        const currD4TableData = GetD4TableData(currD4Id);
        //================================================================================
        return(
            <div className={"dashboard20191126"}>
                <Row gutter={[32,32]}>
                    <Col span={12} style={{height:"50%"}}>
                        <ViewContent onClickFun={(k)=>{
                            const curr = store.getState().dashboard20191126.curr;
                            store.dispatch(Dashboard20191126CurrAction(k,curr.d2,curr.d3,curr.d4));
                        }}
                             title={currD1Title}
                             value={currD1Value}
                             list={currD1List}
                             table={<Table11 data={currD1TableData} />}
                        />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                const curr = store.getState().dashboard20191126.curr;
                                store.dispatch(Dashboard20191126CurrAction(curr.d1,k,curr.d3,curr.d4));
                            }}
                            title={"test title"}
                            value={25369.1}
                            list={data}
                            table={<Table12 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                const curr = store.getState().dashboard20191126.curr;
                                store.dispatch(Dashboard20191126CurrAction(curr.d1,curr.d2,k,curr.d4));
                            }}
                            title={currD3Title}
                            value={currD3Value}
                            list={currD3List}
                            table={<Table21 data={currD3TableData} />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                const curr = store.getState().dashboard20191126.curr;
                                store.dispatch(Dashboard20191126CurrAction(curr.d1,curr.d2,curr.d3,k));
                            }}
                            title={currD4Title}
                            value={currD4Value}
                            list={currD4List}
                            table={<Table22 data={currD4TableData} />} />
                    </Col>
                </Row>
            </div>
        )
    }
}
