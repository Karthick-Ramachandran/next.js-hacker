webpackHotUpdate("static/development/pages/story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Story; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "/Users/karthick/Desktop/portfolio/pages/story.js";





var Story =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Story, _React$Component);

  function Story() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Story);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Story).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: story.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("center", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1316409290" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " ", story.comments_count || 0, " comments |"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1316409290" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Published ", story.time_ago || "unknown", " |"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1316409290" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, story.points || 0, " Points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, " Story by: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: 'teal'
        },
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, story.user))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          borderBottom: '2px solid green',
          width: '100%',
          padding: '0',
          margin: '0'
        },
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-1316409290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Comments"), story.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: comment.id,
          className: "jsx-1316409290" + " " + "comment",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, comment.content.replace(/(<([^>]+)>)/ig, "")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, comment.user), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, comment.time_ago), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-1316409290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1316409290",
        __self: this
      }, "h1.jsx-1316409290{text-align:center;color:black;}a.jsx-1316409290{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1316409290:hover{-webkit-text-decoration:underline;text-decoration:underline;color:green;}.strings.jsx-1316409290{display:inline-block;padding:3px;}.comment.jsx-1316409290{padding:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGljay9EZXNrdG9wL3BvcnRmb2xpby9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHFCLEFBRzBDLEFBSUcsQUFJSyxBQUtMLEFBSVQsWUFDZixNQWpCZSxHQWFBLFNBWmYsR0FhQSxpQkFWYyxVQUlDLENBSGYsV0FJQSIsImZpbGUiOiIvVXNlcnMva2FydGhpY2svRGVza3RvcC9wb3J0Zm9saW8vcGFnZXMvc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkO1xuICAgICAgICBsZXQgc3Rvcnk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gKTtcbiAgICAgICAgICAgIHN0b3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgICAgICAgICAgc3RvcnkgPSBudWxsO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4geyBzdG9yeSB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghc3RvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPXtzdG9yeS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPjxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxjZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInN0cmluZ3NcIj4ge3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzIHw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwic3RyaW5nc1wiPlB1Ymxpc2hlZCB7c3RvcnkudGltZV9hZ28gfHwgXCJ1bmtub3duXCJ9IHw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwic3RyaW5nc1wiPntzdG9yeS5wb2ludHMgfHwgMH0gUG9pbnRzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj4gU3RvcnkgYnk6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOid0ZWFsJyB9fT57c3RvcnkudXNlcn08L3NwYW4+PC9iPjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlckJvdHRvbTonMnB4IHNvbGlkIGdyZWVuJywgd2lkdGg6JzEwMCUnLCBwYWRkaW5nOicwJywgbWFyZ2luOicwJyB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOidjZW50ZXInIH19PkNvbW1lbnRzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3N0b3J5LmNvbW1lbnRzLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57Y29tbWVudC5jb250ZW50LnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpfTwvYj48YnIvPiA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC51c2VyfTwvc3Bhbj4gPHNwYW4+e2NvbW1lbnQudGltZV9hZ299PC9zcGFuPjxici8+IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0cmluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/karthick/Desktop/portfolio/pages/story.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, storyId, story, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                storyId = query.id;
                _context.prev = 2;
                _context.next = 5;
                return fetch("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.log('error');
                story = null;

              case 15:
                return _context.abrupt("return", {
                  story: story
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=story.js.b8b5ea9433960bfc580d.hot-update.js.map