import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import ReactDom from 'react-dom'
import Router from 'next/router'
import { Form, Input, Button, Checkbox,DatePicker,LocaleProvider,Tabs,Icon } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US'; 
export default class payment extends React.Component {
    render() {
        const { MonthPicker, RangePicker } = DatePicker;
        const TabPane = Tabs.TabPane;
        function onChange(date, dateString) {
          console.log(date, dateString);
        }
        return (
            <div>
                <Head>
               <link rel="icon" href="/static/public/icon/favicon.png" type="image/png"/>
               <title>Tutorial Square | Payment</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.10/antd.min.css"/>
               <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
               </Head>
               <nav className="navbar navbar-default storeNavbar">
                        <div className="container">
                            <div className="navbar-header">
                                <Link href={{ pathname: '/student', query: { user: 'id' } }} className="navbar-brand">
                                    <img className="logo" src={'/static/public/logo/t-square.png'} />
                                </Link>
                            </div>
                            <div className="navbar-right">
                                <div className="profileImage" 
                                    data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bars fa-lg" style={{color:'#fff',cursor:'pointer'}}></i>
                                </div>
                                <div className="dropdown">
                                <ul className="dropdown-menu tutorial-dropdown" 
                                    aria-labelledby="dLabel">
                                        <Link href={{ pathname: '/student', query: { user: 'id' } }}>dashboard</Link>
                                    <div className="clearfix">
                                        <Link href={{ pathname: '/faq_student', query: { user: 'id' } }}>faq</Link>
                                    </div>
                                        <Link href="/">sign out</Link>
                                </ul>
                                </div>
                            </div>
                        </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 wrapperformPayment">
                            <br/>
                            <h4 style={{fontFamily:'sukhumvit set,kanit',textTransform:'capitalize',color:'#555'}}>
                            <strong>credit card & paypal</strong>
                            </h4>
                            <br/>
                            <br/>
                                <input type="text" className="form-control" 
                                    placeholder="Card Holder Name" 
                                    style={{fontSize:'13.7px'}}/>
                                    <br/>
                                    <br/>
                                    <input type="password" className="form-control" 
                                    placeholder="Card Number" 
                                    style={{fontSize:'13.7px'}}/>
                                    <br/>
                                    <br/>
                                    <input type="password" className="form-control" 
                                    placeholder="CVV" 
                                    style={{fontSize:'13.7px'}}/>
                                    <br/>
                                    <br/>
                                    <LocaleProvider locale={enUS}>
                                    <DatePicker onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Expiration Date" 
                                    style={{cursor:'pointer'}} />
                                    </LocaleProvider>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <button className="btn btn_payNow">pay now</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <button className="btn btn_paypal"> pay with pay pal</button>

                               
                        </div>
                    </div>
                </div>
                <style>{`
                    @import url(https://fonts.googleapis.com/css?family=Kanit);
                    
                    .clearfix {
                        clear:both;
                    }
                    .logo {
                        width:128px;
                        height:auto;
                        overflow:hidden:
                        object-fit: cover;
                        object-position: center top;
                        cursor: pointer;
                    }
                    .storeNavbar{
                        width:100%;
                        height: 65px;
                        background-color:#062741;
                    }
                    .profileImage img {
                        width: 40px;
                        height: 40px;
                        border-radius: 100px;
                        object-fit: cover;
                        object-position: center top;
                        cursor: pointer;
                    }
                    .tutorial-dropdown{
                        width:160px;
                        right: 10px;
                        left: inherit;
                        text-align: center !important;
                        font-size: 12px;
                        text-transform: uppercase;
                        border:0 !important;
                    }
                    .tutorial-dropdown a{
                        color:#666;
                        line-height:30px;
                    }
                    a:hover {
                        color:#666;
                        text-decoration: none;
                    }
                    .wrapperformPayment {
                        margin: 30px auto;
                        display: block;
                    }
                    .ant-input {
                        border:0 !important;
                        outline: none !important;
                    }
                    .ant-input:focus {
                        outline: 0 !important;
                        box-shadow: none !important;
                    }
                    .ant-calendar {
                        width:330px;
                        margin-bottom:20px;
                    }
                    .ant-calendar-picker-container {
                        left:500px !important;
                    }
                    .btn_payNow {
                        outline: 0 !important;
                        cursor: pointer;
                        background-color: #00bcd4;
                        color: #fff;
                        text-transform: uppercase;
                        font-family: sukhumvit set,kanit;
                        width: 100%;
                        border-radius: 3px;
                        box-shadow: 0 16px 26px -10px #17a2b8, 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px #17a2b85c;
                    }
                    .ant-tabs-nav .ant-tabs-tab-active {
                        color:#555 !important;
                    }
                    .ant-tabs-ink-bar {
                        background-color:#555 !important;
                    }
                    .btn_paypal {
                        outline: 0 !important;
                        cursor: pointer;
                        width: 100%;
                        text-transform: capitalize;
                        border:0;
                        border-radius: 4px;
                        font-size: 19px;
                        background-color:#052841;
                        font-family: sukhumvit set,kanit;
                        box-shadow:0 16px 26px -10px rgba(6, 41, 65, 0.55), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(6, 41, 65, 0.59);
                        color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}