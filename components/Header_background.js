import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import SearchBox from '../components/SearchBox'
export default class Header_background extends React.Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 tutorial-bg">
                        <SearchBox/>
                    </div>
                </div>
                <style>
                {`
                    @import url(https://fonts.googleapis.com/css?family=Kanit);
                    
                    .tutorial-bg {
                        width:100%;
                        background-image: url(/static/public/background/tutorial-bg.jpg);
                        background-color:#062841;
                        height:500px;
                        background-positon:center bottom;
                        background-size:cover;
                        background-repeat:no-repeat;
                    }
                `}
                </style>
            </div>
            
        )
    }
}
