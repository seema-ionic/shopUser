(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-enter-otp-enter-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-otp/enter-otp.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-otp/enter-otp.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{phoneData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"phoneData\">\n\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"headLogoDiv\"><img [src]=\"phoneData?.logo\" onerror=\"this.src='../../../assets/watermark/watermark.png'\"></div>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <p class=\"noMargin title\">{{phoneData?.title}}</p>\n        <p class=\"noMargin subTitle\">{{phoneData?.subtitle}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" *ngIf=\"phoneData?.change_number?.enable==true\" class=\"ion-text-right\">\n        <p class=\"noMargin changeNumber\" tappable (click)=\"goToPrevious()\">{{phoneData?.change_number?.text}}</p>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <div class=\"otpDiv\">\n      <ion-row>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n            (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n            (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n            (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n            (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"showButton==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{phoneData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"phoneData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', phoneData)\">{{phoneData?.voice?.text}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"phoneData?.resend?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('0', phoneData)\">{{phoneData?.resend?.text}} <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n      </ion-col>\n    </ion-row>\n    <br><br>\n  </div>\n\n\n\n  <div *ngIf=\"!phoneData\">\n    <app-skelton-listview [iconPath]=\"'enterOtp'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n<!-- <ion-footer class=\"loginFooterDiv\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-right\">\n      <div class=\"poweredDiv\">\n        <p class=\"noMargin\">Powered By:</p>\n        <img src=\"../../assets/icon/benepikLogo.png\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n");

/***/ }),

/***/ "./src/app/loginModule/enter-otp/enter-otp-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/loginModule/enter-otp/enter-otp-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EnterOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPageRoutingModule", function() { return EnterOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _enter_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-otp.page */ "./src/app/loginModule/enter-otp/enter-otp.page.ts");




const routes = [
    {
        path: '',
        component: _enter_otp_page__WEBPACK_IMPORTED_MODULE_3__["EnterOtpPage"]
    }
];
let EnterOtpPageRoutingModule = class EnterOtpPageRoutingModule {
};
EnterOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnterOtpPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/enter-otp/enter-otp.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/loginModule/enter-otp/enter-otp.module.ts ***!
  \***********************************************************/
/*! exports provided: EnterOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPageModule", function() { return EnterOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enter_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-otp-routing.module */ "./src/app/loginModule/enter-otp/enter-otp-routing.module.ts");
/* harmony import */ var _enter_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-otp.page */ "./src/app/loginModule/enter-otp/enter-otp.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let EnterOtpPageModule = class EnterOtpPageModule {
};
EnterOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enter_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterOtpPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_enter_otp_page__WEBPACK_IMPORTED_MODULE_6__["EnterOtpPage"]]
    })
], EnterOtpPageModule);



/***/ }),

/***/ "./src/app/loginModule/enter-otp/enter-otp.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/loginModule/enter-otp/enter-otp.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 150px;\n}\n.title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  line-height: 20px;\n}\n.changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n}\n.otpDiv {\n  padding: 0 25px;\n}\n.otpDiv ion-input {\n  border-bottom: 2px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.timeCountDown {\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0px;\n}\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvZW50ZXItb3RwL2VudGVyLW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxrQ0FBQTtFQUFrQyxlQUFBO0FBRy9DO0FBRkk7RUFBSSxZQUFBO0FBS1I7QUFIQTtFQUFPLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixpQkFBQTtBQVN2QztBQVJBO0VBQVUsZUFBQTtFQUFlLGlCQUFBO0FBYXpCO0FBWkE7RUFBYyx5QkFBQTtFQUF5QixlQUFBO0VBQWUsaUJBQUE7QUFrQnREO0FBaEJBO0VBQVEsZUFBQTtBQW9CUjtBQW5CSTtFQUFVLDZCQUFBO0VBQTZCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLGVBQUE7RUFBZSxpQkFBQTtBQTBCaEc7QUF2QkE7RUFBZSxpQkFBQTtFQUFpQixlQUFBO0VBQWUsV0FBQTtBQTZCL0M7QUEzQkE7RUFBVSxrQkFBQTtFQUFrQixZQUFBO0VBQVksV0FBQTtBQWlDeEM7QUFoQ0E7RUFBaUIsV0FBQTtFQUFXLE9BQUE7RUFBTyxRQUFBO0VBQVEsTUFBQTtFQUFNLFNBQUE7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0FBMEM1RSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luTW9kdWxlL2VudGVyLW90cC9lbnRlci1vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRMb2dvRGl2e2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjEwcHggMDtcbiAgICBpbWd7d2lkdGg6MTUwcHg7fVxufVxuLnRpdGxle2ZvbnQtc2l6ZToxN3B4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjAgMCA3cHggMDt9XG4uc3ViVGl0bGV7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjBweDt9XG4uY2hhbmdlTnVtYmVye2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDpib2xkO31cblxuLm90cERpdntwYWRkaW5nOjAgMjVweDtcbiAgICBpb24taW5wdXR7Ym9yZGVyLWJvdHRvbToycHggc29saWQgZ3JheTt0ZXh0LWFsaWduOmNlbnRlcjstLXBhZGRpbmctc3RhcnQ6MHB4O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxufVxuXG4udGltZUNvdW50RG93bntmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowcHg7fVxuXG4ubGF5ZXJEaXZ7cG9zaXRpb246cmVsYXRpdmU7b3BhY2l0eTowLjU7ei1pbmRleDotMTt9XG4ubGF5ZXJEaXY6OmFmdGVye2NvbnRlbnQ6XCJcIjtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk7fSJdfQ== */");

