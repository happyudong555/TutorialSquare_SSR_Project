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

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/all_course_teacher.js';


var All_course_teacher = function (_React$Component) {
    (0, _inherits3.default)(All_course_teacher, _React$Component);

    function All_course_teacher() {
        (0, _classCallCheck3.default)(this, All_course_teacher);

        return (0, _possibleConstructorReturn3.default)(this, (All_course_teacher.__proto__ || (0, _getPrototypeOf2.default)(All_course_teacher)).apply(this, arguments));
    }

    (0, _createClass3.default)(All_course_teacher, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('h3', { className: 'HeadingTitle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'course in store'), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _course2.default.map(function (course, i) {
                return _react2.default.createElement('div', { key: i, className: 'col-sm-6 col-md-3 card courseBox', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, _react2.default.createElement('div', { className: 'courseThumbnail', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }, _react2.default.createElement('a', { href: '/teacher_content?id=' + course.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, _react2.default.createElement('img', { className: 'img-responsive',
                    src: 'static/public/images/' + course.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })), _react2.default.createElement('a', { href: '/teacher_content?id=' + course.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement('h6', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, course.name)), _react2.default.createElement('p', { className: 'category', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, course.category), _react2.default.createElement('p', { className: 'price', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, '\u0E3F ', course.price), _react2.default.createElement('img', { className: 'profilTeacherImage',
                    src: 'static/public/images/' + course.imgUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }), _react2.default.createElement('span', { className: 'teacherName', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }, course.displayName)));
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

    return All_course_teacher;
}(_react2.default.Component);

exports.default = All_course_teacher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxsX2NvdXJzZV90ZWFjaGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiY291cnNlIiwiQWxsX2NvdXJzZV90ZWFjaGVyIiwibWFwIiwiaSIsImlkIiwiaW1hZ2UiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwcmljZSIsImltZ1VybCIsImRpc3BsYXlOYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFDRSxBOzs7Ozs7Ozs7OztpQ0FJUixBQUNMO21DQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDUTtBQURSO2FBQUEsa0JBQ1EsY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBRFIsQUFDUSxBQUNBLG9DQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFFUTtBQUZSO2dDQUVRLEFBQU8sSUFBSyxVQUFBLEFBQUMsUUFBRCxBQUFRLEdBQVI7dUNBQ1osY0FBQSxTQUFLLEtBQUwsQUFBVSxHQUFHLFdBQWIsQUFBdUI7a0NBQXZCO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLE9BQUcsK0JBQTZCLE9BQWhDLEFBQXVDO2tDQUF2QztvQ0FBQSxBQUNBO0FBREE7MERBQ0ssV0FBTCxBQUFlLEFBQ2Y7bURBQTZCLE9BRDdCLEFBQ29DO2tDQURwQztvQ0FGSixBQUNJLEFBQ0EsQUFFQTtBQUZBO3FDQUVBLGNBQUEsT0FBRywrQkFBNkIsT0FBaEMsQUFBdUM7a0NBQXZDO29DQUFBLEFBQ0E7QUFEQTttQ0FDQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSwwQkFMSixBQUlJLEFBQ0EsQUFBWSxBQUNaLHdCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUEsQUFBeUI7QUFBekI7MEJBTkosQUFNSSxBQUFnQyxBQUNoQywyQkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO2tDQUFiO29DQUFBO0FBQUE7bUJBQStCLGtCQVBuQyxBQU9JLEFBQXNDLEFBQ3RDLCtDQUFLLFdBQUwsQUFBZSxBQUNmO21EQUE2QixPQUQ3QixBQUNvQztrQ0FEcEM7b0NBUkosQUFRSSxBQUVBO0FBRkE7b0NBRUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQStCO0FBQS9COzBCQVpJLEFBQ1osQUFDSSxBQVVJLEFBQXNDO0FBaEI5RCxBQUVRLEFBRVEsQUFrQlosaUNBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBdkJKLEFBQ0EsQUFzQkksQUFzRlA7Ozs7MENBakh5QixBQUN0QjttQkFBTyxFQUFQLEFBQU8sQUFBRSxBQUFRLEFBQ3BCOzs7OztFQUgyQyxnQkFBTSxBOztrQkFBakMsQSIsImZpbGUiOiJhbGxfY291cnNlX3RlYWNoZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhbmphbWFwb25rYXJuYXN1dGEvRGVza3RvcC90dXRvcmlhbC1zcXVhcmUtc3NyIn0=