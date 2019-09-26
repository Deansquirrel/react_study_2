import React, {Component} from "react";
import {Button,Select} from "antd";

import "./test.css"

import store from "../../../data/store";
import {PageManagerTestCurrTypeAction} from "../../../data/actions";
import {RefreshTypeData} from "../../../data/dataInterface";

export class Test extends Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(
            ()=>this.forceUpdate()
        );
        if(store.getState().page.manager.test.currType===""){
            const list = getMenuList();
            if(list.length>0){
                store.dispatch(PageManagerTestCurrTypeAction(list[0]));
            }
        }
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { Option } = Select;
        const list = getMenuList();
        const defaultValue = list.length>0?list[0]:"";
        const showValue = getShowValue();
        return (
            <div className={"ContentMargin"} style={{height:"100%"}}>
                <h1>
                    Test
                </h1>
                <Select
                    defaultValue={defaultValue}
                    ref={(s)=>this.s=s}
                    placeholder={"请选择"}
                    style={{ width: 120 }}
                    onChange={(value)=>store.dispatch(PageManagerTestCurrTypeAction(value))}>
                    {list.map((item)=>{
                        return <Option key={item} value={item}>{item}</Option>
                    })}
                </Select>
                <Button style={{marginLeft:"32px"}} type={"primary"} onClick={()=>{
                    RefreshTypeData(store.getState().page.manager.test.currType);
                }}>Refresh</Button>
                <br/>
                <div style={{marginTop:"16px"}}>
                    data:<p>{showValue.hasOwnProperty("data")?showValue.data:""}</p>
                    lastUpdate:<p>{showValue.hasOwnProperty("lastUpdate")?showValue.lastUpdate:""}</p>
                </div>
            </div>
        )
    }
}

const getMenuList = () => {
    let list = [];
    store.getState().page.manager.test.typeData.map((item)=>{
        if(item.hasOwnProperty("type")&&item.type!==""){
            list.push(item.type)
        }
        return item;
    });
    return list.sort();
};

const getShowValue = () => {
    const type = store.getState().page.manager.test.currType;
    if(type===""){
        return {};
    }
    const l = store.getState().page.manager.test.typeData.filter((item)=>{
        return item.hasOwnProperty("type")&&item.type===type;
    });
    if(l.length>0){
        return l[0];
    } else {
        return {};
    }
};
