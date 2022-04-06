(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-hr-policy-category-hr-policy-category-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHrPolicyModuleHrPolicyCategoryHrPolicyCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngFor=\"let item of hrPolicyListCategory\" class=\"ion-padding-bottom\">\n    <ion-row  tappable (click)=\"hrpolicyListFun(item)\" class=\"brderRow padd03\">\n      <ion-col [size]=\"11\">\n        <p [innerHTML]=\"item?.category_title\" class=\"ion-no-margin font15\"></p>\n      </ion-col>\n      <ion-col [size]=\"1\" class=\"autoMargin\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-category/hr-policy-category-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: HrPolicyCategoryPageRoutingModule */

    /***/
    function srcAppHrPolicyModuleHrPolicyCategoryHrPolicyCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyCategoryPageRoutingModule", function () {
        return HrPolicyCategoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _hr_policy_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hr-policy-category.page */
      "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.ts");

      var routes = [{
        path: '',
        component: _hr_policy_category_page__WEBPACK_IMPORTED_MODULE_3__["HrPolicyCategoryPage"]
      }];

      var HrPolicyCategoryPageRoutingModule = function HrPolicyCategoryPageRoutingModule() {
        _classCallCheck(this, HrPolicyCategoryPageRoutingModule);
      };

      HrPolicyCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HrPolicyCategoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.module.ts ***!
      \********************************************************************************/

    /*! exports provided: HrPolicyCategoryPageModule */

    /***/
    function srcAppHrPolicyModuleHrPolicyCategoryHrPolicyCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyCategoryPageModule", function () {
        return HrPolicyCategoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _hr_policy_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hr-policy-category-routing.module */
      "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category-routing.module.ts");
      /* harmony import */


      var _hr_policy_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hr-policy-category.page */
      "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.ts");

      var HrPolicyCategoryPageModule = function HrPolicyCategoryPageModule() {
        _classCallCheck(this, HrPolicyCategoryPageModule);
      };

      HrPolicyCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hr_policy_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["HrPolicyCategoryPageRoutingModule"]],
        declarations: [_hr_policy_category_page__WEBPACK_IMPORTED_MODULE_6__["HrPolicyCategoryPage"]]
      })], HrPolicyCategoryPageModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHrPolicyModuleHrPolicyCategoryHrPolicyCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".brderRow {\n  border-bottom: 1px solid var(--headerColor);\n}\n\n.padd03 {\n  padding: 3px;\n}\n\n.font15 {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcG9saWN5LWNhdGVnb3J5L2hyLXBvbGljeS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSwyQ0FBQTtBQUVWOztBQUlBO0VBQVEsWUFBQTtBQUFSOztBQUNBO0VBQVEsZUFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcG9saWN5LWNhdGVnb3J5L2hyLXBvbGljeS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJkZXJSb3d7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTt9XG4vLyAuYnJkZXJSb3c6bGFzdC1jaGlsZCB7Ym9yZGVyOiBub25lO31cbi8vIC5icmRlclJvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCByZWQ7fVxuLy8gLmJyZGVyUm93Om50aC1sYXN0LWNoaWxkKDEpIHtcbi8vICAgYm9yZGVyOm5vbmU7XG4vLyB9XG4ucGFkZDAze3BhZGRpbmc6IDNweDt9XG4uZm9udDE1e2ZvbnQtc2l6ZTogMTVweDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.ts ***!
      \******************************************************************************/

    /*! exports provided: HrPolicyCategoryPage */

    /***/
    function srcAppHrPolicyModuleHrPolicyCategoryHrPolicyCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyCategoryPage", function () {
        return HrPolicyCategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");

      var HrPolicyCategoryPage = /*#__PURE__*/function () {
        function HrPolicyCategoryPage(apiservices, router, zone, menuCtrl, sendData, storageService) {
          _classCallCheck(this, HrPolicyCategoryPage);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.storageService = storageService;
        }

        _createClass(HrPolicyCategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hrPolicyFunc();
          }
        }, {
          key: "hrPolicyFunc",
          value: function hrPolicyFunc() {
            var _this = this;

            this.zone.run(function () {
              console.log("HrPolicy List api call function");
              var apikey = {};

              _this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicyCategoryApi, apikey).subscribe(function (result) {
                console.log("HrPolicy List api result==", result);
                _this.pageHeader = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  _this.hrPolicyListCategoryData = result.data;
                  _this.hrPolicyListCategory = _this.hrPolicyListCategoryData.hrpolicy;
                  console.log("HrPolicy List Infinite Scroll if1==", _this.hrPolicyListCategory);
                } else {
                  _this.errorMessage = result.message;
                  _this.no_data_message = result.data.settings.no_data_msg; // this.showErrorImage=result.data.settings.no_data_image;
                }
              }, function (err) {
                _this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "hrpolicyListFun",
          value: function hrpolicyListFun(item) {
            this.sendData.alldata = item;
            this.router.navigate(['/hr-policy-list']);
          }
        }]);

        return HrPolicyCategoryPage;
      }();

      HrPolicyCategoryPage.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }];
      };

      HrPolicyCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-policy-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hr-policy-category.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hr-policy-category.page.scss */
        "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.page.scss"))["default"]]
      })], HrPolicyCategoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hrPolicyModule-hr-policy-category-hr-policy-category-module-es5.js.map