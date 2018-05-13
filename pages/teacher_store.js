import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import ReactDom from 'react-dom'
import Router from 'next/router'
import Header_background from '../components/Header_background'
import Teacher_Course_Layout from '../components/teacher_Course_Layout'
export default class store extends React.Component {
    render(){
        return (
            <div>
               <Head>
               <link rel="icon" href="/static/public/icon/favicon.png" type="image/png"/>
               <title>Tutorial Square | Course Online</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
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
                                <a className="navbar-brand">
                                    <img className="logo" src={'/static/public/logo/t-square.png'} />
                                </a>
                            </div>
                            <div className="navbar-right">
                                <div className="profileImage" 
                                    data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bars fa-lg" style={{color:'#fff',cursor:'pointer'}}></i>
                                </div>
                                <div className="dropdown">
                                <ul className="dropdown-menu tutorial-dropdown" 
                                    aria-labelledby="dLabel">
                                        <Link href={{ pathname: '/teacher', query: { user: 'id' } }}>dashboard</Link>
                                    <div className="clearfix">
                                        <Link href={{ pathname: '/faq_teacher', query: { user: 'id' } }}>faq</Link>
                                    </div>
                                        <Link href="/">sign out</Link>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <Header_background/>
                    </div>
                    <br/>
                    <br/>
                    <Teacher_Course_Layout/>
                    <style>
                    {`
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
                    `}
                </style>
            </div>
            
        )
    }
}