(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["IdeaBoxModule-idea-history-idea-history-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea-history/idea-history.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea-history/idea-history.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppIdeaBoxModuleIdeaHistoryIdeaHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{history?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngFor=\"let item of historyData; let i=index;\"  class=\"btmBorder\">\n    <ion-col [size]=\"12\" tappable (click)=\"showData(i)\">\n      <ion-row>\n        <ion-col [size]=\"8\" class=\"ion-no-padding\"><p class=\"ion-no-margin ion-margin-top\">{{item?.category_name}}</p></ion-col>\n        <ion-col [size]=\"4\" class=\"ion-no-padding\"><p class=\"ion-no-margin ion-margin-top\">{{item?.suggested_date}}</p></ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col [size]=\"12\" *ngIf=\"currentItemindex==i\">\n      <img *ngIf=\"item?.media_type==1\" [src]=\"item?.media\" class=\"mediaCss\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      <iframe *ngIf=\"item?.media_type==4\" [src]=\"item?.media|safe\"></iframe>\n      <p class=\"ion-no-margin ideaText\" [innerHTML]=\"item?.idea\"></p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea-history/idea-history-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea-history/idea-history-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: IdeaHistoryPageRoutingModule */

    /***/
    function srcAppIdeaBoxModuleIdeaHistoryIdeaHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaHistoryPageRoutingModule", function () {
        return IdeaHistoryPageRoutingModule;
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


      var _idea_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./idea-history.page */
      "./src/app/IdeaBoxModule/idea-history/idea-history.page.ts");

      var routes = [{
        path: '',
        component: _idea_history_page__WEBPACK_IMPORTED_MODULE_3__["IdeaHistoryPage"]
      }];

      var IdeaHistoryPageRoutingModule = function IdeaHistoryPageRoutingModule() {
        _classCallCheck(this, IdeaHistoryPageRoutingModule);
      };

      IdeaHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IdeaHistoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea-history/idea-history.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea-history/idea-history.module.ts ***!
      \*******************************************************************/

    /*! exports provided: IdeaHistoryPageModule */

    /***/
    function srcAppIdeaBoxModuleIdeaHistoryIdeaHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaHistoryPageModule", function () {
        return IdeaHistoryPageModule;
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


      var _idea_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./idea-history-routing.module */
      "./src/app/IdeaBoxModule/idea-history/idea-history-routing.module.ts");
      /* harmony import */


      var _idea_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./idea-history.page */
      "./src/app/IdeaBoxModule/idea-history/idea-history.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var IdeaHistoryPageModule = function IdeaHistoryPageModule() {
        _classCallCheck(this, IdeaHistoryPageModule);
      };

      IdeaHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _idea_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeaHistoryPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_idea_history_page__WEBPACK_IMPORTED_MODULE_6__["IdeaHistoryPage"]]
      })], IdeaHistoryPageModule);
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea-history/idea-history.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea-history/idea-history.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppIdeaBoxModuleIdeaHistoryIdeaHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btmBorder {\n  border-bottom: 1px solid #b7b6b6;\n}\n\n.btmBorder:nth-last-child(1) {\n  border-bottom: 0px solid gray;\n}\n\n.mediaCss {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.ideaText {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSWRlYUJveE1vZHVsZS9pZGVhLWhpc3RvcnkvaWRlYS1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGdDQUFBO0FBRVg7O0FBREE7RUFBNkIsNkJBQUE7QUFLN0I7O0FBSkE7RUFBVSxhQUFBO0VBQWMsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFVcEM7O0FBVEE7RUFBVSxXQUFBO0VBQVksZUFBQTtBQWN0QiIsImZpbGUiOiJzcmMvYXBwL0lkZWFCb3hNb2R1bGUvaWRlYS1oaXN0b3J5L2lkZWEtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRtQm9yZGVye2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjdiNmI2O31cbi5idG1Cb3JkZXI6bnRoLWxhc3QtY2hpbGQoMSl7Ym9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGdyYXk7fVxuLm1lZGlhQ3Nze2hlaWdodDogMTUwcHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY29udGFpbjt9XG4uaWRlYVRleHR7Y29sb3I6IGdyYXk7Zm9udC1zaXplOiAxNHB4O30iXX0= */";
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea-history/idea-history.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea-history/idea-history.page.ts ***!
      \*****************************************************************/

    /*! exports provided: IdeaHistoryPage */

    /***/
    function srcAppIdeaBoxModuleIdeaHistoryIdeaHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaHistoryPage", function () {
        return IdeaHistoryPage;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var IdeaHistoryPage = /*#__PURE__*/function () {
        function IdeaHistoryPage(zone, localStorage, apiservices) {
          _classCallCheck(this, IdeaHistoryPage);

          this.zone = zone;
          this.localStorage = localStorage;
          this.apiservices = apiservices;
          this.showMedia = false;
        }

        _createClass(IdeaHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.HistoryList();
          }
        }, {
          key: "HistoryList",
          value: function HistoryList() {
            var _this = this;

            this.apiservices.showLoader();
            this.zone.run(function () {
              _this.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  "employee_id": stored.employeeID
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].ideaHistoryApi, apiKey).subscribe(function (result) {
                  _this.apiservices.hideLoader();

                  console.log("resend OTP by Voice Call, api response==", result);
                  _this.history = result;

                  if (result.status == 1 || result.status == '1') {
                    _this.historyData = result.data;
                  } else {
                    _this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this.apiservices.hideLoader();

                  _this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "showData",
          value: function showData(ind) {
            this.currentItemindex = ind; // if(this.showMedia==true){
            //   this.showMedia=false;
            //   // item.showSegment = item.showSegment == true ? false : true;
            // }else{
            //   this.showMedia=true; 
            // }
          }
        }]);

        return IdeaHistoryPage;
      }();

      IdeaHistoryPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }];
      };

      IdeaHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./idea-history.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea-history/idea-history.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./idea-history.page.scss */
        "./src/app/IdeaBoxModule/idea-history/idea-history.page.scss"))["default"]]
      })], IdeaHistoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=IdeaBoxModule-idea-history-idea-history-module-es5.js.map