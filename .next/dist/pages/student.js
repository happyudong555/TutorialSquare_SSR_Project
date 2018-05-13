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

var _myCourse = require('../pages/myCourse');

var _myCourse2 = _interopRequireDefault(_myCourse);

var _create_course = require('../pages/create_course');

var _create_course2 = _interopRequireDefault(_create_course);

var _user_Profile_setting = require('../pages/user_Profile_setting');

var _user_Profile_setting2 = _interopRequireDefault(_user_Profile_setting);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/student.js?entry';


var userDashboard = function (_React$Component) {
    (0, _inherits3.default)(userDashboard, _React$Component);

    function userDashboard() {
        (0, _classCallCheck3.default)(this, userDashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (userDashboard.__proto__ || (0, _getPrototypeOf2.default)(userDashboard)).call(this));

        _this.state = {
            displayName: 'student name',
            imgUrl: 'profile-default.svg'
        };
        return _this;
    }

    (0, _createClass3.default)(userDashboard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('link', { rel: 'icon', href: '/static/public/icon/favicon.png', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Tutorial Square | Dashboard'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement('nav', { className: 'navbar navbar-default storeNavbar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_link2.default, { className: 'navbar-brand', href: { pathname: '/store', query: { store: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('img', { className: 'logo', src: '/static/public/logo/t-square.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }))))), _react2.default.createElement('div', { className: 'container container-dashboard', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('div', { className: 'SideBar col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('img', { className: 'img-responsive', src: 'static/public/images/' + this.state.imgUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('h5', { className: 'text-center displayName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, this.state.displayName), _react2.default.createElement('ul', { className: 'list-group Tabsmenu nav nav-tabs', role: 'tablist', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('li', { className: 'list-group-item text-center active', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', { href: '#mycourse', role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'my course')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('a', { href: '#Profile_setting', role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'profile setting')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/faq_student', query: { store: 'id' } }, role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'faq')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('a', { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'log out')))), _react2.default.createElement('div', { className: 'col-md-8 wrapper_my_post', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('div', { className: 'tab-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane active', id: 'mycourse', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_myCourse2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'Profile_setting', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_user_Profile_setting2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }))))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, '\n                        body {\n                            background-color:#f6f6f6;\n                        }\n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .nav-tabs {\n                            border:0;\n                        }\n                        .storeNavbar{\n                            width:100%;\n                            height: 65px;\n                            background-color:#062741;\n                        }\n                        .container-dashboard{\n                            margin-top:40px;\n                        }\n                        .SideBar {\n                            background-color:#fff;\n                            border-radius:3px;\n                            padding:20px;\n                            float:left;\n                        }\n                        .wrapper_my_post{\n                            background-color: #fff;\n                            float: left;\n                            height: 100%;\n                            border-radius:3px;\n                            margin-left:42px;\n                            margin-bottom:40px;\n                            padding:20px;\n                        }\n                        .SideBar img {\n                            width: 100px;\n                            height: 100px;\n                            margin: auto;\n                            display: block;\n                            border-radius:100px;\n                            margin-bottom:20px;\n                            border:3px solid #fff;\n                        }\n                        .displayName {\n                            color: #657786;\n                            text-transform: capitalize;\n                            font-size: 13px;\n                            font-family: sukhumvit set, kanit;\n                            font-weight: bold;\n                            margin-bottom: 16px;\n                        }\n                        .Tabsmenu .list-group-item{\n                            border:0;\n                            background-color: transparent;\n                            padding:0;\n                        }\n                        .Tabsmenu a{\n                            color:#657786;\n                            text-transform: capitalize;\n                            line-height:37px;\n                            font-size:13px;\n                            text-decoration: none;\n                        }\n                        .HeadingTitle {\n                            font-family:sukhumvit set,kanit;\n                            text-transform:uppercase;\n                            font-size:20px;\n                            font-weight: bold;\n                            margin-left:5px;\n                        }\n                    '));
        }
    }]);

    return userDashboard;
}(_react2.default.Component);

exports.default = userDashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0dWRlbnQuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwicm91dGUiLCJNeUNvdXJzZSIsIkNyZWF0ZV9jb3Vyc2UiLCJVc2VyX1Byb2ZpbGVfc2V0dGluZyIsIkNhcmQiLCJDb2wiLCJSb3ciLCJ1c2VyRGFzaGJvYXJkIiwic3RhdGUiLCJkaXNwbGF5TmFtZSIsImltZ1VybCIsInBhdGhuYW1lIiwicXVlcnkiLCJzdG9yZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBUyxBQUFNLEFBQUs7Ozs7Ozs7SUFDQyxBOzJDQUNqQjs7NkJBQWE7NENBQUE7O2tKQUVUOztjQUFBLEFBQUs7eUJBQVEsQUFDSSxBQUNiO29CQUpLLEFBRVQsQUFBYSxBQUVEO0FBRkMsQUFDVDtlQUdQOzs7OztpQ0FDTyxBQUNKO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRDtBQURDO0FBQUEsdURBQ0ssS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsbUNBQWtDLE1BQXhELEFBQTZEOzhCQUE3RDtnQ0FEQyxBQUNELEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGQyxBQUVELEFBQ0Esd0VBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsZ0ZBQStFLFdBQTNHLEFBQXFILDJFQUEwRSxhQUEvTCxBQUEyTTs4QkFBM007Z0NBSEMsQUFHRCxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dD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QUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxNQUFMLEFBQVUsWUFBVyxXQUFyQixBQUErQixtQkFBa0IsSUFBakQsQUFBb0Q7OEJBQXBEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO0FBQUEsaUNBRUosY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLFlBQVcsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FoRHBCLEFBc0JHLEFBb0JLLEFBQ0ksQUFJSSxBQUNJLEFBS2pCO0FBTGlCO0FBQUEsb0NBS2pCLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQXREUCxBQUNJLEFBcURHLEFBa0ZWOzs7OztFQWpKc0MsZ0JBQU0sQTs7a0JBQTVCLEEiLCJmaWxlIjoic3R1ZGVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuamFtYXBvbmthcm5hc3V0YS9EZXNrdG9wL3R1dG9yaWFsLXNxdWFyZS1zc3IifQ==