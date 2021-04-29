import React, { Fragment } from 'react'
import {Switch,Route} from "react-router-dom";
import HomePage from "../components/HomePage"
const routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </Fragment>
    )
}
export default routes;