(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"], {
    /***/
    "+C7y":
    /*!*******************************************************!*\
      !*** ./src/app/all-modules/sales/sales.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function C7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiA4MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "H0om":
    /*!***********************************************************!*\
      !*** ./src/app/all-modules/sales/sales-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SalesRoutingModule */

    /***/
    function H0om(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function () {
        return SalesRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sales.component */
      "JN7Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _sales_component__WEBPACK_IMPORTED_MODULE_1__["SalesComponent"],
        children: []
      }];

      var SalesRoutingModule = function SalesRoutingModule() {
        _classCallCheck(this, SalesRoutingModule);
      };

      SalesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], SalesRoutingModule);
      /***/
    },

    /***/
    "JN7Y":
    /*!******************************************************!*\
      !*** ./src/app/all-modules/sales/sales.component.ts ***!
      \******************************************************/

    /*! exports provided: SalesComponent */

    /***/
    function JN7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
        return SalesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sales.component.html */
      "y1oN");
      /* harmony import */


      var _sales_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sales.component.css */
      "+C7y");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SalesComponent = /*#__PURE__*/function () {
        function SalesComponent(route, router, http) {
          _classCallCheck(this, SalesComponent);

          this.route = route;
          this.router = router;
          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
          this.salesData = [];
        }

        _createClass(SalesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSales();
          } //call api

        }, {
          key: "getSales",
          value: function getSales() {
            var _this = this;

            this.http.get(this.baseUrl + '/api/v1/sales/getAll').subscribe(function (res) {
              _this.salesData = res.data;
              console.log(_this.salesData);
            });
          }
        }]);

        return SalesComponent;
      }();

      SalesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      SalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-sales',
        template: _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sales_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], SalesComponent);
      /***/
    },

    /***/
    "f40N":
    /*!***************************************************!*\
      !*** ./src/app/all-modules/sales/sales.module.ts ***!
      \***************************************************/

    /*! exports provided: SalesModule */

    /***/
    function f40N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesModule", function () {
        return SalesModule;
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


      var _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sales-routing.module */
      "H0om");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sales.component */
      "JN7Y");

      var SalesModule = function SalesModule() {
        _classCallCheck(this, SalesModule);
      };

      SalesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_7__["SalesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      })], SalesModule);
      /***/
    },

    /***/
    "y1oN":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/sales/sales.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function y1oN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n  <!-- Show data on table -->\n<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"card\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Sales</h4>\n              <h6 class=\"card-subtitle\">Sales</h6>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                      <thead>\n                          <tr>\n                              <th>#ID</th>\n                              <th>productId</th>\n                              <th>quantity</th>\n                              <th>totalPrice</th>\n                              <th>discount</th>\n                              <th>totalPriceAfterDiscount</th>\n                              <th>totalPriceAfterTax</th>\n                              <th>tax</th>\n                              <th>Created At </th>\n                              <th>Updated At </th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let sale of salesData\">\n                              <td>{{sale.id}}</td>\n                              <td>{{sale.productId}}</td>\n                              <td>{{sale.quantity}}</td>\n                              <td>{{sale.totalPrice}}</td>\n                              <td>{{sale.discount}}</td>\n                              <td>{{sale.totalPriceAfterDiscount}}</td>\n                              <td>{{sale.totalPriceAfterTax}}</td>\n                              <td>{{sale.tax}}</td>\n                              <td>{{sale.createdAt | date:'dd-MM-yyyy hh:mm:ss a'}}</td>\n                              <td>{{sale.updatedAt | date:'dd-MM-yyyy hh:mm:ss a'}}</td>\n                              <td>\n                                  <a class=\"btn btn-primary\" (click)=\"editSale(sale)\">Edit</a>\n                                  <a class=\"btn btn-danger\" (click)=\"deleteSale(sale)\">Delete</a>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n\n</div>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sales-sales-module-es5.js.map