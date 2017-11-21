import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import Navbar from '../components/navbar'
import Inventory from '../pages/inventory'
import Create_course from '../pages/create_course'
import Profile_setting from '../pages/Profile_setting'
import { Card, Col, Row } from 'antd';
export default class Dashboard extends React.Component {
    render(){
        return (
            <div>
                <Head>
               <link rel="icon" href="/static/public/icon/favicon.png" type="image/png"/>
               <title>Tutorial Square</title>
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css"/>
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
                            <Link className="navbar-brand" href={`/`}>
                                <img className="logo" src={'/static/public/logo/t-square.png'} />
                            </Link>
                        </div>
                    </div>
                </nav>
               <div className="container container-dashboard">
                    <div className="SideBar col-md-3">
                        <img className="img-responsive" src={'/static/public/images/profile-default.svg'}/>
                        <h5 className="text-center displayName">panjamapon karnasuta</h5>
                        <ul className="list-group Tabsmenu nav nav-tabs" role="tablist">
                                <li className="list-group-item text-center active">
                                    <a href="#inventory" role="tab" data-toggle="tab">inventory</a>
                                </li>
                                <li className="list-group-item text-center">
                                    <a href="#create_course" role="tab" data-toggle="tab">create course</a>
                                </li>
                                <li className="list-group-item text-center">
                                    <a href="#Profile_setting" role="tab" data-toggle="tab">profile setting</a>
                                </li>
                                <li className="list-group-item text-center">
                                    <a href="/">log out</a>
                                </li>
                                
                            </ul>
                    </div>
                    <div className="col-md-8 wrapper_my_post">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="inventory">
                                <Inventory/>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="create_course">
                                <Create_course/>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="Profile_setting">
                                <Profile_setting/>
                            </div>
                        </div>
                    </div>
               </div>
               <style>
                    {`
                        body {
                            background-color:#f6f6f6;
                        }
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
                        .nav-tabs {
                            border:0;
                        }
                        .storeNavbar{
                            width:100%;
                            height: 65px;
                            background-color:#062741;
                        }
                        .container-dashboard{
                            margin-top:40px;
                        }
                        .SideBar {
                            background-color:#fff;
                            border-radius:3px;
                            padding:20px;
                            float:left;
                        }
                        .wrapper_my_post{
                            background-color: #fff;
                            float: left;
                            height: 100%;
                            border-radius:3px;
                            margin-left:42px;
                            margin-bottom:40px;
                            padding:20px;
                        }
                        .SideBar img {
                            width: 100px;
                            height: 100px;
                            margin: auto;
                            display: block;
                            border-radius:100px;
                            margin-bottom:20px;
                            border:3px solid #fff;
                        }
                        .displayName {
                            color: #657786;
                            text-transform: capitalize;
                            font-size: 13px;
                            font-family: sukhumvit set, kanit;
                            font-weight: bold;
                            margin-bottom: 16px;
                        }
                        .Tabsmenu .list-group-item{
                            border:0;
                            background-color: transparent;
                            padding:0;
                        }
                        .Tabsmenu a{
                            color:#657786;
                            text-transform: capitalize;
                            line-height:37px;
                            font-size:13px;
                            text-decoration: none;
                        }
                        .HeadingTitle {
                            font-family:sukhumvit set,kanit;
                            text-transform:uppercase;
                            font-size:20px;
                            font-weight: bold;
                            margin-left:5px;
                        }
                    `}
               </style>
            </div>
        )
    }
}