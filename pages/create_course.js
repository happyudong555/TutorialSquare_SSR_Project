import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import course from '../static/database/course'
import Upload_CoverImages from '../components/upload_coverImages'
import UploadVideo from '../components/uploadVideo'
import { Icon,Input,Select } from 'antd';
export default class Create_course extends React.Component {
    render() {
        const { Option, OptGroup } = Select;
        
        function handleChange(value) {
          console.log(`selected ${value}`);
        }    
        return (
            <div>
                <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/FontAwesome.otf" />   
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2"/>
                </Head>
                <div className="container">
                    <h3 className="HeadingTitle" style={{marginBottom: '20px'}}>create your course</h3>
                    <div className="row">
                        <div className="col-md-12">
                                <Upload_CoverImages/>
                                <div className="form-content">
                                    <input typ="text" 
                                    className="form-control" 
                                    placeholder="Course Name" 
                                    style={{fontSize: '13px'}} />
                                    <br/>
                                    <textarea type="text" 
                                    className="form-control contentBox" 
                                    placeholder="Course Description"></textarea>
                                </div>
                                <br/>
                                <Select
                                    defaultValue="Select Category"
                                    style={{ width: '100%' }}
                                    onChange={handleChange}>
                                    <OptGroup>
                                        <Option value="sat">Thai</Option>
                                        <Option value="gat pat">GAT PAT</Option>
                                        <Option value="english">English</Option>
                                        <Option value="thai">Thai</Option>
                                    </OptGroup>
                                </Select>
                                <br/>
                                <br/>
                                <UploadVideo/>
                                <br/>
                        </div>
                    </div>
                </div>
                <style>{`
                    h1 , h2 , h3 ,h4 ,h5 , h6 , p {
                        font-family:sukhumvit set,kanit;
                        text-rendering: optimizeSpeed;
                    }
                    .HeadingTitle {
                        font-family:sukhumvit set,kanit;
                        text-transform:capitalize !important;
                        font-size:18px !important;
                        font-weight: bold;
                        margin-left:5px;
                    }

                    .ant-tabs-nav .ant-tabs-tab-active {
                        color:#072941 !important;
                    }

                    .ant-tabs-ink-bar {
                        background-color:#072941 !important;
                    }
                    .ant-tabs-bar {
                        margin-bottom:23px;
                    }
                    .cover_image_form ,.Video_form{
                        width:100%;
                        height:350px;
                        background-color:#000;
                        margin-top:15px;
                        overflow:hidden;
                        cursor: pointer;
                    }
                    .publish_btn {
                        width: 100px;
                        background-color: #41b883 !important;
                        cursor: pointer;
                        border: 0 !important;
                        margin: 15px;
                        text-transform: capitalize !important;
                        outline: none !important;
                        font-family: sukhumvit set,kanit;
                        color: white;
                    }
                    .form-content {
                        margin-top:10px;
                    }
                    .contentBox {
                        height: 250px;
                        line-height: 26px;
                        white-space:pre-line;
                        resize: none;
                        margin-bottom:10px;
                        font-size: 13px;
                        padding: 20px;
                    }
                `}</style>
            </div>
        )
    }
}