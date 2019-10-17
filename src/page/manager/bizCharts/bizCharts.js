import React from "react";
import {BasePage} from "../page";
import "./bizCharts.css";
import {ChartOne} from "./chartOne";

export class BizCharts extends BasePage {
    render() {
        return (
            <div className={"ContentMargin"}>
                <ChartOne />
            </div>
        )
    }
}
