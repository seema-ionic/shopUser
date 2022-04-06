(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticeBoardModule-notice-detail-notice-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-detail/notice-detail.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-detail/notice-detail.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNoticeBoardModuleNoticeDetailNoticeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"noticeDetailData\" class=\"commonPagePadding\">\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-padding-top\">\n        <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n        <!-- <app-text-layout [text]=\"noticeDetailData?.title\" class=\"\" [className]=\"\"></app-text-layout> -->\n        <p><b>{{noticeDetailData?.title}}</b></p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"noticeDetailData?.media\">\n      <ion-col [size]=\"12\" *ngFor=\"let mediaData of noticeDetailData?.media; let ind = index\">\n        <div *ngIf=\"mediaData?.media_type==1 || mediaData?.media_type=='1'\" class=\"bannerImage\" tappable (click)=\"videoZoome(noticeDetailData?.media,'image',ind)\">\n          <app-image-view [img]=\"mediaData?.media_path\" [imageView]=\"false\" class=\"hrPolicyBanner\" ></app-image-view>\n        </div>          \n        <div *ngIf=\"mediaData?.media_type==2 || mediaData?.media_type=='2'\" class=\"bannerImage\">\n          <video width=\"100%\" height=\"auto\" controls=\"controls\" controlsList=\"nodownload noremote foobar\" poster=\"{{mediaData?.alt_image}}\" [src]=\"mediaData?.media_path|safe\" type=\"video/mp4\"></video>\n            <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'video',ind)\">\n              <!-- <img [src]=\"videoIcon\"> -->\n            </div>\n        </div>\n        <div *ngIf=\"mediaData?.media_type==3 || mediaData?.media_type=='3'\" class=\"bannerImage\">\n          <iframe [src]=\"mediaData?.media_path | safe\" width=\"100%\" height=\"auto\"></iframe>\n          <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'youtube',ind)\">\n            <!-- <img [src]=\"videoIcon\"> -->\n          </div>\n        </div>\n        <!-- class=\"textDiv\" -->\n        <div *ngIf=\"mediaData?.media_type==4 || mediaData?.media_type=='4'\">\n          <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n          <app-text-layout [text]=\"mediaData?.media_path\" class=\"\" [className]=\"\"></app-text-layout>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"noticeDetailData?.auth_type=='OTP' && noticeDetailData?.action=='1' && commingData?.commingFrom!='noticeArchive'\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicSmallButton\" tappable (click)=\"acknowledgeNotice()\">{{pageData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <br><br><br><br>\n  </div>\n\n  <div *ngIf=\"!noticeDetailData\">\n    <app-skelton-listview [iconPath]=\"'noticeDetail'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n<ion-footer *ngIf=\"noticeDetailData?.action==0  && commingData?.commingFrom!='noticeArchive'\" class=\"footerAckDiv\">\n  <ion-row>\n    <ion-col [push]=\"2\" [size]=\"8\">\n      <!-- <p class=\"noMargin\">{{noticeDetailData?.auth_date}}</p> -->\n      <app-text-layout [text]=\"noticeDetailData?.auth_date\" class=\"\" [className]=\"\"></app-text-layout>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-detail/notice-detail-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-detail/notice-detail-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: NoticeDetailPageRoutingModule */

    /***/
    function srcAppNoticeBoardModuleNoticeDetailNoticeDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeDetailPageRoutingModule", function () {
        return NoticeDetailPageRoutingModule;
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


      var _notice_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notice-detail.page */
      "./src/app/noticeBoardModule/notice-detail/notice-detail.page.ts");

      var routes = [{
        path: '',
        component: _notice_detail_page__WEBPACK_IMPORTED_MODULE_3__["NoticeDetailPage"]
      }];

      var NoticeDetailPageRoutingModule = function NoticeDetailPageRoutingModule() {
        _classCallCheck(this, NoticeDetailPageRoutingModule);
      };

      NoticeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NoticeDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-detail/notice-detail.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-detail/notice-detail.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NoticeDetailPageModule */

    /***/
    function srcAppNoticeBoardModuleNoticeDetailNoticeDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeDetailPageModule", function () {
        return NoticeDetailPageModule;
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


      var _notice_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notice-detail-routing.module */
      "./src/app/noticeBoardModule/notice-detail/notice-detail-routing.module.ts");
      /* harmony import */


      var _notice_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notice-detail.page */
      "./src/app/noticeBoardModule/notice-detail/notice-detail.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var NoticeDetailPageModule = function NoticeDetailPageModule() {
        _classCallCheck(this, NoticeDetailPageModule);
      };

      NoticeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notice_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticeDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_notice_detail_page__WEBPACK_IMPORTED_MODULE_6__["NoticeDetailPage"]]
      })], NoticeDetailPageModule);
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-detail/notice-detail.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-detail/notice-detail.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNoticeBoardModuleNoticeDetailNoticeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".textDiv::after {\n  content: \"\";\n  border-bottom: 0px solid green;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  border-top: 0px solid #f3f3f5;\n}\n\n.bannerImage {\n  margin: 5px 0px 0px 0px;\n  border-radius: 0px;\n  position: relative;\n}\n\n.bannerImage .playIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\nvideo, iframe {\n  box-shadow: 0px 2px 4px 1px grey;\n  border-radius: 10px;\n}\n\n.footerAckDiv {\n  color: var(--headerColor);\n  text-align: center;\n  font-size: 18px;\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlQm9hcmRNb2R1bGUvbm90aWNlLWRldGFpbC9ub3RpY2UtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFBVyw4QkFBQTtFQUE4QixrQ0FBQTtFQUN6QyxtQ0FBQTtFQUFtQyw2QkFBQTtBQUl2Qzs7QUFGQTtFQUFhLHVCQUFBO0VBQXVCLGtCQUFBO0VBQWtCLGtCQUFBO0FBUXREOztBQVBJO0VBQVUsa0JBQUE7RUFBa0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFdBQUE7QUFlOUQ7O0FBYkE7RUFBYSxnQ0FBQTtFQUFnQyxtQkFBQTtBQWtCN0M7O0FBakJBO0VBQWMseUJBQUE7RUFBeUIsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLGFBQUE7RUFBYSxpQkFBQTtFQUFpQixrQkFBQTtBQTBCdEciLCJmaWxlIjoic3JjL2FwcC9ub3RpY2VCb2FyZE1vZHVsZS9ub3RpY2UtZGV0YWlsL25vdGljZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHREaXY6OmFmdGVye1xuICAgIGNvbnRlbnQ6XCJcIjtib3JkZXItYm90dG9tOjBweCBzb2xpZCBncmVlbjtib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjBweCBzb2xpZCAjZjNmM2Y1O1xufVxuLmJhbm5lckltYWdle21hcmdpbjo1cHggMHB4IDBweCAwcHg7Ym9yZGVyLXJhZGl1czowcHg7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgLnBsYXlJY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3otaW5kZXg6OTk7fVxufVxudmlkZW8saWZyYW1le2JveC1zaGFkb3c6MHB4IDJweCA0cHggMXB4IGdyZXk7Ym9yZGVyLXJhZGl1czoxMHB4O31cbi5mb290ZXJBY2tEaXZ7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxOHB4O3BhZGRpbmc6MTBweDtmb250LXdlaWdodDpib2xkO2JvcmRlci1yYWRpdXM6MHB4O30iXX0= */";
      /***/
    },

    /***/
    "./src/app/noticeBoardModule/notice-detail/notice-detail.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/noticeBoardModule/notice-detail/notice-detail.page.ts ***!
      \***********************************************************************/

    /*! exports provided: NoticeDetailPage */

    /***/
    function srcAppNoticeBoardModuleNoticeDetailNoticeDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeDetailPage", function () {
        return NoticeDetailPage;
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
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/events.service */
      "./src/app/services/events.service.ts");

      var NoticeDetailPage = /*#__PURE__*/function () {
        function NoticeDetailPage(router, storageService, apiservices, zone, sendData, eventService) {
          _classCallCheck(this, NoticeDetailPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.eventService = eventService;
          this.noticeListData = this.sendData.alldata;
          console.log("click list data of noticeboard==", this.noticeListData);
          this.commingData = this.sendData.commingPageName;
          console.log("comming from which page==", this.commingData);
        }

        _createClass(NoticeDetailPage, [{
          key: "videoZoome",
          value: function videoZoome(videoPath, videoType, index) {
            var _this = this;

            this.zone.run(function () {
              console.log("data videoLevel click index==", index);

              _this.apiservices.videoZoome(videoPath, videoType, index);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storageService.getStorage().then(function (res) {
              _this2.noticeDetailFunc();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "noticeDetailFunc",
          value: function noticeDetailFunc() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("noticeBoard Detail api call function");
              var apikey = {
                "notice_id": _this3.noticeListData.notice_id
              };

              _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].noticeDetail, apikey).subscribe(function (result) {
                console.log("noticeBoard Detail api result==", result);

                if (result.status == 1 || result.status == '1') {
                  _this3.noticeDetailData = result.data;
                  _this3.pageData = result.data.settings;

                  if (_this3.noticeListData.auth_type == "View") {
                    _this3.noticeListData.action = '0';
                    var data = {
                      "commingFrom": "reloadHomeApi",
                      "reloadHomePage": true
                    };

                    _this3.eventService.publishSomeData({
                      data: data
                    });
                  }
                } else {
                  _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "acknowledgeNotice",
          value: function acknowledgeNotice() {
            var _this4 = this;

            this.zone.run(function () {
              console.log("noticeBoard Detail api call function");

              _this4.apiservices.showLoader();

              var apikey = {
                "post_id": _this4.noticeListData.notice_id,
                "event": _this4.pageData.otp_event
              };

              _this4.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].sendOtp, apikey).subscribe(function (result) {
                console.log("noticeBoard Detail api result==", result);

                _this4.apiservices.hideLoader();

                if (result.status == 1 || result.status == '1') {
                  _this4.sendData.alldata = _this4.noticeListData;
                  _this4.sendData.myParam = result.data.settings;
                  _this4.sendData.commingPageName = _this4.commingData;

                  _this4.router.navigate(["/notice-otp"]);
                } else {
                  _this4.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this4.apiservices.hideLoader();

                _this4.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return NoticeDetailPage;
      }();

      NoticeDetailPage.ctorParameters = function () {
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
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]
        }];
      };

      NoticeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notice-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-detail/notice-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notice-detail.page.scss */
        "./src/app/noticeBoardModule/notice-detail/notice-detail.page.scss"))["default"]]
      })], NoticeDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=noticeBoardModule-notice-detail-notice-detail-module-es5.js.map