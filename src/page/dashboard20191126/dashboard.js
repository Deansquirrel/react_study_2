import React, {Component} from "react";
import {Row,Col} from 'antd';
import "./dashboard.css"
import {ViewContent} from "./viewcontent";
import {Table11} from "./table11";
import {Table12} from "./table12";

const data = [
    'Racing',
    'Racing',
    'Racing',
    'Racing',

];

export class Dashboard20191126 extends Component{
    render() {
        return(
            <div className={"dashboard20191126"}>
                <Row gutter={[32,32]}>
                    <Col span={12} style={{height:"50%"}}>
                        <ViewContent onClickFun={(k)=>{
                            console.log("11");
                            console.log(k);
                        }} title={"test title"} list={data} table={<Table11 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent onClickFun={(k)=>{
                            console.log("12");
                            console.log(k);
                        }} title={"test title"} list={data} table={<Table12 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent onClickFun={(k)=>{
                            console.log("21");
                            console.log(k);
                        }} title={"test title"} list={data} table={<Table11 />} />
                    </Col>
                    <Col span={12}>
                        <ViewContent onClickFun={(k)=>{
                            console.log("22");
                            console.log(k);
                        }} title={"test title"} list={data} table={<Table11 />} />
                    </Col>
                </Row>
            </div>
        )
    }
}
