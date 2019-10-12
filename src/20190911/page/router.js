import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import {ActionTest} from "./test/test";
import {Login} from "./login/login";
import {Manager} from "./manager/manager";

import store from "../data/store";
import {checkLogin} from "../common/common";

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
                <PrivateRoute  path="/" component={Manager} />
                <Route path="/login" component={Login} />
                {/*<PrivateRoute path="/action" component={ActionTest} />*/}
                {/*<PrivateRoute path="/manager/" component={Manager} />*/}
            </Router>
        )
    }
}

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


//
// // 设置根路由
// const BasicExample = () => (
//     // 根路由标签
//     <Router>
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/topics">Topics</Link>
//                 </li>
//             </ul>
//             <ul>
//                 <li>
//                     <Link to="/public">Public Page</Link>
//                 </li>
//                 <li>
//                     <Link to="/protected">Protected Page</Link>
//                 </li>
//                 <li>
//                     <Link to="/logout">logout Page</Link>
//                 </li>
//             </ul>
//
//             <hr />
//             {/*// 设置跳转的组件*/}
//             <Route exact path="/" component={Home} />
//             <Route path="/topics" component={Topics} />
//             {/*// 定义导航对应组件*/}
//             <Route path="/public" component={Public} />
//             {/*// 未登录的*/}
//             <Route path="/login" component={Login} />
//             {/*// 登录后的*/}
//             <PrivateRoute path="/logout" component={Logout} />
//             <PrivateRoute path="/protected" component={Protected} />
//         </div>
//     </Router>
// );
//
// // 判断是否登录， 如果登录， 则显示传递进来的组件， 否则重定向到登录组件
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             fakeAuth.isAuthenticated ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: "/login",
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// );
//
// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;
//
//
// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             redirectToReferrer: fakeAuth.isAuthenticated
//         }
//     }
//     // 登录， 通过验证，
//     login = () => {
//         fakeAuth.authenticate(() => {
//             this.setState({ redirectToReferrer: true });
//         });
//     };
//
//     render() {
//         const { from } = this.props.location.state || { from: { pathname: "/" } };
//         const { redirectToReferrer } = this.state;
//         // 判断是否登录，
//         if (redirectToReferrer) {
//             return <Redirect to={from} />;
//         }
//         // 未登录则提示登录
//         return (
//             <div>
//                 <p>You must log in to view the page at {from.pathname}</p>
//                 <button onClick={this.login}>Log in</button>
//             </div>
//         );
//     }
// }
//
// class Logout extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             redirectToReferrer: fakeAuth.isAuthenticated
//         }
//     }
//     // 退出
//     logout = () => {
//         fakeAuth.signout(() => {
//             this.setState({ redirectToReferrer: false });
//         });
//     };
//     render() {
//         const { from } = this.props.location.state || { from: { pathname: "/" } };
//         const { redirectToReferrer } = this.state;
//         // 判断是否登录，
//         if (!redirectToReferrer) {
//             return (<Redirect
//                 to={{
//                     pathname: "/login",
//                     state: { from: this.props.location }
//                 }}
//             />)
//         }
//         // 未登录则提示登录
//         return (
//             <div>
//                 <p>You must log in to view the page at {from.pathname}</p>
//                 <button onClick={this.logout}>Log out</button>
//             </div>
//         );
//     }
// }
//
// // 验证函数， 登录登出
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//         this.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };
//
//
// // 设置Home组件
// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// );
// // 设置 Topics组件
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//         {/*// 设置一个组件，*/}
//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         {/*// 设置默认组件*/}
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
// // 设置二级组件
// const Topic = ({ match }) => {
//     console.log(match);
//     return (
//         <h3>{match.url}</h3>
//     )
// };
//
// // export default BasicExample;
