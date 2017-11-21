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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _faq = require('../static/database/faq');

var _faq2 = _interopRequireDefault(_faq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/faq_teacher.js?entry';


var Faq_teacher = function (_React$Component) {
    (0, _inherits3.default)(Faq_teacher, _React$Component);

    function Faq_teacher() {
        (0, _classCallCheck3.default)(this, Faq_teacher);

        return (0, _possibleConstructorReturn3.default)(this, (Faq_teacher.__proto__ || (0, _getPrototypeOf2.default)(Faq_teacher)).apply(this, arguments));
    }

    (0, _createClass3.default)(Faq_teacher, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('link', { rel: 'icon', href: '/static/public/icon/favicon.png', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Tutorial Square | FAQ'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            })), _react2.default.createElement('nav', { className: 'navbar navbar-default storeNavbar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/teacher', query: { user: 'id' } }, className: 'navbar-brand', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('img', { className: 'logo', src: '/static/public/logo/t-square.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }))), _react2.default.createElement('div', { className: 'navbar-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'profileImage',
                'data-toggle': 'dropdown', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('i', { className: 'fa fa-bars fa-lg', style: { color: '#fff', cursor: 'pointer' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement('div', { className: 'dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('ul', { className: 'dropdown-menu tutorial-dropdown',
                'aria-labelledby': 'dLabel', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/teacher', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'dashboard'), _react2.default.createElement('div', { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/faq_teacher', query: { user: 'id' } }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'faq')), _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'sign out')))))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement('div', { className: 'container', style: { marginBottom: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h4', { className: 'tex-left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('strong', { style: { color: '#fff', textTransform: 'capitalize' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'What we can help you ?')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _faq2.default.map(function (faq, i) {
                return _react2.default.createElement('div', { className: 'question_Box', key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('p', { className: 'questionTitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, faq.question)), _react2.default.createElement('span', { className: 'answer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, 'answer :'), ' " ', faq.answer, ' "'));
            }))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, '\n                        @import url(https://fonts.googleapis.com/css?family=Kanit);\n                        \n                        body {\n                            background-color: #0a3452;\n                        }\n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .storeNavbar{\n                            width:100%;\n                            height: 65px;\n                            background-color:#062741;\n                        }\n                        .profileImage img {\n                            width: 40px;\n                            height: 40px;\n                            border-radius: 100px;\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .tutorial-dropdown{\n                            width:160px;\n                            right: 10px;\n                            left: inherit;\n                            text-align: center !important;\n                            font-size: 12px;\n                            text-transform: uppercase;\n                            border:0 !important;\n                        }\n                        .tutorial-dropdown a{\n                            color:#666;\n                            line-height:30px;\n                        }\n                        a:hover {\n                            color:#666;\n                            text-decoration: none;\n                        }\n                        .questionTitle {\n                            text-transform: capitalize;\n                            font-size:17px;\n                            line-height:32px;\n                        }\n\n                        .question_Box {\n                            width:46.4%;\n                            padding:20px;\n                            height:230px;\n                            background-color:#fff;\n                            float:left;\n                            margin:20px;\n                            border-radius: 5px;\n                        }\n                        .answer {\n                            font-size:13px;\n                        }\n                        .questionTitle ,.answer{\n                            text-rendering: optimizeSpeed;\n                            text-transform: capitalize;\n                            font-family:sukhumvit set,kanit;\n                        }\n                    '));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return {
                faq: _faq2.default
            };
        }
    }]);

    return Faq_teacher;
}(_react2.default.Component);

exports.default = Faq_teacher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZhcV90ZWFjaGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsIlJvdXRlciIsImZhcSIsIkZhcV90ZWFjaGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXIiLCJjb2xvciIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsInRleHRUcmFuc2Zvcm0iLCJtYXAiLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBQ0s7Ozs7Ozs7Ozs7O2lDQU1ULEFBQ0o7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNEO0FBREM7QUFBQSx1REFDSyxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixtQ0FBa0MsTUFBeEQsQUFBNkQ7OEJBQTdEO2dDQURDLEFBQ0QsQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZDLEFBRUQsQUFDQSxrRUFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4Qjs4QkFBOUI7Z0NBSEMsQUFHRCxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsZ0ZBQStFLFdBQTNHLEFBQXFILDJFQUEwRSxhQUEvTCxBQUEyTTs4QkFBM007Z0NBSkMsQUFJRCxBQUNBO0FBREE7MERBQ1EsS0FBUixBQUFZLG9EQUFtRCxXQUEvRCxBQUF5RSwyRUFBMEUsYUFBbkosQUFBK0o7OEJBQS9KO2dDQUxDLEFBS0QsQUFDQztBQUREOzBEQUNTLEtBQVIsQUFBWSw2RUFBNEUsV0FBeEYsQUFBa0csMkVBQTBFLGFBQTVLLEFBQXdMOzhCQUF4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QSxBQUNJO0FBREo7aUJBQUEsa0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTtrQ0FBYjtvQ0FBQSxBQUE2QjtBQUE3QjttQ0FBNkIsY0FBQTs7a0NBQUE7b0NBQUEsQUFBUztBQUFUO0FBQUEsdUJBRGpDLEFBQ0ksQUFBNkIsQUFBYSxBQUMxQyw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtrQ0FBaEI7b0NBQUEsQUFBeUI7QUFBekI7bUNBQXlCLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBekIsQUFBeUIsYUFBNkIsV0FBdEQsQUFBMEQsUUFIMUQsQUFDSixBQUVJO0FBbER4QixBQXdDSSxBQUtJLEFBRVEsQUFVWixrQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUExRFIsQUFDSSxBQXlESSxBQTRFWDs7OzswQ0E1SXdCLEFBQ3JCOztBQUFBLEFBQU8sQUFDQyxBQUVYO0FBSFUsQUFDSDs7Ozs7RUFINkIsZ0JBQU0sQTs7a0JBQTFCLEEiLCJmaWxlIjoiZmFxX3RlYWNoZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=