(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-qualification-priview-qualification-priview-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleNewQualificationPriviewQualificationPriviewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{formPreviewData?.apiRes?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"priviousData=='1' || priviousData=='2'\" class=\"bgDiv\"></div>\n  <div class=\"ion-padding\">\n  <ion-row [ngClass]=\"[priviousData=='0' ? 'bgRow1 ion-padding-vertical':'bgRow ion-padding-vertical']\" \n  [style.background-image]=\"'url('+formPreviewData?.apiRes?.data?.header_data?.background_image+')'\">\n    <ion-col [size]=\"4\" class=\"autoMar\" *ngIf=\"formPreviewData?.apiRes?.data?.header_data?.profile_image\">\n      <img class=\"userImage\" [src]=\"formPreviewData?.apiRes?.data?.header_data?.profile_image\"\n      onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"></ion-col>\n    <ion-col [size]=\"8\" class=\"ion-no-padding\" *ngIf=\"formPreviewData?.apiRes?.data?.header_data\">\n      <div class=\"ion-text-center sideDiv\">\n        <h4 class=\"ion-no-margin \">{{formPreviewData?.apiRes?.data?.header_data?.content?.title}}</h4>\n        <p class=\"ion-no-margin fontP\">{{formPreviewData?.apiRes?.data?.header_data?.content?.name}}</p>\n        <p class=\"ion-no-margin fontP\">{{formPreviewData?.apiRes?.data?.header_data?.content?.department}}</p>\n        <p class=\"ion-no-margin fontP\">{{formPreviewData?.apiRes?.data?.header_data?.content?.location}}</p>\n        <p class=\"ion-no-margin fontP\">{{formPreviewData?.apiRes?.data?.header_data?.content?.doj}}</p>\n      </div>\n\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-padding-top\" *ngIf=\"formPreviewData?.apiRes?.data?.body?.email_id\">\n    <ion-col [size]=\"1\"><ion-icon name=\"mail-outline\"></ion-icon></ion-col>\n    <ion-col [size]=\"11\"><p class=\"ion-no-margin\">{{formPreviewData?.apiRes?.data?.body?.email_id}}</p></ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"formPreviewData?.apiRes?.data?.body?.phone\">\n    <ion-col [size]=\"1\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n    <ion-col [size]=\"11\"><p class=\"ion-no-margin\">{{formPreviewData?.apiRes?.data?.body?.phone}}</p></ion-col>\n  </ion-row>\n  <ion-row class=\"ion-padding-bottom\" *ngIf=\"formPreviewData?.apiRes?.data?.body?.preview_data\">\n    <ion-col class=\"grayDiv\">\n      <p class=\"ion-no-margin disDiv\" [innerHTML]=\"formPreviewData?.apiRes?.data?.body?.preview_data\"></p>\n    </ion-col>\n  </ion-row>\n  \n    <ion-row class=\"radDiv\" *ngIf=\"formPreviewData?.apiRes?.data?.footer?.length>0\">\n      <ion-col [size]=\"6\" *ngFor=\"let item of formPreviewData?.apiRes?.data?.footer\">\n        <ion-row>\n          <ion-col [size]=\"4\"><img [src]=\"item?.icon\" class=\"iconCss\"/></ion-col>\n          <ion-col [size]=\"8\">{{item?.text}}</ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n  <br>\n\n  <ion-row *ngIf=\"priviousData=='0'\">\n    <ion-col [size]=\"12\">\n      <div *ngIf=\"formPreviewData?.apiRes?.data\">\n        <show-comment [allCommentObj]=\"formPreviewData?.apiRes?.data\" [showLikeList]=\"'true'\" [showCommentList]=\"'true'\" [showAutoScroll]=\"'true'\" \n        [redirectPage]=\"''\"></show-comment>\n      </div>\n    </ion-col>\n  </ion-row>\n   <ion-row *ngIf=\"priviousData=='1' || priviousData=='2'\">\n    <ion-col [size]=\"6\" class=\"ion-text-center\">\n    \n      <ion-button tappable (click)=\"goToback()\" class=\"dynamicButtonColor\">Edit</ion-button>\n    </ion-col>\n    <ion-col [size]=\"6\" class=\"ion-text-center\">\n      <ion-button tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">Submit</ion-button>\n    </ion-col>\n  </ion-row>\n\n  \n</div>\n<br><br><br><br>\n</ion-content>\n\n<ion-footer *ngIf=\"apiservices?.showCommentBox==true\">\n  <div style=\"background:#fff;\">\n    <ion-row lines=\"none\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <do-comment [doCommentData]=\"formPreviewData?.apiRes?.data\" [postIndex]=\"\" [showFocus]=\"showScroll\" [pageName]=\"'detail'\"></do-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n\n";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-priview/qualification-priview-routing.module.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-priview/qualification-priview-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: QualificationPriviewPageRoutingModule */

    /***/
    function srcAppLoginModuleNewQualificationPriviewQualificationPriviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPriviewPageRoutingModule", function () {
        return QualificationPriviewPageRoutingModule;
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


      var _qualification_priview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qualification-priview.page */
      "./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.ts");

      var routes = [{
        path: '',
        component: _qualification_priview_page__WEBPACK_IMPORTED_MODULE_3__["QualificationPriviewPage"]
      }];

      var QualificationPriviewPageRoutingModule = function QualificationPriviewPageRoutingModule() {
        _classCallCheck(this, QualificationPriviewPageRoutingModule);
      };

      QualificationPriviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QualificationPriviewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-priview/qualification-priview.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-priview/qualification-priview.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: QualificationPriviewPageModule */

    /***/
    function srcAppLoginModuleNewQualificationPriviewQualificationPriviewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPriviewPageModule", function () {
        return QualificationPriviewPageModule;
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


      var _qualification_priview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qualification-priview-routing.module */
      "./src/app/LoginModuleNew/qualification-priview/qualification-priview-routing.module.ts");
      /* harmony import */


      var _qualification_priview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qualification-priview.page */
      "./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var QualificationPriviewPageModule = function QualificationPriviewPageModule() {
        _classCallCheck(this, QualificationPriviewPageModule);
      };

      QualificationPriviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qualification_priview_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualificationPriviewPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_qualification_priview_page__WEBPACK_IMPORTED_MODULE_6__["QualificationPriviewPage"]]
      })], QualificationPriviewPageModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleNewQualificationPriviewQualificationPriviewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgDiv {\n  height: 100px;\n  background: var(--headerColor);\n}\n\n.bgRow, .bgRow1 {\n  background: white;\n  border-radius: 10px;\n  background-size: 100% 100% !important;\n  background-position: bottom !important;\n}\n\n.bgRow {\n  margin: -85px 0px 0px 0px;\n}\n\n.bgRow1 {\n  margin: 0px;\n}\n\n.fontP {\n  font-size: 12px;\n}\n\n.radDiv {\n  border: 1px solid var(--headerColor);\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.grayDiv {\n  border-radius: 10px;\n  box-shadow: 3px 1px 8px 1px #dbd5d5;\n}\n\n.userImage {\n  height: 75px;\n  width: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n}\n\n.disDiv {\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: 7px;\n}\n\n.autoMar {\n  margin: auto;\n}\n\n.iconCss {\n  height: 25px;\n  width: 25px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sideDiv {\n  background: white;\n  box-shadow: 0px 0px 5px 0px var(--headerColor);\n  border-radius: 10px 0px 0px 10px;\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvcXVhbGlmaWNhdGlvbi1wcml2aWV3L3F1YWxpZmljYXRpb24tcHJpdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxhQUFBO0VBQWEsOEJBQUE7QUFHcEI7O0FBRkE7RUFBZSxpQkFBQTtFQUFpQixtQkFBQTtFQUFtQixxQ0FBQTtFQUFxQyxzQ0FBQTtBQVN4Rjs7QUFSQTtFQUFPLHlCQUFBO0FBWVA7O0FBWEE7RUFBUSxXQUFBO0FBZVI7O0FBZEE7RUFBTyxlQUFBO0FBa0JQOztBQWpCQTtFQUFRLG9DQUFBO0VBQXFDLG1CQUFBO0VBQW9CLFlBQUE7QUF1QmpFOztBQXRCQTtFQUFTLG1CQUFBO0VBQW9CLG1DQUFBO0FBMkI3Qjs7QUExQkE7RUFBVyxZQUFBO0VBQWEsV0FBQTtFQUFZLG9CQUFBO0tBQUEsaUJBQUE7RUFBa0Isa0JBQUE7RUFBbUIsY0FBQTtFQUFlLFlBQUE7QUFtQ3hGOztBQWxDQTtFQUFRLGVBQUE7RUFBZ0IsbUJBQUE7RUFBb0IsWUFBQTtBQXdDNUM7O0FBdkNBO0VBQVMsWUFBQTtBQTJDVDs7QUExQ0E7RUFBUyxZQUFBO0VBQWMsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFnRG5DOztBQS9DQTtFQUFTLGlCQUFBO0VBQWtCLDhDQUFBO0VBQStDLGdDQUFBO0VBQWlDLFlBQUE7QUFzRDNHIiwiZmlsZSI6InNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvcXVhbGlmaWNhdGlvbi1wcml2aWV3L3F1YWxpZmljYXRpb24tcHJpdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdEaXZ7aGVpZ2h0OjEwMHB4O2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO31cbi5iZ1JvdywuYmdSb3cxe2JhY2tncm91bmQ6d2hpdGU7Ym9yZGVyLXJhZGl1czoxMHB4O2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCUgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gIWltcG9ydGFudDt9XG4uYmdSb3d7bWFyZ2luOiAtODVweCAwcHggMHB4IDBweDt9XG4uYmdSb3cxe21hcmdpbjogMHB4O31cbi5mb250UHtmb250LXNpemU6IDEycHg7fVxuLnJhZERpdntib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLXJhZGl1czogMTBweDtwYWRkaW5nOiA1cHg7fVxuLmdyYXlEaXZ7Ym9yZGVyLXJhZGl1czogMTBweDtib3gtc2hhZG93OiAzcHggMXB4IDhweCAxcHggI2RiZDVkNTt9XG4udXNlckltYWdle2hlaWdodDogNzVweDt3aWR0aDogNzVweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiBhdXRvO31cbi5kaXNEaXZ7Zm9udC1zaXplOiAxNHB4O2xldHRlci1zcGFjaW5nOiAxcHg7cGFkZGluZzogN3B4O31cbi5hdXRvTWFye21hcmdpbjogYXV0bzt9XG4uaWNvbkNzc3toZWlnaHQ6IDI1cHg7IHdpZHRoOiAyNXB4O29iamVjdC1maXQ6IGNvbnRhaW47fVxuLnNpZGVEaXZ7YmFja2dyb3VuZDogd2hpdGU7Ym94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtwYWRkaW5nOiA3cHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.ts ***!
      \************************************************************************************/

    /*! exports provided: QualificationPriviewPage */

    /***/
    function srcAppLoginModuleNewQualificationPriviewQualificationPriviewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPriviewPage", function () {
        return QualificationPriviewPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var QualificationPriviewPage = /*#__PURE__*/function () {
        function QualificationPriviewPage(router, navctrl, sendData, zone, localStorage, apiservices) {
          _classCallCheck(this, QualificationPriviewPage);

          this.router = router;
          this.navctrl = navctrl;
          this.sendData = sendData;
          this.zone = zone;
          this.localStorage = localStorage;
          this.apiservices = apiservices;
        }

        _createClass(QualificationPriviewPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.formPreviewData = this.sendData.myParam;
            this.priviousData = this.sendData.alldata;
            console.log("resend OTP by Voice Call, api response=1=", this.priviousData);
            console.log("resend OTP by Voice Call, api response==", this.formPreviewData);

            if (this.priviousData == 0 || this.formPreviewData.module_id == 15) {
              this.priviousData = 0;
              this.aboartDetail();
            } else {}
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToback",
          value: function goToback() {
            this.navctrl.pop();
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this = this;

            this.apiservices.showLoader();
            this.localStorage.getStorage().then(function (stored) {
              _this.loginData = stored;
              console.log("resend OTP by Voice Call, api response==", _this.priviousData);

              _this.zone.run(function () {
                var apiKey = {
                  "employee_id": _this.loginData.employeeID,
                  "experience_type": _this.formPreviewData.formData.experience_type,
                  "highest_degree": _this.formPreviewData.formData.highest_degree,
                  "college_name": _this.formPreviewData.formData.college_name,
                  "fav_dish": _this.formPreviewData.formData.fav_dish,
                  "hobby": _this.formPreviewData.formData.hobby,
                  "holiday_destination": _this.formPreviewData.formData.holiday_destination,
                  "fav_sports": _this.formPreviewData.formData.fav_sports,
                  "experience": _this.formPreviewData.formData.experience,
                  "last_company": _this.formPreviewData.formData.last_company,
                  "last_designation": _this.formPreviewData.formData.last_designation,
                  "completion_year": _this.formPreviewData.formData.completion_year
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].previewAboardSubmitApi, apiKey).subscribe(function (result) {
                  _this.apiservices.hideLoader();

                  console.log("resend OTP by Voice Call, api response==", result);

                  if (result.status == 1 || result.status == '1') {
                    // this.sendData.alldata=result;
                    _this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');

                    _this.router.navigate(['/tabs']);
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
          key: "aboartDetail",
          value: function aboartDetail() {
            var _this2 = this;

            this.apiservices.showLoader();
            this.zone.run(function () {
              _this2.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  "post_id": _this2.formPreviewData.auto_id,
                  "employee_id": stored.employeeID
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this2.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].aboardDetailApi, apiKey).subscribe(function (result) {
                  _this2.apiservices.hideLoader();

                  if (result.status == 1 || result.status == '1') {
                    _this2.formPreviewData = {
                      apiRes: result
                    };
                    console.log("resend OTP by Voice Call, api response==", _this2.formPreviewData);
                  } else {
                    _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this2.apiservices.hideLoader();

                  _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.apiservices.showCommentBox = false;
            console.log('aboartDetail==> ', this.formPreviewData);
            this.formPreviewData.like_status = this.formPreviewData.apiRes.data.like_status;
            this.formPreviewData.total_comments = this.formPreviewData.apiRes.data.total_comments;
            this.formPreviewData.total_likes = this.formPreviewData.total_likes;
            this.formPreviewData.comment_setting = this.formPreviewData.apiRes.data.comment_setting;
            this.formPreviewData.like_setting = this.formPreviewData.apiRes.data.like_setting;
          }
        }]);

        return QualificationPriviewPage;
      }();

      QualificationPriviewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__["ApiservicesService"]
        }];
      };

      QualificationPriviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qualification-priview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qualification-priview.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qualification-priview.page.scss */
        "./src/app/LoginModuleNew/qualification-priview/qualification-priview.page.scss"))["default"]]
      })], QualificationPriviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=LoginModuleNew-qualification-priview-qualification-priview-module-es5.js.map