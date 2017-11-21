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

var _Top_highlights_course_teacher = require('../components/Top_highlights_course_teacher');

var _Top_highlights_course_teacher2 = _interopRequireDefault(_Top_highlights_course_teacher);

var _all_course_teacher = require('../components/all_course_teacher');

var _all_course_teacher2 = _interopRequireDefault(_all_course_teacher);

var _SAT_teacher = require('../components/SAT_teacher');

var _SAT_teacher2 = _interopRequireDefault(_SAT_teacher);

var _GATPAT_store_teacher = require('../components/GATPAT_store_teacher');

var _GATPAT_store_teacher2 = _interopRequireDefault(_GATPAT_store_teacher);

var _Thai_teacher = require('../components/Thai_teacher');

var _Thai_teacher2 = _interopRequireDefault(_Thai_teacher);

var _English_teacher = require('../components/English_teacher');

var _English_teacher2 = _interopRequireDefault(_English_teacher);

var _TabsCategory = require('../components/TabsCategory');

var _TabsCategory2 = _interopRequireDefault(_TabsCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/teacher_Course_Layout.js';


var Teacher_Course_Layout = function (_React$Component) {
    (0, _inherits3.default)(Teacher_Course_Layout, _React$Component);

    function Teacher_Course_Layout() {
        (0, _classCallCheck3.default)(this, Teacher_Course_Layout);

        return (0, _possibleConstructorReturn3.default)(this, (Teacher_Course_Layout.__proto__ || (0, _getPrototypeOf2.default)(Teacher_Course_Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Teacher_Course_Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_TabsCategory2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('div', { className: 'tab-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane active', id: 'home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_Top_highlights_course_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('div', { className: 'clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_all_course_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }))), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'gatpat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_GATPAT_store_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'sat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_SAT_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_Thai_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })), _react2.default.createElement('div', { role: 'tabpanel', className: 'tab-pane', id: 'english', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_English_teacher2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }))));
        }
    }]);

    return Teacher_Course_Layout;
}(_react2.default.Component);

exports.default = Teacher_Course_Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVhY2hlcl9Db3Vyc2VfTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiVG9wX2hpZ2hsaWdodHNfY291cnNlX3RlYWNoZXIiLCJBbGxfY291cnNlX3RlYWNoZXIiLCJTQVRfdGVhY2hlciIsIkdBVFBBVF9zdG9yZV90ZWFjaGVyIiwiVGhhaV90ZWFjaGVyIiwiRW5nbGlzaF90ZWFjaGVyIiwiVGFic0NhdGVnb3J5IiwiVGVhY2hlcl9Db3Vyc2VfTGF5b3V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFtQzs7OztBQUMxQyxBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUEwQjs7OztBQUNqQyxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUFrQjs7Ozs7Ozs7O0ksQUFDSjs7Ozs7Ozs7Ozs7aUNBQ1QsQUFDSjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLG1CQUFrQixJQUFqRCxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUE7OzhCQUNBO2dDQUZKLEFBRUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBTFIsQUFDSSxBQUdJLEFBQ0EsQUFHSjtBQUhJO0FBQUEsa0NBR0osY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLFlBQVcsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FUUixBQVFJLEFBQ0ksQUFFSjtBQUZJO0FBQUEsaUNBRUosY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLFlBQVcsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FaUixBQVdJLEFBQ0ksQUFFSjtBQUZJO0FBQUEsaUNBRUosY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLFlBQVcsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FmUixBQWNJLEFBQ0ksQUFFSjtBQUZJO0FBQUEsaUNBRUosY0FBQSxTQUFLLE1BQUwsQUFBVSxZQUFXLFdBQXJCLEFBQStCLFlBQVcsSUFBMUMsQUFBNkM7OEJBQTdDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FyQmhCLEFBQ0ksQUFFSSxBQWlCSSxBQUNJLEFBS25CO0FBTG1CO0FBQUE7Ozs7O0VBdkIyQixnQkFBTSxBOztrQkFBcEMsQSIsImZpbGUiOiJ0ZWFjaGVyX0NvdXJzZV9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=