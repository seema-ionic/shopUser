(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticeBoardModule-notice-list-notice-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-list/notice-list.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-list/notice-list.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNoticeBoardModuleNoticeListNoticeListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"noticeListData?.archive_icon!=''\" tappable (click)=\"goToArchive()\">\n      <p style=\"margin:0;text-align:center;padding:0 10px;\">\n        <img style=\"width:20px\" [src]=\"noticeListData?.archive_icon\"><br>\n        <span style=\"margin:0px;font-size:12px;float:left;\">{{noticeListData?.archive_string}}</span>\n      </p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content style=\"--background:gainsboro;\">\n\n  <div *ngIf=\"noticeAllList\">    \n    <div *ngIf=\"noticeAllList\" class=\"padd10\">\n      <div *ngFor=\"let listData of noticeAllList; let i=index;\" class=\"listDataDiv\">\n        <div class=\"titleDiv\" tappable (click)=\"goToDetail(listData)\">\n          <ion-row>\n            <ion-col [size]=\"10\"><p class=\"noMargin\"><b>{{listData?.title}}</b></p></ion-col>\n            <ion-col [size]=\"2\" class=\"ion-text-center ion-no-padding autoMargin\">\n              <div *ngIf=\"listData?.action=='0'\">\n                <div class=\"iconText\"><img [src]=\"noticeListData?.action_done\"></div>\n              </div>\n              <div *ngIf=\"listData?.action=='1'\">\n                <div class=\"iconText\"><img [src]=\"noticeListData?.action_pending\"></div>\n                <p class=\"noMargin acknText\">{{noticeListData?.action_text}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <p class=\"noMargin dateText\">{{listData?.lastdate}}</p>\n              <!-- <p *ngIf=\"listData?.action=='1'\" class=\"noMargin dateText\">{{listData?.lastdate}}</p> -->\n            </ion-col>\n            <!-- <ion-col [size]=\"3\" class=\"ion-text-center ion-no-padding\">\n              <div *ngIf=\"listData?.action=='0'\">\n                <div class=\"iconText\"><img [src]=\"noticeListData?.action_done\"></div>\n              </div>\n              <div *ngIf=\"listData?.action=='1'\">\n                <div class=\"iconText\"><img [src]=\"noticeListData?.action_pending\"></div>\n                <p class=\"noMargin acknText\">{{noticeListData?.action_text}}</p>\n              </div>\n            </ion-col> -->\n          </ion-row>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  \n\n  \n  <div *ngIf=\"!noticeAllList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'noticeboardList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!noticeAllList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && noticeAllList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && noticeAllList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-list/notice-list-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-list/notice-list-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: NoticeListPageRoutingModule */

    /***/
    function srcAppNoticeBoardModuleNoticeListNoticeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeListPageRoutingModule", function () {
        return NoticeListPageRoutingModule;
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


      var _notice_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notice-list.page */
      "./src/app/noticeBoardModule/notice-list/notice-list.page.ts");

      var routes = [{
        path: '',
        component: _notice_list_page__WEBPACK_IMPORTED_MODULE_3__["NoticeListPage"]
      }];

      var NoticeListPageRoutingModule = function NoticeListPageRoutingModule() {
        _classCallCheck(this, NoticeListPageRoutingModule);
      };

      NoticeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NoticeListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-list/notice-list.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-list/notice-list.module.ts ***!
      \*********************************************************************/

    /*! exports provided: NoticeListPageModule */

    /***/
    function srcAppNoticeBoardModuleNoticeListNoticeListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeListPageModule", function () {
        return NoticeListPageModule;
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


      var _notice_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notice-list-routing.module */
      "./src/app/noticeBoardModule/notice-list/notice-list-routing.module.ts");
      /* harmony import */


      var _notice_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notice-list.page */
      "./src/app/noticeBoardModule/notice-list/notice-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var NoticeListPageModule = function NoticeListPageModule() {
        _classCallCheck(this, NoticeListPageModule);
      };

      NoticeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notice_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticeListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_notice_list_page__WEBPACK_IMPORTED_MODULE_6__["NoticeListPage"]]
      })], NoticeListPageModule);
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-list/notice-list.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-list/notice-list.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNoticeBoardModuleNoticeListNoticeListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".listDataDiv {\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #bfb8b8;\n  background: #fff;\n}\n.listDataDiv .titleDiv .iconText ion-icon {\n  font-size: 20px;\n  background: var(--headerColor);\n  border-radius: 50%;\n  color: #fff;\n}\n.listDataDiv .titleDiv .iconText img {\n  width: 20px;\n}\n.listDataDiv .titleDiv .dateText {\n  font-size: 12px;\n  color: #636363;\n}\n.listDataDiv .titleDiv .acknText {\n  font-size: 10px;\n  color: var(--redTextColor);\n}\n.listDataDiv .titleDiv .ackIconRed {\n  background: var(--redTextColor);\n  font-size: 20px;\n  border-radius: 50%;\n  color: #fff;\n}\n.padd10 {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlQm9hcmRNb2R1bGUvbm90aWNlLWxpc3Qvbm90aWNlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsaUJBQUE7RUFFVCxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVZO0VBQVMsZUFBQTtFQUFlLDhCQUFBO0VBQThCLGtCQUFBO0VBQWtCLFdBQUE7QUFJcEY7QUFIWTtFQUFJLFdBQUE7QUFNaEI7QUFKUTtFQUFVLGVBQUE7RUFBZSxjQUFBO0FBUWpDO0FBUFE7RUFBVSxlQUFBO0VBQWUsMEJBQUE7QUFXakM7QUFWUTtFQUFZLCtCQUFBO0VBQStCLGVBQUE7RUFBZSxrQkFBQTtFQUFrQixXQUFBO0FBZ0JwRjtBQWJBO0VBQVksYUFBQTtBQWlCWiIsImZpbGUiOiJzcmMvYXBwL25vdGljZUJvYXJkTW9kdWxlL25vdGljZS1saXN0L25vdGljZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0RGF0YURpdntwYWRkaW5nOjVweCAxMHB4O1xuICAgIC8vIG1hcmdpbjoxMHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYjhiODtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgLnRpdGxlRGl2e1xuICAgICAgICAuaWNvblRleHR7XG4gICAgICAgICAgICBpb24taWNvbntmb250LXNpemU6MjBweDtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjojZmZmO31cbiAgICAgICAgICAgIGltZ3t3aWR0aDoyMHB4O31cbiAgICAgICAgfVxuICAgICAgICAuZGF0ZVRleHR7Zm9udC1zaXplOjEycHg7Y29sb3I6IzYzNjM2Mzt9XG4gICAgICAgIC5hY2tuVGV4dHtmb250LXNpemU6MTBweDtjb2xvcjp2YXIoLS1yZWRUZXh0Q29sb3IpO31cbiAgICAgICAgLmFja0ljb25SZWR7YmFja2dyb3VuZDp2YXIoLS1yZWRUZXh0Q29sb3IpO2ZvbnQtc2l6ZToyMHB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOiNmZmY7fVxuICAgIH1cbn1cbi5wYWRkMTB7ICAgIHBhZGRpbmc6IDEwcHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-list/notice-list.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-list/notice-list.page.ts ***!
      \*******************************************************************/

    /*! exports provided: NoticeListPage */

    /***/
    function srcAppNoticeBoardModuleNoticeListNoticeListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeListPage", function () {
        return NoticeListPage;
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

      var NoticeListPage = /*#__PURE__*/function () {
        function NoticeListPage(router, storageService, apiservices, zone, sendData) {
          _classCallCheck(this, NoticeListPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.value = "0";
          this.showErrorImage = "";
          this.no_data_message = "";
        }

        _createClass(NoticeListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storageService.getStorage().then(function (res) {
              _this.noticeListFunc();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "noticeListFunc",
          value: function noticeListFunc() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function");
              var apikey = {
                "limit": _this2.value,
                "flag": "1",
                "request_tab": "notice"
              };

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].noticeList, apikey).subscribe(function (result) {
                console.log("noticeBoard List api result==", result);
                _this2.pageHeader = result.data.settings.page_header;
                _this2.noticeListData = result.data.settings;

                if (result.status == 1 || result.status == '1') {
                  if (_this2.noticeAllList == undefined) {
                    _this2.noticeAllList = result.data.list_data;
                    console.log("noticeBoard List Infinite Scroll if1==", _this2.noticeAllList);
                  } else {
                    _this2.noticeAllList = _this2.noticeAllList.concat(result.data.list_data);
                    console.log("noticeBoard List Infinite Scroll else1==", _this2.noticeAllList);
                  }

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll if2==", _this2.noticeAllList);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.errorMessage = "";
                    _this2.myinfiniteScrollCall = false;
                  }
                } else {
                  _this2.errorMessage = result.data.settings.notice_list_message;
                  _this2.no_data_message = result.data.settings.no_data_msg;
                  _this2.showErrorImage = result.data.settings.no_data_image;
                  console.log("noticeBoard List Infinite Scroll12==", _this2.noticeAllList);

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll123==", _this2.noticeAllList);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this3 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this3.value = _this3.noticeAllList.length;
              console.log("Begin async operation 2==", _this3.value);
              _this3.myInfiniteScroll = infiniteScroll;

              _this3.noticeListFunc();
            }, 500);
          }
        }, {
          key: "goToDetail",
          value: function goToDetail(listData) {
            var _this4 = this;

            this.zone.run(function () {
              _this4.sendData.alldata = listData;
              var data = {
                "commingFrom": "noticeList"
              };
              _this4.sendData.commingPageName = data;

              _this4.router.navigate(["/notice-detail"]);
            });
          }
        }, {
          key: "goToArchive",
          value: function goToArchive() {
            var _this5 = this;

            this.zone.run(function () {
              _this5.router.navigate(["/notice-archive"]);
            });
          }
        }]);

        return NoticeListPage;
      }();

      NoticeListPage.ctorParameters = function () {
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

      NoticeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notice-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-list/notice-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notice-list.page.scss */
        "./src/app/noticeBoardModule/notice-list/notice-list.page.scss"))["default"]]
      })], NoticeListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=noticeBoardModule-notice-list-notice-list-module-es5.js.map