/***/ }),

/***/ "./src/app/loginModule/enter-otp/enter-otp.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/loginModule/enter-otp/enter-otp.page.ts ***!
  \*********************************************************/
/*! exports provided: EnterOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPage", function() { return EnterOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");








let EnterOtpPage = class EnterOtpPage {
    constructor(apiservices, router, zone, menuCtrl, sendData, storageService, navCtrl) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.FirstOtp = "";
        this.SecondOtp = "";
        this.ThirdOtp = "";
        this.FourthOtp = "";
        this.hideTimmer = false;
        this.resendShow = false;
        this.showButton = false;
        this.phoneData = this.sendData.alldata;
        console.log("organisation name data from organisationNamePage 2==", this.phoneData);
    }
    ngOnInit() {
        if (this.phoneData) {
            this.maxTime = this.phoneData.wait_time;
            if (this.maxTime && this.maxTime > 0) {
                this.StartTimer();
            }
        }
    }
    StartTimer() {
        this.zone.run(() => {
            setTimeout(x => {
                // if(this.maxTime <= 0) {}
                this.maxTime -= 1;
                this.resendShow = true;
                if (this.maxTime > 0) {
                    this.StartTimer();
                }
                else {
                    this.maxTime = 0;
                    this.resendShow = false;
                    this.hideTimmer = true;
                }
            }, 1000);
        });
    }
    moveFocus(nextElement, val, index) {
        this.zone.run(() => {
            if (index < 4) {
                if (this.SecondOtp == undefined || this.SecondOtp == "") {
                    nextElement.setFocus();
                }
                else if (this.ThirdOtp == undefined || this.ThirdOtp == "") {
                    nextElement.setFocus();
                }
                else if (this.FourthOtp == undefined || this.FourthOtp == "") {
                    nextElement.setFocus();
                }
            }
            else { }
        });
    }
    checkFocus(index) {
        this.zone.run(() => {
            console.log("********==", index);
            if (index == 1) {
                this.FirstOtp = "";
                this.showButton = false;
            }
            else if (index == 2) {
                this.SecondOtp = "";
                this.showButton = false;
            }
            else if (index == 3) {
                this.ThirdOtp = "";
                this.showButton = false;
            }
            else if (index == 4) {
                this.FourthOtp = "";
                this.showButton = false;
            }
        });
    }
    getOtp() {
        this.zone.run(() => {
            var newOTP = this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim();
            console.log("get new otp0==", newOTP);
            if (this.FirstOtp.trim() == "" || this.SecondOtp.trim() == "" || this.ThirdOtp.trim() == "" || this.FourthOtp.trim() == "") {
                console.log("get new otp1==", newOTP);
                this.showButton = false;
                console.log("get new otp1.1==", this.showButton);
            }
            else {
                console.log("get new otp2==", newOTP);
                this.showButton = true;
                console.log("get new otp2.1==", this.showButton);
            }
        });
    }
    goToNext() {
        this.zone.run(() => {
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "otp": this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
                "phone": this.phoneData.details.phone,
                "country_code": this.phoneData.details.country_code,
                "event": this.phoneData.details.event,
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].submitOtp, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                this.FirstOtp = '';
                this.SecondOtp = '';
                this.ThirdOtp = '';
                this.FourthOtp = '';
                this.showButton = false;
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.sendData.alldata = result.data.settings;
                    if (result.data.employee == '' || result.data.employee == undefined || result.data.employee == null || result.data.employee == 'null') {
                        this.router.navigate(["/create-account"]);
                    }
                    else {
                        this.storageService.setStorage('login_token', result.data.token);
                        this.sendData.userImage = result.data.employee.profile_image;
                        this.router.navigate(["/tabs"]);
                    }
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.hideLoader();
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    resendOTP(value, getData) {
        this.zone.run(() => {
            if (getData.max_resend == 0) {
                this.apiservices.showToastMessage(this.phoneData.max_resend_string, 'top', 3000, 'redBg');
            }
            else {
                this.phoneData.max_resend = parseInt(this.phoneData.max_resend) - 1;
                this.maxTime = this.phoneData.wait_time;
                this.hideTimmer = false;
                this.StartTimer();
                let apiKey = {
                    "phone": this.phoneData.details.phone,
                    "country_code": this.phoneData.details.country_code,
                    "event": this.phoneData.details.event,
                    "type": value
                };
                console.log("resend OTP by Voice Call, api key", apiKey);
                this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].resendOtp, apiKey).subscribe((result) => {
                    console.log("resend OTP by Voice Call, api response==", result);
                    if (result.status == 1 || result.status == '1') {
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    }
                    else {
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            }
        });
    }
    goToPrevious() {
        this.zone.run(() => {
            this.navCtrl.navigateBack("/enter-number");
        });
    }
};
EnterOtpPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
EnterOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enter-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./enter-otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-otp/enter-otp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./enter-otp.page.scss */ "./src/app/loginModule/enter-otp/enter-otp.page.scss")).default]
    })
], EnterOtpPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-enter-otp-enter-otp-module-es2015.js.map