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

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/upload_coverImages.js';


var Upload_CoverImages = function (_React$Component) {
  (0, _inherits3.default)(Upload_CoverImages, _React$Component);

  function Upload_CoverImages() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Upload_CoverImages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Upload_CoverImages.__proto__ || (0, _getPrototypeOf2.default)(Upload_CoverImages)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(Upload_CoverImages, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          previewVisible = _state.previewVisible,
          previewImage = _state.previewImage,
          fileList = _state.fileList;

      var uploadButton = _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('div', { className: 'ant-upload-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Upload Images'));
      return _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('link', { src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.9/antd.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_antd.Upload, {
        action: '',
        listType: 'picture-card',
        fileList: fileList,
        onPreview: this.handlePreview,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, fileList.length >= 4 ? null : uploadButton), _react2.default.createElement(_antd.Modal, { visible: previewVisible, footer: null, onCancel: this.handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: previewImage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, '\n            .ant-upload.ant-upload-select-picture-card {\n                width:110px;\n                height:110px;\n            }\n            .ant-upload-list-item.ant-upload-list-item-done,\n            .ant-upload-list-item-uploading-text{\n                display:none;\n            }\n            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail, \n            .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n                object-fit: cover;\n                object-position: center top;\n                border-radius:0;\n            }\n            .ant-upload-list-picture-card .ant-upload-list-item {\n                float: left;\n                width: 200px;\n                height: 200px;\n                margin: 0 8px 8px 0;\n                border: 0;\n            }\n        '));
    }
  }]);

  return Upload_CoverImages;
}(_react2.default.Component);

exports.default = Upload_CoverImages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXBsb2FkX2NvdmVySW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiVXBsb2FkIiwiSWNvbiIsIk1vZGFsIiwiVXBsb2FkX0NvdmVySW1hZ2VzIiwic3RhdGUiLCJwcmV2aWV3VmlzaWJsZSIsInByZXZpZXdJbWFnZSIsImZpbGVMaXN0IiwidWlkIiwibmFtZSIsInN0YXR1cyIsInVybCIsImhhbmRsZUNhbmNlbCIsInNldFN0YXRlIiwiaGFuZGxlUHJldmlldyIsImZpbGUiLCJ0aHVtYlVybCIsImhhbmRsZUNoYW5nZSIsInVwbG9hZEJ1dHRvbiIsImxlbmd0aCIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFRLEFBQU07Ozs7Ozs7SSxBQUVGOzs7Ozs7Ozs7Ozs7OztvTyxBQUNuQjtzQkFBUSxBQUNVLEFBQ2hCO29CQUZNLEFBRVEsQUFDZDs7YUFDTyxDQURJLEFBQ0gsQUFDTjtjQUZTLEFBRUgsQUFDTjtnQkFIUyxBQUdELEFBQ1I7YUFQSSxBQUdJLEFBQUMsQUFJSixBO0FBSkksQUFDVCxPQURRO0FBSEosQUFDTixhQVVGLEEsZUFBZSxZQUFBO2FBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBdEIsQUFBTSxBQUFjLEFBQWtCO0EsYSxBQUVyRCxnQkFBZ0IsVUFBQSxBQUFDLE1BQVMsQUFDeEI7WUFBQSxBQUFLO3NCQUNXLEtBQUEsQUFBSyxPQUFPLEtBRGQsQUFDbUIsQUFDL0I7d0JBRkYsQUFBYyxBQUVJLEFBRW5CO0FBSmUsQUFDWjtBLGEsQUFLSixlQUFlLGlCQUFBO1VBQUEsQUFBRyxpQkFBSCxBQUFHO2FBQWUsTUFBQSxBQUFLLFNBQVMsRUFBRSxVQUFsQyxBQUFrQixBQUFjO0E7Ozs7OzZCQUV0QzttQkFDNEMsS0FENUMsQUFDaUQ7VUFEakQsQUFDQyx3QkFERCxBQUNDO1VBREQsQUFDaUIsc0JBRGpCLEFBQ2lCO1VBRGpCLEFBQytCLGtCQUQvQixBQUMrQixBQUN0Qzs7VUFBTSwrQkFDSixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsNEJBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQUhKLEFBQ0UsQUFFRSxBQUdKOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsaURBQ1UsS0FBTixBQUFVO29CQUFWO3NCQURKLEFBQ0ksQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFITixBQUNFLEFBRUksQUFFSjtBQUZJOzJCQUVKLEFBQUM7Z0JBQUQsQUFDUyxBQUNQO2tCQUZGLEFBRVcsQUFDVDtrQkFIRixBQUdZLEFBQ1Y7bUJBQVcsS0FKYixBQUlrQixBQUNoQjtrQkFBVSxLQUxaLEFBS2lCOztvQkFMakI7c0JBQUEsQUFPRztBQVBIO0FBQ0Usa0JBTUMsQUFBUyxVQUFULEFBQW1CLElBQW5CLEFBQXVCLE9BWjVCLEFBS0UsQUFPaUMsQUFFakMsK0JBQUEsQUFBQyw2QkFBTSxTQUFQLEFBQWdCLGdCQUFnQixRQUFoQyxBQUF3QyxNQUFNLFVBQVUsS0FBeEQsQUFBNkQ7b0JBQTdEO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxPQUFPLEVBQUUsT0FBZCxBQUFZLEFBQVMsVUFBVSxLQUEvQixBQUFvQztvQkFBcEM7c0JBZkosQUFjRSxBQUNFLEFBR0Y7QUFIRTsyQkFHRixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FuQkosQUFDRSxBQWtCRSxBQXlCTDs7Ozs7RUEzRTZDLGdCQUFNLEE7O2tCQUFqQyxBIiwiZmlsZSI6InVwbG9hZF9jb3ZlckltYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuamFtYXBvbmthcm5hc3V0YS9EZXNrdG9wL3R1dG9yaWFsLXNxdWFyZS1zc3IifQ==