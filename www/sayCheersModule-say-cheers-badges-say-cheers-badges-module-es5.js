(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-badges-say-cheers-badges-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSayCheersModuleSayCheersBadgesSayCheersBadgesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:gainsboro;\">\n  <div *ngIf=\"sentReceivedList\">\n    <div *ngFor=\"let data of sentReceivedList\" tappable (click)=\"goToMessage(data)\">\n\n\n      <div *ngIf=\"sayCheersData=='sent'\" >\n        <div class=\"listDataDiv\">\n          <ion-row style=\"position:relative;\">\n            <ion-col [size]=\"5\" class=\"ion-text-center\">\n              <div class=\"cardSendImgDiv\">\n                <app-image-view [img]=\"data?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n              </div>\n            </ion-col>\n            <ion-col [size]=\"3\" class=\"ion-no-padding autoMargin\">\n              <app-image-view [img]=\"badgeList?.arrow_icon\" [imageView]=\"false\" ></app-image-view>\n            </ion-col>\n            <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\">\n              <div class=\"cheerUserImg\">\n                <div class=\"userImgIcon\">\n                  <app-image-view [img]=\"data?.receiver_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                </div>\n                <p class=\"noMargin nameText\">{{data?.receiver_name}}</p>\n                <p class=\"noMargin positionText\">{{data?.receiver_designation}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"sayCheersData=='receive'\">\n        <div class=\"listDataDiv\">\n          <ion-row style=\"position:relative;\">\n            <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\">\n              <div class=\"cheerUserImg\">\n                <div class=\"userImgIcon\">\n                  <app-image-view [img]=\"data?.sender_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                </div>\n                <p class=\"noMargin nameText\">{{data?.sender_name}}</p>\n                <p class=\"noMargin positionText\">{{data?.sender_designation}}</p>\n              </div>\n            </ion-col>\n            <ion-col [size]=\"3\" class=\"ion-no-padding autoMargin\">\n              <app-image-view [img]=\"badgeList?.arrow_icon\" [imageView]=\"false\" ></app-image-view>\n            </ion-col>\n            <ion-col [size]=\"5\" class=\"ion-text-center\">\n              <div class=\"cardSendImgDiv\">\n                <app-image-view [img]=\"data?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n  <div *ngIf=\"!sentReceivedList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'cheerBadges'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!sentReceivedList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && sentReceivedList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && sentReceivedList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges-routing.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: SayCheersBadgesPageRoutingModule */

    /***/
    function srcAppSayCheersModuleSayCheersBadgesSayCheersBadgesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBadgesPageRoutingModule", function () {
        return SayCheersBadgesPageRoutingModule;
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


      var _say_cheers_badges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./say-cheers-badges.page */
      "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.ts");

      var routes = [{
        path: '',
        component: _say_cheers_badges_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersBadgesPage"]
      }];

      var SayCheersBadgesPageRoutingModule = function SayCheersBadgesPageRoutingModule() {
        _classCallCheck(this, SayCheersBadgesPageRoutingModule);
      };

      SayCheersBadgesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SayCheersBadgesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SayCheersBadgesPageModule */

    /***/
    function srcAppSayCheersModuleSayCheersBadgesSayCheersBadgesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBadgesPageModule", function () {
        return SayCheersBadgesPageModule;
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


      var _say_cheers_badges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./say-cheers-badges-routing.module */
      "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges-routing.module.ts");
      /* harmony import */


      var _say_cheers_badges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./say-cheers-badges.page */
      "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SayCheersBadgesPageModule = function SayCheersBadgesPageModule() {
        _classCallCheck(this, SayCheersBadgesPageModule);
      };

      SayCheersBadgesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _say_cheers_badges_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersBadgesPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_say_cheers_badges_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersBadgesPage"]]
      })], SayCheersBadgesPageModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSayCheersModuleSayCheersBadgesSayCheersBadgesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".listDataDiv {\n  background: #fff;\n  margin: 10px 0px;\n}\n.listDataDiv .cardSendImgDiv {\n  border: 1px dashed gray;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 5px 5px 2px 5px;\n}\n.listDataDiv .userImgIcon {\n  width: 80px;\n  height: 80px;\n}\n.nameText {\n  font-size: 12px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.positionText {\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtYmFkZ2VzL3NheS1jaGVlcnMtYmFkZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUFhLGdCQUFBO0VBQWdCLGdCQUFBO0FBSjdCO0FBS0k7RUFBZ0IsdUJBQUE7RUFBdUIsbUJBQUE7RUFBbUIsZ0JBQUE7RUFBZ0Isd0JBQUE7QUFDOUU7QUFBSTtFQUFhLFdBQUE7RUFBVyxZQUFBO0FBSTVCO0FBREE7RUFBVSxlQUFBO0VBQWUsaUJBQUE7RUFYckIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFPMEQ7QUFXOUQ7QUFWQTtFQUFjLGVBQUE7RUFaVixnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQVE2QztBQW1CakQiLCJmaWxlIjoic3JjL2FwcC9zYXlDaGVlcnNNb2R1bGUvc2F5LWNoZWVycy1iYWRnZXMvc2F5LWNoZWVycy1iYWRnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG59XG4ubGlzdERhdGFEaXZ7YmFja2dyb3VuZDojZmZmO21hcmdpbjoxMHB4IDBweDtcbiAgICAuY2FyZFNlbmRJbWdEaXZ7Ym9yZGVyOjFweCBkYXNoZWQgZ3JheTtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6NXB4IDVweCAycHggNXB4O31cbiAgICAudXNlckltZ0ljb257d2lkdGg6ODBweDtoZWlnaHQ6ODBweDt9XG59XG5cbi5uYW1lVGV4dHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDpib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMSl9XG4ucG9zaXRpb25UZXh0e2ZvbnQtc2l6ZToxMHB4O0BpbmNsdWRlIGxpbmUtY2xhbXAoMSl9Il19 */";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: SayCheersBadgesPage */

    /***/
    function srcAppSayCheersModuleSayCheersBadgesSayCheersBadgesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBadgesPage", function () {
        return SayCheersBadgesPage;
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


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var SayCheersBadgesPage = /*#__PURE__*/function () {
        function SayCheersBadgesPage(router, storageService, apiservices, zone, sendData) {
          _classCallCheck(this, SayCheersBadgesPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.value = 0;
          this.showErrorImage = "";
          this.no_data_message = "";
          this.sayCheersData = this.sendData.sayCheers;
          console.log("get value sent or receive==", this.sayCheersData);
        }

        _createClass(SayCheersBadgesPage, [{
          key: "goToMessage",
          value: function goToMessage(cheerData) {
            var _this = this;

            this.zone.run(function () {
              _this.sendData.myParam = cheerData;

              _this.router.navigate(["/say-cheers-detail"]);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storageService.getStorage().then(function (res) {
              _this2.sentReceivedBadge();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "sentReceivedBadge",
          value: function sentReceivedBadge() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function");

              _this3.apiservices.showLoader();

              var apikey = {
                request_tab: _this3.sayCheersData,
                limit: _this3.value
              };

              _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].sayCheerSentReceivedListApi, apikey).subscribe(function (result) {
                console.log("noticeBoard List api result==", result);

                _this3.apiservices.hideLoader();

                _this3.pageHeader = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  _this3.badgeList = result.data.settings;

                  if (_this3.sentReceivedList == undefined) {
                    _this3.sentReceivedList = result.data.badge_list;
                    console.log("HrPolicy List Infinite Scroll if1==", _this3.sentReceivedList);
                  } else {
                    _this3.sentReceivedList = _this3.sentReceivedList.concat(result.data.badge_list);
                    console.log("HrPolicy List Infinite Scroll else1==", _this3.sentReceivedList);
                  }

                  if (_this3.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll if2==", _this3.sentReceivedList);

                    _this3.myInfiniteScroll.target.complete();

                    _this3.errorMessage = result.message;
                    _this3.myinfiniteScrollCall = false;
                  }
                } else {
                  _this3.errorMessage = result.message;
                  _this3.no_data_message = result.data.settings.no_data_msg;
                  _this3.showErrorImage = result.data.settings.no_data_image;
                  console.log("HrPolicy List Infinite Scroll12==", _this3.errorMessage);

                  if (_this3.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll123==", _this3.sentReceivedList);

                    _this3.myInfiniteScroll.target.complete();

                    _this3.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this3.apiservices.hideLoader();

                _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this4 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this4.value = _this4.sentReceivedList.length;
              console.log("Begin async operation 2==", _this4.value);
              _this4.myInfiniteScroll = infiniteScroll;

              _this4.sentReceivedBadge();
            }, 500);
          }
        }]);

        return SayCheersBadgesPage;
      }();

      SayCheersBadgesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }];
      };

      SayCheersBadgesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-badges',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./say-cheers-badges.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./say-cheers-badges.page.scss */
        "./src/app/sayCheersModule/say-cheers-badges/say-cheers-badges.page.scss"))["default"]]
      })], SayCheersBadgesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sayCheersModule-say-cheers-badges-say-cheers-badges-module-es5.js.map