import React, {Component} from "react";
import {Row,Col} from 'antd';
import "./dashboard.css"
import {ViewContent} from "./viewcontent";
import {Table11} from "./table11";
import {Table12} from "./table12";
import {GetTestD1Data} from "./common";
import {RandInt} from "../../common/common";

import store from '../../data/store';
import {Dashboard20191126CurrAction, Dashboard20191126D1Action} from "../../data/actions";

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

const getD1Id = (index = -1) => {
    if(index < 0){
        return -1;
    }
    store.getState().dashboard20191126.d1.gs.forEach((item)=>{
        if(item.index===index){
            return item.id;
        }
    });
    return -1;
};

const getD1Title = (id=-1) => {
    store.getState().dashboard20191126.d1.gs.forEach((item)=>{
        if(item.id===id){
            return item.name;
        }
    });
    return "";
};

export class Dashboard20191126 extends Component{
    componentDidMount() {
        window.addEventListener('resize',()=>this.forceUpdate());

        const d1Data = GetTestD1Data(RandInt(3,20));
        console.log(d1Data);
        store.dispatch(new Dashboard20191126D1Action(d1Data.gs,d1Data.data));
        const curr = store.getState().dashboard20191126.curr;
        store.dispatch(new Dashboard20191126CurrAction(d1Data.gs.length>0?0:-1,curr.d2,curr.d3,curr.d4));

        this.l = store.subscribe(()=>this.forceUpdate());
    }

    componentWillUnmount() {

    }

    render() {
        const currD1Id = getD1Id(store.getState().dashboard20191126.curr.d1);
        console.log(currD1Id);
        const currD1Title = getD1Title(currD1Id);
        console.log(currD1Title);
        return(
            <div className={"dashboard20191126"}>
                <Row gutter={[32,32]}>
                    <Col span={12} style={{height:"50%"}}>
                        <ViewContent onClickFun={(k)=>{
                            console.log("11");
                            console.log(k);
                        }}
                                     title={currD1Title}
                                     value={12345.6}
                                     list={data}
                                     table={<Table11 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                console.log("12");
                                console.log(k);
                            }}
                            title={"test title"}
                            value={25369.1}
                            list={data}
                            table={<Table12 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                console.log("21");
                                console.log(k);
                            }}
                            title={"一二三四五六七八九十"}
                            value={256}
                            list={data}
                            table={<Table11 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent
                            onClickFun={(k)=>{
                                console.log("22");
                                console.log(k);
                            }}
                            title={"test title"}
                            value={"25369"}
                            list={data}
                            table={<Table11 />} />
                    </Col>
                </Row>
            </div>
        )
    }
}
