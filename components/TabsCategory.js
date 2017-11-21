import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
export default class TabsCategory extends React.Component {
    render() {
        return (
                    <div className="container">
                    <div className="row">
                        <div className="TabsCategory">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" role="tab" 
                                            data-toggle="tab" href="#home">home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" role="tab" 
                                            data-toggle="tab" href="#gatpat">gat pat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" role="tab" 
                                            data-toggle="tab" href="#gatpat" href="#sat">sat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" role="tab" 
                                            data-toggle="tab" href="#gatpat" href="#thai">thai</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" role="tab" 
                                            data-toggle="tab" href="#gatpat" href="#english">english</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <style>
                        {`
                            .TabsCategory {
                                width:100%;
                                background-color: transparent;
                                margin-bottom:30px;
                            }
                            .TabsCategory li a {
                                text-transform: uppercase;
                                font-family: sukhumvit set,kanit;
                            }
                            .nav-tabs {
                                border:0;
                            }
                            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active ,
                             .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
                                border:0;
                            }
                            .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav 
                            .nav-link.active, .navbar-light 
                            .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
                                border-bottom: 2.6px solid #41b883;
                                border-radius: 0;
                            }
                            
                        `}
                    </style>
                </div>
            
        )
    }
}