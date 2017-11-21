'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/TabsCategory.js';


var TabsCategory = function (_React$Component) {
    (0, _inherits3.default)(TabsCategory, _React$Component);

    function TabsCategory() {
        (0, _classCallCheck3.default)(this, TabsCategory);

        return (0, _possibleConstructorReturn3.default)(this, (TabsCategory.__proto__ || (0, _getPrototypeOf2.default)(TabsCategory)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsCategory, [{
        key: 'render',
        value: function render() {
            var _React$createElement, _React$createElement2, _React$createElement3;

            return _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('div', { className: 'TabsCategory', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('nav', { className: 'navbar navbar-expand-lg navbar-light', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'navbarNav', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('ul', { className: 'navbar-nav nav nav-tabs', role: 'tablist', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('li', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('a', { className: 'nav-link active', role: 'tab',
                'data-toggle': 'tab', href: '#home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'home')), _react2.default.createElement('li', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('a', { className: 'nav-link', role: 'tab',
                'data-toggle': 'tab', href: '#gatpat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'gat pat')), _react2.default.createElement('li', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('a', (_React$createElement = { className: 'nav-link', role: 'tab',
                'data-toggle': 'tab', href: '#gatpat' }, (0, _defineProperty3.default)(_React$createElement, 'href', '#sat'), (0, _defineProperty3.default)(_React$createElement, '__source', {
                fileName: _jsxFileName,
                lineNumber: 24
            }), _React$createElement), 'sat')), _react2.default.createElement('li', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('a', (_React$createElement2 = { className: 'nav-link', role: 'tab',
                'data-toggle': 'tab', href: '#gatpat' }, (0, _defineProperty3.default)(_React$createElement2, 'href', '#thai'), (0, _defineProperty3.default)(_React$createElement2, '__source', {
                fileName: _jsxFileName,
                lineNumber: 28
            }), _React$createElement2), 'thai')), _react2.default.createElement('li', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('a', (_React$createElement3 = { className: 'nav-link', role: 'tab',
                'data-toggle': 'tab', href: '#gatpat' }, (0, _defineProperty3.default)(_React$createElement3, 'href', '#english'), (0, _defineProperty3.default)(_React$createElement3, '__source', {
                fileName: _jsxFileName,
                lineNumber: 32
            }), _React$createElement3), 'english'))))))), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, '\n                            .TabsCategory {\n                                width:100%;\n                                background-color: transparent;\n                                margin-bottom:30px;\n                            }\n                            .TabsCategory li a {\n                                text-transform: uppercase;\n                                font-family: sukhumvit set,kanit;\n                            }\n                            .nav-tabs {\n                                border:0;\n                            }\n                            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active ,\n                             .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n                                border:0;\n                            }\n                            .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav \n                            .nav-link.active, .navbar-light \n                            .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {\n                                border-bottom: 2.6px solid #41b883;\n                                border-radius: 0;\n                            }\n                            \n                        '));
        }
    }]);

    return TabsCategory;
}(_react2.default.Component);

exports.default = TabsCategory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGFic0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiVGFic0NhdGVnb3J5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0ksQUFDYzs7Ozs7Ozs7Ozs7aUNBQ1I7NkRBQ0w7O21DQUNZLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDQTtBQURBO2FBQUEsa0JBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSw0QkFBMkIsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjLDJCQUEwQixNQUF4QyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsbUJBQWtCLE1BQS9CLEFBQW9DLEFBQ3BDOytCQURBLEFBQ1ksT0FBTSxNQURsQixBQUN1Qjs4QkFEdkI7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUdKLDBCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsWUFBVyxNQUF4QixBQUE2QixBQUM3QjsrQkFEQSxBQUNZLE9BQU0sTUFEbEIsQUFDdUI7OEJBRHZCO2dDQUFBO0FBQUE7ZUFOUixBQUtJLEFBQ0ksQUFHSiw2QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLCtCQUFHLFdBQUgsQUFBYSxZQUFXLE1BQXhCLEFBQTZCLEFBQzdCOytCQURBLEFBQ1ksT0FBTSxNQURsQixBQUN1Qix5RUFEdkIsQUFDc0M7MEJBRHRDOzRCQUFBO0FBQUEsZ0JBQUEsdUJBVlIsQUFTSSxBQUNJLEFBR0oseUJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxnQ0FBRyxXQUFILEFBQWEsWUFBVyxNQUF4QixBQUE2QixBQUM3QjsrQkFEQSxBQUNZLE9BQU0sTUFEbEIsQUFDdUIsMEVBRHZCLEFBQ3NDOzBCQUR0Qzs0QkFBQTtBQUFBLGdCQUFBLHdCQWRSLEFBYUksQUFDSSxBQUdKLDBCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsZ0NBQUcsV0FBSCxBQUFhLFlBQVcsTUFBeEIsQUFBNkIsQUFDN0I7K0JBREEsQUFDWSxPQUFNLE1BRGxCLEFBQ3VCLDBFQUR2QixBQUNzQzswQkFEdEM7NEJBQUE7QUFBQSxnQkFBQSx3QkF2QnhCLEFBQ0EsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQWlCSSxBQUNJLEFBUXhCLGtDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWhDWixBQUNZLEFBK0JBLEFBOEJmOzs7OztFQWhFcUMsZ0JBQU0sQTs7a0JBQTNCLEEiLCJmaWxlIjoiVGFic0NhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5qYW1hcG9ua2FybmFzdXRhL0Rlc2t0b3AvdHV0b3JpYWwtc3F1YXJlLXNzciJ9