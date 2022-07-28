(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["errorpages-errorpages-module"],{

/***/ "9ckT":
/*!*************************************************!*\
  !*** ./src/app/errorpages/errorpages.module.ts ***!
  \*************************************************/
/*! exports provided: ErrorpagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpagesModule", function() { return ErrorpagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _errorpages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorpages-routing.module */ "TC0b");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error404/error404.component */ "BBpO");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error500/error500.component */ "ClmY");






let ErrorpagesModule = class ErrorpagesModule {
};
ErrorpagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__["Error500Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _errorpages_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorpagesRoutingModule"]
        ]
    })
], ErrorpagesModule);



/***/ }),

/***/ "BBpO":
/*!***********************************************************!*\
  !*** ./src/app/errorpages/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "EL05");
/* harmony import */ var _error404_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404.component.css */ "djhM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
    }
};
Error404Component.ctorParameters = () => [];
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error404',
        template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error404Component);



/***/ }),

/***/ "ClmY":
/*!***********************************************************!*\
  !*** ./src/app/errorpages/error500/error500.component.ts ***!
  \***********************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error500.component.html */ "bWn9");
/* harmony import */ var _error500_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error500.component.css */ "sL4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() {
    }
};
Error500Component.ctorParameters = () => [];
Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error500',
        template: _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error500_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error500Component);



/***/ }),

/***/ "EL05":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errorpages/error404/error404.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Wrapper -->\n<div class=\"error-page\">\n    <div class=\"main-wrapper\">\n\n        <div class=\"error-box\">\n            <h1>404</h1>\n            <h3><i class=\"fa fa-warning\"></i> Oops! Page not found!</h3>\n            <p>The page you requested was not found.</p>\n            <a routerLink=\"/dashboard\" class=\"btn btn-custom\">Back to Home</a>\n        </div>\n\n    </div>\n</div>\n<!-- /Main Wrapper -->");

/***/ }),

/***/ "TC0b":
/*!*********************************************************!*\
  !*** ./src/app/errorpages/errorpages-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorpagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpagesRoutingModule", function() { return ErrorpagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404/error404.component */ "BBpO");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error500/error500.component */ "ClmY");





const routes = [
    {
        path: "error404",
        component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"]
    },
    {
        path: "error500",
        component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__["Error500Component"]
    }
];
let ErrorpagesRoutingModule = class ErrorpagesRoutingModule {
};
ErrorpagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ErrorpagesRoutingModule);



/***/ }),

/***/ "bWn9":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errorpages/error500/error500.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Wrapper -->\n<div class=\"error-page\">\n\n    <div class=\"main-wrapper\">\n\n        <div class=\"error-box\">\n            <h1>500</h1>\n            <h3><i class=\"fa fa-warning\"></i> Oops! Something went wrong</h3>\n            <p>The page you requested was not found.</p>\n            <a routerLink=\"/dashboard\" class=\"btn btn-custom\">Back to Home</a>\n        </div>\n    </div>\n</div>\n<!-- /Main Wrapper -->");

/***/ }),

/***/ "djhM":
/*!************************************************************!*\
  !*** ./src/app/errorpages/error404/error404.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "sL4x":
/*!************************************************************!*\
  !*** ./src/app/errorpages/error500/error500.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=errorpages-errorpages-module-es2015.js.map