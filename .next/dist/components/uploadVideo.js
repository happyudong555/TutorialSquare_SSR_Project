'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _nextRoutes = require('next-routes');

var _nextRoutes2 = _interopRequireDefault(_nextRoutes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/uploadVideo.js';


var UploadVideo = function (_React$Component) {
  (0, _inherits3.default)(UploadVideo, _React$Component);

  function UploadVideo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UploadVideo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UploadVideo.__proto__ || (0, _getPrototypeOf2.default)(UploadVideo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileList: [],
      uploading: false
    }, _this.handleUpload = function () {
      var fileList = _this.state.fileList;

      var formData = new FormData();
      fileList.forEach(function (file) {
        formData.append('files[]', file);
      });

      _this.setState({
        uploading: true
      });

      // You can use any AJAX library you like
      reqwest({
        url: '',
        method: 'post',
        processData: false,
        data: formData,
        success: function success() {
          _this.setState({
            fileList: [],
            uploading: false
          });
          _antd.message.success('upload successfully.');
        },
        error: function error() {
          _this.setState({
            uploading: false
          });
          _antd.message.error('upload failed.');
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UploadVideo, [{
    key: 'render',
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var uploading = this.state.uploading;

      var props = {
        action: '',
        onRemove: function onRemove(file) {
          _this2.setState(function (_ref2) {
            var fileList = _ref2.fileList;

            var index = fileList.indexOf(file);
            var newFileList = fileList.slice();
            newFileList.splice(index, 1);
            return {
              fileList: newFileList
            };
          });
        },
        beforeUpload: function beforeUpload(file) {
          _this2.setState(function (_ref3) {
            var fileList = _ref3.fileList;
            return {
              fileList: [].concat((0, _toConsumableArray3.default)(fileList), [file])
            };
          });
          return false;
        },
        fileList: this.state.fileList
      };
      var openNotification = function openNotification() {
        _antd.notification.open({
          message: 'upload complete !!',
          description: 'your add online course is successfully',
          icon: _react2.default.createElement(_antd.Icon, { type: 'file-text', style: { fontSize: '23px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        });
      };
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_antd.Upload, (0, _extends3.default)({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_antd.Button, { className: 'Select_btn', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'upload', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), ' Select Video File')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_antd.Button, (_React$createElement = {
        className: 'upload-demo-start',
        onClick: this.handleUpload,
        disabled: this.state.fileList.length === 0,
        loading: uploading
      }, (0, _defineProperty3.default)(_React$createElement, 'onClick', openNotification), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 83
      }), _React$createElement), uploading ? 'Uploading' : 'Publish'), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '\n            .Select_btn , .upload-demo-start {\n                color:rgba(0,0,0,.65) !important;\n                border-color:#d9d9d9 !important;\n            }\n            .upload-demo-start,.upload-demo-start:hover {\n                background:#16b76f !important;\n                color: #fff !important;\n                width: 100px;\n                height: 30px;\n                border: 0;\n            }\n            .Select_btn:hover , .upload-demo-start:hover {\n                border-color: #d9d9d9 !important;\n            }\n            .ant-notification-notice-message {\n              font-family:sukhumvit set,kanit;\n              text-transform: capitalize;\n              font-weight: bold;\n            }\n            .ant-notification-notice-description {\n              font-family:sukhumvit set,kanit;\n              text-transform: capitalize;\n            }\n        '));
    }
  }]);

  return UploadVideo;
}(_react2.default.Component);

exports.default = UploadVideo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXBsb2FkVmlkZW8uanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwicm91dGUiLCJVcGxvYWQiLCJCdXR0b24iLCJJY29uIiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsIlVwbG9hZFZpZGVvIiwic3RhdGUiLCJmaWxlTGlzdCIsInVwbG9hZGluZyIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiZmlsZSIsImFwcGVuZCIsInNldFN0YXRlIiwicmVxd2VzdCIsInVybCIsIm1ldGhvZCIsInByb2Nlc3NEYXRhIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsInByb3BzIiwiYWN0aW9uIiwib25SZW1vdmUiLCJpbmRleCIsImluZGV4T2YiLCJuZXdGaWxlTGlzdCIsInNsaWNlIiwic3BsaWNlIiwiYmVmb3JlVXBsb2FkIiwib3Blbk5vdGlmaWNhdGlvbiIsIm9wZW4iLCJkZXNjcmlwdGlvbiIsImljb24iLCJmb250U2l6ZSIsImxlbmd0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFRLEFBQU0sQUFBUzs7Ozs7OztJQUNuQixBOzs7Ozs7Ozs7Ozs7OztzTixBQUNuQjtnQkFBUSxBQUNJLEFBQ1Y7aUJBRk0sQUFFSyxBO0FBRkwsQUFDTixhQUlGLEEsZUFBZSxZQUFNO1VBQUEsQUFDWCxXQUFhLE1BREYsQUFDTyxNQURQLEFBQ1gsQUFDUjs7VUFBTSxXQUFXLElBQWpCLEFBQWlCLEFBQUksQUFDckI7ZUFBQSxBQUFTLFFBQVEsVUFBQSxBQUFDLE1BQVMsQUFDekI7aUJBQUEsQUFBUyxPQUFULEFBQWdCLFdBQWhCLEFBQTJCLEFBQzVCO0FBRkQsQUFJQTs7WUFBQSxBQUFLO21CQUFMLEFBQWMsQUFDRCxBQUdiO0FBSmMsQUFDWjs7QUFJRjs7YUFBUSxBQUNELEFBQ0w7Z0JBRk0sQUFFRSxBQUNSO3FCQUhNLEFBR08sQUFDYjtjQUpNLEFBSUEsQUFDTjtpQkFBUyxtQkFBTSxBQUNiO2dCQUFBLEFBQUs7c0JBQVMsQUFDRixBQUNWO3VCQUZGLEFBQWMsQUFFRCxBQUViO0FBSmMsQUFDWjt3QkFHRixBQUFRLFFBQVIsQUFBZ0IsQUFDakI7QUFYSyxBQVlOO2VBQU8saUJBQU0sQUFDWDtnQkFBQSxBQUFLO3VCQUFMLEFBQWMsQUFDRCxBQUViO0FBSGMsQUFDWjt3QkFFRixBQUFRLE1BQVIsQUFBYyxBQUNmO0FBakJILEFBQVEsQUFtQlQ7QUFuQlMsQUFDTjtBOzs7Ozs2QkFvQks7bUJBQUE7VUFBQTs7VUFBQSxBQUNDLFlBQWMsS0FEZixBQUNvQixNQURwQixBQUNDLEFBQ1I7O1VBQU07Z0JBQVEsQUFDSixBQUNSO2tCQUFVLGtCQUFBLEFBQUMsTUFBUyxBQUNsQjtpQkFBQSxBQUFLLFNBQVMsaUJBQWtCO2dCQUFmLEFBQWUsaUJBQWYsQUFBZSxBQUM5Qjs7Z0JBQU0sUUFBUSxTQUFBLEFBQVMsUUFBdkIsQUFBYyxBQUFpQixBQUMvQjtnQkFBTSxjQUFjLFNBQXBCLEFBQW9CLEFBQVMsQUFDN0I7d0JBQUEsQUFBWSxPQUFaLEFBQW1CLE9BQW5CLEFBQTBCLEFBQzFCOzt3QkFBQSxBQUFPLEFBQ0ssQUFFYjtBQUhRLEFBQ0w7QUFMSixBQVFEO0FBWFcsQUFZWjtzQkFBYyxzQkFBQSxBQUFDLE1BQVMsQUFDdEI7aUJBQUEsQUFBSyxTQUFTLGlCQUFBO2dCQUFBLEFBQUcsaUJBQUgsQUFBRzs7bUVBQ2YsQUFBYyxZQURGLEFBQW1CLEFBQy9CLEFBQXdCO0FBRE8sQUFDL0I7QUFERixBQUdBO2lCQUFBLEFBQU8sQUFDUjtBQWpCVyxBQWtCWjtrQkFBVSxLQUFBLEFBQUssTUFsQmpCLEFBQWMsQUFrQlMsQUFFdkI7QUFwQmMsQUFDWjtVQW1CSSxtQkFBbUIsU0FBbkIsQUFBbUIsbUJBQU0sQUFDN0I7MkJBQUEsQUFBYTttQkFBSyxBQUNQLEFBQ1Q7dUJBRmdCLEFBRUgsQUFDZDtnQ0FBTSxBQUFDLDRCQUFLLE1BQU4sQUFBVyxhQUFZLE9BQU8sRUFBQyxVQUEvQixBQUE4QixBQUFVO3dCQUF4QzswQkFIUCxBQUFrQixBQUdYLEFBRVI7QUFGUTtXQUFBO0FBSFcsQUFDaEI7QUFGSixBQU9BOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx1REFBRCxBQUFZOztvQkFBWjtzQkFBQSxBQUNFO0FBREY7QUFBQSwwQkFDRSxBQUFDLDhCQUFPLFdBQVIsQUFBa0I7b0JBQWxCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDRCQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFITixBQUNFLEFBQ0UsQUFJRjs7b0JBQUE7c0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDO21CQUFELEFBQ1ksQUFDVjtpQkFBUyxLQUZYLEFBRWdCLEFBQ2Q7a0JBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFdBSGhDLEFBRzJDLEFBQ3pDO2lCQUpGLEFBSVc7QUFIVCx3RUFERixBQUtXO2tCQUxYO29CQUFBO0FBQUEsVUFPRyxtQ0FBQSxBQUFZLGNBZGpCLEFBT0UsQUFPNkIsQUFFN0IsNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBakJKLEFBQ0UsQUFnQkUsQUEyQkw7Ozs7O0VBaEhzQyxnQkFBTSxBOztrQkFBMUIsQSIsImZpbGUiOiJ1cGxvYWRWaWRlby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuamFtYXBvbmthcm5hc3V0YS9EZXNrdG9wL3R1dG9yaWFsLXNxdWFyZS1zc3IifQ==