(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-award-list-award-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-list/award-list.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-list/award-list.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRRModuleAwardListAwardListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{awdDetailData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <img src=\"../../assets/icon/filter.png\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" class=\"filterImg\"/>\n      <ion-button (click)=\"FilterFun()\" class=\"btnClear\"> Filter</ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let item of Data\" class=\"borderDiv ion-margin-bottom\">\n    <div tappable (click)=\"awardDetail(item)\">\n\n  \n    <ion-row class=\"borderBtm\">\n      <ion-col [size]=\"12\" ><p class=\"ion-no-margin\"><span  class=\"uDiv uDiv1\">{{item?.header_title_one}} </span>\n        <span class=\"uDiv\">{{item?.header_title_two}}</span> \n        <span class=\"uDiv uDiv1\" >\"{{item?.award_name}}\"</span>\n      </p></ion-col>\n      <!-- <ion-col [size]=\"4\" ><p class=\"uDiv ion-no-margin\">{{item?.header_title_two}}</p></ion-col>\n      <ion-col [size]=\"3.5\" >\n        <p class=\"uDiv uDiv1 ion-no-margin\" (click)=\"awardDashboard()\">\"{{item?.award_name}}\"</p></ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"3\" class=\"ion-text-center\">\n        <img [src]=\"item?.nominator_profile_image\" class=\"imgDiv\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      </ion-col>\n      <ion-col [size]=\"9\">\n        <p class=\"ion-no-margin uDiv\"><b>{{item?.nominator_name}}</b></p>\n        <p class=\"ion-no-margin uDiv\">{{item?.nominator_designation}}</p>\n         <p class=\"ion-no-margin uDiv\">{{item?.nominator_cc}}</p>\n      </ion-col>\n    </ion-row>\n \n    <ion-row>\n      <ion-col>\n        <app-text-layout-read-more *ngIf=\"item?.citation!=''\" [text]=\"item?.citation\" [className]=\"\"></app-text-layout-read-more>\n        <!-- <p [innerHTML]=\"item?.citation\" class=\"pFont ion-no-margin\"></p> -->\n        <div [style.background-image]=\"'url('+ item?.template_link +')'\" class=\"bgImage\">\n          <p [innerHTML]=\"item?.award_name\" class=\"ion-text-center gpDiv topDiv\"></p>\n          <p class=\"ion-text-center gpDiv\">\n            <span *ngFor=\"let val of item?.nominees_arr; let i=index;\">\n              <span *ngIf=\"i<item?.nominee_len\">{{val}}</span>\n              <span *ngIf=\"item?.nominees_arr[i+1]\"><span *ngIf=\"i+1<item?.nominee_len\">, </span></span>\n              </span>\n            \n            <span class=\"sp\" *ngIf=\"item?.nominees_arr?.length>item?.nominee_len\"> \n              +{{item?.nominees_arr?.length-item?.nominee_len}} more</span></p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n    <ion-row *ngIf=\"item\">\n      <ion-col [size]=\"12\">\n          <show-comment [allCommentObj]=\"item\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"'award-detail'\"></show-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <p *ngIf=\"errorMessage\" class=\"ion-text-center\">{{errorMessage}}</p>\n  <ion-infinite-scroll threshold=\"100px\"  *ngIf=\"errorMessage==''\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/R&RModule/award-list/award-list-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/R&RModule/award-list/award-list-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AwardListPageRoutingModule */

    /***/
    function srcAppRRModuleAwardListAwardListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwardListPageRoutingModule", function () {
        return AwardListPageRoutingModule;
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


      var _award_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./award-list.page */
      "./src/app/R&RModule/award-list/award-list.page.ts");

      var routes = [{
        path: '',
        component: _award_list_page__WEBPACK_IMPORTED_MODULE_3__["AwardListPage"]
      }];

      var AwardListPageRoutingModule = function AwardListPageRoutingModule() {
        _classCallCheck(this, AwardListPageRoutingModule);
      };

      AwardListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AwardListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/R&RModule/award-list/award-list.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/R&RModule/award-list/award-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: AwardListPageModule */

    /***/
    function srcAppRRModuleAwardListAwardListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwardListPageModule", function () {
        return AwardListPageModule;
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


      var _award_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./award-list-routing.module */
      "./src/app/R&RModule/award-list/award-list-routing.module.ts");
      /* harmony import */


      var _award_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./award-list.page */
      "./src/app/R&RModule/award-list/award-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var AwardListPageModule = function AwardListPageModule() {
        _classCallCheck(this, AwardListPageModule);
      };

      AwardListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _award_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_award_list_page__WEBPACK_IMPORTED_MODULE_6__["AwardListPage"]]
      })], AwardListPageModule);
      /***/
    },

    /***/
    "./src/app/R&RModule/award-list/award-list.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/R&RModule/award-list/award-list.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRRModuleAwardListAwardListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pFont {\n  color: #4e4848;\n  font-size: 11px;\n  letter-spacing: 1px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n\n.borderDiv {\n  border: 1px solid #d5d0d0;\n  border-radius: 10px;\n  background: white;\n}\n\n.borderBtm {\n  border-bottom: 1px solid #d5d0d0;\n}\n\n.imgDiv {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.uDiv {\n  font-size: 12px;\n}\n\n.bgImage {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.gpDiv {\n  top: 20%;\n  left: 0;\n  position: relative;\n  width: 90%;\n  transform: translate(0px, -20%);\n  margin: auto;\n  z-index: 1;\n  color: black;\n}\n\n.bgImage::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 0;\n}\n\n.sp {\n  color: #5a57e1;\n}\n\n.uDiv1 {\n  color: #5a57e1;\n}\n\n.topDiv {\n  top: 16%;\n  color: #5a57e1;\n  font-weight: bold;\n}\n\n.filterImg {\n  height: 20px;\n  width: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content {\n  --background: #ededed;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWxpc3QvYXdhcmQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFBTyxjQUFBO0VBQWMsZUFBQTtFQUFlLG1CQUFBO0VBUGhDLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBR3VFO0FBQzNFOztBQUFBO0VBQVcseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0IsaUJBQUE7QUFNekQ7O0FBTEE7RUFBVyxnQ0FBQTtBQVNYOztBQVJBO0VBQVEsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBZXBEOztBQWRBO0VBQU0sZUFBQTtBQWtCTjs7QUFqQkE7RUFBUyxrQkFBQTtFQUFtQixXQUFBO0VBQVksYUFBQTtFQUFjLHdCQUFBO0VBQXlCLDJCQUFBO0VBQTRCLDRCQUFBO0FBMEIzRzs7QUF6QkE7RUFBTyxRQUFBO0VBQVMsT0FBQTtFQUFRLGtCQUFBO0VBQW1CLFVBQUE7RUFBVywrQkFBQTtFQUFnQyxZQUFBO0VBQWEsVUFBQTtFQUMvRixZQUFBO0FBbUNKOztBQWxDQTtFQUNJLFdBQUE7RUFBWSxrQkFBQTtFQUFrQixPQUFBO0VBQU8sUUFBQTtFQUFRLFFBQUE7RUFBUSxTQUFBO0VBRXJELFVBQUE7QUF5Q0o7O0FBeENBO0VBQUksY0FBQTtBQTRDSjs7QUEzQ0E7RUFBTyxjQUFBO0FBK0NQOztBQTlDQTtFQUFRLFFBQUE7RUFBUyxjQUFBO0VBQWUsaUJBQUE7QUFvRGhDOztBQW5EQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtBQXlEcEM7O0FBeERBO0VBQVkscUJBQUE7RUFBc0IscUJBQUE7RUFDOUIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBNkRKIiwiZmlsZSI6InNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWxpc3QvYXdhcmQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbn1cblxuLnBGb250e2NvbG9yOiM0ZTQ4NDg7Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MXB4O0BpbmNsdWRlIGxpbmUtY2xhbXAoNCk7fVxuLmJvcmRlckRpdntib3JkZXI6IDFweCBzb2xpZCAjZDVkMGQwO2JvcmRlci1yYWRpdXM6IDEwcHg7YmFja2dyb3VuZDogd2hpdGU7fVxuLmJvcmRlckJ0bXtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDBkMDt9XG4uaW1nRGl2e2JvcmRlci1yYWRpdXM6IDUwJTtoZWlnaHQ6IDYwcHg7d2lkdGg6IDYwcHg7b2JqZWN0LWZpdDogY292ZXI7fVxuLnVEaXZ7Zm9udC1zaXplOiAxMnB4O31cbi5iZ0ltYWdle3Bvc2l0aW9uOiByZWxhdGl2ZTt3aWR0aDogMTAwJTtoZWlnaHQ6IDE3NXB4O2JhY2tncm91bmQtc2l6ZTogY29udGFpbjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDt9XG4uZ3BEaXZ7dG9wOiAyMCU7bGVmdDogMDtwb3NpdGlvbjogcmVsYXRpdmU7d2lkdGg6IDkwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yMCUpO21hcmdpbjogYXV0bzt6LWluZGV4OiAxO1xuICAgIGNvbG9yOiBibGFjazt9XG4uYmdJbWFnZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjBweDtib3R0b206MDtcbiAgICAvLyBiYWNrZ3JvdW5kOnJnYigwLCAwLCAwLCAuMyk7XG4gICAgei1pbmRleDogMDt9XG4uc3B7Y29sb3I6IzVhNTdlMTt9XG4udURpdjF7Y29sb3I6ICM1YTU3ZTE7fVxuLnRvcERpdnt0b3A6IDE2JTtjb2xvcjogIzVhNTdlMTtmb250LXdlaWdodDogYm9sZDt9XG4uZmlsdGVySW1ne2hlaWdodDogMjBweDt3aWR0aDogMjBweDtvYmplY3QtZml0OiBjb250YWluO31cbmlvbi1jb250ZW50ey0tYmFja2dyb3VuZDogI2VkZWRlZDstLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7fVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/R&RModule/award-list/award-list.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/R&RModule/award-list/award-list.page.ts ***!
      \*********************************************************/

    /*! exports provided: AwardListPage */

    /***/
    function srcAppRRModuleAwardListAwardListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwardListPage", function () {
        return AwardListPage;
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


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var AwardListPage = /*#__PURE__*/function () {
        function AwardListPage(router, localStorage, apiservices, zone, sendData) {
          _classCallCheck(this, AwardListPage);

          this.router = router;
          this.localStorage = localStorage;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.Data = [];
          this.limit = "0";
          this.myinfiniteScrollCall = false;
          this.errorMessage = '';
        }

        _createClass(AwardListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.filterRes = this.sendData.alldata;
            console.log('val', this.filterRes);
            this.awardListFun();
          }
        }, {
          key: "awardDetail",
          value: function awardDetail(item) {
            this.sendData.myParam = item;
            this.router.navigate(['/award-detail']); // this.router.navigate(['/award-dashboard']);
          }
        }, {
          key: "awardListFun",
          value: function awardListFun() {
            var _this = this;

            this.zone.run(function () {
              _this.apiservices.showLoader();

              _this.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  limit: _this.limit,
                  employee_id: stored.employeeID,
                  award_id: _this.filterRes.award_id,
                  award_type_id: _this.filterRes.award_type_id,
                  department_id: _this.filterRes.department_id,
                  location_id: _this.filterRes.location_id
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].nominationListApi, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  _this.apiservices.hideLoader();

                  _this.awdDetailData = result;

                  if (result.status == 1 || result.status == '1') {
                    if (_this.Data == undefined) {
                      _this.Data = result.data.list_data;
                    } else {
                      _this.Data = _this.Data.concat(result.data.list_data);
                    }

                    if (_this.myinfiniteScrollCall == true) {
                      // console.log("noticeBoard List Infinite Scroll if2==", this.communicationList);
                      _this.myInfiniteScroll.target.complete();

                      _this.errorMessage = "";
                      _this.myinfiniteScrollCall = false;
                    } // this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');

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
            });
          }
        }, {
          key: "loadData",
          value: function loadData(infiniteScroll) {
            var _this2 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this2.limit = _this2.Data.length;
              console.log("Begin async operation 2==", _this2.limit);
              _this2.myInfiniteScroll = infiniteScroll;

              _this2.awardListFun();
            }, 500);
          }
        }, {
          key: "FilterFun",
          value: function FilterFun() {
            this.sendData.alldata = this.filterRes;
            this.router.navigate(['/filter-list']);
          }
        }]);

        return AwardListPage;
      }();

      AwardListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }];
      };

      AwardListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-award-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./award-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-list/award-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./award-list.page.scss */
        "./src/app/R&RModule/award-list/award-list.page.scss"))["default"]]
      })], AwardListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=R-RModule-award-list-award-list-module-es5.js.map