import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import course from '../static/database/course'
export default class Thai extends React.Component {
    static getInitialProps () {
        return { course: course }
    }
    render() {
        let courseItem = course.filter(course => course.category === "thai")
        return (
        <div className="container">
                <div className="row">
                    {
                        courseItem.map( (courseItem,i) => (
                        <div key={i} className="col-sm-6 col-md-3 card courseBox">
                            <div className="courseThumbnail">
                                <a href={`/content?id=${courseItem.id}`}>
                                <img className="img-responsive" 
                                src={`static/public/images/${courseItem.image}`} /></a>
                                <a href={`/content?id=${courseItem.id}`}>
                                <h6>{courseItem.name}</h6></a>
                                <p className="category">{courseItem.category}</p>
                                <p className="price">&#x0E3F; {courseItem.price}</p>
                                <img className="profilTeacherImage" 
                                src={`static/public/images/${courseItem.imgUrl}`} />
                                <span className="teacherName">{courseItem.displayName}</span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            <style>{`
                        h1 , h2 , h3 ,h4 ,h5 , h6 , p {
                            font-family:sukhumvit set,kanit;
                            text-rendering: optimizeSpeed;
                        }
                        .HeadingTitle {
                            font-family:sukhumvit set,kanit;
                            text-transform:uppercase;
                            font-size:20px;
                            font-weight: bold;
                            margin-left:5px;
                        }
                        .courseBox {
                            max-width:245px;
                            margin-bottom:30px;
                            background-color: #fff;
                            height:372px;
                            float:left;
                            padding:0;
                            margin:20px;
                            margin-bottom:30px;
                        }
                        .courseThumbnail{
                            width:100%;
                            height:auto;
                            overflow:hidden;
                        }

                        img {
                            width:100%;
                            height:100%;
                        }

                        .courseThumbnail img {
                            width:100%;
                            height:160px;
                            overflow:hidden;
                            object-fit:cover;
                            object-position:center top;
                            cursor: pointer;
                        }

                        .courseThumbnail h6 {
                            padding:23px;
                            padding-bottom:0;
                            text-transform: capitalize;
                            color:#343a40;
                            font-weight: bold;
                            line-height: 26px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            text-align: left;
                            overflow:hidden;
                            font-family:sukhumvit set,kanit;
                            cursor: pointer;
                        }
                        .category, .price{
                            padding-top:10px;
                            padding-left:23px;
                            text-transform: uppercase;
                            font-size:13px;
                            font-family:sukhumvit set,kanit;
                        }
                        .price {
                            padding-top: 0;
                            font-size: 16px;
                            font-weight: lighter;
                        }

                        .profilTeacherImage{
                            width: 32px !important;
                            height: 32px !important;
                            float: left;
                            margin-left: 20px;
                        }
                        .teacherName {
                            text-transform: capitalize;
                            font-size: 12px;
                            padding-left: 16px;
                            font-family: sukhumvit set,kanit;
                        }

                    `}
                </style>
        </div>
        )
    }
}