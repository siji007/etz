import React, { Fragment } from 'react'
import {Switch,Route} from "react-router-dom";
import HomePage from "../components/HomePage"
import GettingStarted from "../components/GettingStarted";

const routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/gettingStarted" component={GettingStarted}/>
            </Switch>
        </Fragment>
    )
}
export default routes;