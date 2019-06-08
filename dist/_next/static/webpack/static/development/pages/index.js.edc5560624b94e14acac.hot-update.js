webpackHotUpdate('static/development/pages/index.js', {
  /***/ './pages/index.js':
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _default
        }
      )
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/createClass */ './node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js'
      )
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js'
      )
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_8__
      )
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! isomorphic-fetch */ './node_modules/isomorphic-fetch/fetch-npm-browserify.js'
      )
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! sick-colors */ './node_modules/sick-colors/index.js'
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        sick_colors__WEBPACK_IMPORTED_MODULE_10__
      )
      /* harmony import */ var _components_repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../components/repo */ './components/repo.js'
      )

      var _jsxFileName =
        '/Users/pablopunk/src/pablopunk.github.io/pages/index.js'

      var _default =
        /*#__PURE__*/
        (function(_React$Component) {
          Object(
            _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ]
          )(_default, _React$Component)

          function _default() {
            Object(
              _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ]
            )(this, _default)

            return Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[
                'default'
              ]
            )(
              this,
              Object(
                _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ]
              )(_default).apply(this, arguments)
            )
          }

          Object(
            _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ]
          )(
            _default,
            [
              {
                key: 'render',
                value: function render() {
                  var _this$props$repos = this.props.repos,
                    repos =
                      _this$props$repos === void 0 ? [] : _this$props$repos
                  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3023922276',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      },
                      __self: this
                    },
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      'h1',
                      {
                        className: 'jsx-3023922276',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 18
                        },
                        __self: this
                      },
                      'Latest projects on GitHub'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      'section',
                      {
                        className: 'jsx-3023922276',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 19
                        },
                        __self: this
                      },
                      repos.map(function(repo, i) {
                        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                          _components_repo__WEBPACK_IMPORTED_MODULE_11__[
                            'default'
                          ],
                          {
                            key: i,
                            repo: repo,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 21
                            },
                            __self: this
                          }
                        )
                      })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a,
                      {
                        id: '3023922276',
                        __self: this
                      },
                      'h1.jsx-3023922276{font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb3B1bmsvc3JjL3BhYmxvcHVuay5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUc2QixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3BhYmxvcHVuay9zcmMvcGFibG9wdW5rLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICdzaWNrLWNvbG9ycydcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvcmVwbydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXBvcy5wYWJsb3B1bmsubm93LnNoJylcbiAgICBjb25zdCByZXBvcyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7IHJlcG9zOiByZXBvcy5yZXZlcnNlKCkgfVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyByZXBvcyA9IFtdIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkxhdGVzdCBwcm9qZWN0cyBvbiBHaXRIdWI8L2gxPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICB7cmVwb3MubWFwKChyZXBvLCBpKSA9PiAoXG4gICAgICAgICAgICA8UmVwbyBrZXk9e2l9IHJlcG89e3JlcG99IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/pablopunk/src/pablopunk.github.io/pages/index.js */'
                    )
                  )
                }
              }
            ],
            [
              {
                key: 'getInitialProps',
                value: (function() {
                  var _getInitialProps = Object(
                    _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[
                      'default'
                    ]
                  )(
                    /*#__PURE__*/
                    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var res, repos
                        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2
                                  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()(
                                    'https://repos.pablopunk.now.sh'
                                  )

                                case 2:
                                  res = _context.sent
                                  _context.next = 5
                                  return res.json()

                                case 5:
                                  repos = _context.sent
                                  return _context.abrupt('return', {
                                    repos: repos.reverse()
                                  })

                                case 7:
                                case 'end':
                                  return _context.stop()
                              }
                            }
                          },
                          _callee
                        )
                      }
                    )
                  )

                  function getInitialProps() {
                    return _getInitialProps.apply(this, arguments)
                  }

                  return getInitialProps
                })()
              }
            ]
          )

          return _default
        })(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)

      /***/
    }
})
//# sourceMappingURL=index.js.edc5560624b94e14acac.hot-update.js.map
