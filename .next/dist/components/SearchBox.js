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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/components/SearchBox.js';


var SearchBox = function (_React$Component) {
    (0, _inherits3.default)(SearchBox, _React$Component);

    function SearchBox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SearchBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchBox.__proto__ || (0, _getPrototypeOf2.default)(SearchBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dataSource: []
        }, _this.handleSearch = function (value) {
            _this.setState({
                dataSource: !value ? [] : [value, value + value, value + value + value]
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SearchBox, [{
        key: 'render',
        value: function render() {
            function onSelect(value) {
                console.log('onSelect', value);
            }
            var dataSource = this.state.dataSource;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })), _react2.default.createElement(_antd.AutoComplete, {
                dataSource: dataSource,
                onSelect: onSelect,
                onSearch: this.handleSearch,
                placeholder: 'What do you want to learn ?',
                className: 'searchBox',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_antd.Input, { suffix: _react2.default.createElement(_antd.Icon, { type: 'search', className: 'certain-category-icon', style: { fontSize: 17 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, '\n                        @import url(https://fonts.googleapis.com/css?family=Kanit);\n                        \n                        .ant-select-dropdown {\n                            border-radius:3px;\n                        }\n                        .ant-select-search--inline .ant-select-search__field {\n                            background:white !important;\n                        }\n                        .ant-select-auto-complete.ant-select .ant-input {\n                            border-radius:3px;\n                        }\n                        .ant-select-search__field__placeholder, .ant-select-selection__placeholder{\n                            color:#777 !important;\n                            z-index:1000000000000;\n                        }\n                        .ant-select-search {\n                            position:relative !important;\n                            top:-4px;\n                        }\n                        .ant-input:focus {\n                            box-shadow: none !important;\n                        }\n                        .searchBox {\n                            width:500px !important;\n                            display:block;\n                            margin:330px auto;\n                            outline:none !important;\n                        }\n                        .searchBox input {\n                            outline:none !important;\n                            height:36px !important;\n                            padding:10px;\n                            color:#000 !important;\n                            font-family: sukhumvit set,kanit !important;\n                        }\n                        .global-search-wrapper {\n                          padding-right: 50px;\n                        }\n                        \n                        .global-search {\n                          width: 100%;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-select-selection--single {\n                          margin-right: -46px;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {\n                          padding-right: 62px;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {\n                          right: 0;\n                        }\n                        \n                        .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {\n                          border-top-left-radius: 0;\n                          border-bottom-left-radius: 0;\n                        }\n                        \n                        .global-search-item-count {\n                          position: absolute;\n                          right: 16px;\n                        }\n                    '));
        }
    }]);

    return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkhlYWQiLCJJY29uIiwiQnV0dG9uIiwiSW5wdXQiLCJBdXRvQ29tcGxldGUiLCJTZWFyY2hCb3giLCJzdGF0ZSIsImRhdGFTb3VyY2UiLCJoYW5kbGVTZWFyY2giLCJ2YWx1ZSIsInNldFN0YXRlIiwib25TZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiZm9udFNpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVEsQUFBTzs7Ozs7OztJQUNULEE7Ozs7Ozs7Ozs7Ozs7O3NOQUNqQixBO3dCQUFRLEEsQUFDUTtBQURSLEFBQ0osaUIsQUFHRixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO2tCQUFBLEFBQUs7NEJBQ1MsQ0FBQSxBQUFDLFFBQUQsQUFBUyxLQUFLLENBQUEsQUFDeEIsT0FDQSxRQUZ3QixBQUVoQixPQUNSLFFBQUEsQUFBUSxRQUpaLEFBQWMsQUFDYyxBQUdSLEFBR3JCO0FBUGUsQUFDWjtBOzs7OztpQ0FPRyxBQUNMO3FCQUFBLEFBQVMsU0FBVCxBQUFrQixPQUFPLEFBQ3JCO3dCQUFBLEFBQVEsSUFBUixBQUFZLFlBQVosQUFBd0IsQUFDM0I7QUFISTtnQkFBQSxBQUlHLGFBQWUsS0FKbEIsQUFJdUIsTUFKdkIsQUFJRyxBQUNSOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FESixBQUNJLEFBQ0E7QUFEQTt3REFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBSFIsQUFDSSxBQUVJLEFBRUE7QUFGQTtpQ0FFQSxBQUFDOzRCQUFELEFBQ2dCLEFBQ1o7MEJBRkosQUFFYyxBQUNWOzBCQUFVLEtBSGQsQUFHbUIsQUFDZjs2QkFKSixBQUlnQixBQUNaOzJCQUxKLEFBS2M7OzhCQUxkO2dDQUFBLEFBT0E7QUFQQTtBQUNJLCtCQU1KLEFBQUMsNkJBQU0sd0JBQVEsQUFBQyw0QkFBSyxNQUFOLEFBQVcsVUFBUyxXQUFwQixBQUE4Qix5QkFBd0IsT0FBTyxFQUFFLFVBQS9ELEFBQTZELEFBQVk7a0NBQXpFO29DQUFmLEFBQWU7QUFBQTtpQkFBQTs4QkFBZjtnQ0FaUixBQUtRLEFBT0EsQUFFSjtBQUZJO2lDQUVKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWZSLEFBQ0ksQUFjSSxBQXNFWDs7Ozs7RUF4R2tDLGdCQUFNLEE7O2tCQUF4QixBIiwiZmlsZSI6IlNlYXJjaEJveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuamFtYXBvbmthcm5hc3V0YS9EZXNrdG9wL3R1dG9yaWFsLXNxdWFyZS1zc3IifQ==