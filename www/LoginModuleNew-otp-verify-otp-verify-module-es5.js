(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-otp-verify-otp-verify-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/otp-verify/otp-verify.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/otp-verify/otp-verify.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleNewOtpVerifyOtpVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>otpVerify</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"bgCircleDiv\">\n    <br> <br>\n    <img [src]=\"loginData?.data?.settings?.logo\" class=\"logoImg\">\n  </div>\n  <!-- <br> <br> <br>  -->\n  <div class=\"bgImageDiv\">\n    <img [src]=\"loginData?.common_background_img\">\n  </div>\n  <div class=\"ion-padding\">\n\n\n  <ion-row>\n    <ion-col>\n      <p [innerHTML]=\"loginData?.data?.settings?.subtitle\" class=\"titleDiv ion-no-margin\"></p>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <ion-col>\n    <p>{{loginData?.data?.settings?.subdomain?.title}}</p>\n    <p class=\"emailInput padd10 ion-no-margin\"><span>{{loginData?.data?.settings?.client_name}}</span>\n      <span class=\"graySp\">{{loginData?.data?.settings?.subdomain?.footer}}</span></p>\n    <!-- <ion-input placeholder=\"{{loginData?.data?.settings?.client_name}} {{loginData?.data?.settings?.subdomain?.footer}}\" type=\"email\" class=\"emailInput\" [(ngModel)]=\"emailID\" disabled></ion-input> -->\n<br>\n\n<div class=\"otpDiv\">\n  <ion-row>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n        (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n        (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n        (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n        (keyup)=\"moveFocus(otp5, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp5 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(5)\"\n        (keyup)=\"moveFocus(otp6, FifthOtp, '5')\" [(ngModel)]=\"FifthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n    <ion-col [size]=\"2\">\n      <ion-input type=\"tel\" #otp6 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(6)\"\n        (keyup)=\"moveFocus(otp6, SixthOtp, '6')\" [(ngModel)]=\"SixthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n    </ion-col>\n  </ion-row>\n</div>\n    <!-- <ion-input [placeholder]=\"loginData?.data?.settings?.otp_field?.placeholder\" type=\"tel\" class=\"emailInput\" [(ngModel)]=\"otpValue\"></ion-input> -->\n  </ion-col>\n</ion-row>\n<br>\n<ion-row>\n  <ion-col [size]=\"12\" class=\"ion-text-center\">\n    <!-- enterMobile?.trim()=='' || countryCode?.trim()=='' || MobileIsOk==false -->\n    <ion-button [disabled]=\"showButton==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">Login</ion-button>\n  </ion-col>\n</ion-row>\n<br>\n<ion-row>\n \n  <ion-col [size]=\"12\" class=\"ion-text-center\" *ngIf=\"loginData?.data?.settings?.resend?.enable==true\">\n    <p [ngClass]=\"{'layerDiv': resendShow==true}\" class=\"ion-no-margin changeNumber\" \n    tappable (click)=\"resendOTP('0', loginData?.data?.settings)\">{{loginData?.data?.settings?.resend?.text}}</p>\n    <!-- <p *ngIf=\"phoneData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', phoneData)\">{{phoneData?.voice?.text}}</p> -->\n  </ion-col>\n  <ion-col [size]=\"12\" *ngIf=\"loginData?.data?.settings?.voice?.enable==true\" class=\"ion-text-center\">\n    <p class=\"ion-no-margin changeNumber\">OR</p>\n  </ion-col>\n  \n  <ion-col [size]=\"12\" class=\"ion-text-center\" *ngIf=\"loginData?.data?.settings?.voice?.enable==true\">\n    <p class=\"ion-no-margin changeNumber\" \n    [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', loginData?.data?.settings)\">\n    {{loginData?.data?.settings?.voice?.text}}\n     <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n  </ion-col>\n</ion-row>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/otp-verify/otp-verify-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/LoginModuleNew/otp-verify/otp-verify-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: OtpVerifyPageRoutingModule */

    /***/
    function srcAppLoginModuleNewOtpVerifyOtpVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpVerifyPageRoutingModule", function () {
        return OtpVerifyPageRoutingModule;
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


      var _otp_verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp-verify.page */
      "./src/app/LoginModuleNew/otp-verify/otp-verify.page.ts");

      var routes = [{
        path: '',
        component: _otp_verify_page__WEBPACK_IMPORTED_MODULE_3__["OtpVerifyPage"]
      }];

      var OtpVerifyPageRoutingModule = function OtpVerifyPageRoutingModule() {
        _classCallCheck(this, OtpVerifyPageRoutingModule);
      };

      OtpVerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpVerifyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/otp-verify/otp-verify.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/LoginModuleNew/otp-verify/otp-verify.module.ts ***!
      \****************************************************************/

    /*! exports provided: OtpVerifyPageModule */

    /***/
    function srcAppLoginModuleNewOtpVerifyOtpVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpVerifyPageModule", function () {
        return OtpVerifyPageModule;
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


      var _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-verify-routing.module */
      "./src/app/LoginModuleNew/otp-verify/otp-verify-routing.module.ts");
      /* harmony import */


      var _otp_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp-verify.page */
      "./src/app/LoginModuleNew/otp-verify/otp-verify.page.ts");

      var OtpVerifyPageModule = function OtpVerifyPageModule() {
        _classCallCheck(this, OtpVerifyPageModule);
      };

      OtpVerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpVerifyPageRoutingModule"]],
        declarations: [_otp_verify_page__WEBPACK_IMPORTED_MODULE_6__["OtpVerifyPage"]]
      })], OtpVerifyPageModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/otp-verify/otp-verify.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/LoginModuleNew/otp-verify/otp-verify.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleNewOtpVerifyOtpVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgImageDiv {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n\n.emailInput {\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.logoImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sendCss {\n  color: var(--headerColor);\n}\n\n.bgCircleDiv {\n  background: #ad97cd;\n  height: 200px;\n  border-radius: 0px 0px 200px 200px;\n  position: relative;\n  z-index: 1;\n}\n\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n\n.changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.padd10 {\n  padding: 10px;\n}\n\n.graySp {\n  float: right;\n  color: gray;\n}\n\n.otpDiv ion-input {\n  border-bottom: 1px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvb3RwLXZlcmlmeS9vdHAtdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGVBQUE7RUFBZ0IsTUFBQTtFQUFPLE9BQUE7RUFBUSxRQUFBO0VBQVMsU0FBQTtFQUFVLFVBQUE7QUFPOUQ7O0FBTkE7RUFBWSxzQkFBQTtFQUF1QixrQkFBQTtBQVduQzs7QUFWQTtFQUFTLGFBQUE7RUFBYyxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtBQWdCbkM7O0FBZkE7RUFBUyx5QkFBQTtBQW1CVDs7QUFqQkE7RUFBYSxtQkFBQTtFQUFvQixhQUFBO0VBQWMsa0NBQUE7RUFBbUMsa0JBQUE7RUFBbUIsVUFBQTtBQXlCckc7O0FBdkJBO0VBQVUsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLFdBQUE7QUE2QnhDOztBQTVCQTtFQUFpQixXQUFBO0VBQVcsT0FBQTtFQUFPLFFBQUE7RUFBUSxNQUFBO0VBQU0sU0FBQTtFQUFTLGtCQUFBO0VBQWtCLFVBQUE7QUFzQzVFOztBQXJDQTtFQUFjLHlCQUFBO0VBQXlCLGVBQUE7RUFBZSxpQkFBQTtBQTJDdEQ7O0FBMUNBO0VBQVEsYUFBQTtBQThDUjs7QUE3Q0E7RUFBUSxZQUFBO0VBQWEsV0FBQTtBQWtEckI7O0FBL0NJO0VBQVUsNkJBQUE7RUFBNkIsa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0IsZUFBQTtFQUFlLGlCQUFBO0FBdURoRyIsImZpbGUiOiJzcmMvYXBwL0xvZ2luTW9kdWxlTmV3L290cC12ZXJpZnkvb3RwLXZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdJbWFnZURpdntwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7cmlnaHQ6IDA7Ym90dG9tOiAwO3otaW5kZXg6IDA7fVxuLmVtYWlsSW5wdXR7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtib3JkZXItcmFkaXVzOiA1cHg7fVxuLmxvZ29JbWd7aGVpZ2h0OiAxMDBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb250YWluO31cbi5zZW5kQ3Nze2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4vLyBpb24taW5wdXR7cGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7fVxuLmJnQ2lyY2xlRGl2e2JhY2tncm91bmQ6ICNhZDk3Y2Q7aGVpZ2h0OiAyMDBweDtib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiAxO31cblxuLmxheWVyRGl2e3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MC41O3otaW5kZXg6LTE7fVxuLmxheWVyRGl2OjphZnRlcntjb250ZW50OlwiXCI7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5O31cbi5jaGFuZ2VOdW1iZXJ7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuLnBhZGQxMHtwYWRkaW5nOiAxMHB4O31cbi5ncmF5U3B7ZmxvYXQ6IHJpZ2h0O2NvbG9yOiBncmF5O31cblxuLm90cERpdntcbiAgICBpb24taW5wdXR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JheTt0ZXh0LWFsaWduOmNlbnRlcjstLXBhZGRpbmctc3RhcnQ6MHB4O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/otp-verify/otp-verify.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/LoginModuleNew/otp-verify/otp-verify.page.ts ***!
      \**************************************************************/

    /*! exports provided: OtpVerifyPage */

    /***/
    function srcAppLoginModuleNewOtpVerifyOtpVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpVerifyPage", function () {
        return OtpVerifyPage;
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

      var OtpVerifyPage = /*#__PURE__*/function () {
        function OtpVerifyPage(router, sendData, apiservices, zone, storageService) {
          _classCallCheck(this, OtpVerifyPage);

          this.router = router;
          this.sendData = sendData;
          this.apiservices = apiservices;
          this.zone = zone;
          this.storageService = storageService;
          this.hideTimmer = false;
          this.resendShow = false;
          this.otpValue = "";
          this.FirstOtp = "";
          this.SecondOtp = "";
          this.ThirdOtp = "";
          this.FourthOtp = "";
          this.FifthOtp = "";
          this.SixthOtp = "";
          this.showButton = false;
          this.loginData = this.sendData.alldata;
        }

        _createClass(OtpVerifyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.loginData) {
              this.maxTime = this.loginData.wait_time;

              if (this.maxTime && this.maxTime > 0) {
                this.StartTimer();
              }
            }
          }
        }, {
          key: "moveFocus",
          value: function moveFocus(nextElement, val, index) {
            var _this = this;

            this.zone.run(function () {
              if (index < 6) {
                if (_this.SecondOtp == undefined || _this.SecondOtp == "") {
                  nextElement.setFocus();
                } else if (_this.ThirdOtp == undefined || _this.ThirdOtp == "") {
                  nextElement.setFocus();
                } else if (_this.FourthOtp == undefined || _this.FourthOtp == "") {
                  nextElement.setFocus();
                } else if (_this.FifthOtp == undefined || _this.FifthOtp == "") {
                  nextElement.setFocus();
                } else if (_this.SixthOtp == undefined || _this.SixthOtp == "") {
                  nextElement.setFocus();
                }
              } else {}
            });
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("gety otp==");

              if (_this2.FirstOtp.trim() == "" || _this2.SecondOtp.trim() == "" || _this2.ThirdOtp.trim() == "" || _this2.FourthOtp.trim() == "" || _this2.FifthOtp.trim() == "" || _this2.SixthOtp.trim() == "") {
                _this2.showButton = false;
              } else {
                _this2.showButton = true;
              }
            });
          }
        }, {
          key: "checkFocus",
          value: function checkFocus(index) {
            var _this3 = this;

            this.zone.run(function () {
              console.log("********==", index);

              if (index == 1) {
                _this3.FirstOtp = "";
                _this3.showButton = false;
              } else if (index == 2) {
                _this3.SecondOtp = "";
                _this3.showButton = false;
              } else if (index == 3) {
                _this3.ThirdOtp = "";
                _this3.showButton = false;
              } else if (index == 4) {
                _this3.FourthOtp = "";
                _this3.showButton = false;
              } else if (index == 5) {
                _this3.FifthOtp = "";
                _this3.showButton = false;
              } else if (index == 6) {
                _this3.SixthOtp = "";
                _this3.showButton = false;
              }
            });
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this4 = this;

            this.zone.run(function () {
              _this4.apiservices.showLoader();

              var apiKey = {
                "otp": _this4.FirstOtp.trim() + _this4.SecondOtp.trim() + _this4.ThirdOtp.trim() + _this4.FourthOtp.trim() + _this4.FifthOtp.trim() + _this4.SixthOtp.trim(),
                "phone": _this4.loginData.phone,
                "country_code": _this4.loginData.country_code,
                "event": _this4.loginData.event,
                "login_type": _this4.loginData.login_type,
                "email_id": _this4.loginData.email_id
              };
              console.log("resend OTP by Voice Call, api key", apiKey);

              _this4.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].submitOtpApi, apiKey).subscribe(function (result) {
                _this4.apiservices.hideLoader();

                console.log("resend OTP by Voice Call, api response==", result);

                if (result.status == 1 || result.status == '1') {
                  _this4.storageService.setStorage('login_token', result.data.token);

                  setTimeout(function () {
                    _this4.storageService.setStorage('employeeID', result.employee_id);
                  }, 500);

                  _this4.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');

                  setTimeout(function () {
                    _this4.router.navigate(["/tabs"]);
                  }, 600);
                } else {
                  _this4.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this4.apiservices.hideLoader();

                _this4.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "StartTimer",
          value: function StartTimer() {
            var _this5 = this;

            this.zone.run(function () {
              setTimeout(function (x) {
                // if(this.maxTime <= 0) {}
                _this5.maxTime -= 1;
                _this5.resendShow = true;

                if (_this5.maxTime > 0) {
                  _this5.StartTimer();
                } else {
                  _this5.maxTime = 0;
                  _this5.resendShow = false;
                  _this5.hideTimmer = true;
                }
              }, 1000);
            });
          }
        }, {
          key: "resendOTP",
          value: function resendOTP(value, getData) {
            var _this6 = this;

            // this.otpValue='';
            this.FirstOtp = '';
            this.SecondOtp = '';
            this.ThirdOtp = '';
            this.FourthOtp = '';
            this.FifthOtp = '';
            this.SixthOtp = '';
            this.zone.run(function () {
              if (getData.max_resend == 0) {
                _this6.apiservices.showToastMessage(_this6.loginData.data.settings.max_resend_string, 'top', 3000, 'redBg');
              } else {
                _this6.loginData.data.settings.max_resend = parseInt(_this6.loginData.data.settings.max_resend) - 1;
                _this6.maxTime = _this6.loginData.data.settings.wait_time;
                _this6.hideTimmer = false;

                _this6.StartTimer();

                var apiKey = {
                  "phone": _this6.loginData.phone,
                  "country_code": _this6.loginData.country_code,
                  "event": _this6.loginData.event,
                  "type": value,
                  "login_type": _this6.loginData.login_type,
                  "email_id": _this6.loginData.email_id
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this6.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].resendOtpApi, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  if (result.status == 1 || result.status == '1') {
                    _this6.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                  } else {
                    _this6.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this6.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              }
            });
          }
        }]);

        return OtpVerifyPage;
      }();

      OtpVerifyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }];
      };

      OtpVerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp-verify.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/otp-verify/otp-verify.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otp-verify.page.scss */
        "./src/app/LoginModuleNew/otp-verify/otp-verify.page.scss"))["default"]]
      })], OtpVerifyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=LoginModuleNew-otp-verify-otp-verify-module-es5.js.map