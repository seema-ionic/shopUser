(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamicModule-dynamic-iframe-dynamic-iframe-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDynamicModuleDynamicIframeDynamicIframePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>dynamicIframe</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"closeDiv\" slot=\"fixed\">\n    <ion-icon name=\"close\" tappable (click)=\"hideIframe()\"></ion-icon>\n  </div>\n  \n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <iframe name= \"eventsPage\" [src]=\"iframeLink | safe\" allowfullscreen></iframe>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/dynamicModule/dynamic-iframe/dynamic-iframe-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: DynamicIframePageRoutingModule */

    /***/
    function srcAppDynamicModuleDynamicIframeDynamicIframeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicIframePageRoutingModule", function () {
        return DynamicIframePageRoutingModule;
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


      var _dynamic_iframe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dynamic-iframe.page */
      "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.ts");

      var routes = [{
        path: '',
        component: _dynamic_iframe_page__WEBPACK_IMPORTED_MODULE_3__["DynamicIframePage"]
      }];

      var DynamicIframePageRoutingModule = function DynamicIframePageRoutingModule() {
        _classCallCheck(this, DynamicIframePageRoutingModule);
      };

      DynamicIframePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DynamicIframePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DynamicIframePageModule */

    /***/
    function srcAppDynamicModuleDynamicIframeDynamicIframeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicIframePageModule", function () {
        return DynamicIframePageModule;
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


      var _dynamic_iframe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dynamic-iframe-routing.module */
      "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe-routing.module.ts");
      /* harmony import */


      var _dynamic_iframe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dynamic-iframe.page */
      "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var DynamicIframePageModule = function DynamicIframePageModule() {
        _classCallCheck(this, DynamicIframePageModule);
      };

      DynamicIframePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dynamic_iframe_routing_module__WEBPACK_IMPORTED_MODULE_5__["DynamicIframePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_dynamic_iframe_page__WEBPACK_IMPORTED_MODULE_6__["DynamicIframePage"]]
      })], DynamicIframePageModule);
      /***/
    },

    /***/
    "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDynamicModuleDynamicIframeDynamicIframePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".closeDiv {\n  font-size: 35px;\n  color: #fff;\n  width: 30%;\n  padding: 10px 20px 0px 20px;\n  text-align: right;\n  margin-left: 70%;\n  z-index: 9;\n}\n\niframe {\n  border: 0px solid #1E2A63;\n  width: 100%;\n  height: 100vh;\n  z-index: 2;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY01vZHVsZS9keW5hbWljLWlmcmFtZS9keW5hbWljLWlmcmFtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxlQUFBO0VBQWUsV0FBQTtFQUFXLFVBQUE7RUFBVSwyQkFBQTtFQUEyQixpQkFBQTtFQUNyRSxnQkFBQTtFQUFnQixVQUFBO0FBT3BCOztBQUxBO0VBQU8seUJBQUE7RUFBeUIsV0FBQTtFQUFXLGFBQUE7RUFBYSxVQUFBO0VBQVUsa0JBQUE7QUFhbEUiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljTW9kdWxlL2R5bmFtaWMtaWZyYW1lL2R5bmFtaWMtaWZyYW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZURpdntmb250LXNpemU6MzVweDtjb2xvcjojZmZmO3dpZHRoOjMwJTtwYWRkaW5nOjEwcHggMjBweCAwcHggMjBweDt0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OjcwJTt6LWluZGV4Ojk7XG59XG5pZnJhbWV7Ym9yZGVyOjBweCBzb2xpZCAjMUUyQTYzO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHZoO3otaW5kZXg6Mjtwb3NpdGlvbjpyZWxhdGl2ZTt9Il19 */";
      /***/
    },

    /***/
    "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.ts ***!
      \*********************************************************************/

    /*! exports provided: DynamicIframePage */

    /***/
    function srcAppDynamicModuleDynamicIframeDynamicIframePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicIframePage", function () {
        return DynamicIframePage;
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


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var DynamicIframePage = /*#__PURE__*/function () {
        function DynamicIframePage(router, storageService, zone, apiservices, sendData, location) {
          _classCallCheck(this, DynamicIframePage);

          this.router = router;
          this.storageService = storageService;
          this.zone = zone;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.location = location; // below data is comming from Tab1Page,Tab2Page & SideMenuPage

          this.iframeLink = this.sendData.dynamicIframeData;
          console.log("get iframe link and data==", this.iframeLink);
        }

        _createClass(DynamicIframePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hideIframe",
          value: function hideIframe() {
            var _this = this;

            this.zone.run(function () {
              _this.location.back();
            });
          }
        }]);

        return DynamicIframePage;
      }();

      DynamicIframePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }];
      };

      DynamicIframePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-iframe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dynamic-iframe.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dynamic-iframe.page.scss */
        "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.page.scss"))["default"]]
      })], DynamicIframePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dynamicModule-dynamic-iframe-dynamic-iframe-module-es5.js.map