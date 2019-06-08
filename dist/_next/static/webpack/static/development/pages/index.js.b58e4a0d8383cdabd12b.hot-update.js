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
                  '1128142116',
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
                    '1128142116',
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
                        '1128142116',
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
                        '1128142116',
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
                            '1128142116',
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
                            '1128142116',
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
                      '1128142116',
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
              id: '1128142116',
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
                ';-webkit-transition:color,text-decoration .3s;transition:color,text-decoration .3s;}h2.__jsx-style-dynamic-selector:hover{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
                ';-webkit-text-decoration:underline;text-decoration:underline;}article.__jsx-style-dynamic-selector{margin:1em;width:100%;border-radius:5px;margin-bottom:2em;}small.__jsx-style-dynamic-selector{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green,
                ';}p.__jsx-style-dynamic-selector{color:#c3c3c3;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHOEIsQUFJUixBQUlLLEFBR0gsQUFLb0IsQUFJeEIsQUFPZCxBQUVnQixXQVJGLEdBU0MsQ0FsQnVCLEdBSHJDLElBYW9CLEtBU3BCLFFBZDRCLEFBVTVCLEtBSm9CLFVBdEJKLEFBWXdCLFFBV3hDLE1BdEJBLFVBR3FCLHFCQWFyQixxQ0FKQSxtQ0FSQSIsImZpbGUiOiIvVXNlcnMvcGFibG9wdW5rL3NyYy9wYWJsb3B1bmsuZ2l0aHViLmlvL2NvbXBvbmVudHMvcmVwby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnc2ljay1jb2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHJlcG86IHsgbmFtZSwgZGVzY3JpcHRpb24sIHVybCwgcHJpbWFyeUxhbmd1YWdlOiBsYW5nIH1cbn0pID0+IHtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPGFydGljbGU+XG4gICAgICA8YSBocmVmPXt1cmx9IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICA8aDI+eyBuYW1lIH08L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgbGFuZ1xuICAgICAgICAgICAgPyA8c21hbGw+KHtsYW5nLm5hbWV9KTwvc21hbGw+XG4gICAgICAgICAgICA6IDxzbWFsbD4odW5rbm93bik8L3NtYWxsPlxuICAgICAgICB9XG4gICAgICA8L2E+XG4gICAgICA8cD57IGRlc2NyaXB0aW9uIH08L3A+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1hZ2VudGF9O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgdGV4dC1kZWNvcmF0aW9uIC4zcztcbiAgICAgIH1cbiAgICAgIGgyOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgfVxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ3JlZW59XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICBjb2xvcjogI2MzYzNjMztcbiAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG59XG4iXX0= */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/components/repo.js */'
              )
          )
        )
      }

      /***/
    }
})
//# sourceMappingURL=index.js.b58e4a0d8383cdabd12b.hot-update.js.map
