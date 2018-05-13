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

var _inventory = require('../pages/inventory');

var _inventory2 = _interopRequireDefault(_inventory);

var _create_course = require('../pages/create_course');

var _create_course2 = _interopRequireDefault(_create_course);

var _Profile_setting = require('../pages/Profile_setting');

var _Profile_setting2 = _interopRequireDefault(_Profile_setting);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/teacher.js?entry';


var Dashboard = function (_React$Component) {
    (0, _inherits3.default)(Dashboard, _React$Component);

    function Dashboard() {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this));

        _this.state = {
            displayName: 'teacher name',
            imgUrl: 'profile-default.svg'
        };
        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
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
            }, _react2.default.createElement(_link2.default, { href: '/teacher_store', className: 'navbar-brand', __source: {
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
            }, _react2.default.createElement('a', { href: '#inventory', role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'inventory')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('a', { href: '#create_course', role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'create course')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', { href: '#Profile_setting', role: 'tab', 'data-toggle': 'tab', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'profile setting')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_link2.default, { href: '/faq_teacher', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'faq')), _react2.default.createElement('li', { className: 'list-group-item text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('a', { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'log out')))), _react2.default.createElement('div', { className: 'col-md-8 wrapper_my_post', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('div', { className: 'tab-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane active', id: 'inventory', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_inventory2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'create_course', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_create_course2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'Profile_setting', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_Profile_setting2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }))))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, '\n                        body {\n                            background-color:#f6f6f6;\n                        }\n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .nav-tabs {\n                            border:0;\n                        }\n                        .storeNavbar{\n                            width:100%;\n                            height: 65px;\n                            background-color:#062741;\n                        }\n                        .container-dashboard{\n                            margin-top:40px;\n                        }\n                        .SideBar {\n                            background-color:#fff;\n                            border-radius:3px;\n                            padding:20px;\n                            float:left;\n                        }\n                        .wrapper_my_post{\n                            background-color: #fff;\n                            float: left;\n                            height: 100%;\n                            border-radius:3px;\n                            margin-left:42px;\n                            margin-bottom:40px;\n                            padding:20px;\n                        }\n                        .SideBar img {\n                            width: 100px;\n                            height: 100px;\n                            margin: auto;\n                            display: block;\n                            border-radius:100px;\n                            margin-bottom:20px;\n                            border:3px solid #fff;\n                        }\n                        .displayName {\n                            color: #657786;\n                            text-transform: capitalize;\n                            font-size: 13px;\n                            font-family: sukhumvit set, kanit;\n                            font-weight: bold;\n                            margin-bottom: 16px;\n                        }\n                        .Tabsmenu .list-group-item{\n                            border:0;\n                            background-color: transparent;\n                            padding:0;\n                        }\n                        .Tabsmenu a{\n                            color:#657786;\n                            text-transform: capitalize;\n                            line-height:37px;\n                            font-size:13px;\n                            text-decoration: none;\n                        }\n                        .HeadingTitle {\n                            font-family:sukhumvit set,kanit;\n                            text-transform:uppercase;\n                            font-size:20px;\n                            font-weight: bold;\n                            margin-left:5px;\n                        }\n                    '));
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RlYWNoZXIuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwicm91dGUiLCJJbnZlbnRvcnkiLCJDcmVhdGVfY291cnNlIiwiUHJvZmlsZV9zZXR0aW5nIiwiQ2FyZCIsIkNvbCIsIlJvdyIsIkRhc2hib2FyZCIsInN0YXRlIiwiZGlzcGxheU5hbWUiLCJpbWdVcmwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQVMsQUFBTSxBQUFLOzs7Ozs7O0ksQUFDQzt1Q0FDakI7O3lCQUFhOzRDQUFBOzswSUFFVDs7Y0FBQSxBQUFLO3lCQUFRLEFBQ0ksQUFDYjtvQkFKSyxBQUVULEFBQWEsQUFFRDtBQUZDLEFBQ1Q7ZUFHUDs7Ozs7aUNBQ08sQUFDSjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0Q7QUFEQztBQUFBLHVEQUNLLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCLG1DQUFrQyxNQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBREMsQUFDRCxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkMsQUFFRCxBQUNBLHdFQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLGdGQUErRSxXQUEzRyxBQUFxSCwyRUFBMEUsYUFBL0wsQUFBMk07OEJBQTNNO2dDQUhDLEFBR0QsQUFDQTtBQURBO3dEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FKQyxBQUlELEFBQ0E7QUFEQTswREFDUSxLQUFSLEFBQVks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ZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLG1CQUFrQixJQUFqRCxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7QUFBQSxpQ0FFSixjQUFBLFNBQUssTUFBTCxBQUFVLFlBQVcsV0FBckIsQUFBK0IsWUFBVyxJQUExQyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUxSLEFBSUksQUFDSSxBQUVKO0FBRkk7QUFBQSxpQ0FFSixjQUFBLFNBQUssTUFBTCxBQUFVLFlBQVcsV0FBckIsQUFBK0IsWUFBVyxJQUExQyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQXREcEIsQUFzQkcsQUF1QkssQUFDSSxBQU9JLEFBQ0ksQUFLakI7QUFMaUI7QUFBQSxvQ0FLakIsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBNURQLEFBQ0ksQUEyREcsQUFrRlY7Ozs7O0VBdkprQyxnQkFBTSxBOztrQkFBeEIsQSIsImZpbGUiOiJ0ZWFjaGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5qYW1hcG9ua2FybmFzdXRhL0Rlc2t0b3AvdHV0b3JpYWwtc3F1YXJlLXNzciJ9