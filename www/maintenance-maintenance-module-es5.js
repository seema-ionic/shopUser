(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMaintenanceMaintenancePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- alldata?.bgColor -->\n<ion-content [style.--background]=\"'var(--headerLightColor)'\">\n  <div *ngIf=\"alldata\">\n    <div class=\"maintenanceholder\">\n      <img src=\"{{alldata?.alert_icon}}\"class=\"imgicon\"/>\n      <h2 class=\"redText\">{{alldata?.maintaince_title}}</h2>\n      <br>\n      <h4 class=\"yellowText\" [innerHTML]=\"alldata?.maintainence_subtitle\"></h4> \n      <br>\n      <h5 class=\"blackText\">{{alldata?.maintainence_message}}</h5>\n    </div>\n    <img src=\"{{alldata?.maintainence_image}}\"class=\"maintenanceImg\"/>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/maintenance/maintenance-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MaintenancePageRoutingModule */

    /***/
    function srcAppMaintenanceMaintenanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageRoutingModule", function () {
        return MaintenancePageRoutingModule;
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


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maintenance.page */
      "./src/app/maintenance/maintenance.page.ts");

      var routes = [{
        path: '',
        component: _maintenance_page__WEBPACK_IMPORTED_MODULE_3__["MaintenancePage"]
      }];

      var MaintenancePageRoutingModule = function MaintenancePageRoutingModule() {
        _classCallCheck(this, MaintenancePageRoutingModule);
      };

      MaintenancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MaintenancePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/maintenance/maintenance.module.ts ***!
      \***************************************************/

    /*! exports provided: MaintenancePageModule */

    /***/
    function srcAppMaintenanceMaintenanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageModule", function () {
        return MaintenancePageModule;
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


      var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maintenance-routing.module */
      "./src/app/maintenance/maintenance-routing.module.ts");
      /* harmony import */


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./maintenance.page */
      "./src/app/maintenance/maintenance.page.ts");

      var MaintenancePageModule = function MaintenancePageModule() {
        _classCallCheck(this, MaintenancePageModule);
      };

      MaintenancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenancePageRoutingModule"]],
        declarations: [_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["MaintenancePage"]]
      })], MaintenancePageModule);
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/maintenance/maintenance.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMaintenanceMaintenancePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maintenanceholder {\n  text-align: center;\n  margin-top: 8%;\n}\n.maintenanceholder .imgicon {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.maintenanceholder .redText {\n  color: var(--redTextColor);\n  font-weight: bold;\n}\n.maintenanceholder .yellowText {\n  color: var(--yellowTextColor);\n  font-weight: 600;\n}\n.maintenanceholder .blackText {\n  color: var(--blackTextColor);\n  font-weight: 600;\n}\n.maintenanceImg {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW1CLGtCQUFBO0VBQWtCLGNBQUE7QUFHckM7QUFGSTtFQUFTLFlBQUE7RUFBWSxXQUFBO0VBQVcsc0JBQUE7S0FBQSxtQkFBQTtBQU9wQztBQU5JO0VBQVMsMEJBQUE7RUFBMEIsaUJBQUE7QUFVdkM7QUFUSTtFQUFZLDZCQUFBO0VBQTZCLGdCQUFBO0FBYTdDO0FBWkk7RUFBVyw0QkFBQTtFQUE0QixnQkFBQTtBQWdCM0M7QUFkQTtFQUFnQixrQkFBQTtFQUFrQixXQUFBO0VBQVcsVUFBQTtFQUFVLFdBQUE7RUFBVyxZQUFBO0FBc0JsRSIsImZpbGUiOiJzcmMvYXBwL21haW50ZW5hbmNlL21haW50ZW5hbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWludGVuYW5jZWhvbGRlcnt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjglO1xuICAgIC5pbWdpY29ue2hlaWdodDo1MHB4O3dpZHRoOjUwcHg7b2JqZWN0LWZpdDpjb250YWluO31cbiAgICAucmVkVGV4dHtjb2xvcjp2YXIoLS1yZWRUZXh0Q29sb3IpO2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgIC55ZWxsb3dUZXh0e2NvbG9yOnZhcigtLXllbGxvd1RleHRDb2xvcik7Zm9udC13ZWlnaHQ6NjAwO31cbiAgICAuYmxhY2tUZXh0e2NvbG9yOnZhcigtLWJsYWNrVGV4dENvbG9yKTtmb250LXdlaWdodDo2MDA7fVxufVxuLm1haW50ZW5hbmNlSW1ne3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowcHg7cmlnaHQ6MHB4O3dpZHRoOjEwMCU7cGFkZGluZzo2cHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/maintenance/maintenance.page.ts ***!
      \*************************************************/

    /*! exports provided: MaintenancePage */

    /***/
    function srcAppMaintenanceMaintenancePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePage", function () {
        return MaintenancePage;
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


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var MaintenancePage = /*#__PURE__*/function () {
        function MaintenancePage(sendData) {
          _classCallCheck(this, MaintenancePage);

          this.sendData = sendData;
        }

        _createClass(MaintenancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.alldata = this.sendData.myParam.allData;
            console.log("maintenace data comming form home forceUpdateApi== ", this.alldata);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // this.menu.swipeEnable(true);
            this.unregisterBackButtonAction && this.unregisterBackButtonAction();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // this.menu.swipeEnable(false);
            // this.initializeBackButtonCustomHandler();
            console.log("[1] will enter fired");
          }
        }]);

        return MaintenancePage;
      }();

      MaintenancePage.ctorParameters = function () {
        return [{
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"]
        }];
      };

      MaintenancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./maintenance.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./maintenance.page.scss */
        "./src/app/maintenance/maintenance.page.scss"))["default"]]
      })], MaintenancePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=maintenance-maintenance-module-es5.js.map