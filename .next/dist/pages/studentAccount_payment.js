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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _antd = require('antd');

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/studentAccount_payment.js?entry';


var payment = function (_React$Component) {
    (0, _inherits3.default)(payment, _React$Component);

    function payment() {
        (0, _classCallCheck3.default)(this, payment);

        return (0, _possibleConstructorReturn3.default)(this, (payment.__proto__ || (0, _getPrototypeOf2.default)(payment)).apply(this, arguments));
    }

    (0, _createClass3.default)(payment, [{
        key: 'render',
        value: function render() {
            var MonthPicker = _antd.DatePicker.MonthPicker,
                RangePicker = _antd.DatePicker.RangePicker;

            var TabPane = _antd.Tabs.TabPane;
            function onChange(date, dateString) {
                console.log(date, dateString);
            }
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('link', { rel: 'icon', href: '/static/public/icon/favicon.png', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Tutorial Square | Payment'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.10/antd.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })), _react2.default.createElement('nav', { className: 'navbar navbar-default storeNavbar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/student', query: { user: 'id' } }, className: 'navbar-brand', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('img', { className: 'logo', src: '/static/public/logo/t-square.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), _react2.default.createElement('div', { className: 'navbar-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { className: 'profileImage',
                'data-toggle': 'dropdown', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('i', { className: 'fa fa-bars fa-lg', style: { color: '#fff', cursor: 'pointer' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement('div', { className: 'dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('ul', { className: 'dropdown-menu tutorial-dropdown',
                'aria-labelledby': 'dLabel', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/student', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'dashboard'), _react2.default.createElement('div', { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/faq_student', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'faq')), _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'sign out')))))), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { className: 'col-md-6 wrapperformPayment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('h4', { style: { fontFamily: 'sukhumvit set,kanit', textTransform: 'capitalize', color: '#555' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'credit card & paypal')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('input', { type: 'text', className: 'form-control',
                placeholder: 'Card Holder Name',
                style: { fontSize: '13.7px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control',
                placeholder: 'Card Number',
                style: { fontSize: '13.7px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control',
                placeholder: 'CVV',
                style: { fontSize: '13.7px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement(_antd.LocaleProvider, { locale: _en_US2.default, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_antd.DatePicker, { onChange: onChange,
                className: 'form-control',
                placeholder: 'Expiration Date',
                style: { cursor: 'pointer' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('button', { className: 'btn btn_payNow', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'pay now'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement('button', { className: 'btn btn_paypal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, ' pay with pay pal')))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, '\n                    @import url(https://fonts.googleapis.com/css?family=Kanit);\n                    \n                    .clearfix {\n                        clear:both;\n                    }\n                    .logo {\n                        width:128px;\n                        height:auto;\n                        overflow:hidden:\n                        object-fit: cover;\n                        object-position: center top;\n                        cursor: pointer;\n                    }\n                    .storeNavbar{\n                        width:100%;\n                        height: 65px;\n                        background-color:#062741;\n                    }\n                    .profileImage img {\n                        width: 40px;\n                        height: 40px;\n                        border-radius: 100px;\n                        object-fit: cover;\n                        object-position: center top;\n                        cursor: pointer;\n                    }\n                    .tutorial-dropdown{\n                        width:160px;\n                        right: 10px;\n                        left: inherit;\n                        text-align: center !important;\n                        font-size: 12px;\n                        text-transform: uppercase;\n                        border:0 !important;\n                    }\n                    .tutorial-dropdown a{\n                        color:#666;\n                        line-height:30px;\n                    }\n                    a:hover {\n                        color:#666;\n                        text-decoration: none;\n                    }\n                    .wrapperformPayment {\n                        margin: 30px auto;\n                        display: block;\n                    }\n                    .ant-input {\n                        border:0 !important;\n                        outline: none !important;\n                    }\n                    .ant-input:focus {\n                        outline: 0 !important;\n                        box-shadow: none !important;\n                    }\n                    .ant-calendar {\n                        width:330px;\n                        margin-bottom:20px;\n                    }\n                    .ant-calendar-picker-container {\n                        left:500px !important;\n                    }\n                    .btn_payNow {\n                        outline: 0 !important;\n                        cursor: pointer;\n                        background-color: #00bcd4;\n                        color: #fff;\n                        text-transform: uppercase;\n                        font-family: sukhumvit set,kanit;\n                        width: 100%;\n                        border-radius: 3px;\n                        box-shadow: 0 16px 26px -10px #17a2b8, 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px #17a2b85c;\n                    }\n                    .ant-tabs-nav .ant-tabs-tab-active {\n                        color:#555 !important;\n                    }\n                    .ant-tabs-ink-bar {\n                        background-color:#555 !important;\n                    }\n                    .btn_paypal {\n                        outline: 0 !important;\n                        cursor: pointer;\n                        width: 100%;\n                        text-transform: capitalize;\n                        border:0;\n                        border-radius: 4px;\n                        font-size: 19px;\n                        background-color:#052841;\n                        font-family: sukhumvit set,kanit;\n                        box-shadow:0 16px 26px -10px rgba(6, 41, 65, 0.55), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(6, 41, 65, 0.59);\n                        color: #fff;\n                    }\n                '));
        }
    }]);

    return payment;
}(_react2.default.Component);

exports.default = payment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0dWRlbnRBY2NvdW50X3BheW1lbnQuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwiUmVhY3REb20iLCJSb3V0ZXIiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJDaGVja2JveCIsIkRhdGVQaWNrZXIiLCJMb2NhbGVQcm92aWRlciIsIlRhYnMiLCJJY29uIiwiZW5VUyIsInBheW1lbnQiLCJNb250aFBpY2tlciIsIlJhbmdlUGlja2VyIiwiVGFiUGFuZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXIiLCJjb2xvciIsImN1cnNvciIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQU8sQUFBUSxBQUFTLEFBQVcsQUFBZSxBQUFLOztBQUN0RSxBQUFPOzs7Ozs7Ozs7SUFDYyxBOzs7Ozs7Ozs7OztpQ0FDUjtnQkFBQSxBQUNHLGNBREgsQUFDZ0MsaUJBRGhDLEFBQ0c7Z0JBREgsQUFDZ0IsY0FEaEIsQUFDZ0MsaUJBRGhDLEFBQ2dCLEFBQ3JCOztnQkFBTSxVQUFVLFdBQWhCLEFBQXFCLEFBQ3JCO3FCQUFBLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixZQUFZLEFBQ2xDO3dCQUFBLEFBQVEsSUFBUixBQUFZLE1BQVosQUFBa0IsQUFDbkI7QUFDRDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0Q7QUFEQztBQUFBLHVEQUNLLEtBQU4sQUFBVSxRQUFPLE1B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QTtnQ0FyQlosQUFxQlksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQyxzQ0FBRCxBQUFnQixBQUFROzhCQUF4QjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQyxrQ0FBVyxVQUFaLEFBQXNCLEFBQ3RCOzJCQURBLEFBQ1UsQUFDVjs2QkFGQSxBQUVZLEFBQ1o7dUJBQU8sRUFBQyxRQUhSLEFBR08sQUFBUTs4QkFIZjtnQ0F2QlosQUFzQlksQUFDQSxBQUtBO0FBTEE7Ozs4QkFLQTtnQ0E1QlosQUE0QlksQUFDQTtBQURBO0FBQUE7OzhCQUNBO2dDQTdCWixBQTZCWSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBOUJaLEFBOEJZLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCOzhCQUFsQjtnQ0FBQTtBQUFBO2VBL0JaLEFBK0JZLEFBQ0E7OzhCQUFBO2dDQWhDWixBQWdDWSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBakNaLEFBaUNZLEFBQ0E7QUFEQTtBQUFBOzs4QkFDQTtnQ0FsQ1osQUFrQ1ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUE1RXhCLEFBdUNJLEFBQ0ksQUFDSSxBQW1DWSxBQU1wQix5Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFuRlIsQUFDSSxBQWtGSSxBQWdHWDs7Ozs7RUExTGdDLGdCQUFNLEE7O2tCQUF0QixBIiwiZmlsZSI6InN0dWRlbnRBY2NvdW50X3BheW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=