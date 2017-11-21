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

var _carts = require('../static/database/carts');

var _carts2 = _interopRequireDefault(_carts);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/myCourse.js';


var MyCourse = function (_React$Component) {
    (0, _inherits3.default)(MyCourse, _React$Component);

    function MyCourse() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MyCourse);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyCourse.__proto__ || (0, _getPrototypeOf2.default)(MyCourse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dataSource: []
        }, _this.handleSearch = function (value) {
            _this.setState({
                dataSource: !value ? [] : [value, value + value, value + value + value]
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyCourse, [{
        key: 'render',
        value: function render() {
            function onSelect(value) {
                console.log('onSelect', value);
            }
            var dataSource = this.state.dataSource;

            return _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('h3', { className: 'HeadingTitle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'My Course'), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, '\n                        @import url(https://fonts.googleapis.com/css?family=Kanit);\n                        \n                        .ant-select-dropdown {\n                            border-radius:3px;\n                        }\n                        .ant-select-search--inline .ant-select-search__field {\n                            background:white !important;\n                        }\n                        .ant-select-auto-complete.ant-select .ant-input {\n                            border-radius:3px;\n                        }\n                        .ant-select-search__field__placeholder, .ant-select-selection__placeholder{\n                            color:#777 !important;\n                            z-index:1000000000000;\n                        }\n                        .ant-select-search {\n                            position:relative !important;\n                            top:-4px;\n                        }\n                        .ant-input:focus {\n                            box-shadow: none !important;\n                        }\n                        .searchBox {\n                            width: 500px !important;\n                            display: block;\n                            margin-top: 30px;\n                            margin-bottom: 20px;\n                            outline: none !important;\n                        }\n                        .searchBox input {\n                            outline:none !important;\n                            height:36px !important;\n                            padding:10px;\n                            color:#000 !important;\n                            font-family: sukhumvit set,kanit !important;\n                        }\n                        .global-search-wrapper {\n                          padding-right: 50px;\n                        }\n                        \n                        .global-search {\n                          width: 100%;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-select-selection--single {\n                          margin-right: -46px;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {\n                          padding-right: 62px;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {\n                          right: 0;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {\n                          border-top-left-radius: 0;\n                          border-bottom-left-radius: 0;\n                        }\n                        \n                        .global-search-item-count {\n                          position: absolute;\n                          right: 16px;\n                        }\n                    '), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement(_antd.AutoComplete, {
                dataSource: dataSource,
                onSelect: onSelect,
                onSearch: this.handleSearch,
                placeholder: 'Find My Course',
                className: 'searchBox', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement(_antd.Input, { suffix: _react2.default.createElement(_antd.Icon, { type: 'search', className: 'certain-category-icon', style: { fontSize: 17 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }))), _carts2.default.map(function (carts, i) {
                return _react2.default.createElement('div', { key: i, className: 'col-sm-6 col-md-4 card courseBox',
                    style: { height: '268px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                }, _react2.default.createElement('div', { className: 'courseThumbnail', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                    }
                }, _react2.default.createElement('a', { href: '/student_video_purchased?id=' + carts.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                    }
                }, _react2.default.createElement('img', { className: 'img-responsive',
                    src: 'static/public/images/' + carts.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                })), _react2.default.createElement('a', { href: '/student_video_purchased?id=' + carts.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                    }
                }, _react2.default.createElement('h6', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                    }
                }, carts.name)), _react2.default.createElement('p', { className: 'category', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                    }
                }, carts.category)));
            })), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, '\n                        h1 , h2 , h3 ,h4 ,h5 , h6 , p {\n                            font-family:sukhumvit set,kanit;\n                            text-rendering: optimizeSpeed;\n                        }\n                        .HeadingTitle {\n                            font-family:sukhumvit set,kanit;\n                            text-transform:capitalize !important;\n                            font-size:20px;\n                            font-weight: bold;\n                            margin-left:5px;\n                        }\n                        .courseBox {\n                            max-width:245px;\n                            margin-bottom:30px;\n                            background-color: #fff;\n                            height:360px;\n                            float:left;\n                            padding:0;\n                            margin:20px;\n                            margin-bottom:30px;\n                        }\n                        .courseThumbnail{\n                            width:100%;\n                            height:auto;\n                            overflow:hidden;\n                        }\n\n                        img {\n                            width:100%;\n                            height:100%;\n                        }\n\n                        .courseThumbnail img {\n                            width:100%;\n                            height:160px;\n                            overflow:hidden;\n                            object-fit:cover;\n                            object-position:center top;\n                            cursor: pointer;\n                        }\n\n                        .courseThumbnail h6 {\n                            padding:23px;\n                            padding-bottom:0;\n                            text-transform: capitalize;\n                            color:#343a40;\n                            font-weight: bold;\n                            line-height: 26px;\n                            white-space: nowrap;\n                            text-overflow: ellipsis;\n                            text-align: left;\n                            overflow:hidden;\n                            font-family:sukhumvit set,kanit;\n                            cursor: pointer;\n                        }\n                        .category, .price{\n                            padding-top:10px;\n                            padding-left:23px;\n                            text-transform: uppercase;\n                            font-size:13px;\n                            font-family:sukhumvit set,kanit;\n                        }\n                        .price {\n                            padding-top: 0;\n                            font-size: 16px;\n                            font-weight: lighter;\n                        }\n\n                        .profilTeacherImage{\n                            width: 32px !important;\n                            height: 32px !important;\n                            float: left;\n                            margin-left: 20px;\n                        }\n\n                    '));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return { carts: _carts2.default };
        }
    }]);

    return MyCourse;
}(_react2.default.Component);

