import React from "react";
import { Row, Col } from 'antd';
import {BasePage} from "../page";
import "./bizCharts.css";
import {ChartOne} from "./chartOne";

export class BizCharts extends BasePage {
    render() {
        return (
            <div className={"ContentMargin"}>
                <Row gutter={16}>
                    <Col span={12}>
                        <ChartOne />
                    </Col>
                    <Col span={12}>
                        <ChartOne />
                    </Col>
                </Row>
                <div style={{marginTop:"64px"}}>
                    <ChartOne />
                </div>

            </div>
        )
    }
}
