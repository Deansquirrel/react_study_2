import React, {Component} from "react";
// import PropTypes from 'prop-types';
// import {combineReducers,createStore} from "redux";

// import "../../App.css"
// import "../common.css"
import "./manager.css"

import {Button,Layout,Icon,Menu} from "antd";

// import {CommonBottom} from "../common";
import {Welcome} from "./welcome/welcome";
import {Test} from "./test/test";
import {GetMenuData} from "../../config/common";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

export class Manager extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed:false,
            version:"0.0.0 Build20190101",
            wsVersion:"0.0.0 Build20190101",
            defaultOpenKeys:["MyPage"],
            page:"test",
        }
    }

    render() {
        const {version,wsVersion,collapsed,page,defaultOpenKeys} = this.state;
        const menuData = GetMenuData();
        return (
            <div className={"rootContainer"}>
                <Layout>
                    <Sider
                        width={256}
                        style={{minHeight:'100vh'}}
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <MenuList
                            menuData={menuData}
                            selectedKeys={[page]}
                            defaultOpenKeys={defaultOpenKeys}
                            onClick={(page)=>{
                                this.setState({
                                    page:page,
                                })
                            }}
                            style={{marginBottom:'80px'}} />
                        <div style={{width:'100%',height:'80px',backgroundColor:'transparent'}} />
                        <div className={"ManagerVersionInfo"}
                             style={{display:collapsed?"none":"block"}}>
                            <span>ver {version}</span>
                            <br/>
                            <span>res {wsVersion}</span>
                        </div>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 , width: '100%' }}>
                            <Icon
                                className="trigger"
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={()=>this.setState({
                                    collapsed:!collapsed,
                                })}
                            />
                            <div className={"rightHeader"}>
                                <Button type={"link"}
                                        onClick={()=>console.log("Logout")}
                                >
                                    <Icon type="logout" />Logout
                                </Button>
                            </div>
                        </Header>
                        <PageContent page={page}/>
                        <CommonBottom/>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

const MenuList = ({selectedKeys=[],defaultOpenKeys=[],menuData=[],onClick=f=>f}) => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            defaultOpenKeys={defaultOpenKeys}
        >
            {menuData.map((item)=>{
                if (item.child&&item.child.length > 0){
                    return (
                        <SubMenu
                            key={item.key}
                            title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                            {item.child.map((subItem)=>{
                                return (
                                    <Menu.Item key={subItem.key}
                                               onClick={()=>onClick(subItem.key)} >
                                        <span>{subItem.title}</span>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={item.key} onClick={()=>onClick(item.key)}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Menu.Item>
                    )
                }
            })}
        </Menu>
    )
};

const PageContent = ({page=""}) => {
    switch (page) {
        case "welcome":
            return <Welcome />;
        case "test":
            return <Test/>;
        // case "Z5MdDataTrans":
        //     return <HeartBeatMonitor
        //         wsAddress={store.getState().managerState.wsAddress}
        //         type={"Z5MdDataTrans"}
        //     />;
        // case "Z9MdDataTransV2":
        //     return <HeartBeatMonitor
        //         wsAddress={store.getState().managerState.wsAddress}
        //         type={"Z9MdDataTransV2"}
        //     />;
        default:
            return <Welcome  />;
    }
};

export const CommonBottom = () => {
    return (
        <div className={"CommonBottom"}>
            @Test
        </div>
    )
};
