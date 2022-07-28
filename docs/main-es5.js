(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\My Projects\Spring Boot And Angular Boilerplate\Frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2w4D":
    /*!**********************************************************!*\
      !*** ./src/app/security/service/localstorage.service.ts ***!
      \**********************************************************/

    /*! exports provided: LocalstorageService */

    /***/
    function w4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalstorageService", function () {
        return LocalstorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LocalstorageService = /*#__PURE__*/function () {
        function LocalstorageService(router) {
          _classCallCheck(this, LocalstorageService);

          this.router = router;
        } // set token in local storage


        _createClass(LocalstorageService, [{
          key: "setToken",
          value: function setToken(token) {
            localStorage.setItem('token', token);
          } //get token in local storage

        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          } //set user in local storage

        }, {
          key: "setUser",
          value: function setUser(user) {
            localStorage.setItem('user', JSON.stringify(user));
          } //get user from local storage

        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(localStorage.getItem('user'));
          } //remove user from local storage

        }, {
          key: "removeUser",
          value: function removeUser() {
            localStorage.removeItem('user');
          } //remove token from local storage

        }, {
          key: "removeToken",
          value: function removeToken() {
            localStorage.removeItem('token');
          } //check if user is logged in

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getUser();
          } //logout user

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            if (this.clearTimeout) {
              clearTimeout(this.clearTimeout);
            }

            return true;
          }
        }]);

        return LocalstorageService;
      }();

      LocalstorageService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LocalstorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LocalstorageService);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Aaqw":
    /*!**********************************************!*\
      !*** ./src/app/security/guard/auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function Aaqw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/localstorage.service */
      "2w4D");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(localstorageService, toastrService) {
          _classCallCheck(this, AuthGuard);

          this.localstorageService = localstorageService;
          this.toastrService = toastrService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.localstorageService.isLoggedIn()) {
              return true;
            } else {
              //sweet alert
              // Swal.fire({
              //   icon:'warning',
              //   title: 'Oops...',
              //   text: 'You are not logged in! Please login to continue.',
              // })
              // go to login page
              this.localstorageService.logout();
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])], AuthGuard);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        baseUrl: "http://localhost:5555"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'hrms';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Minified Sidebar
            $(document).on('click', '#toggle_btn', function () {
              if ($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
              } else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
              }

              return false;
            });
            $(document).on('mouseover', function (e) {
              e.stopPropagation();

              if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                var targ = $(e.target).closest('.sidebar').length;

                if (targ) {
                  $('body').addClass('expand-menu');
                  $('.subdrop + ul').slideDown();
                } else {
                  $('body').removeClass('expand-menu');
                  $('.subdrop + ul').slideUp();
                }

                return false;
              }
            });
            $('body').append('<div class="sidebar-overlay"></div>');
            $(document).on('click', '#mobile_btn', function () {
              var $wrapper = $('.main-wrapper');
              $wrapper.toggleClass('slide-nav');
              $('.sidebar-overlay').toggleClass('opened');
              $('html').addClass('menu-opened');
              $('#task_window').removeClass('opened');
              return false;
            });
            $(".sidebar-overlay").on("click", function () {
              var $wrapper = $('.main-wrapper');
              $('html').removeClass('menu-opened');
              $(this).removeClass('opened');
              $wrapper.removeClass('slide-nav');
              $('.sidebar-overlay').removeClass('opened');
              $('#task_window').removeClass('opened');
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _security_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./security/interceptor/auth.interceptor */
      "kja6"); // Bootstrap DataTable


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
          timeOut: 1500,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        })],
        providers: [_security_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["authInterceptorProviders"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kja6":
    /*!**********************************************************!*\
      !*** ./src/app/security/interceptor/auth.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: AuthInterceptor, authInterceptorProviders */

    /***/
    function kja6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
        return authInterceptorProviders;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/localstorage.service */
      "2w4D");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(localStorageService, router, toastr) {
          _classCallCheck(this, AuthInterceptor);

          this.localStorageService = localStorageService;
          this.router = router;
          this.toastr = toastr;
        }

        _createClass(AuthInterceptor, [{
          key: "handleAuthError",
          value: function handleAuthError(err) {
            //handle your auth error or rethrow
            if (err.status === 403) {
              this.toastr.info("You are not authorized to access this page"); // navigate to dashboard

              this.router.navigate(['/']);
            } else if (err.status === 500) {
              console.log(err.message);

              if (err.message.includes('jwt token has expired')) {
                //this.localStorageService.logout();
                this.router.navigate(['login']);
              } // this.router.navigate(['error/error500']);

            } else if (err.status === 401) {
              console.log("From 401"); //this.localStorageService.logout();

              this.router.navigate(['login']);
              window.location.reload();
            } else if (err.status === 404) {
              this.router.navigate(['error/error404']);
            } else if (err.status === 0) {
              //toaster show 30 seconds on top of the page
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Sorry...', 'Something went wrong! Server is not responding...', 'warning');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Unable to Connect to the Server');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }
        }, {
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            //add the jwt token (LocalStorage) request
            var authReq = req;
            var token = this.localStorageService.getToken();

            if (token != null) {
              authReq = authReq.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (x) {
              return _this.handleAuthError(x);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _service_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])], AuthInterceptor);
      var authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _security_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./security/guard/auth.guard */
      "Aaqw");

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~dev-tools-dev-tools-module~login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'dev-tools',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dev-tools-dev-tools-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~dev-tools-dev-tools-module~login-login-module"), __webpack_require__.e("dev-tools-dev-tools-module")]).then(__webpack_require__.bind(null,
          /*! ./dev-tools/dev-tools.module */
          "mlrA")).then(function (m) {
            return m.DevToolsModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | errorpages-errorpages-module */
          "errorpages-errorpages-module").then(__webpack_require__.bind(null,
          /*! ./errorpages/errorpages.module */
          "9ckT")).then(function (m) {
            return m.ErrorpagesModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | all-modules-all-modules-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~dev-tools-dev-tools-module~login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("all-modules-all-modules-module")]).then(__webpack_require__.bind(null,
          /*! ./all-modules/all-modules.module */
          "HYfV")).then(function (m) {
            return m.AllModulesModule;
          });
        },
        canActivate: [_security_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~dev-tools-dev-tools-module~login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, //empty path redirect to login
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map