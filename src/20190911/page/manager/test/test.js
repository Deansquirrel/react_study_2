import React from "react";
// import React, {Component} from "react";
import "./test.css"

// export class MyTestPageOne extends Component {
//     render() {
//         return (
//             <div>
//                 MyTestPageOne
//             </div>
//         )
//     }
// }
//
const Test = ({match}) => {
    console.log(match);
    return (
        <h3>{match.url}</h3>
    )
};

export default Test;
