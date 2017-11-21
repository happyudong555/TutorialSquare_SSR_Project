import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'

import { Upload, Icon, Modal } from 'antd';

export default class Upload_CoverImages extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: '',
      status: 'done',
      url: '',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload Images</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Head>
            <link src="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.js"></script>
        </Head>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 4 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img style={{ width: '100%' }} src={previewImage} />
        </Modal>

        <style>{`
            .ant-upload.ant-upload-select-picture-card {
                width:110px;
                height:110px;
            }
            .ant-upload-list-item.ant-upload-list-item-done,
            .ant-upload-list-item-uploading-text{
                display:none;
            }
            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail, 
            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
                object-fit: cover;
                object-position: center top;
                border-radius:0;
            }
            .ant-upload-list-picture-card .ant-upload-list-item {
                float: left;
                width: 200px;
                height: 200px;
                margin: 0 8px 8px 0;
                border: 0;
            }
        `}</style>
      </div>
    );
  }
}