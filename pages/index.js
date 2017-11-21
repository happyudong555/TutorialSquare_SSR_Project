import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
export default class home extends React.Component {
    render() {
        let studentSignIn = () => {
           window.location.href = '/student';
        }
        let TeacherSignIn = () => {
            window.location.href = '/teacher';
         }
        return(
           <div>
               <Head>
               <link rel="icon" href="/static/public/icon/favicon.png" type="image/png"/>
               <title>Tutorial Square</title>
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
               <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css" />
               </Head>
               <div className="container-fluid">
                    <div className="row">
                            <nav className="navbar navbar-default tutorial-navbar">
                                <div className="container">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="/">
                                            <img className="logo" src={'/static/public/logo/t-square.png'} />
                                        </a>   
                                    </div>
                                    <ul className="wrapper-signIn-sign-up nav navbar-nav navbar-left">
                                        <li><a data-toggle="modal" data-target="#SignUp-to-Teacher" 
                                        className="btn signUp-to-teacher">sign Up to teacher</a></li>
                                        <li><a data-toggle="modal" data-target="#SignUp-to-student"
                                         className="btn signUp-btn">sign Up to student</a></li>
                                        <li><a data-toggle="modal" data-target="#Login" 
                                        className="btn signIn-btn">sign in</a></li>
                                    </ul>
                                </div>
                            </nav>
                    </div>
               </div>
               <div className="modal fade" id="SignUp-to-Teacher" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <a className="closeModal" data-dismiss="modal">&times;</a>
                            <img src={'static/public/background/SignUp-screen.jpg'}/>
                            <div className="modal-body">
                                <div className="wrapperLoginform">
                                    <h5>Create Teacher Account</h5>
                                    <br/>
                                    <input type="text" className="form-control" 
                                    placeholder="Email" id="email" />
                                    <br/>
                                    <input type="text" className="form-control" 
                                    placeholder="Username" id="username" />
                                    <br/>
                                    <input type="password" className="form-control" 
                                    placeholder="Password" id="password" />
                                    <br/>
                                    <textarea type="text" className="form-control TeacherBox" 
                                    placeholder="Yours Education or Experience"></textarea>
                                    <br/>
                                    <button type="button" className="btn" data-dismiss="modal">
                                        sign Up
                                    </button>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="SignUp-to-student" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <a className="closeModal" data-dismiss="modal">&times;</a>
                                <div className="Student-CreatAccountImage"> 
                                    <img src={'static/public/background/login-screen.jpg'}/>
                                </div>
                            <div className="modal-body">
                                <div className="wrapperLoginform">
                                    <h5>Sign Up To Student</h5>
                                    <br/>
                                    <input type="text" className="form-control" 
                                    placeholder="Email" id="email" />
                                    <br/>
                                    <input type="password" className="form-control" 
                                    placeholder="Password" id="password" />
                                    <br/>
                                    <button type="button" className="btn" data-dismiss="modal">
                                        sign Up
                                    </button>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Login" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <a className="closeModal" data-dismiss="modal">&times;</a>
                                <div className="Student-CreatAccountImage"></div>
                            <div className="modal-body">
                                <div className="wrapperLoginform">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a className="tabsSwitch active-tabs btn" href="#StudentLogin" role="tab" data-toggle="tab">
                                            Student Login
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a className="tabsSwitch btn" href="#TeacherLogin" role="tab" data-toggle="tab">
                                            Teacher Login
                                        </a>
                                    </li>
                                </ul>
                                    <br/>
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="StudentLogin">
                                                <a class="btn btn-block btn-social btn-facebook">
                                                    <span class="fa fa-facebook"></span> Sign in with facebook
                                                </a>
                                                <br/>
                                                <input type="text" className="form-control" 
                                                placeholder="Email" id="email" />
                                                <br/>
                                                <input type="password" className="form-control" 
                                                placeholder="Password" id="password" />
                                                <br/>
                                                <button type="button" 
                                                className="btn StudentloginButton" 
                                                onClick={studentSignIn}>
                                                    student login
                                                </button>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="TeacherLogin">
                                                <input type="text" className="form-control" 
                                                placeholder="Email" id="email" />
                                                <br/>
                                                <input type="password" className="form-control" 
                                                placeholder="Password" id="password" />
                                                <br/>
                                                <button type="button" 
                                                className="btn TeacherloginButton" 
                                                onClick={TeacherSignIn}>
                                                    teacher login
                                                </button>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="container-fluid clearfix">
                        <div className="row">
                            <div className="wrapper-bg col-md-12">
                                <h2 className="text-center HeadingTitle">
                                     online course platform
                                </h2>
                                <h4 className="text-center SubTitle">
                                    " anywhere anytimes can learn "
                                </h4>
                            </div>
                        </div>
                </div>
                <div className="container-fluid tutorialFeature">
                    <div className="row">
                        <div className="container">
                            <h3 className="text-center feature-Heading">tutorial square feature ?</h3>
                            <div className="card col-md-4 thumbnail">
                                <div className="card-body">
                                    <img className="feature-img" src={'static/public/icon/book-icon.svg'}/>
                                    <p className="text-center">
                                        realtime course update 
                                    </p>
                                </div>
                            </div>
                            <div className="card col-md-4 thumbnail">
                                <div className="card-body">
                                    <img className="feature-img" src={'static/public/icon/child.svg'}/>
                                    <p className="text-center">
                                        great tutorial
                                    </p>
                                </div>
                            </div>
                            <div className="card col-md-4 thumbnail">
                                <div className="card-body">
                                    <img className="feature-img" src={'static/public/icon/world-wide.svg'}/>
                                    <p className="text-center">
                                        anywhere can learn
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid AboutContainer">
                    <div className="row">
                        <div className="container">
                            <div className="wrapperAbout">
                                <div className="col-md-6">
                                    <img className="img-responsive" src={'/static/public/background/tutorial-imac.png'} />
                                </div>
                            </div>
                            <div className="wrapperAbout">
                                <div className="col-md-6">
                                   <h3 className="text-center">what's tutorial square ?</h3> 
                                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis recusandae excepturi aspernatur accusantium 
                                       beatae expedita sed in libero! Aliquid ipsam cum quam est 
                                       repudiandae? Iusto tempore qui corrupti voluptatibus dolorem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="container-fluid footerWrapper">
                    <div className="row">
                        <div className="container">
                            <div className="footerDetail">
                                <br/>
                                <h3>copyright @ tutorial square</h3>
                                <br/>
                                <div className="clearfix">
                                    <div className="iconFooter">
                                        <a href="" target="_blank">
                                            <i className="fa fa-facebook fa-lg"></i>
                                        </a>
                                            <i className="fa fa-envelope-o fa-lg"></i>
                                            <i className="footerEmail">
                                                : info@tutorsquare.net
                                            </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <style>
                    {`
                        .clearfix{
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
                        img {
                            width:100%;
                            height:100%;
                        }
                        .tutorial-navbar{
                        width:100%;
                        height:65px;
                        background-color:#062741;
                        }
                        .wrapper-signIn-sign-up{
                            flex-direction:unset;
                        }
                        .tutorial-navbar li a {
                        color:#fff !important;
                        cursor: pointer;
                        text-transform: uppercase;
                        font-size:11px;
                        }
                        .tutorial-navbar li a:hover {
                            text-decoration: none;
                        }
                        .btn-social{
                            color:#fff !important;
                        }
                        .btn-facebook ,.btn-facebook:active ,.btn-facebook:hover , .btn-facebook:focus {
                            background-color: #1b49a9;
                            cursor: pointer;
                        }
                        .signUp-btn{
                            border:1px solid #fff;
                            float:left;
                        }
                        .signUp-to-teacher {
                            border:1px solid #41b883;
                        }
                        .signIn-btn, .signUp-btn , .signUp-to-teacher{
                            margin-left:20px;
                        }
                        .signUp-btn{
                            float:left;
                        }
                        .signIn-btn{
                            background-color:#41b883;
                        }

                        .closeModal{
                            position: absolute !important;
                            right: 15px;
                            top: 10px;
                            font-size:24px;
                            color: #fff !important;
                            cursor: pointer !important;
                        }
                        .wrapperLoginform{
                            padding:20px;
                            width:400px;
                            margin:0 auto;
                        }
                        .wrapperLoginform h5{
                            text-transform: capitalize;
                        }
                        .TeacherBox {
                            resize: none;
                        }
                        .wrapperLoginform button {
                            width:100%;
                            color:#fff;
                            cursor: pointer !important;
                            text-transform: uppercase;
                            background-color: #42b783;
                            outline:none !important;
                        }
                        .Student-CreatAccountImage {
                            width: 100%;
                            height: 300px;
                            overflow: hidden;
                            background-image: url(/static/public/background/login-screen.jpg);
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center bottom;
                        }

                        .Student-CreatAccountImage img {
                            height:auto;
                            object-fit:cover;
                            object-position:center top;
                        }
                        .wrapperLoginform a {
                            font-size:14px;
                            text-decoration: none;
                            text-transform: capitalize;
                            color:#000;
                            box-shadow:none !important;
                            font-family:sukhumvit set,kanit !important;
                        }
                        .wrapperLoginform .nav-tabs {
                            border-bottom:0;
                        }
                        .btn {
                            outline:none !important;
                        }
                        .tabsSwitch{
                            background-color: #fff;
                            color:#666 !important;
                        }
                        .tabsSwitch:focus{
                            background-color: #062741 !important;
                            color: #fff !important;
                        }
                        .active-tabs {
                            background-color: #062741 !important;
                            color: #fff !important;
                            box-shadow: none;
                            -webkit-box-shadow: none;
                            -moz-box-shadow: none;
                            -o-box-shadow: none;
                            border:3px !important;
                        }
                        .tabs-switch-type-account{
                            text-transform: capitalize;
                            cursor: pointer !important;
                        }
                        .StudentloginButton {
                            background-color:#10b4ce !important;
                            font-family: sukhumvit set,kanit;
                        }
                        input {
                            font-family:sukhumvit set,kanit !important;
                        }
                        .TeacherloginButton {
                            background-color:#20C626 !important;
                            font-family: sukhumvit set,kanit;
                        }
                        .wrapper-bg {
                            background:linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, .7)), url(/static/public/background/shutterstock_436292617.jpg);
                            height:450px;
                            background-color:#000;
                            background-position:center top;
                            background-size:cover;
                        }
                        .HeadingTitle {
                            color: #fff;
                            padding-top: 120px; 
                            text-transform: capitalize;
                            font-size:35px;
                            margin-bottom:24px;
                            font-weight: bold;
                            
                        }
                        .SubTitle{
                            color:#fff;text-transform: capitalize;
                            font-size:20px;
                            font-weight: lighter;
                        }
                        .feature-Heading {
                            text-transform: uppercase;
                            font-size:20px;
                            font-family:sukhumvit set, kanit;

                        }
                        .tutorialFeature{
                            height:auto;
                            background-color:#fff;
                            padding:40px;
                        }
                        .feature-img{
                            height:50px;
                            overflow:hidden;
                            margin-bottom:20px;
                        }

                        .thumbnail{
                            width:330px;
                            margin:20px;
                            float:left;
                        }
                        .thumbnail p {
                            text-transform: capitalize;
                        }

                        .AboutContainer{
                            background-color:#062741;
                        }

                        .wrapperAbout .col-md-6 {
                            height:460px;
                            background-color:transparent;
                            float:left;
                        }
                        .wrapperAbout img {
                            height: auto;
                            overflow: hidden;
                            object-fit: cover;
                            object-position: center top;
                            padding: 50px;
                            
                        }
                        .wrapperAbout h3 {
                            color: #fff;
                            text-transform: uppercase;
                            font-weight: bold;
                            padding: 50px;
                            border-bottom: 3px solid #fff;
                            margin-bottom:26px;
                        }
                        .wrapperAbout p {
                            color:#fff;
                            line-height:35px;
                            font-family:sukhumvit set,kanit;
                        }
                        .footerWrapper{
                            padding:30px;
                            height:auto;
                            background-color:#51BE8D;
                        }
                        .footerDetail h3 {
                            color: #fff;
                            font-size: 16px;
                            text-transform: capitalize;
                        }
                        .iconFooter i{
                            color:#fff;
                            float:left;
                            margin-right:30px;
                            font-style: normal;
                        }
                        .footerEmail{
                            position:relative;
                            top:-6px;
                        }
                    `}
                </style>

                <script type="text/javascript" src="static/js/tabs.js"></script>
                
           </div>
        )
    }
}
