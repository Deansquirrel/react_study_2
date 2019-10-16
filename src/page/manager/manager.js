import React, {Component} from "react";
import {Button, Icon, Layout} from "antd";
import "./manager.css";
import {UserConnectIdAction, UserIsAuthenticatedAction} from "../../data/actions";
import store from "../../data/store";
import {MyMenuList, MyPageContent} from "./router";

const { Header, Sider } = Layout;

const logout = () => {
    store.dispatch(UserIsAuthenticatedAction(false));
    store.dispatch(UserConnectIdAction(""));
};

export class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftWidth: 256,
            collapsed: false,
        };
    }

    render() {
        // const version = "0.0.0";
        // const resVersion = "0.0.0";
        const collapsed = this.state.collapsed;
        const leftWidth = collapsed ? 80 : 256;
        // const menuData = GetMenuData();

        return (
            <div  className={"rootContainer"}>
                <Layout>
                    <Sider
                        width={leftWidth}
                        style={{
                            height:'100vh',
                            overflow:'auto',
                            position:'fixed',
                            left:0,
                            zIndex:2,
                        }}
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                    >
                        <div className="logo" />
                        <MyMenuList match={this.props.match} />
                    </Sider>
                    <Layout style={{height:"100%"}}>
                        <Header style={{
                            background: '#fff',
                            padding: 0,
                            position:"fixed",
                            zIndex:1,
                            width:"100%",
                            paddingLeft:leftWidth
                        }}>
                            <Icon
                                className="trigger"
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={()=>this.setState({
                                    collapsed:!collapsed,
                                })}
                            />
                            <div className={"rightHeader"}>
                                <Button type={"link"}
                                    // onClick={()=>console.log("Logout")}
                                        onClick={()=>logout()}
                                >
                                    <Icon type="logout" />Logout
                                </Button>
                            </div>
                        </Header>
                        <Layout style={{
                            width:"100%",
                            minHeight:"100vh",
                            paddingLeft:leftWidth,
                            paddingTop:"64px"
                        }}>
                            <MyPageContent match={this.props.match} />
                            <CommonBottom />
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

const CommonBottom = () => {
    return (
        <div className={"CommonBottom"}>
            @Test
        </div>
    )
};
