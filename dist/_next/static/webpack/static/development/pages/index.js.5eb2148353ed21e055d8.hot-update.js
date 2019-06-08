webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/repo.js':
    /*!****************************!*\
  !*** ./components/repo.js ***!
  \****************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js'
      )
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! sick-colors */ './node_modules/sick-colors/index.js'
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        sick_colors__WEBPACK_IMPORTED_MODULE_2__
      )
      var _jsxFileName =
        '/Users/pablopunk/src/pablopunk.github.io/components/repo.js'

      /* harmony default export */ __webpack_exports__['default'] = function(
        _ref
      ) {
        var _ref$repo = _ref.repo,
          name = _ref$repo.name,
          description = _ref$repo.description,
          url = _ref$repo.url,
          lang = _ref$repo.primaryLanguage
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
              [
                [
                  '1248195909',
                  [
                    sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                    sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                    sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
                  ]
                ]
              ]
            ),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 6
            },
            __self: this
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'article',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [
                  [
                    '1248195909',
                    [
                      sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                        .magenta,
                      sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                      sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
                    ]
                  ]
                ]
              ),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'a',
              {
                href: url,
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [
                      [
                        '1248195909',
                        [
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .magenta,
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .blue,
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .green
                        ]
                      ]
                    ]
                  ) +
                  ' ' +
                  'title',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'h2',
                {
                  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [
                      [
                        '1248195909',
                        [
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .magenta,
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .blue,
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .green
                        ]
                      ]
                    ]
                  ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                  },
                  __self: this
                },
                name
              ),
              lang
                ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'small',
                    {
                      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                        [
                          [
                            '1248195909',
                            [
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .magenta,
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .blue,
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .green
                            ]
                          ]
                        ]
                      ),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    '(',
                    lang.name,
                    ')'
                  )
                : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'small',
                    {
                      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                        [
                          [
                            '1248195909',
                            [
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .magenta,
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .blue,
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .green
                            ]
                          ]
                        ]
                      ),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                      },
                      __self: this
                    },
                    '(unknown)'
                  )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'p',
              {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                  [
                    [
                      '1248195909',
                      [
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                          .magenta,
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
                      ]
                    ]
                  ]
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              description
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1248195909',
              dynamic: [
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
              ],
              __self: this
            },
            'a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:initial;}.title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin-right:.5em;}h2.__jsx-style-dynamic-selector{display:inline;color:'
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                ';-webkit-transition:.3s;transition:.3s;}h2.__jsx-style-dynamic-selector:hover{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                ';-webkit-text-decoration:underline;text-decoration:underline;}article.__jsx-style-dynamic-selector{margin:1em;width:100%;padding-bottom:2em;box-shadow:0px 10px 0px 0px rgba(0,0,0,0.75);}small.__jsx-style-dynamic-selector{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green,
                ';}p.__jsx-style-dynamic-selector{color:#c3c3c3;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHOEIsQUFJUixBQUlLLEFBR0gsQUFLb0IsQUFJeEIsQUFPZCxBQUVnQixXQVJGLEdBU0MsQ0FsQnVCLEdBSHJDLElBYXFCLEtBU3JCLFFBZDRCLEFBVTVCLE1BSitDLFNBdEIvQixBQVlDLGNBWGpCLFVBR3FCLFlBbUJyQixFQVZBLE9BSUEsd0VBWkEiLCJmaWxlIjoiL1VzZXJzL3BhYmxvcHVuay9zcmMvcGFibG9wdW5rLmdpdGh1Yi5pby9jb21wb25lbnRzL3JlcG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJ3NpY2stY29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICByZXBvOiB7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwsIHByaW1hcnlMYW5ndWFnZTogbGFuZyB9XG59KSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxhcnRpY2xlPlxuICAgICAgPGEgaHJlZj17dXJsfSBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgPGgyPnsgbmFtZSB9PC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIGxhbmdcbiAgICAgICAgICAgID8gPHNtYWxsPih7bGFuZy5uYW1lfSk8L3NtYWxsPlxuICAgICAgICAgICAgOiA8c21hbGw+KHVua25vd24pPC9zbWFsbD5cbiAgICAgICAgfVxuICAgICAgPC9hPlxuICAgICAgPHA+eyBkZXNjcmlwdGlvbiB9PC9wPlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAudGl0bGUgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5tYWdlbnRhfTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgfVxuICAgICAgaDI6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgfVxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ3JlZW59XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICBjb2xvcjogI2MzYzNjMztcbiAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG59XG4iXX0= */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/components/repo.js */'
              )
          )
        )
      }

      /***/
    }
})
//# sourceMappingURL=index.js.5eb2148353ed21e055d8.hot-update.js.map
