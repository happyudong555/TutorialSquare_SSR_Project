module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/Users/panjamaponkarnasuta/Desktop/TutorialSquare_SSR_Project-master/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(home, _React$Component);

  function home() {
    _classCallCheck(this, home);

    return _possibleConstructorReturn(this, (home.__proto__ || Object.getPrototypeOf(home)).apply(this, arguments));
  }

  _createClass(home, [{
    key: "render",
    value: function render() {
      var studentSignIn = function studentSignIn() {
        window.location.href = '/student';
      };

      var TeacherSignIn = function TeacherSignIn() {
        window.location.href = '/teacher';
      };

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "icon",
        href: "/static/public/icon/favicon.png",
        type: "image/png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Tutorial Square"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
        integrity: "sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js",
        integrity: "sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
        integrity: "sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Anton|Gloria+Hallelujah|Roboto",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Kanit",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        className: "navbar navbar-default tutorial-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        className: "logo",
        src: '/static/public/logo/t-square.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        className: "wrapper-signIn-sign-up nav navbar-nav navbar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "data-toggle": "modal",
        "data-target": "#SignUp-to-Teacher",
        className: "btn signUp-to-teacher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "sign Up to teacher")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "data-toggle": "modal",
        "data-target": "#SignUp-to-student",
        className: "btn signUp-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "sign Up to student")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "data-toggle": "modal",
        "data-target": "#Login",
        className: "btn signIn-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "sign in"))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal fade",
        id: "SignUp-to-Teacher",
        role: "dialog",
        "aria-labelledby": "myModalLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-dialog modal-md",
        role: "document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "closeModal",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\xD7"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: 'static/public/background/SignUp-screen.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapperLoginform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Create Teacher Account"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Username",
        id: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password",
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("textarea", {
        type: "text",
        className: "form-control TeacherBox",
        placeholder: "Yours Education or Experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        className: "btn",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "sign Up"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal fade",
        id: "SignUp-to-student",
        role: "dialog",
        "aria-labelledby": "myModalLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-dialog modal-md",
        role: "document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "closeModal",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "\xD7"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Student-CreatAccountImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: 'static/public/background/login-screen.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapperLoginform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Sign Up To Student"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password",
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        className: "btn",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "sign Up"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal fade",
        id: "Login",
        role: "dialog",
        "aria-labelledby": "myModalLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-dialog modal-md",
        role: "document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "closeModal",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "\xD7"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Student-CreatAccountImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapperLoginform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        "class": "nav nav-tabs",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        role: "presentation",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "tabsSwitch active-tabs btn",
        href: "#StudentLogin",
        role: "tab",
        "data-toggle": "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Student Login")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "tabsSwitch btn",
        href: "#TeacherLogin",
        role: "tab",
        "data-toggle": "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Teacher Login"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        role: "tabpanel",
        className: "tab-pane active",
        id: "StudentLogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "btn btn-block btn-social btn-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), " Sign in with facebook"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password",
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        className: "btn StudentloginButton",
        onClick: studentSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "student login")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        role: "tabpanel",
        className: "tab-pane",
        id: "TeacherLogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password",
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        className: "btn TeacherloginButton",
        onClick: TeacherSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "teacher login"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container-fluid clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapper-bg col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        className: "text-center HeadingTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "online course platform"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        className: "text-center SubTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "\" anywhere anytimes can learn \"")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container-fluid tutorialFeature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "text-center feature-Heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "tutorial square feature ?"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card col-md-4 thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        className: "feature-img",
        src: 'static/public/icon/book-icon.svg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "realtime course update"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card col-md-4 thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        className: "feature-img",
        src: 'static/public/icon/child.svg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "great tutorial"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card col-md-4 thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        className: "feature-img",
        src: 'static/public/icon/world-wide.svg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "anywhere can learn")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container-fluid AboutContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapperAbout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        className: "img-responsive",
        src: '/static/public/background/tutorial-imac.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "wrapperAbout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "what's tutorial square ?"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis recusandae excepturi aspernatur accusantium beatae expedita sed in libero! Aliquid ipsam cum quam est repudiandae? Iusto tempore qui corrupti voluptatibus dolorem.")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
        className: "container-fluid footerWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "footerDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "copyright @ tutorial square"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "iconFooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        className: "fa fa-facebook fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        className: "fa fa-envelope-o fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        className: "footerEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, ": info@tutorsquare.net"))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "\n                        .clearfix{\n                            clear:both;\n                        }\n                        .logo {\n                            width:128px;\n                            height:auto;\n                            overflow:hidden:\n                            object-fit: cover;\n                            object-position: center top;\n                            cursor: pointer;\n                        }\n                        img {\n                            width:100%;\n                            height:100%;\n                        }\n                        .tutorial-navbar{\n                        width:100%;\n                        height:65px;\n                        background-color:#062741;\n                        }\n                        .wrapper-signIn-sign-up{\n                            flex-direction:unset;\n                        }\n                        .tutorial-navbar li a {\n                        color:#fff !important;\n                        cursor: pointer;\n                        text-transform: uppercase;\n                        font-size:11px;\n                        }\n                        .tutorial-navbar li a:hover {\n                            text-decoration: none;\n                        }\n                        .btn-social{\n                            color:#fff !important;\n                        }\n                        .btn-facebook ,.btn-facebook:active ,.btn-facebook:hover , .btn-facebook:focus {\n                            background-color: #1b49a9;\n                            cursor: pointer;\n                        }\n                        .signUp-btn{\n                            border:1px solid #fff;\n                            float:left;\n                        }\n                        .signUp-to-teacher {\n                            border:1px solid #41b883;\n                        }\n                        .signIn-btn, .signUp-btn , .signUp-to-teacher{\n                            margin-left:20px;\n                        }\n                        .signUp-btn{\n                            float:left;\n                        }\n                        .signIn-btn{\n                            background-color:#41b883;\n                        }\n\n                        .closeModal{\n                            position: absolute !important;\n                            right: 15px;\n                            top: 10px;\n                            font-size:24px;\n                            color: #fff !important;\n                            cursor: pointer !important;\n                        }\n                        .wrapperLoginform{\n                            padding:20px;\n                            width:400px;\n                            margin:0 auto;\n                        }\n                        .wrapperLoginform h5{\n                            text-transform: capitalize;\n                        }\n                        .TeacherBox {\n                            resize: none;\n                        }\n                        .wrapperLoginform button {\n                            width:100%;\n                            color:#fff;\n                            cursor: pointer !important;\n                            text-transform: uppercase;\n                            background-color: #42b783;\n                            outline:none !important;\n                        }\n                        .Student-CreatAccountImage {\n                            width: 100%;\n                            height: 300px;\n                            overflow: hidden;\n                            background-image: url(/static/public/background/login-screen.jpg);\n                            background-size: cover;\n                            background-repeat: no-repeat;\n                            background-position: center bottom;\n                        }\n\n                        .Student-CreatAccountImage img {\n                            height:auto;\n                            object-fit:cover;\n                            object-position:center top;\n                        }\n                        .wrapperLoginform a {\n                            font-size:14px;\n                            text-decoration: none;\n                            text-transform: capitalize;\n                            color:#000;\n                            box-shadow:none !important;\n                            font-family:sukhumvit set,kanit !important;\n                        }\n                        .wrapperLoginform .nav-tabs {\n                            border-bottom:0;\n                        }\n                        .btn {\n                            outline:none !important;\n                        }\n                        .tabsSwitch{\n                            background-color: #fff;\n                            color:#666 !important;\n                        }\n                        .tabsSwitch:focus{\n                            background-color: #062741 !important;\n                            color: #fff !important;\n                        }\n                        .active-tabs {\n                            background-color: #062741 !important;\n                            color: #fff !important;\n                            box-shadow: none;\n                            -webkit-box-shadow: none;\n                            -moz-box-shadow: none;\n                            -o-box-shadow: none;\n                            border:3px !important;\n                        }\n                        .tabs-switch-type-account{\n                            text-transform: capitalize;\n                            cursor: pointer !important;\n                        }\n                        .StudentloginButton {\n                            background-color:#10b4ce !important;\n                            font-family: sukhumvit set,kanit;\n                        }\n                        input {\n                            font-family:sukhumvit set,kanit !important;\n                        }\n                        .TeacherloginButton {\n                            background-color:#20C626 !important;\n                            font-family: sukhumvit set,kanit;\n                        }\n                        .wrapper-bg {\n                            background:linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, .7)), url(/static/public/background/shutterstock_436292617.jpg);\n                            height:450px;\n                            background-color:#000;\n                            background-position:center top;\n                            background-size:cover;\n                        }\n                        .HeadingTitle {\n                            color: #fff;\n                            padding-top: 120px; \n                            text-transform: capitalize;\n                            font-size:35px;\n                            margin-bottom:24px;\n                            font-weight: bold;\n                            \n                        }\n                        .SubTitle{\n                            color:#fff;text-transform: capitalize;\n                            font-size:20px;\n                            font-weight: lighter;\n                        }\n                        .feature-Heading {\n                            text-transform: uppercase;\n                            font-size:20px;\n                            font-family:sukhumvit set, kanit;\n\n                        }\n                        .tutorialFeature{\n                            height:auto;\n                            background-color:#fff;\n                            padding:40px;\n                        }\n                        .feature-img{\n                            height:50px;\n                            overflow:hidden;\n                            margin-bottom:20px;\n                        }\n\n                        .thumbnail{\n                            width:330px;\n                            margin:20px;\n                            float:left;\n                        }\n                        .thumbnail p {\n                            text-transform: capitalize;\n                        }\n\n                        .AboutContainer{\n                            background-color:#062741;\n                        }\n\n                        .wrapperAbout .col-md-6 {\n                            height:460px;\n                            background-color:transparent;\n                            float:left;\n                        }\n                        .wrapperAbout img {\n                            height: auto;\n                            overflow: hidden;\n                            object-fit: cover;\n                            object-position: center top;\n                            padding: 50px;\n                            \n                        }\n                        .wrapperAbout h3 {\n                            color: #fff;\n                            text-transform: uppercase;\n                            font-weight: bold;\n                            padding: 50px;\n                            border-bottom: 3px solid #fff;\n                            margin-bottom:26px;\n                        }\n                        .wrapperAbout p {\n                            color:#fff;\n                            line-height:35px;\n                            font-family:sukhumvit set,kanit;\n                        }\n                        .footerWrapper{\n                            padding:30px;\n                            height:auto;\n                            background-color:#51BE8D;\n                        }\n                        .footerDetail h3 {\n                            color: #fff;\n                            font-size: 16px;\n                            text-transform: capitalize;\n                        }\n                        .iconFooter i{\n                            color:#fff;\n                            float:left;\n                            margin-right:30px;\n                            font-style: normal;\n                        }\n                        .footerEmail{\n                            position:relative;\n                            top:-6px;\n                        }\n                    "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        type: "text/javascript",
        src: "static/js/tabs.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }));
    }
  }]);

  return home;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map