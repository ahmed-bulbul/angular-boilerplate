(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Xb":
    /*!*************************************************!*\
      !*** ./src/app/login/login/login.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Xb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-button{\r\n  background: linear-gradient(to right, #0a6323 0%, #de0f0f 100%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBK0Q7QUFDakUiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBhNjMyMyAwJSwgI2RlMGYwZiAxMDAlKTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "7OBj":
    /*!*******************************************************!*\
      !*** ./src/app/login/register/register.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function OBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "SYwc":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function SYwc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"account-content\">\n  <!-- <a routerLink=\"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a> -->\n  <div class=\"container\">\n\n    <!-- Account Logo -->\n    <div class=\"account-logo\">\n      <a href=\"javascript:\"><img src=\"assets/img/logo2.png\" alt=\"Walton Digi-Tech Industries Ltd \"></a>\n    </div>\n    <!-- /Account Logo -->\n\n    <div class=\"account-box\">\n      <div class=\"account-wrapper\">\n        <h3 class=\"account-title\">Login</h3>\n        <p class=\"account-subtitle\">Welcome to Cencus Ticket Support</p>\n\n        <!-- Account Form -->\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\">\n          <div class=\"form-group\">\n            <label>Username</label>\n            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.username.errors }\"\n              formControlName=\"username\" type=\"text\">\n            <div *ngIf=\"formSubmitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label>Password</label>\n              </div>\n            </div>\n            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.password.errors }\"\n              formControlName=\"password\" formControlName=\"password\" type=\"password\">\n            <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 4 characters</div>\n            </div>\n          </div>\n          <div class=\"form-group text-center\">\n            <button class=\"btn btn-primary account-btn custom-button\" type=\"submit\">Login</button>\n          </div>\n          <div class=\"account-footer\">\n            <!-- <p>Don't have an account yet? <a routerLink=\"/login/register\">Register</a></p> -->\n          </div>\n        </form>\n        <!-- /Account Form -->\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "gEuR");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register/register.component */
      "xBNG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
      })], LoginModule);
      /***/
    },

    /***/
    "Yx1i":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yx1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Main Wrapper -->\n<div class=\"main-wrapper\">\n    <div class=\"account-content\">\n        <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\n        <div class=\"container\">\n\n            <!-- Account Logo -->\n            <div class=\"account-logo\">\n                <a routerLink=\"/dashboard\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\n            </div>\n            <!-- /Account Logo -->\n\n            <div class=\"account-box\">\n                <div class=\"account-wrapper\">\n                    <h3 class=\"account-title\">Register</h3>\n                    <p class=\"account-subtitle\">Access to our dashboard</p>\n\n                    <!-- Account Form -->\n                    <form action=\"dashboard\">\n                        <div class=\"form-group\">\n                            <label>Email</label>\n                            <input class=\"form-control\" type=\"text\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input class=\"form-control\" type=\"password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Repeat Password</label>\n                            <input class=\"form-control\" type=\"password\">\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Register</button>\n                        </div>\n                        <div class=\"account-footer\">\n                            <p>Already have an account? <a routerLink = \"/login/login\">Login</a></p>\n                        </div>\n                    </form>\n                    <!-- /Account Form -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Main Wrapper -->";
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
        return LoginRoutingModule;
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "gEuR");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register/register.component */
      "xBNG");

      var routes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
      }];

      var LoginRoutingModule = function LoginRoutingModule() {
        _classCallCheck(this, LoginRoutingModule);
      };

      LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginRoutingModule);
      /***/
    },

    /***/
    "gEuR":
    /*!************************************************!*\
      !*** ./src/app/login/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function gEuR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "SYwc");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "34Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_login_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/login.services */
      "z8ke");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, toastr, loginService, router, spinnerService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.loginService = loginService;
          this.router = router;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.formSubmitted = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initForm();
          } // Initialize form function

        }, {
          key: "_initForm",
          value: function _initForm() {
            this.myForm = this.formBuilder.group({
              username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: _services_login_services__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _services_login_services__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], LoginComponent);
      /***/
    },

    /***/
    "xBNG":
    /*!******************************************************!*\
      !*** ./src/app/login/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function xBNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "Yx1i");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "7OBj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent() {
          _classCallCheck(this, RegisterComponent);
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map