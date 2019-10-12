import React, { Component } from 'react';
// import PropTypes from "prop-types";
import {ConfigProvider,message} from "antd";
// import {BrowserRouter as Router,Route,Link } from "react-router-dom";

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './main.css';

import moment from "moment";
import 'moment/locale/zh-cn';
import {MyRoute} from "./router";
// import {Manager} from "./manager/manager";
// import {GetVersion} from "../data/dataInterface";

moment.locale('zh-cn');
message.config({
    top:60,
});

// class Main extends Component {
//     componentDidMount() {
//         GetVersion();
//     }
//
//     render() {
//         return (
//             <ConfigProvider  locale={zhCN}>
//                 <Manager />
//             </ConfigProvider>
//         )
//     }
// }

class Main extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <MyRoute />
            </ConfigProvider>
        )
    }
}

export default Main;
