(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-hr-policy-list-hr-policy-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHrPolicyModuleHrPolicyListHrPolicyListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:gainsboro;\">\n  <div *ngIf=\"hrPolicyList\" class=\"padd10\">\n    <div class=\"toDoListDiv\" *ngFor=\"let listData of hrPolicyList\">\n      <div tappable (click)=\"goToAcknow(listData)\">\n        <ion-row>\n          <ion-col [size]=\"2\" class=\"autoMargin ion-no-padding\">\n            <div class=\"iconDiv\">\n              <!-- <ion-icon [name]=\"hrPolicyListData?.icon_image\"></ion-icon> -->\n              <img [src]=\"listData?.logo_url\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n            </div>\n          </ion-col>\n          <ion-col [size]=\"7\" class=\"autoMargin\">\n            <p class=\"noMargin titleText\">{{listData?.title}}</p>\n            <p *ngIf=\"listData?.sub_title!=''\" class=\"noMargin subTitleText\">{{listData?.sub_title}}</p>\n            <p *ngIf=\"listData?.action==1\" [ngClass]=\"{'redColorText': listData?.istextcolorred==1}\" class=\"noMargin subTitleText\">{{listData?.statusText}}</p>\n          </ion-col>\n          <ion-col [size]=\"3\" class=\"autoMargin ion-text-center ion-no-padding\">\n            <div class=\"statusDiv\">\n              <div class=\"ion-text-center\" *ngIf=\"listData?.action==1\">\n                <!-- <ion-icon class=\"ackIconRed\" name=\"alert\"></ion-icon> -->\n                <img style=\"width:20px;\" [src]=\"hrPolicyListData?.settings?.action_pending\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n                <p class=\"noMargin acknText\">{{hrPolicyListData?.action_text}}</p>\n              </div>              \n              <div class=\"noMargin iconText\" *ngIf=\"listData?.action==0\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n                <img style=\"width:20px;\" [src]=\"hrPolicyListData?.settings?.action_done\">\n                <!-- <ion-icon name=\"checkmark-outline\"></ion-icon> -->\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  \n  <div *ngIf=\"!hrPolicyList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'hrPolicyList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!hrPolicyList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && hrPolicyList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && hrPolicyList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-list/hr-policy-list-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: HrPolicyListPageRoutingModule */

    /***/
    function srcAppHrPolicyModuleHrPolicyListHrPolicyListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyListPageRoutingModule", function () {
        return HrPolicyListPageRoutingModule;
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


      var _hr_policy_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hr-policy-list.page */
      "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.ts");

      var routes = [{
        path: '',
        component: _hr_policy_list_page__WEBPACK_IMPORTED_MODULE_3__["HrPolicyListPage"]
      }];

      var HrPolicyListPageRoutingModule = function HrPolicyListPageRoutingModule() {
        _classCallCheck(this, HrPolicyListPageRoutingModule);
      };

      HrPolicyListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HrPolicyListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.module.ts ***!
      \************************************************************************/

    /*! exports provided: HrPolicyListPageModule */

    /***/
    function srcAppHrPolicyModuleHrPolicyListHrPolicyListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyListPageModule", function () {
        return HrPolicyListPageModule;
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


      var _hr_policy_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hr-policy-list-routing.module */
      "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list-routing.module.ts");
      /* harmony import */


      var _hr_policy_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hr-policy-list.page */
      "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var HrPolicyListPageModule = function HrPolicyListPageModule() {
        _classCallCheck(this, HrPolicyListPageModule);
      };

      HrPolicyListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hr_policy_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["HrPolicyListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_hr_policy_list_page__WEBPACK_IMPORTED_MODULE_6__["HrPolicyListPage"]]
      })], HrPolicyListPageModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHrPolicyModuleHrPolicyListHrPolicyListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".toDoListDiv {\n  padding: 5px 10px;\n  margin: 10px 0;\n  background: #fff;\n}\n.toDoListDiv .dateText {\n  font-size: 10px;\n}\n.toDoListDiv .iconDiv {\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--headerColor);\n  border-radius: 50%;\n  text-align: center;\n  font-size: 35px;\n  color: #fff;\n  padding: 0px;\n}\n.toDoListDiv .titleText {\n  font-size: 14px;\n  margin: 0;\n  text-align: left;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.toDoListDiv .subTitleText {\n  font-size: 12px;\n  margin: 5px 0;\n  text-align: left;\n  color: #5a5a5a;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.toDoListDiv .statusDiv .statusText {\n  font-size: 12px;\n  color: red;\n}\n.toDoListDiv .statusDiv .iconText ion-icon {\n  font-size: 20px;\n  background: var(--headerColor);\n  border-radius: 50%;\n  color: #fff;\n}\n.toDoListDiv .ackIconRed {\n  background: red;\n  font-size: 20px;\n  border-radius: 50%;\n  color: #fff;\n}\n.toDoListDiv .acknText {\n  font-size: 10px;\n  color: red;\n}\n.padd10 {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcG9saWN5LWxpc3QvaHItcG9saWN5LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQWEsaUJBQUE7RUFBaUIsY0FBQTtFQUFjLGdCQUFBO0FBSjVDO0FBS0k7RUFBVSxlQUFBO0FBRmQ7QUFHSTtFQUFTLFdBQUE7RUFBVyxZQUFBO0VBQVksb0NBQUE7RUFBb0Msa0JBQUE7RUFBa0Isa0JBQUE7RUFFbEYsZUFBQTtFQUFlLFdBQUE7RUFBVyxZQUFBO0FBS2xDO0FBSEk7RUFBVyxlQUFBO0VBQWUsU0FBQTtFQUFTLGdCQUFBO0VBQWdCLGlCQUFBO0VBYm5ELGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBU3dGO0FBYzVGO0FBYkk7RUFBYyxlQUFBO0VBQWUsYUFBQTtFQUFhLGdCQUFBO0VBQWdCLGNBQUE7RUFkMUQsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFVNEY7QUF3QmhHO0FBdEJRO0VBQVksZUFBQTtFQUFlLFVBQUE7QUEwQm5DO0FBeEJZO0VBQVMsZUFBQTtFQUFlLDhCQUFBO0VBQThCLGtCQUFBO0VBQWtCLFdBQUE7QUE4QnBGO0FBM0JJO0VBQVksZUFBQTtFQUFlLGVBQUE7RUFBZSxrQkFBQTtFQUFrQixXQUFBO0FBaUNoRTtBQWhDSTtFQUFVLGVBQUE7RUFBZSxVQUFBO0FBb0M3QjtBQWxDQTtFQUFRLGFBQUE7QUFzQ1IiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9oci1wb2xpY3ktbGlzdC9oci1wb2xpY3ktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbn1cblxuLnRvRG9MaXN0RGl2e3BhZGRpbmc6NXB4IDEwcHg7bWFyZ2luOjEwcHggMDtiYWNrZ3JvdW5kOiNmZmY7XG4gICAgLmRhdGVUZXh0e2ZvbnQtc2l6ZToxMHB4O31cbiAgICAuaWNvbkRpdnt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O2JvcmRlcjozcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6NTAlO3RleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO1xuICAgICAgICBmb250LXNpemU6MzVweDtjb2xvcjojZmZmO3BhZGRpbmc6MHB4XG4gICAgfVxuICAgIC50aXRsZVRleHR7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7dGV4dC1hbGlnbjpsZWZ0O2ZvbnQtd2VpZ2h0OmJvbGQ7QGluY2x1ZGUgbGluZS1jbGFtcCgxKTt9XG4gICAgLnN1YlRpdGxlVGV4dHtmb250LXNpemU6MTJweDttYXJnaW46NXB4IDA7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiM1YTVhNWE7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTt9XG4gICAgLnN0YXR1c0RpdntcbiAgICAgICAgLnN0YXR1c1RleHR7Zm9udC1zaXplOjEycHg7Y29sb3I6cmVkO31cbiAgICAgICAgLmljb25UZXh0e1xuICAgICAgICAgICAgaW9uLWljb257Zm9udC1zaXplOjIwcHg7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6I2ZmZjt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFja0ljb25SZWR7YmFja2dyb3VuZDpyZWQ7Zm9udC1zaXplOjIwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6I2ZmZjt9XG4gICAgLmFja25UZXh0e2ZvbnQtc2l6ZToxMHB4O2NvbG9yOnJlZDt9XG59XG4ucGFkZDEwe3BhZGRpbmc6IDEwcHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.ts ***!
      \**********************************************************************/

    /*! exports provided: HrPolicyListPage */

    /***/
    function srcAppHrPolicyModuleHrPolicyListHrPolicyListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrPolicyListPage", function () {
        return HrPolicyListPage;
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


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");

      var HrPolicyListPage = /*#__PURE__*/function () {
        function HrPolicyListPage(apiservices, router, zone, menuCtrl, sendData, storageService) {
          _classCallCheck(this, HrPolicyListPage);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.storageService = storageService;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.value = "0";
          this.showErrorImage = "";
          this.no_data_message = "";
          this.hrCategoryData = this.sendData.alldata;
        }

        _createClass(HrPolicyListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.apiservices.hrPolicyCount = 0;
            this.storageService.getStorage().then(function (res) {
              _this.value = "0";

              _this.hrPolicyFunc();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hrPolicyFunc",
          value: function hrPolicyFunc() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("HrPolicy List api call function");
              var apikey = {
                "limit": _this2.value,
                "category_id": _this2.hrCategoryData.category_id
              };

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicyList, apikey).subscribe(function (result) {
                console.log("HrPolicy List api result==", result);
                _this2.pageHeader = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  _this2.hrPolicyListData = result.data;

                  if (_this2.hrPolicyList == undefined) {
                    _this2.hrPolicyList = _this2.hrPolicyListData.hrpolicy;
                    console.log("HrPolicy List Infinite Scroll if1==", _this2.hrPolicyList);
                  } else {
                    _this2.hrPolicyList = _this2.hrPolicyList.concat(_this2.hrPolicyListData.hrpolicy);
                    console.log("HrPolicy List Infinite Scroll else1==", _this2.hrPolicyList);
                  }

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll if2==", _this2.hrPolicyList);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.errorMessage = "";
                    _this2.myinfiniteScrollCall = false;
                  }
                } else {
                  _this2.errorMessage = result.message;
                  _this2.no_data_message = result.data.settings.no_data_msg;
                  _this2.showErrorImage = result.data.settings.no_data_image;
                  console.log("HrPolicy List Infinite Scroll12==", _this2.hrPolicyList);

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll123==", _this2.hrPolicyList);

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
              _this3.value = _this3.hrPolicyList.length;
              console.log("Begin async operation 2==", _this3.value);
              _this3.myInfiniteScroll = infiniteScroll;

              _this3.hrPolicyFunc();
            }, 500);
          }
        }, {
          key: "goToAcknow",
          value: function goToAcknow(policyData) {
            var _this4 = this;

            this.zone.run(function () {
              _this4.sendData.alldata = policyData;
              var data = {
                "commingFrom": "hrPolicyList"
              };
              _this4.sendData.commingPageName = data;

              _this4.router.navigate(["/hr-policy-detail"]);
            });
          }
        }]);

        return HrPolicyListPage;
      }();

      HrPolicyListPage.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }];
      };

      HrPolicyListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-policy-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hr-policy-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hr-policy-list.page.scss */
        "./src/app/hrPolicyModule/hr-policy-list/hr-policy-list.page.scss"))["default"]]
      })], HrPolicyListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hrPolicyModule-hr-policy-list-hr-policy-list-module-es5.js.map