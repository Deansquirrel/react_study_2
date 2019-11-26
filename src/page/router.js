import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import {Login} from "./login/login";
import {Manager} from "./manager/manager"
import {checkLogin} from "../common/common";

import store from "../data/store";
import {Dashboard20191126} from "./dashboard20191126/dashboard";

export class MyRoute extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(
            ()=>this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <Router>
                <Route exact path="/" component={Dashboard20191126} />
                <Route path="/login" component={Login} />
                <PrivateRoute exact  path="/welcome" component={Welcome} />
                <PrivateRoute path="/manager" component={Manager} />
            </Router>
        )
    }
}

const Welcome = () => <Redirect to={{pathname:"/manager/welcome"}} />;

export const PrivateRoute = ({component:Component,...rest}) => (
    <Route
        {...rest}
        render={props=>
            checkLogin()?(<Component {...props}/>):(
                <Redirect to={{pathname:"/login",state:{from:props.location}}} />
            )
        }
    />
);

