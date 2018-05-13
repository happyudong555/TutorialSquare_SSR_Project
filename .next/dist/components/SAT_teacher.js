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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/SAT_teacher.js';


var SAT_teacher = function (_React$Component) {
    (0, _inherits3.default)(SAT_teacher, _React$Component);

    function SAT_teacher() {
        (0, _classCallCheck3.default)(this, SAT_teacher);

        return (0, _possibleConstructorReturn3.default)(this, (SAT_teacher.__proto__ || (0, _getPrototypeOf2.default)(SAT_teacher)).apply(this, arguments));
    }

    (0, _createClass3.default)(SAT_teacher, [{
        key: 'render',
        value: function render() {
            var courseItem = _course2.default.filter(function (course) {
                return course.category === "sat";
            });
            return _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, courseItem.map(function (courseItem, i) {
                return _react2.default.createElement('div', { key: i, className: 'col-sm-6 col-md-3 card courseBox', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, _react2.default.createElement('div', { className: 'courseThumbnail', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }, _react2.default.createElement('a', { href: '/teacher_content?id=' + courseItem.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, _react2.default.createElement('img', { className: 'img-responsive',
                    src: 'static/public/images/' + courseItem.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })), _react2.default.createElement('a', { href: '/teacher_content?id=' + courseItem.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement('h6', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, courseItem.name)), _react2.default.createElement('p', { className: 'category', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, courseItem.category), _react2.default.createElement('p', { className: 'price', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, '\u0E3F ', courseItem.price), _react2.default.createElement('img', { className: 'profilTeacherImage',
                    src: 'static/public/images/' + courseItem.imgUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }), _react2.default.createElement('span', { className: 'teacherName', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }, courseItem.displayName)));
            })), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, '\n                        h1 , h2 , h3 ,h4 ,h5 , h6 , p {\n                            font-family:sukhumvit set,kanit;\n                            text-rendering: optimizeSpeed;\n                        }\n                        .HeadingTitle {\n                            font-family:sukhumvit set,kanit;\n                            text-transform:uppercase;\n                            font-size:20px;\n                            font-weight: bold;\n                            margin-left:5px;\n                        }\n                        .courseBox {\n                            max-width:245px;\n                            margin-bottom:30px;\n                            background-color: #fff;\n                            height:372px;\n                            float:left;\n                            padding:0;\n                            margin:20px;\n                            margin-bottom:30px;\n                        }\n                        .courseThumbnail{\n                            width:100%;\n                            height:auto;\n                            overflow:hidden;\n                        }\n\n                        img {\n                            width:100%;\n                            height:100%;\n                        }\n\n                        .courseThumbnail img {\n                            width:100%;\n                            height:160px;\n                            overflow:hidden;\n                            object-fit:cover;\n                            object-position:center top;\n                            cursor: pointer;\n                        }\n\n                        .courseThumbnail h6 {\n                            padding:23px;\n                            padding-bottom:0;\n                            text-transform: capitalize;\n                            color:#343a40;\n                            font-weight: bold;\n                            line-height: 26px;\n                            white-space: nowrap;\n                            text-overflow: ellipsis;\n                            text-align: left;\n                            overflow:hidden;\n                            font-family:sukhumvit set,kanit;\n                            cursor: pointer;\n                        }\n                        .category, .price{\n                            padding-top:10px;\n                            padding-left:23px;\n                            text-transform: uppercase;\n                            font-size:13px;\n                            font-family:sukhumvit set,kanit;\n                        }\n                        .price {\n                            padding-top: 0;\n                            font-size: 16px;\n                            font-weight: lighter;\n                        }\n\n                        .profilTeacherImage{\n                            width: 32px !important;\n                            height: 32px !important;\n                            float: left;\n                            margin-left: 20px;\n                        }\n                        .teacherName {\n                            text-transform: capitalize;\n                            font-size: 12px;\n                            padding-left: 16px;\n                            font-family: sukhumvit set,kanit;\n                        }\n\n                    '));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return { course: _course2.default };
        }
    }]);

    return SAT_teacher;
}(_react2.default.Component);

exports.default = SAT_teacher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU0FUX3RlYWNoZXIuanMiXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSZWFjdCIsImZldGNoIiwicm91dGUiLCJjb3Vyc2UiLCJTQVRfdGVhY2hlciIsImNvdXJzZUl0ZW0iLCJmaWx0ZXIiLCJjYXRlZ29yeSIsIm1hcCIsImkiLCJpZCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiaW1nVXJsIiwiZGlzcGxheU5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztJQUNFLEE7Ozs7Ozs7Ozs7O2lDQUlSLEFBQ0w7Z0JBQUksOEJBQWEsQUFBTyxPQUFPLGtCQUFBO3VCQUFVLE9BQUEsQUFBTyxhQUFqQixBQUE4QjtBQUE3RCxBQUFpQixBQUNqQixhQURpQjttQ0FFakIsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNRO0FBRFI7YUFBQSxrQkFDUSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBRVE7QUFGUjswQkFFUSxBQUFXLElBQUssVUFBQSxBQUFDLFlBQUQsQUFBWSxHQUFaO3VDQUNoQixjQUFBLFNBQUssS0FBTCxBQUFVLEdBQUcsV0FBYixBQUF1QjtrQ0FBdkI7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsT0FBRywrQkFBNkIsV0FBaEMsQUFBMkM7a0NBQTNDO29DQUFBLEFBQ0E7QUFEQTswREFDSyxXQUFMLEFBQWUsQUFDZjttREFBNkIsV0FEN0IsQUFDd0M7a0NBRHhDO29DQUZKLEFBQ0ksQUFDQSxBQUVBO0FBRkE7cUNBRUEsY0FBQSxPQUFHLCtCQUE2QixXQUFoQyxBQUEyQztrQ0FBM0M7b0NBQUEsQUFDQTtBQURBO21DQUNBLGNBQUE7O2tDQUFBO29DQUFBLEFBQUs7QUFBTDtBQUFBLDhCQUxKLEFBSUksQUFDQSxBQUFnQixBQUNoQix3QkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO2tDQUFiO29DQUFBLEFBQXlCO0FBQXpCOzhCQU5KLEFBTUksQUFBb0MsQUFDcEMsMkJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQ0FBYjtvQ0FBQTtBQUFBO21CQUErQixzQkFQbkMsQUFPSSxBQUEwQyxBQUMxQywrQ0FBSyxXQUFMLEFBQWUsQUFDZjttREFBNkIsV0FEN0IsQUFDd0M7a0NBRHhDO29DQVJKLEFBUUksQUFFQTtBQUZBO29DQUVBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2tDQUFoQjtvQ0FBQSxBQUErQjtBQUEvQjs4QkFaUSxBQUNoQixBQUNJLEFBVUksQUFBMEM7QUFmbEUsQUFDUSxBQUVRLEFBa0JaLGlDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQXRCSixBQUNBLEFBcUJJLEFBc0ZQOzs7OzBDQWpIeUIsQUFDdEI7bUJBQU8sRUFBUCxBQUFPLEFBQUUsQUFBUSxBQUNwQjs7Ozs7RUFIb0MsZ0JBQU0sQTs7a0JBQTFCLEEiLCJmaWxlIjoiU0FUX3RlYWNoZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=