exports.default = MyCourse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL215Q291cnNlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUmVhY3QiLCJmZXRjaCIsInJvdXRlIiwiY2FydHMiLCJJY29uIiwiQnV0dG9uIiwiSW5wdXQiLCJBdXRvQ29tcGxldGUiLCJNeUNvdXJzZSIsInN0YXRlIiwiZGF0YVNvdXJjZSIsImhhbmRsZVNlYXJjaCIsInZhbHVlIiwic2V0U3RhdGUiLCJvblNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb250U2l6ZSIsIm1hcCIsImkiLCJoZWlnaHQiLCJpZCIsImltYWdlIiwibmFtZSIsImNhdGVnb3J5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBTSxBQUFRLEFBQU87Ozs7Ozs7SUFDVCxBOzs7Ozs7Ozs7Ozs7OztvTixBQUlqQjt3QkFBUSxBQUNRLEE7QUFEUixBQUNKLGlCLEFBR0YsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtrQkFBQSxBQUFLOzRCQUNTLENBQUEsQUFBQyxRQUFELEFBQVMsS0FBSyxDQUFBLEFBQ3hCLE9BQ0EsUUFGd0IsQUFFaEIsT0FDUixRQUFBLEFBQVEsUUFKWixBQUFjLEFBQ2MsQUFHUixBQUdyQjtBQVBlLEFBQ1o7QTs7Ozs7aUNBT0csQUFDTDtxQkFBQSxBQUFTLFNBQVQsQUFBa0IsT0FBTyxBQUNyQjt3QkFBQSxBQUFRLElBQVIsQUFBWSxZQUFaLEFBQXdCLEFBQzNCO0FBSEk7Z0JBQUEsQUFJRyxhQUFlLEtBSmxCLEFBSXVCLE1BSnZCLEFBSUcsQUFDUjs7bUNBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNRO0FBRFI7YUFBQSxrQkFDUSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFEUixBQUNRLEFBQ0EsOEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQXFFQSxva0dBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsdURBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7aUNBRUosQUFBQzs0QkFBRCxBQUNnQixBQUNaOzBCQUZKLEFBRWMsQUFDVjswQkFBVSxLQUhkLEFBR21CLEFBQ2Y7NkJBSkosQUFJZ0IsQUFDWjsyQkFMSixBQUtjOzhCQUxkO2dDQUFBLEFBTUk7QUFOSjtBQUNJLCtCQUtBLEFBQUMsNkJBQU0sd0JBQVEsQUFBQyw0QkFBSyxNQUFOLEFBQVcsVUFBUyxXQUFwQixBQUE4Qix5QkFBd0IsT0FBTyxFQUFFLFVBQS9ELEFBQTZELEFBQVk7a0NBQXpFO29DQUFmLEFBQWU7QUFBQTtpQkFBQTs4QkFBZjtnQ0FoRlIsQUFzRUEsQUFJSSxBQU1JLEFBSUE7QUFKQTtrQ0FJQSxBQUFNLElBQUssVUFBQSxBQUFDLE9BQUQsQUFBTyxHQUFQO3VDQUNYLGNBQUEsU0FBSyxLQUFMLEFBQVUsR0FBRyxXQUFiLEFBQXVCLEFBQ3ZCOzJCQUFPLEVBQUMsUUFEUixBQUNPLEFBQVM7a0NBRGhCO29DQUFBLEFBRUk7QUFGSjtpQkFBQSxrQkFFSSxjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLE9BQUcsdUNBQXFDLE1BQXhDLEFBQThDO2tDQUE5QztvQ0FBQSxBQUNBO0FBREE7MERBQ0ssV0FBTCxBQUFlLEFBQ2Y7bURBQTZCLE1BRDdCLEFBQ21DO2tDQURuQztvQ0FGSixBQUNJLEFBQ0EsQUFFQTtBQUZBO3FDQUVBLGNBQUEsT0FBRyx1Q0FBcUMsTUFBeEMsQUFBOEM7a0NBQTlDO29DQUFBLEFBQ0E7QUFEQTttQ0FDQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSx5QkFMSixBQUlJLEFBQ0EsQUFBVyxBQUNYLHdCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUEsQUFBeUI7QUFBekI7eUJBVEcsQUFDWCxBQUVJLEFBTUksQUFBK0I7QUEvRnZELEFBRVEsQUFvRlEsQUFlWixpQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUF0R0osQUFDQSxBQXFHSSxBQWdGUDs7OzswQ0EzTXlCLEFBQ3RCO21CQUFPLEVBQVAsQUFBTyxBQUFFLEFBQU8sQUFDbkI7Ozs7O0VBSGlDLGdCQUFNLEE7O2tCQUF2QixBIiwiZmlsZSI6Im15Q291cnNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5qYW1hcG9ua2FybmFzdXRhL0Rlc2t0b3AvdHV0b3JpYWwtc3F1YXJlLXNzciJ9