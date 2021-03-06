import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import carts from '../static/database/carts'
import { Icon, Button, Input, AutoComplete } from 'antd';
export default class MyCourse extends React.Component {
    static getInitialProps () {
        return { carts: carts }
    };
    state = {
        dataSource: [],
      }
    
      handleSearch = (value) => {
        this.setState({
          dataSource: !value ? [] : [
            value,
            value + value,
            value + value + value,
          ],
        });
      }  
    render() {
        function onSelect(value) {
            console.log('onSelect', value);
        }
        const { dataSource } = this.state;
        return (
        <div className="container">
                <h3 className="HeadingTitle">My Course</h3>
                <div className="row">
                <style>
                    {`
                        @import url(https://fonts.googleapis.com/css?family=Kanit);
                        
                        .ant-select-dropdown {
                            border-radius:3px;
                        }
                        .ant-select-search--inline .ant-select-search__field {
                            background:white !important;
                        }
                        .ant-select-auto-complete.ant-select .ant-input {
                            border-radius:3px;
                        }
                        .ant-select-search__field__placeholder, .ant-select-selection__placeholder{
                            color:#777 !important;
                            z-index:1000000000000;
                        }
                        .ant-select-search {
                            position:relative !important;
                            top:-4px;
                        }
                        .ant-input:focus {
                            box-shadow: none !important;
                        }
                        .searchBox {
                            width: 500px !important;
                            display: block;
                            margin-top: 30px;
                            margin-bottom: 20px;
                            outline: none !important;
                        }
                        .searchBox input {
                            outline:none !important;
                            height:36px !important;
                            padding:10px;
                            color:#000 !important;
                            font-family: sukhumvit set,kanit !important;
                        }
                        .global-search-wrapper {
                          padding-right: 50px;
                        }
                        
                        .global-search {
                          width: 100%;
                        }
                        
                        .global-search.ant-select-auto-complete .ant-select-selection--single {
                          margin-right: -46px;
                        }
                        
                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
                          padding-right: 62px;
                        }
                        
                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {
                          right: 0;
                        }
                        
                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
                          border-top-left-radius: 0;
                          border-bottom-left-radius: 0;
                        }
                        
                        .global-search-item-count {
                          position: absolute;
                          right: 16px;
                        }
                    `}
                </style>
                <div className="container">
                    <Head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css"/>
                    </Head>
                    <AutoComplete
                        dataSource={dataSource}
                        onSelect={onSelect}
                        onSearch={this.handleSearch}
                        placeholder="Find My Course" 
                        className="searchBox">
                        <Input suffix={<Icon type="search" className="certain-category-icon" style={{ fontSize: 17 }} />} />
                    </AutoComplete>
                </div>
                    {
                        carts.map( (carts,i) => (
                        <div key={i} className="col-sm-6 col-md-4 card courseBox" 
                        style={{height: '268px'}}>
                            <div className="courseThumbnail">
                                <a href={`/student_video_purchased?id=${carts.id}`}>
                                <img className="img-responsive" 
                                src={`static/public/images/${carts.image}`} /></a>
                                <a href={`/student_video_purchased?id=${carts.id}`}>
                                <h6>{carts.name}</h6></a>
                                <p className="category">{carts.category}</p>
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
                            text-transform:capitalize !important;
                            font-size:20px;
                            font-weight: bold;
                            margin-left:5px;
                        }
                        .courseBox {
                            max-width:245px;
                            margin-bottom:30px;
                            background-color: #fff;
                            height:360px;
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

                    `}
                </style>
        </div>
        )
    }
}