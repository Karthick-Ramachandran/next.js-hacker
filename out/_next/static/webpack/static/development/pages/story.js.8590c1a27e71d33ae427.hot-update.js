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
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("center", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3395250833" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " ", story.comments_count || 0, " comments |"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3395250833" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Published ", story.time_ago || "unknown", " |"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3395250833" + " " + "strings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, story.points || 0, " Points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, " Story by: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: 'teal'
        },
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, story.user))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3395250833",
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
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3395250833",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Comments"), story.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: comment.id,
          className: "jsx-3395250833" + " " + "comment",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, comment.content.replace(/(<([^>]+)>)/ig, "")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, comment.user), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, comment.time_ago), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          className: "jsx-3395250833",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3395250833",
        __self: this
      }, "h1.jsx-3395250833{text-align:center;color:black;}a.jsx-3395250833{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3395250833:hover{-webkit-text-decoration:underline;text-decoration:underline;color:green;}.strings.jsx-3395250833{display:inline-block;padding:3px;}.comment.jsx-3395250833{padding:5px;border:3px solid tral;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGljay9EZXNrdG9wL3BvcnRmb2xpby9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHFCLEFBRzBDLEFBSUcsQUFJSyxBQUtMLEFBSVQsWUFFaEIsTUFsQmdCLEdBYUEsU0FaZixHQWFBLENBSUEsZ0JBZGMsVUFJQyxDQUhmLFdBSUEiLCJmaWxlIjoiL1VzZXJzL2thcnRoaWNrL0Rlc2t0b3AvcG9ydGZvbGlvL3BhZ2VzL3N0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnN0IHN0b3J5SWQgPSBxdWVyeS5pZDtcbiAgICAgICAgbGV0IHN0b3J5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YCk7XG4gICAgICAgICAgICBzdG9yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgICAgIHN0b3J5ID0gbnVsbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHsgc3RvcnkgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT48YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJzdHJpbmdzXCI+IHtzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50cyB8PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInN0cmluZ3NcIj5QdWJsaXNoZWQge3N0b3J5LnRpbWVfYWdvIHx8IFwidW5rbm93blwifSB8PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInN0cmluZ3NcIj57c3RvcnkucG9pbnRzIHx8IDB9IFBvaW50czwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+IFN0b3J5IGJ5OiA8c3BhbiBzdHlsZT17eyBjb2xvcjondGVhbCcgfX0+e3N0b3J5LnVzZXJ9PC9zcGFuPjwvYj48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJCb3R0b206JzJweCBzb2xpZCBncmVlbicsIHdpZHRoOicxMDAlJywgcGFkZGluZzonMCcsIG1hcmdpbjonMCcgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbW1lbnRzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3N0b3J5LmNvbW1lbnRzLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57Y29tbWVudC5jb250ZW50LnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpfTwvYj48YnIvPiA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC51c2VyfTwvc3Bhbj4gPHNwYW4+e2NvbW1lbnQudGltZV9hZ299PC9zcGFuPjxici8+IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0cmluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozcHggc29saWQgdHJhbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/karthick/Desktop/portfolio/pages/story.js */"));
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
//# sourceMappingURL=story.js.8590c1a27e71d33ae427.hot-update.js.map