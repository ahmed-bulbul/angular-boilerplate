(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Xb":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-button{\r\n  background: linear-gradient(to right, #0a6323 0%, #de0f0f 100%);\r\n}\r\n\r\n\r\n\r\n\r\n/* [account-btn custom-button]   --> was default login button css class name*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBK0Q7QUFDakU7Ozs7O0FBS0EsNkVBQTZFIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwYTYzMjMgMCUsICNkZTBmMGYgMTAwJSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIFthY2NvdW50LWJ0biBjdXN0b20tYnV0dG9uXSAgIC0tPiB3YXMgZGVmYXVsdCBsb2dpbiBidXR0b24gY3NzIGNsYXNzIG5hbWUqL1xyXG4iXX0= */");

/***/ }),

/***/ "7OBj":
/*!*******************************************************!*\
  !*** ./src/app/login/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "SYwc":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-content\">\n  <!-- <a routerLink=\"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a> -->\n  <div class=\"container\">\n\n    <!-- Account Logo -->\n    <div class=\"account-logo\">\n      <a href=\"javascript:\"><img src=\"assets/img/logo2.png\" alt=\"Walton Digi-Tech Industries Ltd \"></a>\n    </div>\n    <!-- /Account Logo -->\n\n    <div class=\"account-box\">\n      <div class=\"account-wrapper\">\n        <h3 class=\"account-title\">Login</h3>\n        <p class=\"account-subtitle\">Welcome to Login Panel</p>\n\n        <!-- Account Form -->\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\">\n          <div class=\"form-group\">\n            <label>Username</label>\n            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.username.errors }\"\n              formControlName=\"username\" type=\"text\">\n            <div *ngIf=\"formSubmitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label>Password</label>\n              </div>\n            </div>\n            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.password.errors }\"\n              formControlName=\"password\" formControlName=\"password\" type=\"password\">\n            <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 4 characters</div>\n            </div>\n          </div>\n          <div class=\"form-group text-center\">\n\n            <button [disabled]=\"myForm.invalid\" class=\"btn btn-primary\" type=\"submit\">\n\n              <span *ngIf=\"!isLoading\">\n                Login\n              </span>\n\n              <span *ngIf=\"isLoading\" class=\"indicator-progress\" [style.display]=\"'block'\">\n                Please wait...\n                <span class=\"spinner-border spinner-border-sm align-middle ms-2\"></span>\n              </span>\n\n            </button>\n          </div>\n          <div class=\"account-footer\">\n            <!-- <p>Don't have an account yet? <a routerLink=\"/login/register\">Register</a></p> -->\n          </div>\n        </form>\n        <!-- /Account Form -->\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner> -->\n\n\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\n");

/***/ }),

/***/ "Wt6O":
/*!**************************************!*\
  !*** ./src/app/login/model/login.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
class Login {
}


/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "gEuR");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "xBNG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "Yx1i":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Wrapper -->\n<div class=\"main-wrapper\">\n    <div class=\"account-content\">\n        <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\n        <div class=\"container\">\n\n            <!-- Account Logo -->\n            <div class=\"account-logo\">\n                <a routerLink=\"/dashboard\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\n            </div>\n            <!-- /Account Logo -->\n\n            <div class=\"account-box\">\n                <div class=\"account-wrapper\">\n                    <h3 class=\"account-title\">Register</h3>\n                    <p class=\"account-subtitle\">Access to our dashboard</p>\n\n                    <!-- Account Form -->\n                    <form action=\"dashboard\">\n                        <div class=\"form-group\">\n                            <label>Email</label>\n                            <input class=\"form-control\" type=\"text\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input class=\"form-control\" type=\"password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Repeat Password</label>\n                            <input class=\"form-control\" type=\"password\">\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Register</button>\n                        </div>\n                        <div class=\"account-footer\">\n                            <p>Already have an account? <a routerLink = \"/login/login\">Login</a></p>\n                        </div>\n                    </form>\n                    <!-- /Account Form -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Main Wrapper -->");

/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "gEuR");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "xBNG");





const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "gEuR":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "SYwc");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "34Xb");
/* harmony import */ var _security_service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../security/service/localstorage.service */ "2w4D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/login */ "Wt6O");
/* harmony import */ var _services_login_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/login.services */ "z8ke");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);













let LoginComponent = class LoginComponent {
    constructor(formBuilder, toastr, loginService, router, spinnerService, localStorageService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.loginService = loginService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.localStorageService = localStorageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        this.formSubmitted = false;
        this.formData = new _model_login__WEBPACK_IMPORTED_MODULE_10__["Login"]();
    }
    ngOnInit() {
        if (this.localStorageService.isLoggedIn()) {
            this.router.navigate(['/dashboard/admin']);
        }
        this._initForm();
        //myForm data assign to formData variable
        this.myForm.valueChanges.subscribe(data => {
            this.formData = data;
        });
    }
    // Initialize form function
    _initForm() {
        this.myForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    get f() { return this.myForm.controls; }
    onSubmit() {
        this.login();
    }
    login() {
        this.isLoading = true;
        //set time 30 seconds
        this.loginService.login(this.formData).subscribe(data => {
            if (data['status'] === true) {
                console.log(data['user']);
                this.setToken(data['accessToken'], data['user']);
                // this.loginService.loginStatusSubject.next(true);
                this.setObserver();
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    // login success position right top small
                    icon: 'success',
                    title: 'Login Successful',
                    text: data['message'],
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.router.navigate(['/dashboard/admin']);
                });
                this.isLoading = false;
            }
            else {
                this.isLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: data['message'],
                });
            }
        }, error => {
            this.isLoading = false;
            console.log(error);
        });
    }
    setObserver() {
        this.loginService.loginStatusSubject.next(true);
        this.loginService.currentUserSubject.next(this.localStorageService.getUser());
    }
    //set token and user
    setToken(token, user) {
        this.localStorageService.setToken(token);
        this.localStorageService.setUser(user);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _services_login_services__WEBPACK_IMPORTED_MODULE_11__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _security_service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
        _services_login_services__WEBPACK_IMPORTED_MODULE_11__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _security_service_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
], LoginComponent);



/***/ }),

/***/ "xBNG":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "Yx1i");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "7OBj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map