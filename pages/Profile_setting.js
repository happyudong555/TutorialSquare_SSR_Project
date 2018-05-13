import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { Upload, Icon, Modal,Button, notification } from 'antd';
export default class Profile_setting extends React.Component {
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
        <div className="ant-upload-text">add avatar</div>
      </div>
    );
    const openNotification = () => {
      notification.open({
        message: 'setting is complete !!',
        description: 'your profile setting is successfully',
	      icon: <Icon type="solution" style={{fontSize:'23px'}} />,
      });
    };
    return (
      <div className="clearfix">
        <h5 className="HeadingTitle">Profile Setting</h5>
        <br/>
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
          {fileList.length >= 2 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <input className="form-control username_form" placeholder="Username" />
        <br/>
        <input className="form-control NewPassword_form" placeholder="New Password"/>
        <br/>
        <textarea className="form-control teacherHistory" placeholder="Yours Education or Experience"></textarea>
        
        <br/>

        <div className="clearfix">
            <button type="submit" 
            className="btn btn-sm save_btn" 
            onClick={openNotification}>Save</button>
        </div>

        <style>{`
            .HeadingTitle {
                font-family: sukhumvit set,kanit;
                text-transform: uppercase;
                font-size: 18px;
                font-weight: bold;
                margin-left: 5px;
            }
            .ant-upload.ant-upload-select-picture-card {
                width:110px;
                height:110px;
                float:left;
            }
            .username_form,.NewPassword_form,.teacherHistory {
                float: left;
                width: 500px;
                font-size:12px;
                height:33px;
                margin-left: 20px;
                margin-bottom:23px;
            }
            .teacherHistory {
                height: 200px;
                resize: none;
            }
            .save_btn {
                background-color:#062841;
                color:#fff;
                cursor: pointer;
                width:120px;
                float: left;
                margin-left: 140px;
                margin-bottom:20px;
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
            .ant-notification-notice-message {
              font-family:sukhumvit set,kanit;
              text-transform: capitalize;
              font-weight: bold;
            }
            .ant-notification-notice-description {
              font-family:sukhumvit set,kanit;
              text-transform: capitalize;
            }
        `}</style>
      </div>
    );
  }
}