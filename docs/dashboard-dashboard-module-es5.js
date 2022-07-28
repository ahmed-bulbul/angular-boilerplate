(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "1nQK":
    /*!**********************************************************************************!*\
      !*** ./node_modules/angular-morris-js/__ivy_ngcc__/esm2015/angular-morris-js.js ***!
      \**********************************************************************************/

    /*! exports provided: MorrisChartDirective, MorrisJsModule */

    /***/
    function nQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisChartDirective", function () {
        return MorrisChartDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisJsModule", function () {
        return MorrisJsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MorrisChartDirective = /*#__PURE__*/function () {
        function MorrisChartDirective(elementRef, ngZone) {
          _classCallCheck(this, MorrisChartDirective);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.window = window;
          this.type = 'Line';
          this.clickChart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MorrisChartDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._options = Object.assign({}, this.options);
            this._options.element = this.elementRef.nativeElement;
            this._options.data = this.data;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            if (!this.window.Morris) {
              throw new Error('Please include node_modules/morris.js/morris.js');
            } else {
              this.ngZone.runOutsideAngular(function () {
                _this.chartInstance = new _this.window.Morris[_this.type](_this._options);

                _this.chartInstance.on('click', function (i, row) {
                  _this.clickChart.emit({
                    event: event,
                    i: i,
                    row: row
                  });
                });
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["data"] && !changes["data"].firstChange || changes["options"] && !changes["options"].firstChange) {
              Object.assign(this.chartInstance.options, this.options);
              this.chartInstance.setData(this.data);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.chartInstance.el.empty instanceof Function) {
              this.chartInstance.el.empty();
            }
          }
        }]);

        return MorrisChartDirective;
      }();

      MorrisChartDirective.ɵfac = function MorrisChartDirective_Factory(t) {
        return new (t || MorrisChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MorrisChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MorrisChartDirective,
        selectors: [["", "mk-morris-js", ""]],
        inputs: {
          type: "type",
          options: "options",
          data: "data"
        },
        outputs: {
          clickChart: "clickChart"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MorrisChartDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MorrisChartDirective.propDecorators = {
        "type": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "options": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "data": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "clickChart": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisChartDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mk-morris-js]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MorrisJsModule = function MorrisJsModule() {
        _classCallCheck(this, MorrisJsModule);
      };

      MorrisJsModule.ɵfac = function MorrisJsModule_Factory(t) {
        return new (t || MorrisJsModule)();
      };

      MorrisJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MorrisJsModule
      });
      MorrisJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MorrisJsModule, {
          declarations: [MorrisChartDirective],
          exports: [MorrisChartDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisJsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MorrisChartDirective],
            exports: [MorrisChartDirective]
          }]
        }], null, null);
      })(); //# sourceMappingURL=angular-morris-js.js.map

      /***/

    },

    /***/
    "C3Jh":
    /*!***********************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.module.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function C3Jh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "vG3P");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.component */
      "VqlG");
      /* harmony import */


      var _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/admin/admin-dashboard.component */
      "utP8");
      /* harmony import */


      var angular_morris_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-morris-js */
      "1nQK");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], angular_morris_js__WEBPACK_IMPORTED_MODULE_6__["MorrisJsModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "IqOy":
    /*!***************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function IqOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "KSHi":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/dashboard/components/admin/admin-dashboard.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KSHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n  <!-- Page Header -->\n  <div class=\"page-header\">\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <h3 class=\"page-title\">Welcome, {{currentUserSubject?.username}}</h3>\n              <ul class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item active\">Dashboard</li>\n              </ul>\n          </div>\n      </div>\n  </div>\n  <!-- /Page Header -->\n\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\n          <div class=\"card dash-widget\">\n              <div class=\"card-body\">\n                  <span class=\"dash-widget-icon\"><i class=\"fa fa-ticket\"></i></span>\n                  <div class=\"dash-widget-info\">\n                      <h3>112</h3>\n                      <span>Total</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\n        <div class=\"card dash-widget\">\n            <div class=\"card-body\">\n                <span class=\"dash-widget-icon\"><i class=\"fa fa-save\"></i></span>\n                <div class=\"dash-widget-info\">\n                    <h3>12</h3>\n                    <span>Received</span>\n                </div>\n            </div>\n        </div>\n    </div>\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\n          <div class=\"card dash-widget\">\n              <div class=\"card-body\">\n                  <span class=\"dash-widget-icon\"><i class=\"fa fa-pause\"></i></span>\n                  <div class=\"dash-widget-info\">\n                      <h3>456</h3>\n                      <span>Hold</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\n          <div class=\"card dash-widget\">\n              <div class=\"card-body\">\n                  <span class=\"dash-widget-icon\"><i class=\"fa fa-check\"></i></span>\n                  <div class=\"dash-widget-info\">\n                      <h3>345</h3>\n                      <span>Resolved</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\n      <div class=\"card dash-widget\">\n          <div class=\"card-body\">\n              <span class=\"dash-widget-icon\"><i class=\"fa fa-stop\"></i></span>\n              <div class=\"dash-widget-info\">\n                  <h3>10</h3>\n                  <span>Ternimated</span>\n              </div>\n          </div>\n      </div>\n  </div>\n  </div>\n</div>\n<!-- /Page Content -->\n";
      /***/
    },

    /***/
    "VqlG":
    /*!**************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function VqlG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "uyBo");
      /* harmony import */


      var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.css */
      "IqOy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(ngZone, router) {
          var _this2 = this;

          _classCallCheck(this, DashboardComponent);

          this.ngZone = ngZone;
          this.router = router;

          window.onresize = function (e) {
            _this2.ngZone.run(function () {
              _this2.innerHeight = window.innerHeight + "px";
            });
          };

          this.getScreenHeight();
        }

        _createClass(DashboardComponent, [{
          key: "getScreenHeight",
          value: function getScreenHeight() {
            this.innerHeight = window.innerHeight + "px";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = event.target.innerHeight + "px";
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DashboardComponent);
      /***/
    },

    /***/
    "maB8":
    /*!**************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/admin/admin-dashboard.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function maB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "utP8":
    /*!*************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/admin/admin-dashboard.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function utP8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "KSHi");
      /* harmony import */


      var _admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-dashboard.component.css */
      "maB8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_login_services_login_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/login/services/login.services */
      "z8ke");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent(router, loginService) {
          var _this3 = this;

          _classCallCheck(this, AdminDashboardComponent);

          this.router = router;
          this.loginService = loginService;
          this.loginStatusSubject = false;
          this.loginService.loginStatusSubject.subscribe(function (res) {
            _this3.loginStatusSubject = res;
          }, function (err) {
            console.log(err);
          });
          this.loginService.currentUserSubject.subscribe(function (res) {
            _this3.currentUserSubject = res;
          }, function (err) {
            console.log(err);
          });
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_login_services_login_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }];
      };

      AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-dashboard',
        template: _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_login_services_login_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])], AdminDashboardComponent);
      /***/
    },

    /***/
    "uyBo":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/dashboard/dashboard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uyBo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\n  <router-outlet></router-outlet>\n  </div>\n  <!-- /Page Wrapper -->\n";
      /***/
    },

    /***/
    "vG3P":
    /*!*******************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function vG3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/admin/admin-dashboard.component */
      "utP8");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.component */
      "VqlG");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        children: [{
          path: 'admin',
          component: _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
        }]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map