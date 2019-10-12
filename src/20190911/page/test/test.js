import React, {Component} from "react";
import {Button} from "antd";
import store from "../../data/store";
import {

    UserConnectIdAction, UserIsAuthenticatedAction
} from "../../data/actions";

export class ActionTest extends Component {

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
            <div>
                {store.getState().global.version}
                <br/>
                {store.getState().global.resVersion}
                <br/>
                {store.getState().user.connectId}
                <br/>
                <Button
                    style={{marginTop:"12px"}}
                    onClick={()=>{
                        store.dispatch(UserIsAuthenticatedAction(false));
                        store.dispatch(UserConnectIdAction(""));
                    }}
                    type={"primary"}>
                    logout
                </Button>
            </div>
        )
    }
}
