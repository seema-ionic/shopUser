(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-policy-otp-policy-otp-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/policy-otp/policy-otp.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/policy-otp/policy-otp.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHrPolicyModulePolicyOtpPolicyOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Enter OTP</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"showSkeleton==true\">\n\n\n\n\n\n    <br><br><br><br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <p class=\"noMargin title\">{{policyData?.title}}</p>\n        <p class=\"noMargin subTitle\">{{policyData?.subtitle}}</p>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <div class=\"otpDiv\">\n      <ion-row>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n            (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n            (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n            (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n            (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"showButton==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{policyData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"policyData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', policyData)\">{{policyData?.voice?.text}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"policyData?.resend?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('0', policyData)\">{{policyData?.resend?.text}} <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n\n\n  </div>\n\n\n\n  <div *ngIf=\"showSkeleton==false\">\n    <app-skelton-listview [iconPath]=\"'hrEnterOtp'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/policy-otp/policy-otp-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/hrPolicyModule/policy-otp/policy-otp-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: PolicyOtpPageRoutingModule */

    /***/
    function srcAppHrPolicyModulePolicyOtpPolicyOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyOtpPageRoutingModule", function () {
        return PolicyOtpPageRoutingModule;
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


      var _policy_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./policy-otp.page */
      "./src/app/hrPolicyModule/policy-otp/policy-otp.page.ts");

      var routes = [{
        path: '',
        component: _policy_otp_page__WEBPACK_IMPORTED_MODULE_3__["PolicyOtpPage"]
      }];

      var PolicyOtpPageRoutingModule = function PolicyOtpPageRoutingModule() {
        _classCallCheck(this, PolicyOtpPageRoutingModule);
      };

      PolicyOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PolicyOtpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/policy-otp/policy-otp.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/hrPolicyModule/policy-otp/policy-otp.module.ts ***!
      \****************************************************************/

    /*! exports provided: PolicyOtpPageModule */

    /***/
    function srcAppHrPolicyModulePolicyOtpPolicyOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyOtpPageModule", function () {
        return PolicyOtpPageModule;
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


      var _policy_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./policy-otp-routing.module */
      "./src/app/hrPolicyModule/policy-otp/policy-otp-routing.module.ts");
      /* harmony import */


      var _policy_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./policy-otp.page */
      "./src/app/hrPolicyModule/policy-otp/policy-otp.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var PolicyOtpPageModule = function PolicyOtpPageModule() {
        _classCallCheck(this, PolicyOtpPageModule);
      };

      PolicyOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _policy_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyOtpPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_policy_otp_page__WEBPACK_IMPORTED_MODULE_6__["PolicyOtpPage"]]
      })], PolicyOtpPageModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/policy-otp/policy-otp.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/hrPolicyModule/policy-otp/policy-otp.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHrPolicyModulePolicyOtpPolicyOtpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 100px;\n}\n.title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  line-height: 20px;\n}\n.changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n}\n.otpDiv {\n  padding: 0 25px;\n}\n.otpDiv ion-input {\n  border-bottom: 2px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.timeCountDown {\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0px;\n}\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvcG9saWN5LW90cC9wb2xpY3ktb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGtDQUFBO0VBQWtDLGVBQUE7QUFHL0M7QUFGSTtFQUFJLFlBQUE7QUFLUjtBQUhBO0VBQU8sZUFBQTtFQUFlLGlCQUFBO0VBQWlCLGlCQUFBO0FBU3ZDO0FBUkE7RUFBVSxlQUFBO0VBQWUsaUJBQUE7QUFhekI7QUFaQTtFQUFjLHlCQUFBO0VBQXlCLGVBQUE7RUFBZSxpQkFBQTtBQWtCdEQ7QUFoQkE7RUFBUSxlQUFBO0FBb0JSO0FBbkJJO0VBQVUsNkJBQUE7RUFBNkIsa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0IsZUFBQTtFQUFlLGlCQUFBO0FBMEJoRztBQXZCQTtFQUFlLGlCQUFBO0VBQWlCLGVBQUE7RUFBZSxXQUFBO0FBNkIvQztBQTVCQTtFQUFVLGtCQUFBO0VBQWtCLFlBQUE7RUFBWSxXQUFBO0FBa0N4QztBQWpDQTtFQUFpQixXQUFBO0VBQVcsT0FBQTtFQUFPLFFBQUE7RUFBUSxNQUFBO0VBQU0sU0FBQTtFQUFTLGtCQUFBO0VBQWtCLFVBQUE7QUEyQzVFIiwiZmlsZSI6InNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvcG9saWN5LW90cC9wb2xpY3ktb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkTG9nb0Rpdntib3JkZXItYm90dG9tOjBweCBzb2xpZCBnYWluc2Jvcm87cGFkZGluZzoxMHB4IDA7XG4gICAgaW1ne3dpZHRoOjEwMHB4O31cbn1cbi50aXRsZXtmb250LXNpemU6MTdweDtmb250LXdlaWdodDpib2xkO21hcmdpbjowIDAgN3B4IDA7fVxuLnN1YlRpdGxle2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7fVxuLmNoYW5nZU51bWJlcntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG5cbi5vdHBEaXZ7cGFkZGluZzowIDI1cHg7XG4gICAgaW9uLWlucHV0e2JvcmRlci1ib3R0b206MnB4IHNvbGlkIGdyYXk7dGV4dC1hbGlnbjpjZW50ZXI7LS1wYWRkaW5nLXN0YXJ0OjBweDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO31cbn1cblxuLnRpbWVDb3VudERvd257Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTRweDttYXJnaW46MHB4O31cbi5sYXllckRpdntwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjAuNTt6LWluZGV4Oi0xO31cbi5sYXllckRpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTt9Il19 */";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/policy-otp/policy-otp.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/hrPolicyModule/policy-otp/policy-otp.page.ts ***!
      \**************************************************************/

    /*! exports provided: PolicyOtpPage */

    /***/
    function srcAppHrPolicyModulePolicyOtpPolicyOtpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyOtpPage", function () {
        return PolicyOtpPage;
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


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var PolicyOtpPage = /*#__PURE__*/function () {
        function PolicyOtpPage(apiservices, router, zone, menuCtrl, sendData, navCtrl, eventService) {
          var _this = this;

          _classCallCheck(this, PolicyOtpPage);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.navCtrl = navCtrl;
          this.eventService = eventService;
          this.FirstOtp = "";
          this.SecondOtp = "";
          this.ThirdOtp = "";
          this.FourthOtp = "";
          this.hideTimmer = false;
          this.resendShow = false;
          this.showSkeleton = false;
          this.showButton = false;
          this.policyData = this.sendData.myParam;
          console.log("policy list data==", this.policyData);
          this.hrPolicyListData = this.sendData.alldata;
          console.log("policy list data12==", this.sendData.alldata);
          this.hrPolicyDetailAllData = this.sendData.hrPolicyDetailAllData;
          console.log("hr Policy Detail Array Redirection==", this.hrPolicyDetailAllData);
          this.commingData = this.sendData.commingPageName;
          console.log("comming from which page==", this.commingData);
          setTimeout(function () {
            _this.showSkeleton = true;
          }, 1000);
        }

        _createClass(PolicyOtpPage, [{
          key: "hardWareBackButton",
          value: function hardWareBackButton() {
            var _this2 = this;

            this.zone.run(function () {
              // this.navCtrl.navigateBack("/hr-policy-list");
              if (_this2.commingData.commingFrom == "hrPolicyList") {
                _this2.apiservices.hrPolicyCount = 0;

                _this2.navCtrl.navigateBack("/hr-policy-detail");
              } else {
                _this2.apiservices.hrPolicyCount = 0;

                _this2.router.navigate(["/tabs/tab1"]);
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.policyData) {
              this.maxTime = this.policyData.wait_time;

              if (this.maxTime && this.maxTime > 0) {
                this.StartTimer();
              }
            }
          }
        }, {
          key: "resendOTP",
          value: function resendOTP(value, getData) {
            var _this3 = this;

            this.zone.run(function () {
              if (getData.max_resend == 0) {
                _this3.apiservices.showToastMessage(_this3.policyData.max_resend_string, 'top', 3000, 'redBg');
              } else {
                _this3.policyData.max_resend = parseInt(_this3.policyData.max_resend) - 1;
                _this3.maxTime = _this3.policyData.wait_time;
                _this3.hideTimmer = false;

                _this3.StartTimer();

                var apiKey = {
                  "phone": _this3.policyData.details.phone,
                  "country_code": _this3.policyData.details.country_code,
                  "event": _this3.policyData.details.event,
                  "type": value
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].resendOtp, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  if (result.status == 1 || result.status == '1') {
                    _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                  } else {
                    _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              }
            });
          }
        }, {
          key: "StartTimer",
          value: function StartTimer() {
            var _this4 = this;

            setTimeout(function (x) {
              // if(this.maxTime <= 0) {}
              _this4.maxTime -= 1;
              _this4.resendShow = true;

              if (_this4.maxTime > 0) {
                _this4.StartTimer();
              } else {
                _this4.maxTime = 0;
                _this4.resendShow = false;
                _this4.hideTimmer = true;
              }
            }, 1000);
          }
        }, {
          key: "moveFocus",
          value: function moveFocus(nextElement, val, index) {
            if (index < 4) {
              if (this.SecondOtp == undefined || this.SecondOtp == "") {
                nextElement.setFocus();
              } else if (this.ThirdOtp == undefined || this.ThirdOtp == "") {
                nextElement.setFocus();
              } else if (this.FourthOtp == undefined || this.FourthOtp == "") {
                nextElement.setFocus();
              }
            } else {}
          }
        }, {
          key: "checkFocus",
          value: function checkFocus(index) {
            var _this5 = this;

            this.zone.run(function () {
              console.log("********==", index);

              if (index == 1) {
                _this5.FirstOtp = "";
                _this5.showButton = false;
              } else if (index == 2) {
                _this5.SecondOtp = "";
                _this5.showButton = false;
              } else if (index == 3) {
                _this5.ThirdOtp = "";
                _this5.showButton = false;
              } else if (index == 4) {
                _this5.FourthOtp = "";
                _this5.showButton = false;
              }
            });
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            console.log("gety otp==");

            if (this.FirstOtp.trim() == "" || this.SecondOtp.trim() == "" || this.ThirdOtp.trim() == "" || this.FourthOtp.trim() == "") {
              this.showButton = false;
            } else {
              this.showButton = true;
            }
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this6 = this;

            this.zone.run(function () {
              console.log("checkSumKey==", _this6.apiservices.checkSumKey);

              _this6.apiservices.showLoader();

              console.log("organisation api fun called");
              var apiKey = {
                "otp": _this6.FirstOtp.trim() + _this6.SecondOtp.trim() + _this6.ThirdOtp.trim() + _this6.FourthOtp.trim(),
                "phone": _this6.policyData.details.phone,
                "country_code": _this6.policyData.details.country_code,
                "event": _this6.policyData.details.event,
                "post_id": _this6.hrPolicyListData.hrpolicy_id
              };
              console.log("organisation api key", apiKey);

              _this6.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].submitOtp, apiKey).subscribe(function (result) {
                console.log("organisation api response==", result);

                _this6.apiservices.hideLoader();

                _this6.FirstOtp = '';
                _this6.SecondOtp = '';
                _this6.ThirdOtp = '';
                _this6.FourthOtp = '';
                _this6.showButton = false;

                if (result.status == 1 || result.status == '1') {
                  _this6.apiservices.hrPolicyCount = _this6.apiservices.hrPolicyCount + 1;
                  console.log("hr policy otp data0==", _this6.hrPolicyDetailAllData.length);
                  console.log("hr policy otp data1==", _this6.apiservices.hrPolicyCount);

                  if (_this6.hrPolicyDetailAllData.length > 0) {
                    if (_this6.apiservices.hrPolicyCount == _this6.hrPolicyDetailAllData.length) {
                      var data = {
                        "commingFrom": "reloadHomeApi",
                        "reloadHomePage": true
                      };

                      _this6.eventService.publishSomeData({
                        data: data
                      });

                      if (_this6.commingData.commingFrom == "hrPolicyList") {
                        _this6.apiservices.hrPolicyCount = 0;

                        _this6.router.navigate(["/hr-policy-list"]);
                      } else {
                        _this6.apiservices.hrPolicyCount = 0;

                        _this6.router.navigate(["/tabs/tab1"]);
                      }

                      _this6.hrPolicyListData.action = '0';
                    } else {
                      _this6.sendData.alldata = _this6.hrPolicyListData;
                      _this6.sendData.myParam = _this6.hrPolicyDetailAllData[_this6.apiservices.hrPolicyCount];
                      _this6.sendData.hrPolicyDetailAllData = _this6.hrPolicyDetailAllData;
                      _this6.sendData.commingPageName = _this6.commingData;

                      _this6.router.navigate([_this6.hrPolicyDetailAllData[_this6.apiservices.hrPolicyCount].data.redirect_page]);
                    }
                  }
                } else {
                  _this6.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this6.apiservices.hideLoader();

                _this6.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return PolicyOtpPage;
      }();

      PolicyOtpPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]
        }];
      };

      PolicyOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./policy-otp.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/policy-otp/policy-otp.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./policy-otp.page.scss */
        "./src/app/hrPolicyModule/policy-otp/policy-otp.page.scss"))["default"]]
      })], PolicyOtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hrPolicyModule-policy-otp-policy-otp-module-es5.js.map