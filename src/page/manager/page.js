import { Component } from 'react'
import store from "../../data/store";
import {PageManagerMenuOpenKeyAction, PageManagerMenuSelectedKeyAction} from "../../data/actions";
import {GetMenuOpenKey, GetMenuSelectKey} from "./common";

export class BasePage extends Component {
    componentDidMount() {
        store.dispatch(PageManagerMenuOpenKeyAction(GetMenuOpenKey(this.props.match.url)));
        store.dispatch(PageManagerMenuSelectedKeyAction(GetMenuSelectKey(this.props.match.url)));
    }
}
