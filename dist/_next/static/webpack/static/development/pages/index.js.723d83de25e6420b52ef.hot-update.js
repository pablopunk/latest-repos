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
                  '1281846733',
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
                    '1281846733',
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
                      '1281846733',
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
                            '1281846733',
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
                              '1281846733',
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
                              '1281846733',
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
                            '1281846733',
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
                      '1281846733',
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
              id: '1281846733',
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
                ';}p.__jsx-style-dynamic-selector{color:#e3e3e3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHOEIsQUFJTixBQUlKLEFBTWQsQUFFZ0IsV0FQRixHQVFmLENBWnVDLE9BS2pCLGFBSXBCLEtBSEEsVUFWZ0IsQUFLaEIsY0FKQSIsImZpbGUiOiIvVXNlcnMvcGFibG9wdW5rL3NyYy9wYWJsb3B1bmsuZ2l0aHViLmlvL2NvbXBvbmVudHMvcmVwby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnc2ljay1jb2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHJlcG86IHsgbmFtZSwgZGVzY3JpcHRpb24sIHVybCwgcHJpbWFyeUxhbmd1YWdlOiBsYW5nIH1cbn0pID0+IHtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPGFydGljbGU+XG4gICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICB7XG4gICAgICAgICAgbGFuZ1xuICAgICAgICAgICAgPyA8ZGl2PjxoMj57IG5hbWUgfTwvaDI+IDxzbWFsbD4oe2xhbmcubmFtZX0pPC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICAgIDogPGgyPntuYW1lfTwvaDI+XG4gICAgICAgIH1cbiAgICAgIDwvYT5cbiAgICAgIDxwPnsgZGVzY3JpcHRpb24gfTwvcD5cbiAgICA8L2FydGljbGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1hZ2VudGF9O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ3JlZW59XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICBjb2xvcjogI2UzZTNlMztcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufVxuIl19 */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/components/repo.js */'
              )
          )
        )
      }

      /***/
    }
})
//# sourceMappingURL=index.js.723d83de25e6420b52ef.hot-update.js.map
