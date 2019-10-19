import React from "react";
import { Row, Col } from 'antd';
import {BasePage} from "../page";
import "./bizCharts.css";
import {Chart0001} from "./chart0001";
import {Chart0002} from "./chart0002";
import {Chart0003} from "./chart0003";

export class BizCharts extends BasePage {
    render() {
        return (
            <div className={"ContentMargin"} style={{background:"white"}}>
                <Row gutter={{ xs: 8, sm: 16, md: 24}}>
                    <Col xl={{span:12}} xxl={{span:8}}>
                        <Chart0001 />
                    </Col>
                    <Col xl={{span:12}} xxl={{span:8}}>
                        <Chart0002 />
                    </Col>
                    <Col xl={{span:12}} xxl={{span:8}}>
                        <Chart0003 />
                    </Col>
                </Row>
            </div>
        )
    }
}
