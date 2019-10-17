import React from "react";
import store from "../../../data/store";
import {BasePage} from "../page";

export class Test extends BasePage {
    render() {
        const match = this.props.match;
        return(
            <div className={"ContentMargin"}>
                {match.url}
                <br/>
                {store.getState().page.manager.menuOpenKey}
                <br/>
                {store.getState().page.manager.menuSelectedKey}
            </div>
        )
    }
}
