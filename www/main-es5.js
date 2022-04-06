(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy namespace object ***!
      \************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCordovaPluginFcmWithDependecyUpdatedIonicNgxNode_modulesAngularCoreFesm2015LazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\n    <ion-content class=\"test\">\n      <!-- this css is for show sideMenu List Start -->\n      <div class=\"sideMenuListDiv\">\n        <div class=\"headLogoDiv\">\n          <ion-row>\n            <ion-col [size]=\"10\" class=\"autoMargin ion-text-left\">\n              <ion-row class=\"doubleLogo ion-padding-vertical\">\n                <ion-col [size]=\"12\" class=\"autoMargin\">\n                  <img [src]=\"apiservices.sideMenuHeaderLogo\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col [size]=\"2\" class=\"autoMargin ion-text-right\" tappable (click)=\"hideSideMenu()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"sideList\">\n          <div *ngFor=\"let listData of apiservices?.sideMenuList\" >\n            <ion-row tappable (click)=\"goToPage(listData)\">\n              <ion-col [size]=\"2\" class=\"ion-text-center\"><img [src]=\"listData?.icon\"></ion-col>\n              <ion-col [size]=\"10\" class=\"autoMargin\"><p>{{listData?.name}}</p></ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <!-- this css is for show sideMenu List End -->\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\" [swipeGesture]=\"false\"></ion-router-outlet>\n\n  <div *ngIf=\"showNetworkDiv==true\">\n    <!-- <div class=\"trasparentNetworkDIV\"></div> -->\n    <div class=\"otherText\">\n      <div class=\"allTextDiv\">\n        <img src=\"assets/icon/internetDisconnected.png\">\n        <h5>No Internet Connection</h5>\n        <h6>Check your connection, then refresh the page.</h6>\n        <ion-row>\n          <ion-col [push]=\"2\" [size]=\"8\">\n            <ion-button tappable (click)=\"networkAvailability('click')\" class=\"dynamicButtonOutline\">Refresh</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  \n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVideoModalVideoModalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background:#000;\">\n    <!-- <ion-title>videoModal</ion-title> -->\n    <ion-buttons slot=\"end\" class=\"headerUserImg\" tappable (click)=\"dismissVideo()\">\n      <ion-icon name=\"close\" style=\"font-size:40px;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:black;\">\n\n\n  <div *ngIf=\"videoLevel=='video'\" class=\"videodiv\">\n    <video width=\"100%\" height=\"100%\" controls=\"controls\" controlsList=\"nodownload noremote foobar\" autoplay=\"autoplay\"\n    poster=\"{{mediaData?.alt_image}}\" [src]=\"playVideo|safe\" type=\"video/mp4\" ></video>\n  </div>\n  <div *ngIf=\"videoLevel=='youtube'\" class=\"videodiv\">\n    <iframe [src]=\"playVideo|safe\" width=\"100%\" height=\"100%\" class=\"borderDiv\"></iframe>\n  </div>\n\n  <div *ngIf=\"newSliderArray && videoLevel=='image' && checkval\" class=\"imageSliderDiv\">\n    <div class=\"sliderDiv\">\n      <ion-slides class=\"trendingSlides\" #slideWithNav [options]=\"slideDiv\">\n        <ion-slide *ngFor=\"let trendingList of newSliderArray; let ind = index\">\n          <img [src]=\"trendingList?.media_path\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <div *ngIf=\"videoLevel=='singleImage'\" class=\"singleImageDiv\">\n    <img [src]=\"playVideo\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n  </div>\n\n  <!-- pdf View Only -->\n  <!-- <div *ngIf=\"videoLevel=='pdfView'\" class=\"singleImageDiv\">\n    <iframe [src]=\"playVideo|safe\" width=\"100%\" height=\"100%\" class=\"borderDiv\"></iframe>\n  </div> -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'maintenance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | maintenance-maintenance-module */
          "maintenance-maintenance-module").then(__webpack_require__.bind(null,
          /*! ./maintenance/maintenance.module */
          "./src/app/maintenance/maintenance.module.ts")).then(function (m) {
            return m.MaintenancePageModule;
          });
        }
      }, {
        path: 'welcome-screens',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | welcome-screens-welcome-screens-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("welcome-screens-welcome-screens-module")]).then(__webpack_require__.bind(null,
          /*! ./welcome-screens/welcome-screens.module */
          "./src/app/welcome-screens/welcome-screens.module.ts")).then(function (m) {
            return m.WelcomeScreensPageModule;
          });
        }
      }, {
        path: 'force-optional-update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | force-optional-update-force-optional-update-module */
          "force-optional-update-force-optional-update-module").then(__webpack_require__.bind(null,
          /*! ./force-optional-update/force-optional-update.module */
          "./src/app/force-optional-update/force-optional-update.module.ts")).then(function (m) {
            return m.ForceOptionalUpdatePageModule;
          });
        }
      }, {
        path: 'organisation-name',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-organisation-name-organisation-name-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-organisation-name-organisation-name-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/organisation-name/organisation-name.module */
          "./src/app/loginModule/organisation-name/organisation-name.module.ts")).then(function (m) {
            return m.OrganisationNamePageModule;
          });
        }
      }, {
        path: 'enter-number',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-enter-number-enter-number-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-enter-number-enter-number-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/enter-number/enter-number.module */
          "./src/app/loginModule/enter-number/enter-number.module.ts")).then(function (m) {
            return m.EnterNumberPageModule;
          });
        }
      }, {
        path: 'enter-otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-enter-otp-enter-otp-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-enter-otp-enter-otp-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/enter-otp/enter-otp.module */
          "./src/app/loginModule/enter-otp/enter-otp.module.ts")).then(function (m) {
            return m.EnterOtpPageModule;
          });
        }
      }, {
        path: 'create-account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-create-account-create-account-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-create-account-create-account-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/create-account/create-account.module */
          "./src/app/loginModule/create-account/create-account.module.ts")).then(function (m) {
            return m.CreateAccountPageModule;
          });
        }
      }, {
        path: 'profile-picture',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-profile-picture-profile-picture-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"), __webpack_require__.e("loginModule-profile-picture-profile-picture-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/profile-picture/profile-picture.module */
          "./src/app/loginModule/profile-picture/profile-picture.module.ts")).then(function (m) {
            return m.ProfilePicturePageModule;
          });
        }
      }, {
        path: 'hr-policy-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-hr-policy-list-hr-policy-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("hrPolicyModule-hr-policy-list-hr-policy-list-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/hr-policy-list/hr-policy-list.module */
          "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.module.ts")).then(function (m) {
            return m.HrPolicyListPageModule;
          });
        }
      }, {
        path: 'hr-policy-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-hr-policy-detail-hr-policy-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("hrPolicyModule-hr-policy-detail-hr-policy-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/hr-policy-detail/hr-policy-detail.module */
          "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.module.ts")).then(function (m) {
            return m.HrPolicyDetailPageModule;
          });
        }
      }, {
        path: 'digitals-signature',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-digitals-signature-digitals-signature-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("hrPolicyModule-digitals-signature-digitals-signature-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/digitals-signature/digitals-signature.module */
          "./src/app/hrPolicyModule/digitals-signature/digitals-signature.module.ts")).then(function (m) {
            return m.DigitalsSignaturePageModule;
          });
        }
      }, {
        path: 'hr-questions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-hr-questions-hr-questions-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("hrPolicyModule-hr-questions-hr-questions-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/hr-questions/hr-questions.module */
          "./src/app/hrPolicyModule/hr-questions/hr-questions.module.ts")).then(function (m) {
            return m.HrQuestionsPageModule;
          });
        }
      }, {
        path: 'policy-otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-policy-otp-policy-otp-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("hrPolicyModule-policy-otp-policy-otp-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/policy-otp/policy-otp.module */
          "./src/app/hrPolicyModule/policy-otp/policy-otp.module.ts")).then(function (m) {
            return m.PolicyOtpPageModule;
          });
        }
      }, {
        path: 'question-score-card',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hrPolicyModule-question-score-card-question-score-card-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("hrPolicyModule-question-score-card-question-score-card-module")]).then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/question-score-card/question-score-card.module */
          "./src/app/hrPolicyModule/question-score-card/question-score-card.module.ts")).then(function (m) {
            return m.QuestionScoreCardPageModule;
          });
        }
      }, {
        path: 'notice-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | noticeBoardModule-notice-list-notice-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("noticeBoardModule-notice-list-notice-list-module")]).then(__webpack_require__.bind(null,
          /*! ./noticeBoardModule/notice-list/notice-list.module */
          "./src/app/noticeBoardModule/notice-list/notice-list.module.ts")).then(function (m) {
            return m.NoticeListPageModule;
          });
        }
      }, {
        path: 'notice-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | noticeBoardModule-notice-detail-notice-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("noticeBoardModule-notice-detail-notice-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./noticeBoardModule/notice-detail/notice-detail.module */
          "./src/app/noticeBoardModule/notice-detail/notice-detail.module.ts")).then(function (m) {
            return m.NoticeDetailPageModule;
          });
        }
      }, {
        path: 'notice-archive',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | noticeBoardModule-notice-archive-notice-archive-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("noticeBoardModule-notice-archive-notice-archive-module")]).then(__webpack_require__.bind(null,
          /*! ./noticeBoardModule/notice-archive/notice-archive.module */
          "./src/app/noticeBoardModule/notice-archive/notice-archive.module.ts")).then(function (m) {
            return m.NoticeArchivePageModule;
          });
        }
      }, {
        path: 'community-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | communicationModule-community-list-community-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("communicationModule-community-list-community-list-module")]).then(__webpack_require__.bind(null,
          /*! ./communicationModule/community-list/community-list.module */
          "./src/app/communicationModule/community-list/community-list.module.ts")).then(function (m) {
            return m.CommunityListPageModule;
          });
        }
      }, {
        path: 'community-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | communicationModule-community-detail-community-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("communicationModule-community-detail-community-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./communicationModule/community-detail/community-detail.module */
          "./src/app/communicationModule/community-detail/community-detail.module.ts")).then(function (m) {
            return m.CommunityDetailPageModule;
          });
        }
      }, {
        path: 'say-cheers-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-list-say-cheers-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-list-say-cheers-list-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-list/say-cheers-list.module */
          "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.module.ts")).then(function (m) {
            return m.SayCheersListPageModule;
          });
        }
      }, {
        path: 'say-cheers-card',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-card-say-cheers-card-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-card-say-cheers-card-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-card/say-cheers-card.module */
          "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.module.ts")).then(function (m) {
            return m.SayCheersCardPageModule;
          });
        }
      }, {
        path: 'say-cheers-message',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-message-say-cheers-message-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-message-say-cheers-message-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-message/say-cheers-message.module */
          "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.module.ts")).then(function (m) {
            return m.SayCheersMessagePageModule;
          });
        }
      }, {
        path: 'say-cheers-board',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-board-say-cheers-board-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-board-say-cheers-board-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-board/say-cheers-board.module */
          "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.module.ts")).then(function (m) {
            return m.SayCheersBoardPageModule;
          });
        }
      }, {
        path: 'say-cheers-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-detail-say-cheers-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-detail-say-cheers-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-detail/say-cheers-detail.module */
          "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.module.ts")).then(function (m) {
            return m.SayCheersDetailPageModule;
          });
        }
      }, {
        path: 'say-cheers-slide-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-slide-detail-say-cheers-slide-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-slide-detail-say-cheers-slide-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.module */
          "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.module.ts")).then(function (m) {
            return m.SayCheersSlideDetailPageModule;
          });
        }
      }, {
        path: 'say-cheers-badges',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sayCheersModule-say-cheers-badges-say-cheers-badges-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("sayCheersModule-say-cheers-badges-say-cheers-badges-module")]).then(__webpack_require__.bind(null,
          /*! ./sayCheersModule/say-cheers-badges/say-cheers-badges.module */
          "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.module.ts")).then(function (m) {
            return m.SayCheersBadgesPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'update-mob-email',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | update-mob-email-update-mob-email-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("update-mob-email-update-mob-email-module")]).then(__webpack_require__.bind(null,
          /*! ./update-mob-email/update-mob-email.module */
          "./src/app/update-mob-email/update-mob-email.module.ts")).then(function (m) {
            return m.UpdateMobEmailPageModule;
          });
        }
      }, {
        path: 'like-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | like-list-like-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("like-list-like-list-module")]).then(__webpack_require__.bind(null,
          /*! ./like-list/like-list.module */
          "./src/app/like-list/like-list.module.ts")).then(function (m) {
            return m.LikeListPageModule;
          });
        }
      }, {
        path: 'redeem-home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-redeem-home-redeem-home-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-home-redeem-home-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-home/redeem-home.module */
          "./src/app/RedeemModule/redeem-home/redeem-home.module.ts")).then(function (m) {
            return m.RedeemHomePageModule;
          });
        }
      }, {
        path: 'accountstatement',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-accountstatement-accountstatement-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-accountstatement-accountstatement-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/accountstatement/accountstatement.module */
          "./src/app/RedeemModule/accountstatement/accountstatement.module.ts")).then(function (m) {
            return m.AccountstatementPageModule;
          });
        }
      }, {
        path: 'redeem-my-order-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-redeem-my-order-list-redeem-my-order-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-my-order-list-redeem-my-order-list-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-my-order-list/redeem-my-order-list.module */
          "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.module.ts")).then(function (m) {
            return m.RedeemMyOrderListPageModule;
          });
        }
      }, {
        path: 'redeem-my-order-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-redeem-my-order-detail-redeem-my-order-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-my-order-detail-redeem-my-order-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-my-order-detail/redeem-my-order-detail.module */
          "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.module.ts")).then(function (m) {
            return m.RedeemMyOrderDetailPageModule;
          });
        }
      }, {
        path: 'redeem-information',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-redeem-information-redeem-information-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-information-redeem-information-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-information/redeem-information.module */
          "./src/app/RedeemModule/redeem-information/redeem-information.module.ts")).then(function (m) {
            return m.RedeemInformationPageModule;
          });
        }
      }, {
        path: 'redeem-voucher-category-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-redeem-voucher-category-list-redeem-voucher-category-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-voucher-category-list-redeem-voucher-category-list-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.module */
          "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.module.ts")).then(function (m) {
            return m.RedeemVoucherCategoryListPageModule;
          });
        }
      }, {
        path: 'voucher-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-voucher-list-voucher-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-voucher-list-voucher-list-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/voucher-list/voucher-list.module */
          "./src/app/RedeemModule/voucher-list/voucher-list.module.ts")).then(function (m) {
            return m.VoucherListPageModule;
          });
        }
      }, {
        path: 'voucher-list-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | RedeemModule-voucher-list-detail-voucher-list-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-voucher-list-detail-voucher-list-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./RedeemModule/voucher-list-detail/voucher-list-detail.module */
          "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.module.ts")).then(function (m) {
            return m.VoucherListDetailPageModule;
          });
        }
      }, {
        path: 'redeem-otp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | RedeemModule-redeem-otp-redeem-otp-module */
          "RedeemModule-redeem-otp-redeem-otp-module").then(__webpack_require__.bind(null,
          /*! ./RedeemModule/redeem-otp/redeem-otp.module */
          "./src/app/RedeemModule/redeem-otp/redeem-otp.module.ts")).then(function (m) {
            return m.RedeemOtpPageModule;
          });
        }
      }, {
        path: 'terms-and-privacy',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-terms-and-privacy-terms-and-privacy-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-terms-and-privacy-terms-and-privacy-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/terms-and-privacy/terms-and-privacy.module */
          "./src/app/loginModule/terms-and-privacy/terms-and-privacy.module.ts")).then(function (m) {
            return m.TermsAndPrivacyPageModule;
          });
        }
      }, {
        path: 'contactus',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | contactus-contactus-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"), __webpack_require__.e("common"), __webpack_require__.e("contactus-contactus-module")]).then(__webpack_require__.bind(null,
          /*! ./contactus/contactus.module */
          "./src/app/contactus/contactus.module.ts")).then(function (m) {
            return m.ContactusPageModule;
          });
        }
      }, {
        path: 'notice-otp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | noticeBoardModule-notice-otp-notice-otp-module */
          "noticeBoardModule-notice-otp-notice-otp-module").then(__webpack_require__.bind(null,
          /*! ./noticeBoardModule/notice-otp/notice-otp.module */
          "./src/app/noticeBoardModule/notice-otp/notice-otp.module.ts")).then(function (m) {
            return m.NoticeOtpPageModule;
          });
        }
      }, {
        path: 'video-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | video-modal-video-modal-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("video-modal-video-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./video-modal/video-modal.module */
          "./src/app/video-modal/video-modal.module.ts")).then(function (m) {
            return m.VideoModalPageModule;
          });
        }
      }, {
        path: 'contact-hr',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-contact-hr-contact-hr-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"), __webpack_require__.e("loginModule-contact-hr-contact-hr-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/contact-hr/contact-hr.module */
          "./src/app/loginModule/contact-hr/contact-hr.module.ts")).then(function (m) {
            return m.ContactHrPageModule;
          });
        }
      }, {
        path: 'ios-register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loginModule-ios-register-ios-register-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("loginModule-ios-register-ios-register-module")]).then(__webpack_require__.bind(null,
          /*! ./loginModule/ios-register/ios-register.module */
          "./src/app/loginModule/ios-register/ios-register.module.ts")).then(function (m) {
            return m.IosRegisterPageModule;
          });
        }
      }, {
        path: 'dynamic-iframe',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dynamicModule-dynamic-iframe-dynamic-iframe-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("dynamicModule-dynamic-iframe-dynamic-iframe-module")]).then(__webpack_require__.bind(null,
          /*! ./dynamicModule/dynamic-iframe/dynamic-iframe.module */
          "./src/app/dynamicModule/dynamic-iframe/dynamic-iframe.module.ts")).then(function (m) {
            return m.DynamicIframePageModule;
          });
        }
      }, {
        path: 'award-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | R-RModule-award-list-award-list-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("R-RModule-award-list-award-list-module")]).then(__webpack_require__.bind(null,
          /*! ./R&RModule/award-list/award-list.module */
          "./src/app/R&RModule/award-list/award-list.module.ts")).then(function (m) {
            return m.AwardListPageModule;
          });
        }
      }, {
        path: 'award-dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | R-RModule-award-dashboard-award-dashboard-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("R-RModule-award-dashboard-award-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./R&RModule/award-dashboard/award-dashboard.module */
          "./src/app/R&RModule/award-dashboard/award-dashboard.module.ts")).then(function (m) {
            return m.AwardDashboardPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LoginModuleNew-login-login-module */
          "LoginModuleNew-login-login-module").then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/login/login.module */
          "./src/app/LoginModuleNew/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'otp-verify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LoginModuleNew-otp-verify-otp-verify-module */
          "LoginModuleNew-otp-verify-otp-verify-module").then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/otp-verify/otp-verify.module */
          "./src/app/LoginModuleNew/otp-verify/otp-verify.module.ts")).then(function (m) {
            return m.OtpVerifyPageModule;
          });
        }
      }, {
        path: 'welcome-login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LoginModuleNew-welcome-login-welcome-login-module */
          "LoginModuleNew-welcome-login-welcome-login-module").then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/welcome-login/welcome-login.module */
          "./src/app/LoginModuleNew/welcome-login/welcome-login.module.ts")).then(function (m) {
            return m.WelcomeLoginPageModule;
          });
        }
      }, {
        path: 'upload-profile-picture',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | LoginModuleNew-upload-profile-picture-upload-profile-picture-module */
          [__webpack_require__.e("default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"), __webpack_require__.e("LoginModuleNew-upload-profile-picture-upload-profile-picture-module")]).then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/upload-profile-picture/upload-profile-picture.module */
          "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.module.ts")).then(function (m) {
            return m.UploadProfilePicturePageModule;
          });
        }
      }, {
        path: 'qualification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LoginModuleNew-qualification-qualification-module */
          "LoginModuleNew-qualification-qualification-module").then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/qualification/qualification.module */
          "./src/app/LoginModuleNew/qualification/qualification.module.ts")).then(function (m) {
            return m.QualificationPageModule;
          });
        }
      }, {
        path: 'qualification-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | LoginModuleNew-qualification-form-qualification-form-module */
          "LoginModuleNew-qualification-form-qualification-form-module").then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/qualification-form/qualification-form.module */
          "./src/app/LoginModuleNew/qualification-form/qualification-form.module.ts")).then(function (m) {
            return m.QualificationFormPageModule;
          });
        }
      }, {
        path: 'qualification-priview',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | LoginModuleNew-qualification-priview-qualification-priview-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("LoginModuleNew-qualification-priview-qualification-priview-module")]).then(__webpack_require__.bind(null,
          /*! ./LoginModuleNew/qualification-priview/qualification-priview.module */
          "./src/app/LoginModuleNew/qualification-priview/qualification-priview.module.ts")).then(function (m) {
            return m.QualificationPriviewPageModule;
          });
        }
      }, {
        path: 'welcome-aboard-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | WelcomeAboardModule-welcome-aboard-list-welcome-aboard-list-module */
          "WelcomeAboardModule-welcome-aboard-list-welcome-aboard-list-module").then(__webpack_require__.bind(null,
          /*! ./WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.module */
          "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.module.ts")).then(function (m) {
            return m.WelcomeAboardListPageModule;
          });
        }
      }, {
        path: 'idea',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | IdeaBoxModule-idea-idea-module */
          [__webpack_require__.e("common"), __webpack_require__.e("IdeaBoxModule-idea-idea-module")]).then(__webpack_require__.bind(null,
          /*! ./IdeaBoxModule/idea/idea.module */
          "./src/app/IdeaBoxModule/idea/idea.module.ts")).then(function (m) {
            return m.IdeaPageModule;
          });
        }
      }, {
        path: 'idea-history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | IdeaBoxModule-idea-history-idea-history-module */
          [__webpack_require__.e("common"), __webpack_require__.e("IdeaBoxModule-idea-history-idea-history-module")]).then(__webpack_require__.bind(null,
          /*! ./IdeaBoxModule/idea-history/idea-history.module */
          "./src/app/IdeaBoxModule/idea-history/idea-history.module.ts")).then(function (m) {
            return m.IdeaHistoryPageModule;
          });
        }
      }, {
        path: 'birthday-anniversary-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | birthaDayAnniversaryModule-birthday-anniversary-list-birthday-anniversary-list-module */
          "birthaDayAnniversaryModule-birthday-anniversary-list-birthday-anniversary-list-module").then(__webpack_require__.bind(null,
          /*! ./birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.module */
          "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.module.ts")).then(function (m) {
            return m.BirthdayAnniversaryListPageModule;
          });
        }
      }, {
        path: 'birthday-aniversray-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | birthaDayAnniversaryModule-birthday-aniversray-detail-birthday-aniversray-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("birthaDayAnniversaryModule-birthday-aniversray-detail-birthday-aniversray-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.module */
          "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.module.ts")).then(function (m) {
            return m.BirthdayAniversrayDetailPageModule;
          });
        }
      }, {
        path: 'award-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | R-RModule-award-detail-award-detail-module */
          [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("R-RModule-award-detail-award-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./R&RModule/award-detail/award-detail.module */
          "./src/app/R&RModule/award-detail/award-detail.module.ts")).then(function (m) {
            return m.AwardDetailPageModule;
          });
        }
      }, {
        path: 'filter-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | R-RModule-filter-list-filter-list-module */
          "R-RModule-filter-list-filter-list-module").then(__webpack_require__.bind(null,
          /*! ./R&RModule/filter-list/filter-list.module */
          "./src/app/R&RModule/filter-list/filter-list.module.ts")).then(function (m) {
            return m.FilterListPageModule;
          });
        }
      }, {
        path: 'awarddashboard-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | R-RModule-awarddashboard-detail-awarddashboard-detail-module */
          "R-RModule-awarddashboard-detail-awarddashboard-detail-module").then(__webpack_require__.bind(null,
          /*! ./R&RModule/awarddashboard-detail/awarddashboard-detail.module */
          "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.module.ts")).then(function (m) {
            return m.AwarddashboardDetailPageModule;
          });
        }
      }, {
        path: 'award-employee-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | R-RModule-award-employee-list-award-employee-list-module */
          "R-RModule-award-employee-list-award-employee-list-module").then(__webpack_require__.bind(null,
          /*! ./R&RModule/award-employee-list/award-employee-list.module */
          "./src/app/R&RModule/award-employee-list/award-employee-list.module.ts")).then(function (m) {
            return m.AwardEmployeeListPageModule;
          });
        }
      }, {
        path: 'award-employee-preview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | R-RModule-award-employee-preview-award-employee-preview-module */
          "R-RModule-award-employee-preview-award-employee-preview-module").then(__webpack_require__.bind(null,
          /*! ./R&RModule/award-employee-preview/award-employee-preview.module */
          "./src/app/R&RModule/award-employee-preview/award-employee-preview.module.ts")).then(function (m) {
            return m.AwardEmployeePreviewPageModule;
          });
        }
      }, {
        path: 'myactivity-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | R-RModule-myactivity-detail-myactivity-detail-module */
          "R-RModule-myactivity-detail-myactivity-detail-module").then(__webpack_require__.bind(null,
          /*! ./R&RModule/myactivity-detail/myactivity-detail.module */
          "./src/app/R&RModule/myactivity-detail/myactivity-detail.module.ts")).then(function (m) {
            return m.MyactivityDetailPageModule;
          });
        }
      }, {
        path: 'hr-policy-category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | hrPolicyModule-hr-policy-category-hr-policy-category-module */
          "hrPolicyModule-hr-policy-category-hr-policy-category-module").then(__webpack_require__.bind(null,
          /*! ./hrPolicyModule/hr-policy-category/hr-policy-category.module */
          "./src/app/hrPolicyModule/hr-policy-category/hr-policy-category.module.ts")).then(function (m) {
            return m.HrPolicyCategoryPageModule;
          });
        }
      }, {
        path: 'my-award-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | myAwardModule-my-award-list-my-award-list-module */
          "myAwardModule-my-award-list-my-award-list-module").then(__webpack_require__.bind(null,
          /*! ./myAwardModule/my-award-list/my-award-list.module */
          "./src/app/myAwardModule/my-award-list/my-award-list.module.ts")).then(function (m) {
            return m.MyAwardListPageModule;
          });
        }
      }, {
        path: 'my-award-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | myAwardModule-my-award-detail-my-award-detail-module */
          "myAwardModule-my-award-detail-my-award-detail-module").then(__webpack_require__.bind(null,
          /*! ./myAwardModule/my-award-detail/my-award-detail.module */
          "./src/app/myAwardModule/my-award-detail/my-award-detail.module.ts")).then(function (m) {
            return m.MyAwardDetailPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sideMenuListDiv {\n  padding: 0px;\n}\n.sideMenuListDiv .headLogoDiv {\n  border-bottom: 2px solid gainsboro;\n  padding: 0px 5px 0px 15px;\n  background: var(--headerColor);\n  border-radius: 0px 0px 20px 0px;\n}\n.sideMenuListDiv .headLogoDiv .doubleLogo img {\n  max-height: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.sideMenuListDiv .headLogoDiv ion-icon {\n  color: var(--headerTitleOrMenu);\n  font-size: 35px;\n}\n.sideMenuListDiv .sideList {\n  padding: 5px 0;\n}\n.sideMenuListDiv .sideList ion-row {\n  padding: 7px 10px 2px 10px;\n  border-bottom: 1px solid gainsboro;\n}\n.sideMenuListDiv .sideList p {\n  margin: -4px 0px 0 0px;\n  color: var(--headerColor);\n  font-weight: bold;\n  font-size: 14px;\n}\n.otherText {\n  background: #fff;\n  color: #000;\n  position: fixed !important;\n  top: 0;\n  bottom: 0px;\n  padding: 15px;\n  margin: 0px;\n  z-index: 9;\n  font-size: 13px;\n  text-align: center;\n  line-height: 0px;\n  width: 100%;\n}\n.otherText .allTextDiv {\n  position: absolute;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: 80%;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n.otherText .allTextDiv img {\n  width: 100%;\n  margin: 20px 0;\n}\n.otherText .allTextDiv h5 {\n  margin: 22px 0;\n  font-size: 20px;\n  color: #585858;\n  font-weight: bold;\n}\n.otherText .allTextDiv h6 {\n  margin: 15px auto 15px;\n  width: 100%;\n  color: #000;\n  font-size: 17px;\n}\n.otherText .allTextDiv ion-button {\n  border: 1px solid var(--benepikBtnColor);\n  color: var(--benepikBtnColor);\n  --border-radius:20px;\n  white-space: pre-wrap;\n  height: 30px;\n  min-width: 60% !important;\n  max-width: 100%;\n  --box-shadow:0px 0px 0px 0px var(--benepikBtnColor);\n  border-radius: 20px;\n  text-transform: uppercase;\n  --background:var(--transparentColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLFlBQUE7QUFFakI7QUFESTtFQUFhLGtDQUFBO0VBQWtDLHlCQUFBO0VBQXlCLDhCQUFBO0VBQ3BFLCtCQUFBO0FBTVI7QUFKWTtFQUFJLGdCQUFBO0VBQWdCLHNCQUFBO0tBQUEsbUJBQUE7QUFRaEM7QUFOUTtFQUFTLCtCQUFBO0VBQStCLGVBQUE7QUFVaEQ7QUFSSTtFQUFVLGNBQUE7QUFXZDtBQVZRO0VBQVEsMEJBQUE7RUFBMEIsa0NBQUE7QUFjMUM7QUFiUTtFQUFFLHNCQUFBO0VBQXNCLHlCQUFBO0VBQXlCLGlCQUFBO0VBQWlCLGVBQUE7QUFtQjFFO0FBWkE7RUFBVyxnQkFBQTtFQUFnQixXQUFBO0VBQVcsMEJBQUE7RUFBMEIsTUFBQTtFQUFNLFdBQUE7RUFBVyxhQUFBO0VBQWEsV0FBQTtFQUFXLFVBQUE7RUFBVSxlQUFBO0VBQy9HLGtCQUFBO0VBQWtCLGdCQUFBO0VBQWdCLFdBQUE7QUEwQnRDO0FBekJJO0VBQVksa0JBQUE7RUFBa0IsUUFBQTtFQUFRLDhCQUFBO0VBQThCLFVBQUE7RUFBVSxZQUFBO0VBQVksT0FBQTtFQUFPLFFBQUE7QUFrQ3JHO0FBakNRO0VBQUksV0FBQTtFQUFXLGNBQUE7QUFxQ3ZCO0FBcENRO0VBQUcsY0FBQTtFQUFjLGVBQUE7RUFBZSxjQUFBO0VBQWMsaUJBQUE7QUEwQ3REO0FBekNRO0VBQUcsc0JBQUE7RUFBc0IsV0FBQTtFQUFXLFdBQUE7RUFBVyxlQUFBO0FBK0N2RDtBQTlDUTtFQUFXLHdDQUFBO0VBQXdDLDZCQUFBO0VBQTZCLG9CQUFBO0VBQXFCLHFCQUFBO0VBQXFCLFlBQUE7RUFDdEgseUJBQUE7RUFBeUIsZUFBQTtFQUFlLG1EQUFBO0VBQW9ELG1CQUFBO0VBQzVGLHlCQUFBO0VBQXlCLG9DQUFBO0FBeURyQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlTWVudUxpc3REaXZ7cGFkZGluZzowcHg7XG4gICAgLmhlYWRMb2dvRGl2e2JvcmRlci1ib3R0b206MnB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjBweCA1cHggMHB4IDE1cHg7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgLmRvdWJsZUxvZ297XG4gICAgICAgICAgICBpbWd7bWF4LWhlaWdodDo1MHB4O29iamVjdC1maXQ6Y29udGFpbjt9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb257Y29sb3I6dmFyKC0taGVhZGVyVGl0bGVPck1lbnUpO2ZvbnQtc2l6ZTozNXB4O31cbiAgICB9XG4gICAgLnNpZGVMaXN0e3BhZGRpbmc6NXB4IDA7XG4gICAgICAgIGlvbi1yb3d7cGFkZGluZzo3cHggMTBweCAycHggMTBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCBnYWluc2Jvcm87fVxuICAgICAgICBwe21hcmdpbjotNHB4IDBweCAwIDBweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTRweDt9XG4gICAgfVxufVxuXG4vLyAudHJhc3BhcmVudE5ldHdvcmtESVZ7dG9wOjAgIWltcG9ydGFudDtib3R0b206MCAhaW1wb3J0YW50O3dpZHRoOjEwMCUgIWltcG9ydGFudDtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTt9XG5cbi8vIHRoaXMgY3NzIGlzIGZvciBOb3QgSW50ZXJuZXQgY29ubmVjdGVkIFN0YXJ0XG4ub3RoZXJUZXh0e2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojMDAwO3Bvc2l0aW9uOmZpeGVkICFpbXBvcnRhbnQ7dG9wOjA7Ym90dG9tOjBweDtwYWRkaW5nOjE1cHg7bWFyZ2luOjBweDt6LWluZGV4Ojk7Zm9udC1zaXplOjEzcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MHB4O3dpZHRoOjEwMCU7XG4gICAgLmFsbFRleHREaXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAlLCAtNTAlKTt3aWR0aDo4MCU7bWFyZ2luOmF1dG87bGVmdDowO3JpZ2h0OjA7XG4gICAgICAgIGltZ3t3aWR0aDoxMDAlO21hcmdpbjoyMHB4IDA7fVxuICAgICAgICBoNXttYXJnaW46MjJweCAwO2ZvbnQtc2l6ZToyMHB4O2NvbG9yOiM1ODU4NTg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgICAgIGg2e21hcmdpbjoxNXB4IGF1dG8gMTVweDt3aWR0aDoxMDAlO2NvbG9yOiMwMDA7Zm9udC1zaXplOjE3cHg7fVxuICAgICAgICBpb24tYnV0dG9ue2JvcmRlcjoxcHggc29saWQgdmFyKC0tYmVuZXBpa0J0bkNvbG9yKTtjb2xvcjp2YXIoLS1iZW5lcGlrQnRuQ29sb3IpOy0tYm9yZGVyLXJhZGl1czoyMHB4O3doaXRlLXNwYWNlOnByZS13cmFwO2hlaWdodDozMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOjYwJSAhaW1wb3J0YW50O21heC13aWR0aDoxMDAlOy0tYm94LXNoYWRvdzowcHggMHB4IDBweCAwcHggdmFyKC0tYmVuZXBpa0J0bkNvbG9yKTtib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7LS1iYWNrZ3JvdW5kOnZhcigtLXRyYW5zcGFyZW50Q29sb3IpO31cbiAgICB9XG59XG4vLyB0aGlzIGNzcyBpcyBmb3IgTm90IEludGVybmV0IGNvbm5lY3RlZCBFbmQiXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js"); // this line is for Android
      // import { FCM } from '@ionic-native/fcm/ngx';   // this line is for IOS


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, zone, menuCtrl, apiServices, network, fcm, sendData, router, storageService, apiservices, navCtrl, alertController) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.apiServices = apiServices;
          this.network = network;
          this.fcm = fcm;
          this.sendData = sendData;
          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.menuItems = [];
          this.showNetworkDiv = false;
          this.pushIsinBackground = false;
          this.fcmGenerationRetryCount = 0;
          this.lastTimeBackPress = 0;
          this.timePeriodToExit = 2000;
          this.initializeApp();
          this.platform.ready().then(function () {
            if (_this.platform.is("cordova")) {
              _this.storageService.getStorage().then(function (storedData) {
                console.log("initialize app storage==", storedData);

                if (storedData.login_token) {
                  _this.fcm.getInitialPushPayload().then(function (payload) {
                    console.log("fcm Call payload in appComponent constructor==", JSON.stringify(payload));

                    if (payload.wasTapped) {
                      setTimeout(function () {
                        _this.apiServices.checkcondition(payload);
                      }, 6000);
                      console.log("call FCM appComponent constructor==", payload);
                    }
                  });
                }
              });
            }
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.apiServices.generateDeviceId();

              _this2.menuCtrl.swipeGesture(false);

              if (_this2.platform.is("android")) {
                _this2.backButtonEvent();
              }
            });
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            if (this.platform.is("cordova")) {
              this.statusBar.styleDefault();
              this.splashScreen.hide();
              this.statusBar.overlaysWebView(false); // this.statusBar.backgroundColorByHexString(this.themeColor.topStatusBarColor);

              this.apiServices.generateFCMToken();
            }

            if (this.platform.is('ios')) {
              this.apiServices.dignosticPermissionFunction();
            }

            this.apiservices.takePermission();
            this.apiServices.generateDeviceId();
            this.storageService.getStorage().then(function (storedData) {
              console.log("initialize app storage==", storedData); // Benepik Theme matching color Start

              document.querySelector('body').style.setProperty('--benepikBtnColor', '#73b72e');
              document.querySelector('body').style.setProperty('--benepikTextColor', '#73b72e');

              if (storedData != null && storedData.login_token) {
                console.log("stored Data==", storedData);

                _this3.Maintainance();

                console.log("test console0==", storedData);

                _this3.navCtrl.navigateRoot('/tabs/tab1');
              } else {
                _this3.Maintainance();

                _this3.navCtrl.navigateRoot('/welcome-screens');
              }

              setTimeout(function () {
                if (_this3.platform.is("android")) {
                  _this3.backButtonEvent();
                }
              }, 1500);
            });
            this.networkAvailability('withoutClick');
          }
        }, {
          key: "networkAvailability",
          value: function networkAvailability(value) {
            var _this4 = this;

            console.log("comming value of click==", value);

            if (value == "click") {
              this.apiServices.showLoader();
              setTimeout(function () {
                _this4.apiServices.hideLoader();

                _this4.apiservices.showToastMessage("No Internet Connection", 'top', 3000, 'redBg');
              }, 3000);
            }

            console.log("network was disconnected==");
            this.network.onDisconnect().subscribe(function () {
              console.log("network was disconnected==");
              _this4.showNetworkDiv = true;
            }); // watch network for a connection

            this.network.onConnect().subscribe(function () {
              console.log("network connected=="); // We just got a connection but we need to wait briefly
              // before we determine the connection type. Might need to wait.
              // prior to doing any api requests as well.

              _this4.showNetworkDiv = false;
            });
          }
        }, {
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this5 = this;

            // alert('app component current view is==> '+ this.router.url);
            console.log("hardware back==", this.router.url);
            this.platform.backButton.subscribeWithPriority(10, function () {
              _this5.routerOutlets.forEach(function (outlet) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (this.router.url == "/tabs/tab1" || this.router.url == "/force-optional-update" || this.router.url == "/maintenance" || this.router.url == "/welcome-screens" || this.router.url == "/organisation-name" || this.router.url == "/create-account" || this.router.url == "/question-score-card" || this.router.url == '/tabs' || this.router.url == '/') {
                            if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                              this.lastTimeBackPress = new Date().getTime();
                              this.presentAlertConfirm();
                            } else {
                              navigator['app'].exitApp();
                            }
                          } else if (this.router.url == "/tabs/tab2" || this.router.url == "/tabs/tab3") {
                            this.router.navigateByUrl('tabs/tab1');
                          } else if (this.router.url == "/say-cheers-message") {
                            console.log("hardware back0==", this.router.url);

                            if (this.apiservices.previewData == true) {
                              console.log("hardware back1==", this.apiservices.previewData);
                              this.apiservices.previewData = false;
                            } else {
                              console.log("hardware back2==", this.apiservices.previewData);
                              outlet.pop();
                            }
                          } else if (this.router.url == "/profile-picture") {
                            console.log("hardware back0==", this.router.url);
                            outlet.pop();
                          } else {
                            if (outlet && outlet.canGoBack()) {
                              if (this.apiServices.disableHardware == true && this.router.url == "/redeem-my-order-detail") {
                                this.router.navigateByUrl("/tabs/tab1");
                              } else {
                                outlet.pop();
                              }
                            }
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        // header: 'Confirm!',
                        message: 'Are you sure you want to exit the app?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Close App',
                          handler: function handler() {
                            navigator['app'].exitApp();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "Maintainance",
          value: function Maintainance() {
            var _this6 = this;

            console.log("Maintainance fun called");
            var apiKey = {};
            console.log("Maintainance key", apiKey);
            this.apiServices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].maintainanceApiUrl, apiKey).subscribe(function (result) {
              console.log("Maintainance key in app component123==", result);

              if (result.status == 1 || result.status == '1') {
                _this6.themeColor = result.data.theme;
                _this6.apiservices.termsAndConditionData = result.data.tnc;
                _this6.apiservices.privacyPolicyData = result.data.privacy_policy;
                _this6.apiservices.organisationNameData = result.data.settings;
                _this6.apiservices.iosRegistration = result.data.isRegisterEnable;
                console.log("Maintainance organisation name data==", _this6.apiservices.organisationNameData);

                if (_this6.platform.is("cordova")) {
                  // this.statusBar.backgroundColorByHexString(this.themeColor.topStatusBarColor);
                  _this6.statusBar.backgroundColorByHexString('var(--topStatusBarColor');
                }

                document.querySelector('body').style.setProperty('--headerColor', _this6.themeColor.headerColor);
                document.querySelector('body').style.setProperty('--headerTitleOrMenu', _this6.themeColor.headerTitleOrMenu);
                document.querySelector('body').style.setProperty('--headerLightColor', _this6.themeColor.headerLightColor);
                document.querySelector('body').style.setProperty('--whiteHeader', _this6.themeColor.whiteHeader);
                document.querySelector('body').style.setProperty('--blackHeaderText', _this6.themeColor.blackHeaderText);
                document.querySelector('body').style.setProperty('--outlineBorderButton', _this6.themeColor.outlineBorderButton);
                document.querySelector('body').style.setProperty('--transparentColor', _this6.themeColor.transparentColor);
                document.querySelector('body').style.setProperty('--redTextColor', _this6.themeColor.redTextColor);
                document.querySelector('body').style.setProperty('--blackTextColor', _this6.themeColor.blackTextColor);
                document.querySelector('body').style.setProperty('--yellowTextColor', _this6.themeColor.yellowTextColor);
                document.querySelector('body').style.setProperty('--toastSuccessColorApp', _this6.themeColor.toastSuccessColorApp);
                document.querySelector('body').style.setProperty('--toastFailColorRed', _this6.themeColor.toastFailColorRed);
                document.querySelector('body').style.setProperty('--nonSelectedTabs', _this6.themeColor.nonSelectedTabs);
                document.querySelector('body').style.setProperty('--nonSelectedTabsBorder', _this6.themeColor.nonSelectedTabsBorder);
                document.querySelector('body').style.setProperty('--nonSelectedTabsBg', _this6.themeColor.nonSelectedTabsBg);
                document.querySelector('body').style.setProperty('--selectedTabBg', _this6.themeColor.selectedTabBg);
                document.querySelector('body').style.setProperty('--topStatusBarColor', _this6.themeColor.topStatusBarColor);

                if (result.data.app_down == 1 || result.data.app_down == "1") {
                  // is_down
                  _this6.sendData.myParam = {
                    "allData": result.data
                  };

                  _this6.router.navigate(["/maintenance"]);
                }
              } else {
                _this6.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
              }
            });
          }
        }, {
          key: "hideSideMenu",
          value: function hideSideMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "goToPage",
          value: function goToPage(value) {
            var _this7 = this;

            this.zone.run(function () {
              _this7.menuCtrl.toggle();

              if (value.link != '') {
                if (value.identifier == "privacypolicy") {
                  var data = {
                    "pageName": "privacyPolicy",
                    "commingName": "sideMenu"
                  };
                  _this7.sendData.alldata = data;

                  _this7.router.navigate([value.link]);
                } else if (value.identifier == "termofuse") {
                  var data = {
                    "pageName": "termsCondition",
                    "commingName": "sideMenu"
                  };
                  _this7.sendData.alldata = data;

                  _this7.router.navigate([value.link]);
                } else if (value.identifier == "external") {
                  _this7.apiservices.iab.create(value.link, "_system", _this7.apiservices.options);
                } else {
                  _this7.router.navigate([value.link]);
                }
              } else {
                _this7.apiservices.logOutConfirmation();
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_6__["ApiservicesService"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__["DataTransferService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_6__["ApiservicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/video-editor/ngx */
      "./node_modules/@ionic-native/video-editor/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-circle-progress */
      "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js"); // import { HttpClient } from '@angular/common/http';
      // this line is for Android
      // import { FCM } from '@ionic-native/fcm/ngx';   // this line is for IOS


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [ng_circle_progress__WEBPACK_IMPORTED_MODULE_28__["NgCircleProgressModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_29__["Crop"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__["QRScanner"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__["Network"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_22__["Diagnostic"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_21__["NativeGeocoder"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_23__["LocationAccuracy"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_24__["MediaCapture"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_26__["PhotoViewer"], _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_25__["VideoEditor"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_27__["FCM"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/provider/apiservices.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/provider/apiservices.service.ts ***!
      \*************************************************/

    /*! exports provided: ApiservicesService */

    /***/
    function srcAppProviderApiservicesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiservicesService", function () {
        return ApiservicesService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _assets_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! crypto-js */
      "./node_modules/crypto-js/index.js");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _video_modal_video_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../video-modal/video-modal.page */
      "./src/app/video-modal/video-modal.page.ts");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js"); // this line is for Android
      // import { FCM } from '@ionic-native/fcm/ngx';   // this line is for IOS


      var ApiservicesService = /*#__PURE__*/function () {
        function ApiservicesService(http, iab, storageService, storage, platform, device_id, router, fcm, toastController, androidPermissions, diagnostic, loadingController, alertController, sendData, modalController) {
          var _this8 = this;

          _classCallCheck(this, ApiservicesService);

          this.http = http;
          this.iab = iab;
          this.storageService = storageService;
          this.storage = storage;
          this.platform = platform;
          this.device_id = device_id;
          this.router = router;
          this.fcm = fcm;
          this.toastController = toastController;
          this.androidPermissions = androidPermissions;
          this.diagnostic = diagnostic;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.sendData = sendData;
          this.modalController = modalController;
          this.pushIsinBackground = false;
          this.fcmGenerationRetryCount = 0;
          this.forceUpdateCount = 1;
          this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes'
          };
          this.optionsInApp = {
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'no',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            hidenavigationbuttons: 'yes',
            navigationbuttoncolor: '#FFFFFF',
            closebuttoncolor: '#FFFFFF',
            shouldPauseOnSuspend: 'no',
            toolbar: 'yes',
            toolbarcolor: "#4D2748",
            enableViewportScale: 'yes',
            hidespinner: 'no',
            footer: 'no',
            transitionstyle: 'fliphorizontal',
            location: 'yes',
            hideurlbar: 'yes',
            hidden: 'no',
            toolbarposition: 'top',
            closebuttoncaption: 'X Close'
          };
          this.showReplyComment = false;
          this.organisationNameData = '';
          this.checkSumKey = "739992a1490341a897c984ccd8dfaa0db1ccd0646e77a33a4f13859e9412eaae";
          this.hrPolicyCount = 0;
          this.previewData = false;
          this.iosRegistration = false;
          this.storage.get('fcmToken').then(function (fcmToken) {
            console.log("call fcm new storage==", fcmToken);
            _this8.newFcmTokenKey = fcmToken;
          });
        } // showCommentEditBox: boolean=false;


        _createClass(ApiservicesService, [{
          key: "dignosticPermissionFunction",
          value: function dignosticPermissionFunction() {
            var _this9 = this;

            this.platform.ready().then(function () {
              _this9.diagnostic.requestCameraAuthorization().then(function (reqCamAuth) {
                console.log('diagnostic requestCameraAuthorization==', reqCamAuth);
              }, function (err) {
                console.log('diagnostic requestCameraAuthorization err==', err);
              }); // this.diagnostic.requestMicrophoneAuthorization().then(reqCamAuth=>{
              //   console.log('diagnostic requestMicrophoneAuthorization==', reqCamAuth);
              // },err=>{
              //   console.log('diagnostic requestMicrophoneAuthorization err==', err);
              // });


              _this9.diagnostic.requestCameraRollAuthorization().then(function (photoPermiData) {
                console.log('diagnostic photoPermiData==', photoPermiData);
              }, function (err) {
                console.log('diagnostic photoPermiData err==', err);
              });
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Something bad happened; please try again later.");
          }
        }, {
          key: "extractData",
          value: function extractData(res) {
            var body = res;
            return body || {};
          }
        }, {
          key: "showToastMessage",
          value: function showToastMessage(msg, pos, time, bgClassName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("toastMessage color==", bgClassName);

                      if (!(msg == '')) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 8;
                      break;

                    case 4:
                      _context3.next = 6;
                      return this.toastController.create({
                        message: msg,
                        position: 'bottom',
                        // customClass:bgClassName,
                        // color: bgClassName,
                        duration: time,
                        cssClass: bgClassName
                      });

                    case 6:
                      toast = _context3.sent;
                      toast.present();

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // analyticsApiFunction(noticeId,eventType){
          //   var brandedData="";
          //   brandedData=this.sendData.myParam;
          //   console.log("analytics detail api brandedData==", brandedData);
          //   let apiKey={
          //     "notice_id":noticeId,
          //     "event": eventType 
          //   };
          //   console.log("api keys of analytic function on addBrand page==", apiKey);
          //   this.apiCallWithLoginToken(URLS.analyticsApi, apiKey).subscribe((result) => {
          //     console.log("analytic Api Result==", result);
          //     if(result.status=="1" || result.status==1){
          //       console.log("analytics Api result==1==",);
          //     }else{
          //       console.log("analytics Api result==0==", result);
          //     }
          //   }, err=>{
          //     console.log("analytics Api error==", err);
          //   });
          // }
          // Show the loader for infinite time

        }, {
          key: "showLoader",
          value: function showLoader() {
            this.loadingController.create({
              message: "Please wait...",
              backdropDismiss: true
            }).then(function (res) {
              res.present();
            });
          } // Hide the loader if already created otherwise return error

        }, {
          key: "hideLoader",
          value: function hideLoader() {
            // this.loadingController.dismiss().then((res) => {
            //   console.log("Loading dismissed!==", res);
            // }).catch((error) => {
            //   console.log("error", error);
            // });
            this.loadingController.dismiss().then(function (res) {
              console.log("Loading dismissed!==", res);
            })["catch"](function (error) {
              console.log("error", error);
            });
          }
        }, {
          key: "apiCallWithLoginToken",
          value: function apiCallWithLoginToken(url, data) {
            var _this10 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.storage.get("allStoreData")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (storedData) {
              _this10.storage.get('fcmToken').then(function (fcmToken) {
                console.log("call fcm new storage==", fcmToken);
                _this10.newFcmTokenKey = fcmToken;
              });

              console.log("enc pass call FCM /DeviceId stored data==", storedData); // data["client_id"] = APP_CONFIG.clientId;
              // data["device"] = this.device;
              // data["app_version"] = APP_CONFIG.appVersion;
              // data["packageName"] = APP_CONFIG.packageName;
              // data["device_id"] = storedData.deviceId;

              var loginToken;

              if (storedData && storedData.login_token != undefined) {
                // data["registration_token"] = storedData.fcmTokenKey;
                // data["registration_token"] =  this.newFcmTokenKey;
                // data["user_id"] = storedData.loginApiRes.user_id;
                // loginToken=storedData.loginApiRes.login_token;
                loginToken = storedData.login_token;
                employeeId = storedData.employeeID;
              } else {
                loginToken = "";
                employeeId = "";
              }

              var clientId;
              var employeeId;

              if (storedData.checkSumKey == undefined) {
                _this10.checkSumKey = _this10.checkSumKey;
                clientId = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId;
                console.log("get new encrypted data=12=", clientId);
              } else {
                _this10.checkSumKey = storedData.checkSumKey;
                clientId = storedData.client_Id;
                console.log("get new encrypted data=1=", clientId);
              }

              var encryptData;
              encryptData = {
                "data": data
              };

              _this10.CryptoJSAesEncrypt(encryptData, _this10.checkSumKey);

              console.log("get new encrypted data==", encryptData);
              console.log("get new encrypted data this.checkSumKey==", _this10.checkSumKey);
              encryptData.checksum = _this10.encryptData;
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  "Authorization": loginToken,
                  "Device": _this10.device,
                  "App-Version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                  "Package-Name": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].packageName,
                  "Device-Id": storedData.deviceId,
                  "Client-Id": clientId,
                  "employee_id": employeeId
                })
              };
              console.log("get new encrypted data httpOptions==", httpOptions);
              return _this10.http.post(_assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + url, encryptData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(_this10.handleError));
            }));
          }
        }, {
          key: "apiCallWithLoginTokenComment",
          value: function apiCallWithLoginTokenComment(url, data, newKey) {
            var _this11 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.storage.get("allStoreData")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (storedData) {
              _this11.storage.get('fcmToken').then(function (fcmToken) {
                console.log("call fcm new storage==", fcmToken);
                _this11.newFcmTokenKey = fcmToken;
              });

              console.log("enc pass call FCM /DeviceId stored data==", storedData);
              var loginToken;

              if (storedData && storedData.login_token != undefined) {
                loginToken = storedData.login_token;
              } else {
                loginToken = "";
              }

              var clientId;

              if (storedData.checkSumKey == undefined) {
                _this11.checkSumKey = _this11.checkSumKey;
                clientId = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId;
              } else {
                _this11.checkSumKey = storedData.checkSumKey;
                clientId = storedData.client_Id;
              }

              var modifyData;
              modifyData = {
                "data": newKey
              };
              var encryptData;
              encryptData = {
                "data": data
              };

              if (encryptData.data['comment'] || encryptData.data['citation'] || encryptData.data['citation'] == '') {
                delete encryptData.data['comment'];
                delete encryptData.data['citation'];
                console.log('bhu==> ', modifyData);
                console.log('bhu encryptData==> ', encryptData);
              }

              _this11.CryptoJSAesEncrypt(encryptData, _this11.checkSumKey);

              console.log("get new encrypted data==", encryptData);
              encryptData.checksum = _this11.encryptData;
              modifyData.checksum = _this11.encryptData;
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  "Authorization": loginToken,
                  "Device": _this11.device,
                  "App-Version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                  "Package-Name": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].packageName,
                  "Device-Id": storedData.deviceId,
                  "Client-Id": clientId
                })
              };
              return _this11.http.post(_assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + url, modifyData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(_this11.handleError));
            }));
          }
        }, {
          key: "CryptoJSAesEncrypt",
          value: function CryptoJSAesEncrypt(apiKeyString, key) {
            // var data = apiKeyString;
            console.log("enc pass phrase==", apiKeyString);
            console.log("enc plain Text==", key);
            var jsonbody = JSON.stringify(apiKeyString).split('\\').join('');
            console.log('api jsonbody chaksum==> ', jsonbody);
            var params = btoa(unescape(encodeURIComponent(jsonbody))); // delete data["data"]["comment"];
            // delete data["data"]["citation"];
            // var jsonbody = JSON.stringify(data).replace('\\', '');
            // var params = btoa(jsonbody);

            console.log('api apiKeyString params==> ', params);
            var hash = crypto_js__WEBPACK_IMPORTED_MODULE_15__["HmacSHA256"](params, key);
            this.encryptData = crypto_js__WEBPACK_IMPORTED_MODULE_15__["enc"].Base64.stringify(hash);
            console.log("api  enc signature", this.encryptData);
            return this.encryptData;
          }
        }, {
          key: "encodeQuery",
          value: function encodeQuery(data) {
            var query = ""; // for (let d in data)
            // query += encodeURIComponent(d) + '=' + encodeURIComponent(data[d]) + '&'
            // return query.slice(0, -1)

            for (var d in data) {
              var querydata = encodeURIComponent(data[d]);
              query += d + '=' + querydata + '&';
            }

            return query.slice(0, -1);
          } // CryptoJSAesDecrypt(apiKeyString){
          //   console.log("enc apiKeyString",apiKeyString)
          //   var bytes  = CryptoJS.AES.decrypt(apiKeyString, this.checkSumKey);
          //   var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          //   console.log("enc decription",decryptedData);
          //   // let obj_json = JSON.parse(JSON.stringify(data));
          //   // console.log("obj_json",obj_json)
          //   // var encrypted = obj_json.ciphertext;
          //   // var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
          //   // var iv = CryptoJS.enc.Hex.parse(obj_json.iv);
          //   // var key = CryptoJS.PBKDF2(apiKeyString, salt, {hasher: CryptoJS.algo.SHA512, keySize: 64 / 8, iterations: 999});
          //   // let decrypted = CryptoJS.AES.decrypt(encrypted, key, {iv: iv});
          //   // console.log("dec data",decrypted.toString(CryptoJS.enc.Utf8));
          //   // return decrypted.toString(CryptoJS.enc.Utf8);
          // }
          // discountingTokenWithPrivilegeUrl(url: string, data: Object): Observable<any>{
          //   return from(this.storage.get("allStoreData")).pipe(mergeMap((storedData)=>{
          //     this.storage.get('fcmToken').then((fcmToken)=>{
          //       console.log("call fcm new storage==", fcmToken);
          //       this.newFcmTokenKey=fcmToken;
          //     });
          //     console.log("api service stored data==", storedData);
          //     data["clientId"] = APP_CONFIG.clientId;
          //     data["device"] = this.device;
          //     data["app_version"] = APP_CONFIG.appVersion;
          //     data["packageName"] = APP_CONFIG.packageName;
          //     data["device_id"] = storedData.deviceId;
          //     var loginToken;
          //     if(storedData && storedData.loginApiRes){
          //       // data["registration_token"] = storedData.fcmTokenKey;
          //       data["registration_token"] =  this.newFcmTokenKey;
          //       data["employeeId"] = storedData.loginApiRes.user_id;
          //       loginToken=storedData.loginApiRes.discounting_token;
          //     }else{
          //       loginToken="";
          //     }
          //     var httpOptions = {
          //       headers: new HttpHeaders({
          //         "Content-Type": "application/json",
          //         Authorization:  loginToken,
          //       }),
          //     };
          //     return this.http.post(URLS.discountingUrl+url, data, httpOptions).pipe(catchError(this.handleError));
          //   }))
          // }
          // RedeemLoginTokenPrivilegeUrl(url: string, data: Object): Observable<any>{
          //   return from(this.storage.get("allStoreData")).pipe(mergeMap((storedData)=>{
          //     this.storage.get('fcmToken').then((fcmToken)=>{
          //       console.log("call fcm new storage==", fcmToken);
          //       this.newFcmTokenKey=fcmToken;
          //     });
          //     console.log("api service stored data==", storedData);
          //     data["clientId"] = APP_CONFIG.clientId;
          //     data["device"] = this.device;
          //     data["appVersion"] = APP_CONFIG.appVersion;
          //     data["packageName"] = APP_CONFIG.packageName;
          //     data["deviceId"] = storedData.deviceId;
          //     var loginToken;
          //     if(storedData && storedData.loginApiRes){
          //       // data["registration_token"] = storedData.fcmTokenKey;
          //       data["registration_token"] =  this.newFcmTokenKey;
          //       data["employeeId"] = storedData.loginApiRes.user_id;
          //       loginToken=storedData.loginApiRes.login_token;
          //     }else{
          //       loginToken="";
          //     }
          //     var httpOptions = {
          //       headers: new HttpHeaders({
          //         "Content-Type": "application/json",
          //         Authorization:  loginToken,
          //       }),
          //     };
          //     return this.http.post(URLS.discountingUrl+url, data, httpOptions).pipe(catchError(this.handleError));
          //   }))
          // }

        }, {
          key: "generateDeviceId",
          value: function generateDeviceId() {
            if (this.platform.is("cordova")) {
              console.log("call FCM /DeviceId 12");
              var deviceUuid = this.device_id.uuid;
              this.deviceId = deviceUuid == null ? "browser" : deviceUuid;

              if (this.deviceId == "browser") {
                var _deviceUuid = this.device_id.uuid;
                this.deviceId = _deviceUuid == null ? "browser" : _deviceUuid;

                if (this.deviceId == "browser") {
                  var _deviceUuid2 = this.device_id.uuid;
                  this.deviceId = _deviceUuid2 == null ? "browser" : _deviceUuid2;
                  this.storageService.setStorage('deviceId', this.deviceId);
                } else {
                  this.storageService.setStorage('deviceId', this.deviceId);
                }
              } else {
                this.storageService.setStorage('deviceId', this.deviceId);
              }
            } else {
              console.log("call FCM /DeviceId 123");
              this.storageService.setStorage('deviceId', 'browser');
            }
          }
        }, {
          key: "takePermission",
          value: function takePermission() {
            var _this12 = this;

            if (this.platform.is("cordova")) {
              this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
                console.log("Has permission result1==", result);
                console.log("Has permission?", result.hasPermission);

                if (!result.hasPermission) {
                  console.log("Has permission result2==", result);

                  _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.CAMERA);
                }
              }, function (err) {
                return _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.CAMERA);
              });
              this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
                console.log("Has permission READ_EXTERNAL_STORAGE==", result.hasPermission);

                if (!result.hasPermission) {
                  _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
                }
              }, function (err) {
                return _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
              });
              this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) {
                console.log("Has permission WRITE_EXTERNAL_STORAGE==", result.hasPermission);

                if (!result.hasPermission) {
                  _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                }
              }, function (err) {
                return _this12.androidPermissions.requestPermission(_this12.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
              });
            }
          }
        }, {
          key: "generateFCMToken",
          value: function generateFCMToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this13 = this;

              var that;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      that = this;
                      this.platform.ready().then(function () {
                        console.log("call FCM Function==");

                        if (_this13.platform.is("cordova")) {
                          that.fcm.subscribeToTopic('benepikOne');
                          console.log("call FCM and get token0.0==");
                          console.log("call FCM platform==", that.platform);
                          that.fcm.onNotification().subscribe(function (data) {
                            console.log("data receive from server call FCM == ", data);

                            if (data.wasTapped) {
                              that.pushIsinBackground = true;
                              setTimeout(function () {
                                that.checkcondition(data);
                              }, 3000);
                              console.log("call FCM Received in background==", data);
                            } else {
                              console.log("call FCM Received in foreground==", data);

                              if (that.platform.is('ios')) {
                                that.pushAlertView(data.aps.alert.title, data.aps.alert.body, data);
                              } else {
                                // that.pushAlertView(data.title+' '+'New Notification', data.body, data);
                                that.pushAlertView(data.title, data.body, data);
                              }
                            }

                            ;
                            that.fcm.unsubscribeFromTopic('benepikOne');
                          });

                          _this13.fcm.getToken().then(function (token) {
                            console.log("call FCM and get token0==", token);

                            if (token) {
                              _this13.fcmToken = token;
                              console.log("call FCM If Token==", _this13.fcmToken);

                              _this13.storage.set('fcmToken', _this13.fcmToken);
                            } else {
                              console.log("call FCM else Token==", token);

                              if (_this13.fcmGenerationRetryCount <= 2) {
                                _this13.generateFCMToken();

                                _this13.fcmGenerationRetryCount = _this13.fcmGenerationRetryCount + 1;
                              }
                            }
                          });

                          console.log("call FCM and get token1.1==");

                          _this13.fcm.onTokenRefresh().subscribe(function (token) {
                            console.log("call FCM and get token1==", token);
                          });
                        } else {
                          var fcmDummyToken = "app_is_running_in_browser";

                          _this13.storage.set('fcmToken', fcmDummyToken);

                          console.log("call FCM static FCM Token==", fcmDummyToken);
                        }
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "pushAlertView",
          value: function pushAlertView(pushTitle, pushMessage, pushData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this14 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: pushTitle,
                        message: pushMessage,
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Ignore',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log("call FCM cancel/Ignore Push Alert==", blah);
                          }
                        }, {
                          text: 'View',
                          handler: function handler() {
                            console.log("call FCM View/Redirect Push Alert==", pushData);

                            _this14.checkcondition(pushData);
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "checkcondition",
          value: function checkcondition(pushAllData) {
            console.log("call FCM push redirection data==", pushAllData);
            console.log("call FCM checkConditionData 12==", pushAllData);
            this.sendData.alldata = pushAllData; // this data transfer use for "notice-detail", "hr-policy-detail"

            this.sendData.myParam = pushAllData; // this data transfer use for "communication-detail", "say-cheers-detail"

            this.router.navigate([pushAllData.redirect_page]);

            if (this.pushIsinBackground == true) {
              //hide loader in case of backfround push
              console.log("call FCM App Position in background==", this.pushIsinBackground); // this.hideLoader();
            } else {
              console.log("call FCM App Position in foreground==", this.pushIsinBackground);
            }
          }
        }, {
          key: "logOutConfirmation",
          value: function logOutConfirmation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this15 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        // title: 'Confirm purchase',
                        message: "Are you sure, you want to logout from this App",
                        buttons: [{
                          text: 'Not now',
                          handler: function handler() {
                            console.log("logout App status Not Now==");
                          }
                        }, {
                          text: 'Yes, sure',
                          handler: function handler() {
                            _this15.logOut();

                            console.log("logout App status Yes, sure==");
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "logOut",
          value: function logOut() {
            var _this16 = this;

            console.log("logout App confirmation==");
            this.showLoader();
            var apiKey = {};
            this.apiCallWithLoginToken(_assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].logoutApiUrl, apiKey).subscribe(function (result) {
              console.log("logout App Api Result==", result);

              if (result.status == '1') {
                console.log("logout App Api Success==1==", result);

                _this16.storage.clear().then(function (res) {
                  console.log("this is logout response==", res);

                  _this16.generateDeviceId();

                  _this16.generateFCMToken(); // this.router.navigate(["/welcome-screens"]).then(() => {


                  window.location.reload(); // });

                  _this16.hideLoader();
                });
              } else {
                console.log("logout App Api Success==0==");

                _this16.hideLoader();
              }
            }, function (err) {
              console.log("logout App Api error==", err);

              _this16.hideLoader();
            });
          }
        }, {
          key: "videoZoome",
          value: function videoZoome(videoPath, videoType, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: _video_modal_video_modal_page__WEBPACK_IMPORTED_MODULE_16__["VideoModalPage"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          "playVideo": videoPath,
                          "videoLevel": videoType,
                          "clickIndex": index
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.onWillDismiss().then(function (dataReturned) {
                        console.log("Receive: Home Page", dataReturned);
                      });
                      _context7.next = 6;
                      return modal.present();

                    case 6:
                      return _context7.abrupt("return", _context7.sent);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "device",
          get: function get() {
            if (this.platform.is("ios")) {
              return "3";
            } else if (this.platform.is("android")) {
              return "2";
            } else {
              return "browser";
            }
          }
        }]);

        return ApiservicesService;
      }();

      ApiservicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_13__["DataTransferService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ApiservicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], ApiservicesService);
      /***/
    },

    /***/
    "./src/app/services/data-transfer.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/data-transfer.service.ts ***!
      \***************************************************/

    /*! exports provided: DataTransferService */

    /***/
    function srcAppServicesDataTransferServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTransferService", function () {
        return DataTransferService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DataTransferService = function DataTransferService() {
        _classCallCheck(this, DataTransferService);
      };

      DataTransferService.ctorParameters = function () {
        return [];
      };

      DataTransferService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataTransferService);
      /***/
    },

    /***/
    "./src/app/services/local-storage.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/local-storage.service.ts ***!
      \***************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function srcAppServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService(storage) {
          _classCallCheck(this, LocalStorageService);

          this.storage = storage;
        }

        _createClass(LocalStorageService, [{
          key: "setStorage",
          value: function setStorage(key, value) {
            var _this17 = this;

            console.log('storage data key==> ', key);
            console.log('storage data value==> ', value);
            this.storage.get('allStoreData').then(function (storedData) {
              console.log('call Fcm storage service1==> ', storedData);
              console.log('call Fcm storage service2==> ', storedData);

              if (storedData) {
                storedData[key] = value;

                _this17.storage.set('allStoreData', storedData).then(function (res) {
                  console.log('storage data==> ', res);
                });
              } else {
                console.log('******==> ', storedData);
                console.log('****** key==> ', key);
                console.log('****** value==> ', value);
                var obj = {};
                obj[key] = value;

                _this17.storage.set('allStoreData', obj).then(function (res) {
                  console.log('storage data null obj==> ', res);
                });
              }
            });
          } // to get a key/value pair

        }, {
          key: "getStorage",
          value: function getStorage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.storage.get('allStoreData');

                    case 3:
                      result = _context8.sent;

                      if (!(result != null)) {
                        _context8.next = 6;
                        break;
                      }

                      return _context8.abrupt("return", result);

                    case 6:
                      return _context8.abrupt("return", null);

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8["catch"](0);
                      console.log(_context8.t0);
                      return _context8.abrupt("return", null);

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 9]]);
            }));
          } // remove a single key value:

        }, {
          key: "remove",
          value: function remove(key) {
            this.storage.remove(key);
          } //  delete all data from your application:

        }, {
          key: "clear",
          value: function clear() {
            this.storage.clear();
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LocalStorageService);
      /***/
    },

    /***/
    "./src/app/video-modal/video-modal.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/video-modal/video-modal.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVideoModalVideoModalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".videodiv {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  bottom: 0;\n  transform: translate(0px, -50%);\n}\n\n.videoDivSlider {\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0%;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.videoDivSlider .sliderDiv {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  bottom: 0;\n  transform: translate(0px, -50%);\n}\n\n.imageSliderDiv {\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0%;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.imageSliderDiv .sliderDiv {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0%;\n  bottom: 0;\n  transform: translate(0px, 0%);\n}\n\n.imageSliderDiv .sliderDiv ion-slides {\n  width: 100%;\n  height: 100%;\n}\n\n.imageSliderDiv .sliderDiv ion-slides img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n\n.singleImageDiv {\n  width: 100%;\n  height: 100%;\n}\n\n.singleImageDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsa0JBQUE7RUFBa0IsT0FBQTtFQUFPLFFBQUE7RUFBUSxRQUFBO0VBQVEsU0FBQTtFQUFTLCtCQUFBO0FBTzVEOztBQUpBO0VBQWdCLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxRQUFBO0VBQVEsT0FBQTtFQUFPLFNBQUE7RUFBUyxXQUFBO0VBQVcsWUFBQTtBQWM1RTs7QUFiSTtFQUFXLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxRQUFBO0VBQVEsUUFBQTtFQUFRLFNBQUE7RUFBUywrQkFBQTtBQXFCakU7O0FBakJBO0VBQWdCLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxRQUFBO0VBQVEsT0FBQTtFQUFPLFNBQUE7RUFBUyxXQUFBO0VBQVcsWUFBQTtBQTJCNUU7O0FBMUJJO0VBQVcsa0JBQUE7RUFBa0IsT0FBQTtFQUFPLFFBQUE7RUFBUSxPQUFBO0VBQU8sU0FBQTtFQUFTLDZCQUFBO0FBa0NoRTs7QUFqQ1E7RUFBVyxXQUFBO0VBQVcsWUFBQTtBQXFDOUI7O0FBcENZO0VBQUksc0JBQUE7S0FBQSxtQkFBQTtFQUFtQixXQUFBO0VBQVcsWUFBQTtBQXlDOUM7O0FBcENBO0VBQWdCLFdBQUE7RUFBVyxZQUFBO0FBeUMzQjs7QUF4Q0k7RUFBSSxXQUFBO0VBQVcsWUFBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUE2Qy9CIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvZGl2e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDo1MCU7Ym90dG9tOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIC01MCUpO1xufVxuXG4udmlkZW9EaXZTbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7bGVmdDowO3JpZ2h0OjA7dG9wOjAlO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XG4gICAgLnNsaWRlckRpdntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6NTAlO2JvdHRvbTowO3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAtNTAlKTtcbiAgICB9XG59XG5cbi5pbWFnZVNsaWRlckRpdntwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MCU7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcbiAgICAuc2xpZGVyRGl2e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowJTtib3R0b206MDt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMCUpO1xuICAgICAgICBpb24tc2xpZGVze3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICBpbWd7b2JqZWN0LWZpdDpjb250YWluO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2luZ2xlSW1hZ2VEaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcbiAgICBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvbnRhaW47fVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/video-modal/video-modal.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/video-modal/video-modal.page.ts ***!
      \*************************************************/

    /*! exports provided: VideoModalPage */

    /***/
    function srcAppVideoModalVideoModalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoModalPage", function () {
        return VideoModalPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var VideoModalPage = /*#__PURE__*/function () {
        function VideoModalPage(modalController, zone) {
          _classCallCheck(this, VideoModalPage);

          this.modalController = modalController;
          this.zone = zone;
          this.checkval = false;
          this.newSliderArray = [];
          this.playVideoTest = [];
        }

        _createClass(VideoModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.playVideoTest = this.playVideo;
            console.log("video path data==", this.playVideo);
            console.log("video level data==", this.videoLevel);

            if (this.videoLevel == "image") {
              this.playVideoTest[this.clickIndex].selectedIndex = this.clickIndex;
              setTimeout(function () {
                console.log("ModalController video data2==", _this18.playVideoTest);

                for (var i = 0; i < _this18.playVideoTest.length; i++) {
                  if (_this18.playVideoTest[i].media_type == 1 || _this18.playVideoTest[i].media_type == "1") {
                    _this18.newSliderArray.push({
                      "media_path": _this18.playVideoTest[i].media_path,
                      "selectedIndex": _this18.playVideoTest[i].selectedIndex || ""
                    });
                  }

                  if (i == _this18.playVideoTest.length - 1) {
                    _this18.clickIndexTest = _this18.newSliderArray.findIndex(function (x) {
                      return x.selectedIndex != '';
                    });
                  }
                }

                _this18.slideDiv = {
                  speed: "500",
                  initialSlide: _this18.clickIndexTest,
                  slidesPerView: 1,
                  spaceBetween: 10,
                  pager: true
                };
                _this18.checkval = true;
              }, 500);
            }
          }
        }, {
          key: "dismissVideo",
          value: function dismissVideo() {
            var _this19 = this;

            this.zone.run(function () {
              _this19.modalController.dismiss({
                'dismissed': true
              }).then(function () {
                if (_this19.videoLevel == "image") {
                  _this19.playVideoTest[_this19.clickIndex].selectedIndex = '';
                }

                _this19.playVideo = [];
                _this19.newSliderArray = [];
                _this19.clickIndex = undefined;
                _this19.clickIndexTest = undefined;
                console.log("ModalController dissmiss==", _this19.playVideoTest);
              });
            });
          }
        }]);

        return VideoModalPage;
      }();

      VideoModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      VideoModalPage.propDecorators = {
        playVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        videoLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }]
      };
      VideoModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./video-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/video-modal/video-modal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./video-modal.page.scss */
        "./src/app/video-modal/video-modal.page.scss"))["default"]]
      })], VideoModalPage); // import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
      // import { ModalController } from '@ionic/angular';
      // import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
      // import { IonSlides } from '@ionic/angular';
      // @Component({
      //   selector: 'app-video-modal',
      //   templateUrl: './video-modal.page.html',
      //   styleUrls: ['./video-modal.page.scss'],
      // })
      // export class VideoModalPage implements OnInit{
      //   @Input() playVideo: any;
      //   @Input() videoLevel: string;
      //   @Input() clickIndex: number;
      //   @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
      //   checkval:boolean=false;
      //   slideDiv:any;
      //   newSliderArray:any=[];
      //   playVideoTest=[];
      //   constructor(public modalController:ModalController,private photoViewer:PhotoViewer,private zone:NgZone) {}
      //   ngOnInit(){
      //     this.playVideoTest=this.playVideo;
      //     console.log("previouse page data==", this.playVideo);
      //     // console.log("data videoLevel==", this.videoLevel);
      //     console.log("selectedIndex==", this.clickIndex);
      //     if(this.videoLevel=="image"){
      //       this.playVideoTest[this.clickIndex].selectedIndex=this.clickIndex;
      //       console.log("selectedIndex key add in array ==", this.playVideoTest);
      //       setTimeout(() => {
      //         console.log("ModalController video data2==", this.playVideoTest);
      //         for(let i=0; i<this.playVideoTest.length; i++){
      //           if(this.playVideoTest[i].media_type==1 || this.playVideoTest[i].media_type=="1"){
      //             console.log("ModalController video data2==", this.playVideoTest);
      //             this.newSliderArray.push({"media_path":this.playVideoTest[i].media_path});
      //             if(this.playVideoTest[i].selectedIndex && this.playVideoTest[i].selectedIndex!=''){
      //               this.clickIndex=i;
      //               console.log("yoyoyo ==", this.clickIndex);
      //             }
      //           }
      //         }
      //         console.log("ModalController new array==", this.newSliderArray);
      //         console.log("ModalController new clickIndex==", this.clickIndex);
      //         this.slideDiv={
      //           speed:"500",initialSlide:this.clickIndex,slidesPerView:1,spaceBetween:10,pager:true,
      //         }
      //         this.checkval=true;
      //       }, 500);
      //     }
      //   }
      //   dismissVideo(){
      //     this.zone.run(()=>{
      //       this.modalController.dismiss({
      //         'dismissed': true
      //       }).then(()=>{
      //         this.playVideoTest[this.clickIndex].selectedIndex='';
      //         this.playVideo=[];
      //         this.newSliderArray=[];
      //         this.clickIndex=undefined;
      //         console.log("ModalController dissmiss==", this.playVideoTest);
      //       });
      //     });
      //   }
      // }

      /***/
    },

    /***/
    "./src/assets/constant.ts":
    /*!********************************!*\
      !*** ./src/assets/constant.ts ***!
      \********************************/

    /*! exports provided: URLS, APP_CONFIG */

    /***/
    function srcAssetsConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URLS", function () {
        return URLS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
        return APP_CONFIG;
      });

      var URLS = {
        //***************** Development URL*****************
        baseUrl: "https://benepik.in/bone/",
        discountingUrl: "https://benepik.in/yorker/privilege/api/",
        //***************** UAT URL*****************
        // baseUrl:"https://benepik.org/bone/",
        // discountingUrl:"https://benepik.org/yorker/privilege/api/",
        //***************** Production URL*****************
        // baseUrl:"https://benepik.co.in/bone/",
        // discountingUrl:"https://benepik.co.in/yorker/privilege/api/",
        maintainanceApiUrl: "v1/maintenance",
        organisationName: "v1/verifyclient",
        loginOtpSend: "v1/verifyphone",
        submitOtp: "v1/submitotp",
        resendOtp: "v1/resendotp",
        loginInformation: "v1/verifyemployee",
        connectToHr: "v1/contactsetting",
        connectToHrSubmit: "v1/contactus",
        profileImageSubmit: "v1/updatedp",
        sideMenu: "v1/sidemenu",
        userProfile: "v1/myprofile",
        sendOtp: "v1/sendotp",
        uploadImage: "v1/uploadmedia",
        noticeList: "v1/noticelist",
        noticeDetail: "v1/noticedetails",
        analyticsApi: "v1/noticesubmit",
        hrPolicyList: "v1/hrpolicylist",
        hrPolicyDetail: "v1/hrpolicydetail",
        hrPolicySubmitSignature: "v1/hrpolicysign",
        hrPolicySubmit: "v1/hrpolicysubmit",
        hrPolicyQuizQuestion: "v1/quizdetail",
        hrPolicyQuizSubmit: "v1/quizsubmit",
        hrPolicyRetakeQuiz: "v1/hrpolicyretake",
        homeAllData: "v1/homepage",
        tabMenuData: "v1/menulist",
        communityListApiUrl: "v1/postlist",
        leaderCheerApiUrl: "v1/badgeboards",
        submitCommentApi: "v1/docomment",
        likePostApi: "v1/dolike",
        likeListApi: "v1/likelist",
        communicationDetail: "v1/postdetail",
        sayCheersListApiUrl: "v1/getbadgecategory",
        searchCheersUserListApi: "v1/searchuser",
        sayCheersHomeApi: "v1/badgehomepage",
        sayCheersDetailApi: "v1/carddetails",
        sayCheerSentReceivedListApi: "v1/badgesentreceive",
        submitSayCheers: "v1/sendbadge",
        logoutApiUrl: "v1/logout",
        submitContactFeed: "v1/contactsubmit",
        forceUpdate: "v1/forceupdate",
        alertList: "v1/alertlist",
        alertRead: "v1/alertread",
        redeemFirstPage: "v1/accountpoints",
        accountStatementListApi: "v1/pointhistory",
        redeemCategoryList: "v1/categoryredeem",
        redeemVoucherList: "v1/dealall",
        redeemVoucherDetail: "v1/dealdetail",
        redeemVoucherSendOtp: "v1/createorder",
        redeemMyOrderList: "v1/orderhistory",
        redeemMyOrderListDetail: "v1/orderdetail",
        redeemMyOrderDetailEmail: "v1/emailvoucher",
        listDataOfIosRegistration: "v1/registration",
        IosRegistrationSubmition: "v1/submitregistration",
        //new development by shivanshi
        loginDataApi: "v1/login_page",
        get_country_code: "v1/country_list",
        verifyEmployeeApi: "v1/verifyemployee_v2",
        resendOtpApi: "v1/resendotp_v2",
        submitOtpApi: "v1/submitotp",
        initialApi: "v1/initial_check",
        previewAboardApi: "v1/previewAboard",
        previewAboardSubmitApi: "v1/submitAboard",
        ideaBoxListApi: "v1/createIdea",
        ideaCategoryListApi: "v1/all_idea_category",
        ideaHistoryApi: "v1/all_ideas",
        aboardListApi: "v1/aboardList",
        aboardDetailApi: "v1/aboardDetail",
        birthdayAnniversaryApi: "v1/birthdayAnniversarylist",
        birthdayAnniversaryDetailApi: "v1/birthdayAnniversarydetail",
        nominationListApi: "v1/nominationListFeeds",
        likeOnCommentApi: "v1/likeOnComment",
        deleteCommentApi: "v1/deleteComment",
        homePostApi: "v1/homepost",
        filterApi: "v1/rnr_app_filter",
        awardDashboardApi: "v1/rnrDashboard",
        awardDashboardDetailApi: "v1/getAwardData",
        awardEmployeeSearchApi: "v1/get_search_users_data",
        awardTemplateApi: "v1/rnr_nomination_template",
        awardSubmitApi: "v1/createNomination",
        myactvityApi: "v1/award_detail",
        hrPolicyCategoryApi: "v1/hrpolicycategory",
        nominationActionApi: "v1/nominationAction",
        updateNominationApi: "v1/update_awardee_list",
        myawardListApi: "v1/my_award_list",
        editCommentApi: "v1/editComment"
      };
      var APP_CONFIG = {
        // clientId : 'CO-40',
        clientId: '',
        appVersion: "2",
        packageName: 'connect.benepikone'
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
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
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/benepik/Desktop/shivanshi/Benepik_One_Android-main/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map