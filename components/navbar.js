import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
export default class Navbar extends React.Component {
    render(){
        return (
            <div>
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
                                <img className="img-responsive" src={'/static/public/images/profile-default.svg'}/>
                            </div>
                            <div className="dropdown">
                            <ul className="dropdown-menu tutorial-dropdown" 
                                aria-labelledby="dLabel">
                                    <Link href="/dashboard">dashboard</Link>
                                <div className="clearfix">
                                    <Link href="/">setting</Link>
                                </div>
                                    <Link href="/">sign out</Link>
                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>
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
                            width:170px;
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