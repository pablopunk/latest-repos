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
                  '1587279139',
                  [
                    sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
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
                    '1587279139',
                    [
                      sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                        .magenta,
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
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                  [
                    [
                      '1587279139',
                      [
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                          .magenta,
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
                      ]
                    ]
                  ]
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
                },
                __self: this
              },
              lang
                ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    {
                      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                        [
                          [
                            '1587279139',
                            [
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .magenta,
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .green
                            ]
                          ]
                        ]
                      ),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                      },
                      __self: this
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'h2',
                      {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                          [
                            [
                              '1587279139',
                              [
                                sick_colors__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.magenta,
                                sick_colors__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.green
                              ]
                            ]
                          ]
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 11
                        },
                        __self: this
                      },
                      name
                    ),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'small',
                      {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                          [
                            [
                              '1587279139',
                              [
                                sick_colors__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.magenta,
                                sick_colors__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.green
                              ]
                            ]
                          ]
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 11
                        },
                        __self: this
                      },
                      '(',
                      lang.name,
                      ')'
                    )
                  )
                : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'h2',
                    {
                      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                        [
                          [
                            '1587279139',
                            [
                              sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                                .magenta,
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
                    name
                  )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'p',
              {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                  [
                    [
                      '1587279139',
                      [
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                          .magenta,
                        sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
                      ]
                    ]
                  ]
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              description
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1587279139',
              dynamic: [
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
              ],
              __self: this
            },
            'a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:initial;}h2.__jsx-style-dynamic-selector{display:inline;color:'
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                ';}article.__jsx-style-dynamic-selector{margin:1em;width:100%;border-radius:5px;}small.__jsx-style-dynamic-selector{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHOEIsQUFJTixBQUlKLEFBTWQsV0FMYyxJQUp3QixPQUtqQixhQUlwQixLQUhBLFVBVmdCLEFBS2hCLGNBSkEiLCJmaWxlIjoiL1VzZXJzL3BhYmxvcHVuay9zcmMvcGFibG9wdW5rLmdpdGh1Yi5pby9jb21wb25lbnRzL3JlcG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJ3NpY2stY29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICByZXBvOiB7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwsIHByaW1hcnlMYW5ndWFnZTogbGFuZyB9XG59KSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxhcnRpY2xlPlxuICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhbmdcbiAgICAgICAgICAgID8gPGRpdj48aDI+eyBuYW1lIH08L2gyPiA8c21hbGw+KHtsYW5nLm5hbWV9KTwvc21hbGw+PC9kaXY+XG4gICAgICAgICAgICA6IDxoMj57bmFtZX08L2gyPlxuICAgICAgICB9XG4gICAgICA8L2E+XG4gICAgICA8cD57IGRlc2NyaXB0aW9uIH08L3A+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5tYWdlbnRhfTtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZWVufVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG59XG4iXX0= */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/components/repo.js */'
              )
          )
        )
      }

      /***/
    }
})
//# sourceMappingURL=index.js.307d2a9c0248204c1743.hot-update.js.map
