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

var _Header_background = require('../components/Header_background');

var _Header_background2 = _interopRequireDefault(_Header_background);

var _teacher_Course_Layout = require('../components/teacher_Course_Layout');

var _teacher_Course_Layout2 = _interopRequireDefault(_teacher_Course_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/teacher_store.js?entry';


var store = function (_React$Component) {
    (0, _inherits3.default)(store, _React$Component);

    function store() {
        (0, _classCallCheck3.default)(this, store);

        return (0, _possibleConstructorReturn3.default)(this, (store.__proto__ || (0, _getPrototypeOf2.default)(store)).apply(this, arguments));
    }

    (0, _createClass3.default)(store, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('link', { rel: 'icon', href: '/static/public/icon/favicon.png', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'Tutorial Square | Course Online'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            })), _react2.default.createElement('nav', { className: 'navbar navbar-default storeNavbar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('a', { className: 'navbar-brand', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('img', { className: 'logo', src: '/static/public/logo/t-square.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }))), _react2.default.createElement('div', { className: 'navbar-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'profileImage',
                'data-toggle': 'dropdown', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('i', { className: 'fa fa-bars fa-lg', style: { color: '#fff', cursor: 'pointer' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            })), _react2.default.createElement('div', { className: 'dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('ul', { className: 'dropdown-menu tutorial-dropdown',
                'aria-labelledby': 'dLabel', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/teacher', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'dashboard'), _react2.default.createElement('div', { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/faq_teacher', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'faq')), _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'sign out')))))), _react2.default.createElement('div', { className: 'container-fluid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_Header_background2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement(_teacher_Course_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\n                        @import url(https://fonts.googleapis.com/css?family=Kanit);\n                        \n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .storeNavbar{\n                            width:100%;\n                            height: 65px;\n                            background-color:#062741;\n                        }\n                        .profileImage img {\n                            width: 40px;\n                            height: 40px;\n                            border-radius: 100px;\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .tutorial-dropdown{\n                            width:160px;\n                            right: 10px;\n                            left: inherit;\n                            text-align: center !important;\n                            font-size: 12px;\n                            text-transform: uppercase;\n                            border:0 !important;\n                        }\n                        .tutorial-dropdown a{\n                            color:#666;\n                            line-height:30px;\n                        }\n                        a:hover {\n                            color:#666;\n                            text-decoration: none;\n                        }\n                    '));
        }
    }]);

    return store;
}(_react2.default.Component);

exports.default = store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RlYWNoZXJfc3RvcmUuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwiUmVhY3REb20iLCJSb3V0ZXIiLCJIZWFkZXJfYmFja2dyb3VuZCIsIlRlYWNoZXJfQ291cnNlX0xheW91dCIsInN0b3JlIiwiY29sb3IiLCJjdXJzb3IiLCJwYXRobmFtZSIsInF1ZXJ5IiwidXNlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBMkI7Ozs7Ozs7OztJLEFBQ2I7Ozs7Ozs7Ozs7O2lDQUNULEFBQ0o7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsYUFBQSxrQkFDRyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSx1REFDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixtQ0FBa0MsTUFBeEQsQUFBNkQ7OEJBQTdEO2dDQURBLEFBQ0EsQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZBLEFBRUEsQUFDQSw0RUFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4Qjs4QkFBOUI7Z0NBSEEsQUFHQSxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsZ0ZBQStFLFdBQTNHLEFBQXFILDJFQUEwRSxhQUEvTCxBQUEyTTs4QkFBM007Z0NBSkEsQUFJQSxBQUNBO0FBREE7MERBQ1EsS0FBUixBQUFZLG9EQUFtRCxXQUEvRCxBQUF5RSwyRUFBMEUsYUFBbkosQUFBK0o7OEJBQS9KO2dDQUxBLEFBS0EsQUFDQztBQUREOzBEQUNTLEtBQVIsQUFBWSw2RUFBNEUsV0FBeEYsQUFBa0csMkVBQTBFLGFBQTVLLEFBQXdMOzhCQUF4TDtnQ0FORCxBQU1DLEFBQ0E7QUFEQTswREFDUSxLQUFSLEFBQVksOEVBQTZFLFdBQXpGLEFBQW1HLDJFQUEwRSxhQUE3SyxBQUF5TDs4QkFBekw7Z0NBUEQsQUFPQyxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXLDBFQUF5RSxLQUFwRixBQUF3Rjs4QkFBeEY7Z0NBUkQsQUFRQyxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXLGlEQUFnRCxLQUEzRCxBQUErRDs4QkFBL0Q7Z0NBVEQsQUFTQyxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQVhKLEFBQ0csQUFVQyxBQUVBO0FBRkE7aUNBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNRO0FBRFI7K0JBQ1EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQSxBQUNJO0FBREo7c0RBQ1MsV0FBTCxBQUFlLFFBQU8sS0FBdEIsQUFBMkI7OEJBQTNCO2dDQUhaLEFBQ0ksQUFDSSxBQUNJLEFBR1I7QUFIUTtrQ0FHUixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlLEFBQ1g7K0JBREosQUFDZ0IsWUFBVyxpQkFEM0IsQUFDeUM7OEJBRHpDO2dDQUFBLEFBRUk7QUFGSjtvREFFTyxXQUFILEFBQWEsb0JBQW1CLE9BQU8sRUFBQyxPQUFELEFBQU8sUUFBTyxRQUFyRCxBQUF1QyxBQUFxQjs4QkFBNUQ7Z0NBSFIsQUFDSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBLFFBQUksV0FBSixBQUFjLEFBQ1Y7bUNBREosQUFDb0I7OEJBRHBCO2dDQUFBLEFBRVE7QUFGUjsrQkFFUSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksWUFBWSxPQUFPLEVBQUUsTUFBN0MsQUFBWSxBQUErQixBQUFROzhCQUFuRDtnQ0FBQTtBQUFBO2VBRlIsQUFFUSxBQUNKLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsZ0NBQUssTUFBTSxFQUFFLFVBQUYsQUFBWSxnQkFBZ0IsT0FBTyxFQUFFLE1BQWpELEFBQVksQUFBbUMsQUFBUTs4QkFBdkQ7Z0NBQUE7QUFBQTtlQUpSLEFBR0ksQUFDSSxBQUVBLHlCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBO0FBQUE7ZUFoQzVCLEFBYUksQUFDUSxBQU1JLEFBS0ksQUFDQSxBQU1RLEFBTXBCLGtDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQXZDWixBQXNDUSxBQUNJLEFBRUo7QUFGSTtBQUFBOzs4QkFFSjtnQ0F6Q1IsQUF5Q1EsQUFDQTtBQURBO0FBQUE7OzhCQUNBO2dDQTFDUixBQTBDUSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDOzs4QkFBRDtnQ0EzQ1IsQUEyQ1EsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBN0NaLEFBQ0ksQUE0Q1EsQUFrRGY7Ozs7O0VBakc4QixnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJ0ZWFjaGVyX3N0b3JlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5qYW1hcG9ua2FybmFzdXRhL0Rlc2t0b3AvdHV0b3JpYWwtc3F1YXJlLXNzciJ9