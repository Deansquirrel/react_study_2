import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import {Login} from "./login/login";
import {Manager} from "./manager/manager"
import {checkLogin} from "../common/common";

import store from "../data/store";

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
                <PrivateRoute exact  path="/" component={Welcome} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/manager" component={Manager} />
            </Router>
        )
    }
}

const Welcome = () => <Redirect to={{pathname:"/manager"}} />;

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
