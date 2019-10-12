import {Redirect, Route} from "react-router";
import Test from "./test/test";
import React, {Component} from "react";

const MyPageContent = ({match}) => {
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

export default MyPageContent;

//TODO 使用保存目录直接进入时，菜单选中状态不对

export class PageContentRoute extends Component {


}


// const PageContentRoute = ({component:Component,...rest}) => {
//     return (
//     <Route
//         {...rest}
//         render={props=>(<Component {...props}/>)}    />
//     )
// };

export const GetMenuSelectKey = (match) => {
    console.log(match.url);
    const prefix = "/manager/";
    switch(match.url){
        case prefix+"welcome":
            return "welcome";
        case prefix+"11":
            return "testPage11";
        case prefix+"12":
            return "testPage12";
        case prefix+"21":
            return "testPage21";
        case prefix+"22":
            return "testPage22";
        case prefix+"31":
            return "testPage31";
        case prefix+"32":
            return "testPage32";
        default:
            return "";
    }
};

export const GetMenuOpenKey = (match) => {
    console.log(match.url);
    const prefix = "/manager/";
    switch(match.url){
        case prefix+"welcome":
            return "";
        case prefix+"11":
        case prefix+"12":
            return "testPage1";
        case prefix+"21":
        case prefix+"22":
            return "testPage2";
        case prefix+"31":
        case prefix+"32":
            return "testPage3";
        default:
            return "";
    }
};
