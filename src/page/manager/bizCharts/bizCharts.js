import React from "react";
import { Row, Col } from 'antd';
import {BasePage} from "../page";
import "./bizCharts.css";
import {Chart0001} from "./chart0001";
import {Chart0002} from "./chart0002";

export class BizCharts extends BasePage {
    render() {
        return (
            <div className={"ContentMargin"} style={{background:"white"}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Chart0001 />
                    </Col>
                    <Col span={12}>
                        <Chart0002 />
                    </Col>
                </Row>
            </div>
        )
    }
}
