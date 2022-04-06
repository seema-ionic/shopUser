(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WelcomeAboardModule-welcome-aboard-list-welcome-aboard-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWelcomeAboardModuleWelcomeAboardListWelcomeAboardListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col [size]=\"6\" *ngFor=\"let item of Data\" >\n      <div class=\"backgroundCol\" [style.background-image]=\"'url('+item?.bg_img+')'\" (click)=\"gotoNext('0', item)\">\n<br>\n    <img [src]=\"item?.profile_img\" class=\"userImg\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      <div class=\"borderWhite\">\n        <br><br>\n        <p class=\"ion-text-center ion-no-margin nameP\">{{item?.full_name}}</p>\n        <ion-row *ngFor=\"let val of item?.data_array\">\n          <ion-col [size]=\"2\" class=\"ion-no-padding\"><img [src]=\"val?.icon\"  class=\"iconCss\"/></ion-col>\n          <ion-col [size]=\"10\"><p class=\"ion-no-margin fontP\">{{val?.text}}</p></ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    </ion-col>\n  </ion-row>\n  <p *ngIf=\"errorMessage\" class=\"ion-text-center\">{{errorMessage}}</p>\n  <ion-infinite-scroll threshold=\"100px\"  *ngIf=\"errorMessage==''\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list-routing.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: WelcomeAboardListPageRoutingModule */

    /***/
    function srcAppWelcomeAboardModuleWelcomeAboardListWelcomeAboardListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeAboardListPageRoutingModule", function () {
        return WelcomeAboardListPageRoutingModule;
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


      var _welcome_aboard_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome-aboard-list.page */
      "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.ts");

      var routes = [{
        path: '',
        component: _welcome_aboard_list_page__WEBPACK_IMPORTED_MODULE_3__["WelcomeAboardListPage"]
      }];

      var WelcomeAboardListPageRoutingModule = function WelcomeAboardListPageRoutingModule() {
        _classCallCheck(this, WelcomeAboardListPageRoutingModule);
      };

      WelcomeAboardListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomeAboardListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: WelcomeAboardListPageModule */

    /***/
    function srcAppWelcomeAboardModuleWelcomeAboardListWelcomeAboardListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeAboardListPageModule", function () {
        return WelcomeAboardListPageModule;
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


      var _welcome_aboard_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-aboard-list-routing.module */
      "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list-routing.module.ts");
      /* harmony import */


      var _welcome_aboard_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome-aboard-list.page */
      "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.ts");

      var WelcomeAboardListPageModule = function WelcomeAboardListPageModule() {
        _classCallCheck(this, WelcomeAboardListPageModule);
      };

      WelcomeAboardListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_aboard_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeAboardListPageRoutingModule"]],
        declarations: [_welcome_aboard_list_page__WEBPACK_IMPORTED_MODULE_6__["WelcomeAboardListPage"]]
      })], WelcomeAboardListPageModule);
      /***/
    },

    /***/
    "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWelcomeAboardModuleWelcomeAboardListWelcomeAboardListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".userImg {\n  width: 90px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  border: 3px solid white;\n}\n\n.borderWhite {\n  margin: -40px 0px 0px 0px;\n  background: white;\n  border: 2px solid var(--headerColor);\n}\n\n.backgroundCol {\n  background-size: 100% 100%;\n  box-shadow: 1px 2px 6px 1px #e9e3e3;\n}\n\n.nameP {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  margin-top: 5px;\n}\n\n.fontP {\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.iconCss {\n  height: 22px;\n  width: 25px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvV2VsY29tZUFib2FyZE1vZHVsZS93ZWxjb21lLWFib2FyZC1saXN0L3dlbGNvbWUtYWJvYXJkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQVMsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxZQUFBO0VBQWEsdUJBQUE7QUFDbkc7O0FBQUE7RUFBYSx5QkFBQTtFQUEwQixpQkFBQTtFQUFrQixvQ0FBQTtBQU16RDs7QUFMQTtFQUFlLDBCQUFBO0VBQTJCLG1DQUFBO0FBVTFDOztBQVRBO0VBQU8saUJBQUE7RUFUSCxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUt5QztFQUFHLGVBQUE7QUFtQmhEOztBQWxCQTtFQUFPLGVBQUE7RUFWSCxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQU11QztBQTJCM0M7O0FBMUJBO0VBQVMsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLFlBQUE7QUFpQ3REIiwiZmlsZSI6InNyYy9hcHAvV2VsY29tZUFib2FyZE1vZHVsZS93ZWxjb21lLWFib2FyZC1saXN0L3dlbGNvbWUtYWJvYXJkLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG59XG4udXNlckltZ3t3aWR0aDogOTBweDtoZWlnaHQ6IDkwcHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bztib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTt9XG4uYm9yZGVyV2hpdGV7bWFyZ2luOiAtNDBweCAwcHggMHB4IDBweDtiYWNrZ3JvdW5kOiB3aGl0ZTtib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7fVxuLmJhY2tncm91bmRDb2x7YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7Ym94LXNoYWRvdzogMXB4IDJweCA2cHggMXB4ICNlOWUzZTM7fVxuLm5hbWVQe2ZvbnQtd2VpZ2h0OiBib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMSk7bWFyZ2luLXRvcDogNXB4O31cbi5mb250UHtmb250LXNpemU6IDEzcHg7QGluY2x1ZGUgbGluZS1jbGFtcCgxKTt9XG4uaWNvbkNzc3toZWlnaHQ6IDIycHg7d2lkdGg6IDI1cHg7b2JqZWN0LWZpdDogY29udGFpbjtwYWRkaW5nOiAzcHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: WelcomeAboardListPage */

    /***/
    function srcAppWelcomeAboardModuleWelcomeAboardListWelcomeAboardListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeAboardListPage", function () {
        return WelcomeAboardListPage;
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

      var WelcomeAboardListPage = /*#__PURE__*/function () {
        function WelcomeAboardListPage(router, sendData, zone, apiservices) {
          _classCallCheck(this, WelcomeAboardListPage);

          this.router = router;
          this.sendData = sendData;
          this.zone = zone;
          this.apiservices = apiservices;
          this.Data = [];
          this.value = "0";
          this.myinfiniteScrollCall = false;
          this.errorMessage = '';
        }

        _createClass(WelcomeAboardListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.aboardList();
          }
        }, {
          key: "gotoNext",
          value: function gotoNext(val, item) {
            this.sendData.alldata = val;
            this.sendData.myParam = item;
            this.router.navigate(['/qualification-priview']);
          }
        }, {
          key: "aboardList",
          value: function aboardList() {
            var _this = this;

            this.apiservices.showLoader();
            this.zone.run(function () {
              var apiKey = {
                "limit": _this.value
              };
              console.log("resend OTP by Voice Call, api key", apiKey);

              _this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].aboardListApi, apiKey).subscribe(function (result) {
                console.log("resend OTP by Voice Call, api response==", result);

                _this.apiservices.hideLoader();

                _this.allData = result;

                if (result.status == 1 || result.status == '1') {
                  if (_this.Data == undefined) {
                    _this.Data = result.data;
                  } else {
                    _this.Data = _this.Data.concat(result.data);
                  }

                  if (_this.myinfiniteScrollCall == true) {
                    // console.log("noticeBoard List Infinite Scroll if2==", this.communicationList);
                    _this.myInfiniteScroll.target.complete();

                    _this.errorMessage = "";
                    _this.myinfiniteScrollCall = false;
                  }
                } else {
                  _this.errorMessage = result.message;

                  _this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');

                  if (_this.myinfiniteScrollCall == true) {
                    _this.myInfiniteScroll.target.complete();

                    _this.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this.apiservices.hideLoader();

                _this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "loadData",
          value: function loadData(infiniteScroll) {
            var _this2 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this2.value = _this2.Data.length;
              console.log("Begin async operation 2==", _this2.value);
              _this2.myInfiniteScroll = infiniteScroll;

              _this2.aboardList();
            }, 500);
          }
        }]);

        return WelcomeAboardListPage;
      }();

      WelcomeAboardListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }];
      };

      WelcomeAboardListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-aboard-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome-aboard-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome-aboard-list.page.scss */
        "./src/app/WelcomeAboardModule/welcome-aboard-list/welcome-aboard-list.page.scss"))["default"]]
      })], WelcomeAboardListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=WelcomeAboardModule-welcome-aboard-list-welcome-aboard-list-module-es5.js.map