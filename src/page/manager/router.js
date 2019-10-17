import {Route} from "react-router";
import {Test} from "./test/test";
import React from "react";

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
