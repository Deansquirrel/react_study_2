import {Route} from "react-router";
import Test from "./test/test";
import React, {Component} from "react";
import {GetMenuData} from "../../common/common";
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";

export const MyPageContent = ({match}) => {
    return <div>
        <Route path={`${match.url}/welcome`} component={Test} />
        <Route path={`${match.url}/11`} component={Test} />
        <Route path={`${match.url}/12`} component={Test} />
        <Route path={`${match.url}/21`} component={Test} />
        <Route path={`${match.url}/22`} component={Test} />
        <Route path={`${match.url}/31`} component={Test} />
        <Route path={`${match.url}/32`} component={Test} />
    </div>
};

export const MyMenuList = ({match}) => {
    return <div>
        <Route path={`${match.url}/welcome`} component={MyMenu} />
        <Route path={`${match.url}/11`} component={MyMenu} />
        <Route path={`${match.url}/12`} component={MyMenu} />
        <Route path={`${match.url}/21`} component={MyMenu} />
        <Route path={`${match.url}/22`} component={MyMenu} />
        <Route path={`${match.url}/31`} component={MyMenu} />
        <Route path={`${match.url}/32`} component={MyMenu} />
    </div>
};

const newOpenKes = (openKeys=[],currKeys="") =>{
    let nOpenKeys = openKeys.join("@@@");
    nOpenKeys=nOpenKeys.replace(currKeys,"");
    nOpenKeys=nOpenKeys.replace(/@@@/g,"");
    return nOpenKeys;
};

const menuData = GetMenuData();

const { SubMenu } = Menu;

class MyMenu extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectedKey:"",
            openKeys:"",
        }
    }

    componentDidMount() {
        this.setState({
            openKeys:GetMenuOpenKey(this.props.match.url),
            selectedKey:GetMenuSelectKey(this.props.match.url)
        });
    }

    render() {
        const match = this.props.match;
        const sUrl = match.url.substring(0,match.url.lastIndexOf("/"));
        const onItemClick=(key="",clearOpenKeys=false)=>{
            this.setState({
                selectedKey:key,
            });
            if(clearOpenKeys){
                this.setState({
                    openKeys:"",
                });
            }
        };
        return <Menu
            theme="dark"
            mode="inline"
            openKeys={[this.state.openKeys]}
            selectedKeys={[this.state.selectedKey]}
            onOpenChange={(openKeys)=>{
                this.setState({
                    openKeys:newOpenKes(openKeys,this.state.openKeys),
                });
            }}
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
                                        <Link to={`${sUrl}/${subItem.path}`}>{subItem.title}</Link>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                    )
                }else{
                    return (
                        <Menu.Item key={item.key} onClick={()=>onItemClick(item.key,true)}>
                            <Link to={`${sUrl}/${item.path}`}><Icon type={item.icon} /><span>{item.title}</span></Link>
                        </Menu.Item>
                    )
                }
            })}
        </Menu>
    }
}

const GetMenuSelectKV = () => {
    let menuKV = new Map();
    menuData.map((item)=>{
        if(item.hasOwnProperty("path")&&item.hasOwnProperty("key")){
            menuKV[item.path]=item.key;
        }else{
            if(item.hasOwnProperty("key")&&item.hasOwnProperty("child")&&item.child.length>0){
                item.child.map((subItem)=>{
                    if(subItem.hasOwnProperty("key")&&subItem.hasOwnProperty("path")){
                        menuKV[subItem.path]=subItem.key;
                    }
                    return subItem;
                });
            }
        }
        return item;
    });
    return menuKV;
};

const GetMenuSelectKey = (url="") => {
    const menuKV = GetMenuSelectKV();
    const prefix = "/manager/";
    let result = "";
    for(let key in menuKV){
        if(prefix+key===url){
            return menuKV[key];
        }
    }
    return result;
};

const GetMenuOpenKV = () => {
    let menuKV = new Map();
    menuData.map((item)=>{
        if(item.hasOwnProperty("path")&&item.hasOwnProperty("key")){
            menuKV[item.path]=item.key;
        }else{
            if(item.hasOwnProperty("key")&&item.hasOwnProperty("child")&&item.child.length>0){
                const p = item.key;
                item.child.map((subItem)=>{
                    if(subItem.hasOwnProperty("key")&&subItem.hasOwnProperty("path")){
                        menuKV[subItem.path]=p;
                    }
                    return subItem;
                });
            }
        }
        return item;
    });
    return menuKV;
};

const GetMenuOpenKey = (url) => {
    const menuKV = GetMenuOpenKV();
    const prefix = "/manager/";
    let result = "";
    for(let key in menuKV){
        if(prefix+key===url){
            return menuKV[key];
        }
    }
    return result;
};
