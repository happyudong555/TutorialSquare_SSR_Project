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

var _course = require('../static/database/course');

var _course2 = _interopRequireDefault(_course);

var _upload_coverImages = require('../components/upload_coverImages');

var _upload_coverImages2 = _interopRequireDefault(_upload_coverImages);

var _uploadVideo = require('../components/uploadVideo');

var _uploadVideo2 = _interopRequireDefault(_uploadVideo);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/create_course.js';


var Create_course = function (_React$Component) {
    (0, _inherits3.default)(Create_course, _React$Component);

    function Create_course() {
        (0, _classCallCheck3.default)(this, Create_course);

        return (0, _possibleConstructorReturn3.default)(this, (Create_course.__proto__ || (0, _getPrototypeOf2.default)(Create_course)).apply(this, arguments));
    }

    (0, _createClass3.default)(Create_course, [{
        key: 'render',
        value: function render() {
            var Option = _antd.Select.Option,
                OptGroup = _antd.Select.OptGroup;

            function handleChange(value) {
                console.log('selected ' + value);
            }
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/FontAwesome.otf', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('h3', { className: 'HeadingTitle', style: { marginBottom: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'create your course'), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_upload_coverImages2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('div', { className: 'form-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('input', { typ: 'text',
                className: 'form-control',
                placeholder: 'Course Name',
                style: { fontSize: '13px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement('textarea', { type: 'text',
                className: 'form-control contentBox',
                placeholder: 'Course Description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement(_antd.Select, {
                defaultValue: 'Select Category',
                style: { width: '100%' },
                onChange: handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(OptGroup, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(Option, { value: 'sat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Thai'), _react2.default.createElement(Option, { value: 'gat pat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'GAT PAT'), _react2.default.createElement(Option, { value: 'english', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'English'), _react2.default.createElement(Option, { value: 'thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Thai'))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement(_uploadVideo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            })))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\n                    h1 , h2 , h3 ,h4 ,h5 , h6 , p {\n                        font-family:sukhumvit set,kanit;\n                        text-rendering: optimizeSpeed;\n                    }\n                    .HeadingTitle {\n                        font-family:sukhumvit set,kanit;\n                        text-transform:capitalize !important;\n                        font-size:18px !important;\n                        font-weight: bold;\n                        margin-left:5px;\n                    }\n\n                    .ant-tabs-nav .ant-tabs-tab-active {\n                        color:#072941 !important;\n                    }\n\n                    .ant-tabs-ink-bar {\n                        background-color:#072941 !important;\n                    }\n                    .ant-tabs-bar {\n                        margin-bottom:23px;\n                    }\n                    .cover_image_form ,.Video_form{\n                        width:100%;\n                        height:350px;\n                        background-color:#000;\n                        margin-top:15px;\n                        overflow:hidden;\n                        cursor: pointer;\n                    }\n                    .publish_btn {\n                        width: 100px;\n                        background-color: #41b883 !important;\n                        cursor: pointer;\n                        border: 0 !important;\n                        margin: 15px;\n                        text-transform: capitalize !important;\n                        outline: none !important;\n                        font-family: sukhumvit set,kanit;\n                        color: white;\n                    }\n                    .form-content {\n                        margin-top:10px;\n                    }\n                    .contentBox {\n                        height: 250px;\n                        line-height: 26px;\n                        white-space:pre-line;\n                        resize: none;\n                        margin-bottom:10px;\n                        font-size: 13px;\n                        padding: 20px;\n                    }\n                '));
        }
    }]);

    return Create_course;
}(_react2.default.Component);

exports.default = Create_course;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZV9jb3Vyc2UuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwicm91dGUiLCJjb3Vyc2UiLCJVcGxvYWRfQ292ZXJJbWFnZXMiLCJVcGxvYWRWaWRlbyIsIkljb24iLCJJbnB1dCIsIlNlbGVjdCIsIkNyZWF0ZV9jb3Vyc2UiLCJPcHRpb24iLCJPcHRHcm91cCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwid2lkdGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVMsQUFBSyxBQUFNOzs7Ozs7O0lBQ0MsQTs7Ozs7Ozs7Ozs7aUNBQ1I7Z0JBQUEsQUFDRyxTQURILEFBQ3dCLGFBRHhCLEFBQ0c7Z0JBREgsQUFDVyxXQURYLEFBQ3dCLGFBRHhCLEFBQ1csQUFFaEI7O3FCQUFBLEFBQVMsYUFBVCxBQUFzQixPQUFPLEFBQzNCO3dCQUFBLEFBQVEsa0JBQVIsQUFBd0IsQUFDekI7QUFDRDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLHVEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FEQSxBQUNBLEFBQ0k7QUFESjt3REFDVSxNQUFOLEFBQVc7OEJBQVg7Z0NBRkosQUFFSSxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXOzhCQUFYO2dDQUhKLEFBR0ksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVzs4QkFBWDtnQ0FKSixBQUlJLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVc7OEJBQVg7Z0NBTEosQUFLSSxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXOzhCQUFYO2dDQU5KLEFBTUksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVzs4QkFBWDtnQ0FQSixBQU9JLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVc7OEJBQVg7Z0NBVFIsQUFDSSxBQVFJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjLGdCQUFlLE9BQU8sRUFBQyxjQUFyQyxBQUFvQyxBQUFlOzhCQUFuRDtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHVDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDUTtBQURSOytCQUNRLEFBQUM7OzhCQUFEO2dDQURSLEFBQ1EsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csS0FBUCxBQUFXLEFBQ1g7MkJBREEsQUFDVSxBQUNWOzZCQUZBLEFBRVksQUFDWjt1QkFBTyxFQUFDLFVBSFIsQUFHTyxBQUFXOzhCQUhsQjtnQ0FESixBQUNJLEFBSUE7QUFKQTs7OzhCQUlBO2dDQUxKLEFBS0ksQUFDQTtBQURBO0FBQUEsNERBQ1UsTUFBVixBQUFlLEFBQ2Y7MkJBREEsQUFDVSxBQUNWOzZCQUZBLEFBRVk7OEJBRlo7Z0NBUlosQUFFUSxBQU1JLEFBSUo7QUFKSTs7OzhCQUlKO2dDQVpSLEFBWVEsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQzs4QkFBRCxBQUNpQixBQUNiO3VCQUFPLEVBQUUsT0FGYixBQUVXLEFBQVMsQUFDaEI7MEJBSEosQUFHYzs4QkFIZDtnQ0FBQSxBQUlJO0FBSko7QUFDSSwrQkFHQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELFVBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EseUJBQUMsY0FBRCxVQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLDRCQUFDLGNBQUQsVUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSw0QkFBQyxjQUFELFVBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFyQmhCLEFBYVEsQUFJSSxBQUlJLEFBR1I7OzhCQUFBO2dDQXhCUixBQXdCUSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBekJSLEFBeUJRLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUM7OzhCQUFEO2dDQTFCUixBQTBCUSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBekNwQixBQVdJLEFBRUksQUFDSSxBQTJCUSxBQUloQjtBQUpnQjtBQUFBLG1DQUloQixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUE5Q1IsQUFDSSxBQTZDSSxBQXlEWDs7Ozs7RUE5R3NDLGdCQUFNLEE7O2tCQUE1QixBIiwiZmlsZSI6ImNyZWF0ZV9jb3Vyc2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=