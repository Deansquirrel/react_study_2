import React, {Component} from "react";
import {Button,Layout,Icon,Menu} from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./manager.css"
import {GetMenuData} from "../../common/common";
import {Welcome} from "./welcome/welcome";
import Test from "./test/test";

// import store from "../../data/store";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

export class Manager extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         collapsed:false,
    //         version:"0.0.0 Build20190101",
    //         wsVersion:"0.0.0 Build20190101",
    //         defaultOpenKeys:["MyPage"],
    //         page:"test",
    //     }
    // }

    constructor(props){
        super(props);
        this.state={
            leftWidth:256,
            collapsed:false,
        }
    }

    render() {
        // const {version,wsVersion,collapsed,page,defaultOpenKeys} = this.state;
        const version = "0.0.0";
        const resVersion = "0.0.0";
        const collapsed = this.state.collapsed;
        const leftWidth = collapsed?80:256;

        const menuData = GetMenuData();
        return (
            <div className={"rootContainer"}>
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
                            menuData={menuData}
                            // selectedKeys={[page]}
                            // defaultOpenKeys={defaultOpenKeys}
                            // onClick={(page)=>{
                            //     this.setState({
                            //         page:page,
                            //     })
                            // }}
                            style={{marginBottom:'80px'}} />
                        {/*<div style={{width:'100%',height:'80px',backgroundColor:'transparent'}} />*/}

                        {/*<div className={"ManagerVersionInfo"}*/}
                        {/*     style={{display:collapsed?"none":"block"}}*/}
                        {/*>*/}
                        {/*    <span>ver {version}</span>*/}
                        {/*    <br/>*/}
                        {/*    <span>res {resVersion}</span>*/}
                        {/*</div>*/}
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
                                        onClick={()=>console.log("Logout")}
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
                            {/*<Router>*/}
                            {/*    <div>*/}

                            {/*        <Route exact path="/" component={Welcome} />*/}
                            {/*        <Route path="/11" component={Test} />*/}
                            {/*    </div>*/}
                            {/*</Router>*/}
                            <Welcome />
                            <CommonBottom />
                        </Layout>
                        {/*<div style={{*/}
                        {/*    paddingTop:"64px",*/}
                        {/*    paddingLeft:"256px"*/}
                        {/*}}>*/}
                        {/*    <Welcome />*/}
                        {/*    <div className={"CommonBottom"}>*/}
                        {/*        @Test*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                if (item.hasOwnProperty("child")&&item.child.length > 0){
                    return (
                        <SubMenu
                            key={item.key}
                            title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                            {item.child.map((subItem)=>{
                                return (
                                    <Menu.Item key={subItem.key}
                                               onClick={()=>onClick(subItem.key)} >
                                        <Link to={"manager" + subItem.path}>{subItem.title}</Link>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={item.key} onClick={()=>onClick(item.key)}>
                            {/*<span>{item.title}</span>*/}
                            <Link to={"manager" + item.path}><Icon type={item.icon} />{item.title}</Link>
                        </Menu.Item>
                    )
                }
            })}
        </Menu>
    )
};

// const PageContent = ({match}) => {
//     return (
//         <Route path={`${match.url}/11`} component={Test}/>
//     )
// };


// const PageContent = () => (
//     <Router>
//         <Route path="/" component={Welcome} />
//         <Route path="test" component={Test} />
//     </Router>
// );

export const CommonBottom = () => {
    return (
        <div className={"CommonBottom"}>
            @Test
        </div>
    )
};
