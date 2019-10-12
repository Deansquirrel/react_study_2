import React, {Component} from "react";
import {Button, Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import store from "../../data/store";
import {UserConnectIdAction, UserIsAuthenticatedAction} from "../../data/actions";
import {GetMenuData} from "../../common/common";

import "./manager.css";
import MyPageContent, {GetMenuOpenKey, GetMenuSelectKey} from "./router";

const { Header, Sider } = Layout;

const logout = () => {
    store.dispatch(UserIsAuthenticatedAction(false));
    store.dispatch(UserConnectIdAction(""));
};

export class Manager extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedKey:"welcome",
            openKeys:"",
            leftWidth:256,
            collapsed:false,
        };
    }

    componentDidMount() {
        this.setState({
            selectedKey:GetMenuSelectKey(this.props.match),
            openKeys:GetMenuOpenKey(this.props.match),
        })
    }

    render() {
        // const version = "0.0.0";
        // const resVersion = "0.0.0";
        const collapsed = this.state.collapsed;
        const leftWidth = collapsed?80:256;
        const menuData = GetMenuData();

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
                        <MenuList
                            selectedKeys={[this.state.selectedKey]}
                            defaultOpenKeys={[this.state.openKeys]}
                            menuData={menuData}
                            match={this.props.match}
                            onOpenChange={(openKeys)=>{
                                this.setState({
                                    openKeys:newOpenKes(openKeys,this.state.openKeys),
                                });
                                this.forceUpdate();
                            }}
                            onItemClick={(key="",clearOpenKeys=false)=>{
                                this.setState({
                                    selectedKey:key,
                                });
                                if(clearOpenKeys){
                                    this.setState({
                                        openKeys:"",
                                    });
                                }
                            }}
                        />
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

const newOpenKes = (openKeys=[],currKeys="") =>{
    let nOpenKeys = openKeys.join("@@@");
    nOpenKeys=nOpenKeys.replace(currKeys,"");
    nOpenKeys=nOpenKeys.replace(/@@@/g,"");
    return nOpenKeys;
};

const { SubMenu } = Menu;
const MenuList = ({selectedKeys=[],defaultOpenKeys=[],menuData=[],match,onOpenChange=f=>f,onItemClick=f=>f}) => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={defaultOpenKeys}
            onOpenChange={onOpenChange}
            style={{
                marginBottom:"64px"
            }}
        >
            {menuData.map((item)=>{
                if(item.hasOwnProperty("child")&&item.child.length>0){
                    return (
                        <SubMenu
                            key={item.key}
                            title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                        >
                            {item.child.map((subItem)=>{
                                return (
                                    <Menu.Item key={subItem.key} onClick={()=>onItemClick(subItem.key)}>
                                        <Link to={`${match.url}/${subItem.path}`}>{subItem.title}</Link>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                    )
                }else{
                    return (
                        <Menu.Item key={item.key} onClick={()=>onItemClick(item.key,true)}>
                            <Link to={`${match.url}/${item.path}`}><Icon type={item.icon} /><span>{item.title}</span></Link>
                        </Menu.Item>
                    )
                }
            })}
        </Menu>
    )
};

const CommonBottom = () => {
    return (
        <div className={"CommonBottom"}>
            @Test
        </div>
    )
};


