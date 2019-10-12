import React, {Component} from "react";
import { Redirect } from "react-router-dom";
// import PropTypes from 'prop-types';
import { Form,Icon, Input,Button,message } from 'antd';

import uuid from "uuid";

import "./login.css"
import store from "../../data/store";
import {
    UserConnectIdAction,
    UserIsAuthenticatedAction
} from "../../data/actions";
import {checkLogin, GetUserInfo} from "../../common/common";

const newSessionId = () => {
    return uuid.v4().replace(/-/g,"").toUpperCase();
};

const loginCheck =(user="",pwd="") => {
    return GetUserInfo().filter((item)=>{
        return item.u===user && item.p === pwd;
    }).length > 0
};

const login = (user="",pwd="") => {
    if(loginCheck(user,pwd)){
        store.dispatch(UserIsAuthenticatedAction(true));
        store.dispatch(UserConnectIdAction(newSessionId()));
        return true;
    }
    return false;
};

export class Login extends Component {
    render() {
        const {from}  = this.props.location.state || {from:{pathname:"/"}};
        if(checkLogin()){
            return <Redirect to={from} />
        }
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

class LoginFormR extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.setState({
                isLoading:true
            });
            if (!err) {
                if(login(values["username"],values["password"])){
                    message.info("login success");
                } else {
                    this.inputUserName.focus();
                    message.error("登录名不存在或密码错误");
                }
            } else {
                if(values["username"]===undefined||values["username"]===""){
                    this.inputUserName.focus();
                } else {
                    this.inputPassword.focus();
                }
            }
            this.setState({
                isLoading:false
            });
        });

    };

    componentDidMount() {
        if(this.inputUserName!==undefined){
            this.inputUserName.focus();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const isLoading = this.state.isLoading;
        return (
            <div>
                <div className={"login-form"}>
                    <h1>Login in</h1>
                    <Form style={{marginTop:'50px'}}
                          onSubmit={(e)=>this.handleSubmit(e)}
                    >
                         <Form.Item>
                             {getFieldDecorator('username', {
                                 rules: [{ required: true, message: 'Please input your username!' }],
                             })(
                                 <Input ref={(input)=>this.inputUserName=input} size={"large"}
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     placeholder="Username"
                                 />,
                             )}
                         </Form.Item>
                        <Form.Item>
                              {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                             <Input
                             ref={(input)=>this.inputPassword=input}
                                 size={"large"}
                                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                 type="password"
                                 placeholder="Password"
                             />,
                         )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                loading={isLoading}
                                type="primary"
                                style={{width:'100%',marginTop:'30px'}}
                                size={"large"}
                                htmlType="submit"
                                className="login-form-button">
                                {isLoading?"Logging in":"Log in"}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(LoginFormR);
