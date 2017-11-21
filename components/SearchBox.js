import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Icon, Button, Input, AutoComplete } from 'antd';
export default class SearchBox extends React.Component {
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
            <div>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"/>
                </Head>
                    <AutoComplete
                        dataSource={dataSource}
                        onSelect={onSelect}
                        onSearch={this.handleSearch}
                        placeholder="What do you want to learn ?" 
                        className="searchBox"
                    >
                    <Input suffix={<Icon type="search" className="certain-category-icon" style={{ fontSize: 17 }} />} />
                    </AutoComplete>
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
                            width:500px !important;
                            display:block;
                            margin:330px auto;
                            outline:none !important;
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
		    </div>
        )
    }
}