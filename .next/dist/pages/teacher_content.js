'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _course = require('../static/database/course');

var _course2 = _interopRequireDefault(_course);

var _lodash = require('lodash');

var data = _interopRequireWildcard(_lodash);

var _antd = require('antd');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/tutorial-square-ssr/pages/teacher_content.js?entry';

exports.default = function (_ref) {
    var id = _ref.url.query.id;

    var courseDetail = data.find(_course2.default, { id: id });
    var TextArea = _antd.Input.TextArea;

    var courseRelated = _course2.default.slice(0, 3);
    var paymentGateway = function paymentGateway() {
        location.href = '/teacherAccount_payment';
    };
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('link', { rel: 'icon', href: '/static/public/icon/favicon.png', type: 'image/png', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Tutorial Square | Course Online'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.8/antd.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    })), _react2.default.createElement('nav', { className: 'navbar navbar-default storeNavbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement(_link2.default, { href: { pathname: '/teacher', query: { user: 'id' } }, className: 'navbar-brand', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('img', { className: 'logo', src: '/static/public/logo/t-square.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }))), _react2.default.createElement('div', { className: 'navbar-right', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('div', { className: 'profileImage',
        'data-toggle': 'dropdown', 'aria-expanded': 'false', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('i', { className: 'fa fa-bars fa-lg', style: { color: '#fff', cursor: 'pointer' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    })), _react2.default.createElement('div', { className: 'dropdown', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('ul', { className: 'dropdown-menu tutorial-dropdown',
        'aria-labelledby': 'dLabel', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(_link2.default, { href: { pathname: '/teacher', query: { user: 'id' } }, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, 'dashboard'), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(_link2.default, { href: { pathname: '/faq_teacher', query: { user: 'id' } }, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'faq')), _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, 'sign out')))))), _react2.default.createElement('div', { className: 'container-fluid', style: { backgroundColor: '#052841' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('div', { className: 'container header_content clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('div', { className: 'col-md-6 courseThumbnails', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement('h4', { className: 'course_online_name', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, courseDetail.name)), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }), _react2.default.createElement(_antd.Rate, { allowHalf: true, defaultValue: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }), _react2.default.createElement('p', { className: 'CategoryCourse', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, courseDetail.category), _react2.default.createElement('p', { className: 'Course_Price', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, '\u0E3F ', courseDetail.price)), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }), _react2.default.createElement('button', { type: 'button', className: 'btn buy_btn', onClick: paymentGateway, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, 'Buy course')), _react2.default.createElement('div', { className: 'card col-md-5 courseImagesCover', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, _react2.default.createElement('img', { className: 'card-img-top', src: 'static/public/images/' + courseDetail.image, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }))))), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }), _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('div', { className: 'courseDescription col-md-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('div', { className: 'avatarTeacher', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement('img', { src: 'static/public/images/' + courseDetail.imgUrl, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    })), _react2.default.createElement('span', { className: 'avatarName', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, courseDetail.displayName), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, 'Description')), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, courseDetail.content), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), _react2.default.createElement('h6', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'course orthers')), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }), courseRelated.map(function (courseRelated, i) {
        return _react2.default.createElement('div', { 'class': 'media', key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
            }
        }, _react2.default.createElement('div', { 'class': 'media-left media-middle', __source: {
                fileName: _jsxFileName,
                lineNumber: 99
            }
        }, _react2.default.createElement('div', { className: 'relatedImage', __source: {
                fileName: _jsxFileName,
                lineNumber: 100
            }
        }, _react2.default.createElement('img', { 'class': 'media-object',
            src: 'static/public/images/' + courseRelated.image, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
            }
        }))), _react2.default.createElement('div', { 'class': 'media-body', __source: {
                fileName: _jsxFileName,
                lineNumber: 105
            }
        }, _react2.default.createElement('h4', { 'class': 'media-heading relatedName', __source: {
                fileName: _jsxFileName,
                lineNumber: 106
            }
        }, _react2.default.createElement('strong', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 107
            }
        }, courseRelated.name)), _react2.default.createElement('span', { className: 'category_relate', __source: {
                fileName: _jsxFileName,
                lineNumber: 109
            }
        }, courseRelated.category), _react2.default.createElement('div', { className: 'clearfix', __source: {
                fileName: _jsxFileName,
                lineNumber: 110
            }
        }, _react2.default.createElement('span', { className: 'price_relate', __source: {
                fileName: _jsxFileName,
                lineNumber: 111
            }
        }, '\u0E3F ', courseRelated.price))));
    }), _react2.default.createElement('h6', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, _react2.default.createElement('strong', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, 'Vote Course')), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }), _react2.default.createElement(_antd.Rate, { className: 'favoriteStar', allowHalf: true, defaultValue: 2.5, __source: {
            fileName: _jsxFileName,
            lineNumber: 119
        }
    })))), _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, '\n                        @import url(https://fonts.googleapis.com/css?family=Kanit);\n                        \n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .storeNavbar{\n                            width:100%;\n                            height: 65px;\n                            background-color:#062741;\n                        }\n                        .profileImage img {\n                            width: 40px;\n                            height: 40px;\n                            border-radius: 100px;\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        .tutorial-dropdown{\n                            width:160px;\n                            right: 10px;\n                            left: inherit;\n                            text-align: center !important;\n                            font-size: 12px;\n                            text-transform: uppercase;\n                            border:0 !important;\n                        }\n                        .tutorial-dropdown a{\n                            color:#666;\n                            line-height:30px;\n                        }\n                        a:hover {\n                            color:#666;\n                            text-decoration: none;\n                        }\n                        .courseThumbnails ,.courseImagesCover {\n                            float:left;\n                        }\n                        .header_content {\n                            width: 100%;\n                            overflow: hidden;\n                            height: auto;\n                            margin-top: 20px;\n                            padding: 30px;\n                            background-color: #fff;\n                            border-top-right-radius: 4px;\n                            border-top-left-radius: 4px;\n                            box-shadow: inset 0px 0px 6px 0px #e9ecef;\n                        }\n                        .course_online_name {\n                          font-size: 21px;\n                          font-family: sukhumvit set,kanit;\n                          line-height: 36px;\n                          text-transform: capitalize;\n                          color:#4a4a4a;\n                        }\n                        .CategoryCourse ,.Course_Price{\n                          font-family: sukhumvit set,kanit;\n                          text-transform: uppercase;\n                          margin-top:16px;\n                          font-size: 14px;\n                        }\n                        .Course_Price {\n                            font-size:16.6px;\n                        }\n                        .ant-rate-star {\n                            color:#e9ecef;\n                        }\n                        .courseImagesCover {\n                            height: 236px;\n                            margin-left: 50px;\n                            padding: 0;\n                            border: 0;\n                        }\n                        .courseImagesCover img {\n                            width:100%;\n                            height: 100%;\n                            overflow:hidden;\n                            object-fit: cover;\n                            object-position: center top;\n                        }\n                        .buy_btn {\n                            text-transform: uppercase;\n                            font-family: sukhumvit set,kanit;\n                            border: 0;\n                            background-color: #00a854;\n                            color: #fff;\n                            font-size: 12px;\n                            outline:none !important;\n                            cursor: pointer;\n                        }\n\n                        .courseDescription {\n                            height:auto;\n                            background-color:#fff;\n                            margin-bottom:50px;\n                        }\n\n                        .courseDescription h4 ,.courseDescription p, .courseDescription h6 {\n                            padding:20px;\n                            padding-bottom:0;\n                            text-transform: capitalize;\n                        }\n\n                        .courseDescription p {\n                            padding-top:0;\n                            text-transform: capitalize;\n                            font-family: sukhumvit set,kanit;\n                            line-height: 28px;\n                        }\n                        .avatarTeacher {\n                            width: 50px;\n                            height: 50px;\n                            overflow: hidden;\n                            margin: 20px;\n                            margin-bottom: 0;\n                        }\n                        .avatarTeacher img {\n                            width:100%;\n                            height:100%;\n                            border-radius:100px;\n                            overflow:hidden;\n                            border:0;\n                            background-color: transparent;\n                        }\n                        .avatarName {\n                            float: left;\n                            position: relative;\n                            left: 90px;\n                            text-transform: capitalize;\n                            font-family: sukhumvit set,kanit;\n                            font-size:16px;\n                            top: -40px;\n                        }\n                        .favoriteStar,.relatedImage {\n                            margin-left:20px;\n                        }\n                        .relatedImage {\n                            width:200px;\n                            overflow:hidden;\n                            margin-bottom:33px;\n                        }\n                        .relatedImage img {\n                            width: 100%;\n                            height: 100%;\n                            object-fit: cover;\n                            object-position: center top;\n                        }\n                        .relatedName{\n                            padding: 0 !important;\n                            padding-left: 20px !important;\n                            font-size: 15px;\n                            text-transform:capitalize !important;\n                            font-family: sukhumvit set,kanit;\n                        }\n\n                        .category_relate {\n                            position: relative;\n                            top: 10px;\n                            padding: 0 !important;\n                            padding-left: 20px !important;\n                            font-size: 13px;\n                            text-transform: uppercase !important;\n                            font-family: sukhumvit set,kanit;\n                        }\n                        .price_relate {\n                            padding-left: 20px !important;\n                            position: relative;\n                            top: 17px;\n                            text-transform: capitalize;\n                            font-weight: bold;\n                            font-size:14px;\n                        }\n                    '));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3RlYWNoZXJfY29udGVudC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsIlJlYWN0IiwiZmV0Y2giLCJSZWFjdERvbSIsIlJvdXRlciIsImNvdXJzZSIsImRhdGEiLCJSYXRlIiwiSWNvbiIsIkNvbGxhcHNlIiwiSW5wdXQiLCJpZCIsInVybCIsInF1ZXJ5IiwiY291cnNlRGV0YWlsIiwiZmluZCIsIlRleHRBcmVhIiwiY291cnNlUmVsYXRlZCIsInNsaWNlIiwicGF5bWVudEdhdGV3YXkiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXRobmFtZSIsInVzZXIiLCJjb2xvciIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiaW1hZ2UiLCJpbWdVcmwiLCJkaXNwbGF5TmFtZSIsImNvbnRlbnQiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVMsQUFBTSxBQUFLLEFBQVMsQUFDN0I7Ozs7Ozs7O2tCQUFlLGdCQUE0QjtRQUFYLEFBQVcsVUFBMUIsQUFBMEIsSUFBcEIsQUFBb0IsTUFBWCxBQUFXLEFBQzNDOztRQUFJLGVBQWUsS0FBQSxBQUFLLEFBQUssdUJBQVEsRUFBRSxJQURJLEFBQzNDLEFBQW1CLEFBQWtCLEFBQUs7UUFEQyxBQUVuQyxXQUZtQyxBQUV0QixZQUZzQixBQUVuQyxBQUNSOztRQUFJLGdCQUFnQixpQkFBQSxBQUFPLE1BQVAsQUFBYSxHQUFqQyxBQUFvQixBQUFlLEFBQ25DO1FBQUksaUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFNLEFBQ3ZCO2lCQUFBLEFBQVMsT0FBVCxBQUFnQixBQUNuQjtBQUZELEFBR1E7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEs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