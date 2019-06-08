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
                  '2481446608',
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
                    '2481446608',
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
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [
                      [
                        '2481446608',
                        [
                          sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a
                            .magenta,
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
                        '2481446608',
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
                            '2481446608',
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
                            '2481446608',
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
                      '2481446608',
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
              id: '2481446608',
              dynamic: [
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green
              ],
              __self: this
            },
            'a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:initial;}.title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:0 .5em;}h2.__jsx-style-dynamic-selector{display:inline;color:'
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.magenta,
                ';}article.__jsx-style-dynamic-selector{margin:1em;width:100%;border-radius:5px;}small.__jsx-style-dynamic-selector{color:'
              )
              .concat(
                sick_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green,
                ';}p.__jsx-style-dynamic-selector{color:#c3c3c3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHOEIsQUFJUixBQUlDLEFBR0MsQUFJSixBQU1kLEFBRWdCLFdBUEYsR0FQYixBQWVGLENBWnVDLE9BS2pCLGFBSXBCLEtBSEEsVUFqQmdCLEFBWWhCLGNBWEEsVUFHcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vY29tcG9uZW50cy9yZXBvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICdzaWNrLWNvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgcmVwbzogeyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsLCBwcmltYXJ5TGFuZ3VhZ2U6IGxhbmcgfVxufSkgPT4ge1xuICByZXR1cm4gPGRpdj5cbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIDxoMj57IG5hbWUgfTwvaDI+XG4gICAgICAgIHtcbiAgICAgICAgICBsYW5nXG4gICAgICAgICAgICA/IDxzbWFsbD4oe2xhbmcubmFtZX0pPC9zbWFsbD5cbiAgICAgICAgICAgIDogPHNtYWxsPih1bmtub3duKTwvc21hbGw+XG4gICAgICAgIH1cbiAgICAgIDwvYT5cbiAgICAgIDxwPnsgZGVzY3JpcHRpb24gfTwvcD5cbiAgICA8L2FydGljbGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlID4gKiB7XG4gICAgICAgIG1hcmdpbjogMCAuNWVtO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5tYWdlbnRhfTtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZWVufVxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgY29sb3I6ICNjM2MzYzM7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/components/repo.js */'
              )
          )
        )
      }

      /***/
    }
})
//# sourceMappingURL=index.js.95d371ab4732c39fa928.hot-update.js.map
