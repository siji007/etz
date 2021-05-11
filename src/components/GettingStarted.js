import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import "../GettingStarted.css"
import axios from 'axios'
import Sidebar from "./Sidebar"
const GettingStarted = () => {
    // function test(){
    //     axios.get("https://api.public.credodemo.com/credo-payment/v1/third-party/currencies")
    //     .then((res)=>{
    //         console.log(res);
    //     })
    // }
    return(
        <Fragment>
            <Sidebar/>
        </Fragment>
    )
}
export default GettingStarted;

