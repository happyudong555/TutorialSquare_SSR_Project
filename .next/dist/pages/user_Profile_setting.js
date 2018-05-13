'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/user_Profile_setting.js';


var User_Profile_setting = function (_React$Component) {
  (0, _inherits3.default)(User_Profile_setting, _React$Component);

  function User_Profile_setting() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User_Profile_setting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User_Profile_setting.__proto__ || (0, _getPrototypeOf2.default)(User_Profile_setting)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: '',
        status: 'done',
        url: ''
      }]
    }, _this.handleCancel = function () {
      return _this.setState({ previewVisible: false });
    }, _this.handlePreview = function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    }, _this.handleChange = function (_ref2) {
      var fileList = _ref2.fileList;
      return _this.setState({ fileList: fileList });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User_Profile_setting, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          previewVisible = _state.previewVisible,
          previewImage = _state.previewImage,
          fileList = _state.fileList;

      var uploadButton = _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('div', { className: 'ant-upload-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'add avatar'));
      var openNotification = function openNotification() {
        _antd.notification.open({
          message: 'setting is complete !!',
          description: 'your profile setting is successfully',
          icon: _react2.default.createElement(_antd.Icon, { type: 'solution', style: { fontSize: '23px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        });
      };
      return _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h5', { className: 'HeadingTitle', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Profile Setting'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('link', { src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement(_antd.Upload, {
        action: '',
        listType: 'picture-card',
        fileList: fileList,
        onPreview: this.handlePreview,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, fileList.length >= 2 ? null : uploadButton), _react2.default.createElement(_antd.Modal, { visible: previewVisible, footer: null, onCancel: this.handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: previewImage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('input', { className: 'form-control username_form', placeholder: 'Username', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement('input', { className: 'form-control NewPassword_form', placeholder: 'New Password', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement('textarea', { className: 'form-control teacherHistory', placeholder: 'Yours Education or Experience', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('button', { type: 'submit',
        className: 'btn btn-sm save_btn',
        onClick: openNotification, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Save')), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, '\n            .HeadingTitle {\n                font-family: sukhumvit set,kanit;\n                text-transform: uppercase;\n                font-size: 18px;\n                font-weight: bold;\n                margin-left: 5px;\n            }\n            .ant-upload.ant-upload-select-picture-card {\n                width:110px;\n                height:110px;\n                float:left;\n            }\n            .username_form,.NewPassword_form,.teacherHistory {\n                float: left;\n                width: 500px;\n                font-size:12px;\n                height:33px;\n                margin-left: 20px;\n                margin-bottom:23px;\n            }\n            .teacherHistory {\n                height: 200px;\n                resize: none;\n            }\n            .save_btn {\n                background-color:#062841;\n                color:#fff;\n                cursor: pointer;\n                width:120px;\n                float: left;\n                margin-left: 140px;\n                margin-bottom:20px;\n            }\n            .ant-upload-list-item.ant-upload-list-item-done,\n            .ant-upload-list-item-uploading-text{\n                display:none;\n            }\n            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail, \n            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n                object-fit: cover;\n                object-position: center top;\n                border-radius:0;\n            }\n            .ant-upload-list-picture-card .ant-upload-list-item {\n                float: left;\n                width: 200px;\n                height: 200px;\n                margin: 0 8px 8px 0;\n                border: 0;\n            }\n            .ant-notification-notice-message {\n              font-family:sukhumvit set,kanit;\n              text-transform: capitalize;\n              font-weight: bold;\n            }\n            .ant-notification-notice-description {\n              font-family:sukhumvit set,kanit;\n              text-transform: capitalize;\n            }\n        '));
    }
  }]);

  return User_Profile_setting;
}(_react2.default.Component);

exports.default = User_Profile_setting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJfUHJvZmlsZV9zZXR0aW5nLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiVXBsb2FkIiwiSWNvbiIsIk1vZGFsIiwiQnV0dG9uIiwibm90aWZpY2F0aW9uIiwiVXNlcl9Qcm9maWxlX3NldHRpbmciLCJzdGF0ZSIsInByZXZpZXdWaXNpYmxlIiwicHJldmlld0ltYWdlIiwiZmlsZUxpc3QiLCJ1aWQiLCJuYW1lIiwic3RhdHVzIiwidXJsIiwiaGFuZGxlQ2FuY2VsIiwic2V0U3RhdGUiLCJoYW5kbGVQcmV2aWV3IiwiZmlsZSIsInRodW1iVXJsIiwiaGFuZGxlQ2hhbmdlIiwidXBsb2FkQnV0dG9uIiwib3Blbk5vdGlmaWNhdGlvbiIsIm9wZW4iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZm9udFNpemUiLCJsZW5ndGgiLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUTs7Ozs7OztJLEFBRWhCOzs7Ozs7Ozs7Ozs7Ozt3TyxBQUNuQjtzQkFBUSxBQUNVLEFBQ2hCO29CQUZNLEFBRVEsQUFDZDs7YUFDTyxDQURJLEFBQ0gsQUFDTjtjQUZTLEFBRUgsQUFDTjtnQkFIUyxBQUdELEFBQ1I7YUFQSSxBQUdJLEFBQUMsQUFJSixBO0FBSkksQUFDVCxPQURRO0FBSEosQUFDTixhQVVGLEEsZUFBZSxZQUFBO2FBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBdEIsQUFBTSxBQUFjLEFBQWtCO0EsYUFFckQsQSxnQkFBZ0IsVUFBQSxBQUFDLE1BQVMsQUFDeEI7WUFBQSxBQUFLO3NCQUNXLEtBQUEsQUFBSyxPQUFPLEtBRGQsQUFDbUIsQUFDL0I7d0JBRkYs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