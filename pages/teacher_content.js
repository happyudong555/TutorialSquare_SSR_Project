import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import ReactDom from 'react-dom'
import Router from 'next/router'
import course from '../static/database/course'
import * as data from 'lodash'
import { Rate, Icon,Collapse,Input } from 'antd';
export default ({url:{ query: { id }}}) => {
let courseDetail = data.find(course, { id:id } );
const { TextArea } = Input;
let courseRelated = course.slice(0,3);
let paymentGateway = () => {
    location.href = '/teacherAccount_payment';
}
        return (
            <div>
              <Head>
               <link rel="icon" href="/static/public/icon/favicon.png" type="image/png"/>
               <title>Tutorial Square | Course Online</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
                                <Link href={{ pathname: '/teacher', query: { user: 'id' } }} className="navbar-brand">
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
                <div className="container-fluid" style={{backgroundColor:'#052841'}}>
                  <div className="row">
                    <div className="container header_content clearfix">
                      <div className="col-md-6 courseThumbnails">
                          <h4 className="course_online_name"><strong>{courseDetail.name}</strong></h4>
                          <br/>
                          <Rate allowHalf defaultValue={4} />
                          <br/>
                          <p className="CategoryCourse">{courseDetail.category}</p>
                          <p className="Course_Price">
                            <strong>&#x0E3F; {courseDetail.price}</strong>
                          </p>
                          <br/>
                          <button type="button" className="btn buy_btn" onClick={paymentGateway}>Buy course</button>
                      </div>
                        <div className="card col-md-5 courseImagesCover">
                            <img className="card-img-top" src={`static/public/images/${courseDetail.image}`}/>
                        </div>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="courseDescription col-md-12">
                            <div className="avatarTeacher">
                                <img src={`static/public/images/${courseDetail.imgUrl}`}/>
                            </div>
                            <span className="avatarName">{courseDetail.displayName}</span>
                            <br/>
                            <h4><strong>Description</strong></h4>
                            <br/>
                            <p>
                                {courseDetail.content}
                            </p>
                            <br/>
                            <h6><strong>course orthers</strong></h6>
                            <br/>

                            {
                                courseRelated.map( (courseRelated,i) => (
                                <div class="media" key={i}>
                                    <div class="media-left media-middle">
                                        <div className="relatedImage">
                                            <img class="media-object" 
                                            src={`static/public/images/${courseRelated.image}`} />
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading relatedName">
                                            <strong>{courseRelated.name}</strong>
                                        </h4>
                                        <span className="category_relate">{courseRelated.category}</span>
                                       <div className="clearfix">
                                            <span className="price_relate">&#3647; {courseRelated.price}</span>
                                       </div>
                                    </div>
                                </div>
                                ))
                            }
                            <h6><strong>Vote Course</strong></h6>
                            <br/>
                            <Rate className="favoriteStar" allowHalf defaultValue={2.5} />
                        </div>
                    </div>
                </div>
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
                        .courseThumbnails ,.courseImagesCover {
                            float:left;
                        }
                        .header_content {
                            width: 100%;
                            overflow: hidden;
                            height: auto;
                            margin-top: 20px;
                            padding: 30px;
                            background-color: #fff;
                            border-top-right-radius: 4px;
                            border-top-left-radius: 4px;
                            box-shadow: inset 0px 0px 6px 0px #e9ecef;
                        }
                        .course_online_name {
                          font-size: 21px;
                          font-family: sukhumvit set,kanit;
                          line-height: 36px;
                          text-transform: capitalize;
                          color:#4a4a4a;
                        }
                        .CategoryCourse ,.Course_Price{
                          font-family: sukhumvit set,kanit;
                          text-transform: uppercase;
                          margin-top:16px;
                          font-size: 14px;
                        }
                        .Course_Price {
                            font-size:16.6px;
                        }
                        .ant-rate-star {
                            color:#e9ecef;
                        }
                        .courseImagesCover {
                            height: 236px;
                            margin-left: 50px;
                            padding: 0;
                            border: 0;
                        }
                        .courseImagesCover img {
                            width:100%;
                            height: 100%;
                            overflow:hidden;
                            object-fit: cover;
                            object-position: center top;
                        }
                        .buy_btn {
                            text-transform: uppercase;
                            font-family: sukhumvit set,kanit;
                            border: 0;
                            background-color: #00a854;
                            color: #fff;
                            font-size: 12px;
                            outline:none !important;
                            cursor: pointer;
                        }

                        .courseDescription {
                            height:auto;
                            background-color:#fff;
                            margin-bottom:50px;
                        }

                        .courseDescription h4 ,.courseDescription p, .courseDescription h6 {
                            padding:20px;
                            padding-bottom:0;
                            text-transform: capitalize;
                        }

                        .courseDescription p {
                            padding-top:0;
                            text-transform: capitalize;
                            font-family: sukhumvit set,kanit;
                            line-height: 28px;
                        }
                        .avatarTeacher {
                            width: 50px;
                            height: 50px;
                            overflow: hidden;
                            margin: 20px;
                            margin-bottom: 0;
                        }
                        .avatarTeacher img {
                            width:100%;
                            height:100%;
                            border-radius:100px;
                            overflow:hidden;
                            border:0;
                            background-color: transparent;
                        }
                        .avatarName {
                            float: left;
                            position: relative;
                            left: 90px;
                            text-transform: capitalize;
                            font-family: sukhumvit set,kanit;
                            font-size:16px;
                            top: -40px;
                        }
                        .favoriteStar,.relatedImage {
                            margin-left:20px;
                        }
                        .relatedImage {
                            width:200px;
                            overflow:hidden;
                            margin-bottom:33px;
                        }
                        .relatedImage img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center top;
                        }
                        .relatedName{
                            padding: 0 !important;
                            padding-left: 20px !important;
                            font-size: 15px;
                            text-transform:capitalize !important;
                            font-family: sukhumvit set,kanit;
                        }

                        .category_relate {
                            position: relative;
                            top: 10px;
                            padding: 0 !important;
                            padding-left: 20px !important;
                            font-size: 13px;
                            text-transform: uppercase !important;
                            font-family: sukhumvit set,kanit;
                        }
                        .price_relate {
                            padding-left: 20px !important;
                            position: relative;
                            top: 17px;
                            text-transform: capitalize;
                            font-weight: bold;
                            font-size:14px;
                        }
                    `}
                </style>
            </div>
        )
}