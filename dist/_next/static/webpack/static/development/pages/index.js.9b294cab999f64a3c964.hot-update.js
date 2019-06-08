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
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_7__
      )
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! isomorphic-fetch */ './node_modules/isomorphic-fetch/fetch-npm-browserify.js'
      )
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! sick-colors */ './node_modules/sick-colors/index.js'
      )
      /* harmony import */ var sick_colors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        sick_colors__WEBPACK_IMPORTED_MODULE_9__
      )
      /* harmony import */ var _components_repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
                  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      },
                      __self: this
                    },
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      'h1',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 18
                        },
                        __self: this
                      },
                      'Latest projects on GitHub'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      'section',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 19
                        },
                        __self: this
                      },
                      repos.map(function(repo, i) {
                        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          _components_repo__WEBPACK_IMPORTED_MODULE_10__[
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
                                  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()(
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
        })(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)

      /***/
    }
})
//# sourceMappingURL=index.js.9b294cab999f64a3c964.hot-update.js.map
