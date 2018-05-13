import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import { Upload, Button, Icon, message, notification } from 'antd';
export default class UploadVideo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: '',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  }

  render() {
    const { uploading } = this.state;
    const props = {
      action: '',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };
    const openNotification = () => {
      notification.open({
        message: 'upload complete !!',
        description: 'your add online course is successfully',
	      icon: <Icon type="file-text" style={{fontSize:'23px'}} />,
      });
    };
    return (
      <div>
        <Upload {...props}>
          <Button className="Select_btn">
            <Icon type="upload" /> Select Video File
          </Button>
        </Upload>
        <br/>
        <Button
          className="upload-demo-start" 
          onClick={this.handleUpload}
          disabled={this.state.fileList.length === 0}
          loading={uploading} 
          onClick={openNotification}
        >
          {uploading ? 'Uploading' : 'Publish' }
        </Button>
        <style>{`
            .Select_btn , .upload-demo-start {
                color:rgba(0,0,0,.65) !important;
                border-color:#d9d9d9 !important;
            }
            .upload-demo-start,.upload-demo-start:hover {
                background:#16b76f !important;
                color: #fff !important;
                width: 100px;
                height: 30px;
                border: 0;
            }
            .Select_btn:hover , .upload-demo-start:hover {
                border-color: #d9d9d9 !important;
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