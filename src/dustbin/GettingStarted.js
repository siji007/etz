import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import "../GettingStarted.css"
import axios from 'axios'

const GettingStarted = () => {
    // function test(){
    //     axios.get("https://api.public.credodemo.com/credo-payment/v1/third-party/currencies")
    //     .then((res)=>{
    //         console.log(res);
    //     })
    // }
    return(
        <Fragment>
            <section id="container">
            <header class="header fixed-top clearfix"> 
            
            <div class="brand">
                <a href="index.html" class="logo">
                    VISITORS
                </a>
                <div class="sidebar-toggle-box">
                    <div class="fa fa-bars"></div>
                </div>
            </div>
            </header>


                <aside>
                    <div id="sidebar" class="nav-collapse">
                        {/*sidebar menu start*/}
                        <div class="leftside-navigation">
                            <ul class="sidebar-menu" id="nav-accordion">
                                <li>
                                    <a class="active" href="index.html">
                                        <i class="fa fa-dashboard"></i>
                                        <span>Guides</span>
                                    </a>
                                </li>
                                
                                
                                <li>
                                    <a href="fontawesome.html">
                                        <i class="fa fa-bullhorn"></i>
                                        <span>Cooperate Pay </span>
                                    </a>
                                </li>
                                <li class="sub-menu">
                                    <a href="javascript:;">
                                        <i class="fa fa-th"></i>
                                        <span>Payoutlet</span>
                                    </a>
                                    <ul class="sub">
                                        <li><a href="basic_table.html">Basic Table</a></li>
                                        <li><a href="responsive_table.html">Responsive Table</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu">
                                    <a href="javascript:;">
                                        <i class="fa fa-tasks"></i>
                                        <span>Form Components</span>
                                    </a>
                                    <ul class="sub">
                                        <li><a href="form_component.html">Form Elements</a></li>
                                        <li><a href="form_validation.html">Form Validation</a></li>
                                        <li><a href="dropzone.html">Dropzone</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu">
                                    <a href="javascript:;">
                                        <i class="fa fa-envelope"></i>
                                        <span>Mail </span>
                                    </a>
                                    <ul class="sub">
                                        <li><a href="mail.html">Inbox</a></li>
                                        <li><a href="mail_compose.html">Compose Mail</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu">
                                    <a href="javascript:;">
                                        <i class=" fa fa-bar-chart-o"></i>
                                        <span>Charts</span>
                                    </a>
                                    <ul class="sub">
                                        <li><a href="chartjs.html">Chart js</a></li>
                                        <li><a href="flot_chart.html">Flot Charts</a></li>
                                    </ul>
                                </li>
                                
                                
                                
                            </ul>            
                            </div>
                        {/* sidebar menu end */}
                    </div>
                </aside>

            <section id="main-content">
                <section class="wrapper">
                    <div class="market-updates row">
                        <div class="col-md-3 mb-2 mr-2 bg-success market-update-gd">
                            <div class="market-update-block clr-block-2">
                                <div class="col-md-4 market-update-right">
                                    <i class="fa fa-eye"> </i>
                                </div>
                                <div class="col-md-8 market-update-left">
                                <h4>Visitors</h4>
                                <h3>13,500</h3>
                                <p>Other hand, we denounce</p>
                            </div>
                            <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2 mr-2 bg-success market-update-gd">
                            <div class="market-update-block clr-block-1">
                                <div class="col-md-4 market-update-right">
                                    <i class="fa fa-users" ></i>
                                </div>
                                <div class="col-md-8 market-update-left">
                                <h4>Users</h4>
                                    <h3>1,250</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2 mr-2 bg-success market-update-gd">
                            <div class="market-update-block clr-block-3">
                                <div class="col-md-4 market-update-right">
                                    <i class="fa fa-usd"></i>
                                </div>
                                <div class="col-md-8 market-update-left">
                                    <h4>Sales</h4>
                                    <h3>1,500</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2 mr-2 bg-success market-update-gd">
                            <div class="market-update-block clr-block-4">
                                <div class="col-md-4 market-update-right">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </div>
                                <div class="col-md-8 market-update-left">
                                    <h4>Orders</h4>
                                    <h3>1,500</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div class="clearfix"> </div>
                            </div>
                        </div>
                    <div class="clearfix"> </div>
                    </div>	
                </section>
            </section>
        </section>
        </Fragment>
    )
}
export default GettingStarted;

