import React, {Component} from "react";

import "./test.css"
import moment from "moment";

export const Test = () => {
    return (
        <div className={"ContentMargin"} style={{height:"100%"}}>
            <h1>
                Test
            </h1>
            <TimeShow />
            <User />
        </div>
    )
};

class TimeShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            t:"",
        };
        this.refreshTime.bind(this);
    }
    componentDidMount() {
        this.refreshTime();
        this.r = setInterval(
            this.refreshTime,
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.r);
    }

    refreshTime = () => {
        const t = CurrTime();
        this.setState({
            t:t,
        })
    };

    render() {
        const t = this.state.t;
        return (
            <div>{t}</div>
        )
    }
}

const CurrTime = () => {
    return new moment().format("YYYY-MM-DD HH:mm:ss");
};

class User extends Component {
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.nameInput.focus();
        },5000);
        setTimeout(()=>{
            console.log(this.nameInput.value);
        },15000)
    }
    render () {
        return (
            <input ref={(input)=>this.nameInput = input} type={"text"} />
        )
    }
}
