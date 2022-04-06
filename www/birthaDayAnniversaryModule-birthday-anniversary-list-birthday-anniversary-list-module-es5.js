(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["birthaDayAnniversaryModule-birthday-anniversary-list-birthday-anniversary-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.html":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBirthaDayAnniversaryModuleBirthdayAnniversaryListBirthdayAnniversaryListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{birthdayAniversaryData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngFor=\"let item of birthdayAniversaryData?.list_data\">\n    <ion-col *ngIf=\"birthdayAniversaryData?.list_data.length>0\" class=\"ion-no-padding\">\n      <p>{{item?.title}}</p>\n      <div *ngFor=\"let val of item?.data\" class=\"paddDiv\">\n        <ion-row  [style.background]=\"'url('+val?.birthdayAnnBackgroundImage+')'\"\n        tappable (click)=\"gotoDetail(val)\" class=\"bgCss \">\n          <ion-col [size]=\"3\"><img [src]=\"val?.user_image\" class=\"userImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/></ion-col>\n          <ion-col [size]=\"7\" class=\"autoMargin\"><p class=\"ion-no-margin\">{{val?.name}}</p>\n            <p class=\"ion-no-margin grayP\">{{val?.designation}}</p>\n            <p class=\"ion-no-margin grayP\">{{val?.event_date_format}}</p></ion-col>\n          <ion-col [size]=\"2\" class=\"autoMargin\"><img [src]=\"val?.birthdayAnnImage\" class=\"banerImage\"/></ion-col>\n        </ion-row>\n      </div>\n\n    </ion-col>\n  </ion-row>\n  <p *ngIf=\"errorMessage!=''\" class=\"ion-text-center\">{{errorMessage}}</p>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list-routing.module.ts":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list-routing.module.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: BirthdayAnniversaryListPageRoutingModule */

    /***/
    function srcAppBirthaDayAnniversaryModuleBirthdayAnniversaryListBirthdayAnniversaryListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BirthdayAnniversaryListPageRoutingModule", function () {
        return BirthdayAnniversaryListPageRoutingModule;
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


      var _birthday_anniversary_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./birthday-anniversary-list.page */
      "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.ts");

      var routes = [{
        path: '',
        component: _birthday_anniversary_list_page__WEBPACK_IMPORTED_MODULE_3__["BirthdayAnniversaryListPage"]
      }];

      var BirthdayAnniversaryListPageRoutingModule = function BirthdayAnniversaryListPageRoutingModule() {
        _classCallCheck(this, BirthdayAnniversaryListPageRoutingModule);
      };

      BirthdayAnniversaryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BirthdayAnniversaryListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.module.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: BirthdayAnniversaryListPageModule */

    /***/
    function srcAppBirthaDayAnniversaryModuleBirthdayAnniversaryListBirthdayAnniversaryListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BirthdayAnniversaryListPageModule", function () {
        return BirthdayAnniversaryListPageModule;
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


      var _birthday_anniversary_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./birthday-anniversary-list-routing.module */
      "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list-routing.module.ts");
      /* harmony import */


      var _birthday_anniversary_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./birthday-anniversary-list.page */
      "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.ts");

      var BirthdayAnniversaryListPageModule = function BirthdayAnniversaryListPageModule() {
        _classCallCheck(this, BirthdayAnniversaryListPageModule);
      };

      BirthdayAnniversaryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _birthday_anniversary_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BirthdayAnniversaryListPageRoutingModule"]],
        declarations: [_birthday_anniversary_list_page__WEBPACK_IMPORTED_MODULE_6__["BirthdayAnniversaryListPage"]]
      })], BirthdayAnniversaryListPageModule);
      /***/
    },

    /***/
    "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.scss":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBirthaDayAnniversaryModuleBirthdayAnniversaryListBirthdayAnniversaryListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgCss {\n  border: 1px solid gray;\n  border-radius: 10px;\n  background-size: 100% 100% !important;\n}\n\n.userImage {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.banerImage {\n  height: 30px;\n  width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.grayP {\n  color: gray;\n  font-size: 13px;\n}\n\n.paddDiv {\n  padding-bottom: 16px;\n}\n\n.paddDiv:nth-last-child(1) {\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhhRGF5QW5uaXZlcnNhcnlNb2R1bGUvYmlydGhkYXktYW5uaXZlcnNhcnktbGlzdC9iaXJ0aGRheS1hbm5pdmVyc2FyeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLHNCQUFBO0VBQXVCLG1CQUFBO0VBQW9CLHFDQUFBO0FBSWxEOztBQUhBO0VBQVcsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtBQVNwQzs7QUFSQTtFQUFZLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtBQWNyQzs7QUFiQTtFQUFPLFdBQUE7RUFBWSxlQUFBO0FBa0JuQjs7QUFqQkE7RUFBUyxvQkFBQTtBQXFCVDs7QUFwQkE7RUFBMkIsbUJBQUE7QUF3QjNCIiwiZmlsZSI6InNyYy9hcHAvYmlydGhhRGF5QW5uaXZlcnNhcnlNb2R1bGUvYmlydGhkYXktYW5uaXZlcnNhcnktbGlzdC9iaXJ0aGRheS1hbm5pdmVyc2FyeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0Nzc3tib3JkZXI6IDFweCBzb2xpZCBncmF5O2JvcmRlci1yYWRpdXM6IDEwcHg7YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudDt9XG4udXNlckltYWdle2hlaWdodDogNTBweDt3aWR0aDogNTBweDtib3JkZXItcmFkaXVzOiA1MCU7fVxuLmJhbmVySW1hZ2V7aGVpZ2h0OiAzMHB4O3dpZHRoOiAzMHB4O29iamVjdC1maXQ6IGNvbnRhaW47fVxuLmdyYXlQe2NvbG9yOiBncmF5O2ZvbnQtc2l6ZTogMTNweDt9XG4ucGFkZERpdntwYWRkaW5nLWJvdHRvbTogMTZweDt9XG4ucGFkZERpdjpudGgtbGFzdC1jaGlsZCgxKXtwYWRkaW5nLWJvdHRvbTogMHB4O30iXX0= */";
      /***/
    },

    /***/
    "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.ts ***!
      \********************************************************************************************************/

    /*! exports provided: BirthdayAnniversaryListPage */

    /***/
    function srcAppBirthaDayAnniversaryModuleBirthdayAnniversaryListBirthdayAnniversaryListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BirthdayAnniversaryListPage", function () {
        return BirthdayAnniversaryListPage;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var BirthdayAnniversaryListPage = /*#__PURE__*/function () {
        function BirthdayAnniversaryListPage(zone, router, sendData, apiservices) {
          _classCallCheck(this, BirthdayAnniversaryListPage);

          this.zone = zone;
          this.router = router;
          this.sendData = sendData;
          this.apiservices = apiservices;
          this.tab1Data = this.sendData.alldata;
        }

        _createClass(BirthdayAnniversaryListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.birthdayAniversaryList();
          }
        }, {
          key: "gotoDetail",
          value: function gotoDetail(item) {
            this.sendData.alldata = item;
            this.router.navigate(['/birthday-aniversray-detail']);
          }
        }, {
          key: "birthdayAniversaryList",
          value: function birthdayAniversaryList() {
            var _this = this;

            this.zone.run(function () {
              _this.apiservices.showLoader();

              var apiKey = {
                "event_type": _this.tab1Data.event_type
              };
              console.log("resend OTP by Voice Call, api key", apiKey);

              _this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].birthdayAnniversaryApi, apiKey).subscribe(function (result) {
                console.log("resend OTP by Voice Call, api response==", result);

                _this.apiservices.hideLoader();

                _this.birthdayAniversaryData = result.data;

                if (result.status == 1 || result.status == '1') {
                  _this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg'); // this.router.navigate(['/qualification-priview']);


                  _this.errorMessage = '';
                } else {
                  _this.errorMessage = result.message;

                  _this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this.apiservices.hideLoader();

                _this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return BirthdayAnniversaryListPage;
      }();

      BirthdayAnniversaryListPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }];
      };

      BirthdayAnniversaryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birthday-anniversary-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./birthday-anniversary-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./birthday-anniversary-list.page.scss */
        "./src/app/birthaDayAnniversaryModule/birthday-anniversary-list/birthday-anniversary-list.page.scss"))["default"]]
      })], BirthdayAnniversaryListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=birthaDayAnniversaryModule-birthday-anniversary-list-birthday-anniversary-list-module-es5.js.map