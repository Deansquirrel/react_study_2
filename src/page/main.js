import React, { Component } from 'react';
// import PropTypes from "prop-types";
import {ConfigProvider,message} from "antd";

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './main.css';

import moment from "moment";
import 'moment/locale/zh-cn';
import {Manager} from "./manager/manager";

moment.locale('zh-cn');
message.config({
    top:60,
});

class Main extends Component {
    render() {
        return (
            <ConfigProvider  locale={zhCN}>
                <Manager />
            </ConfigProvider>
        )
    }
}

export default Main;
