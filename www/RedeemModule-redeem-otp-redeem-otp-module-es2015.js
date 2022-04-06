(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-otp-redeem-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-otp/redeem-otp.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-otp/redeem-otp.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{phoneData?.title}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"phoneData\">\n\n    <br>\n    <!-- <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"headLogoDiv\"><img [src]=\"phoneData?.logo\" onerror=\"this.src='../../../assets/watermark/watermark.png'\"></div>\n      </ion-col>\n    </ion-row>\n    <br><br> -->\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <p class=\"noMargin title\">{{phoneData?.title}}</p>\n        <p class=\"noMargin subTitle\">{{phoneData?.subtitle}}</p>\n      </ion-col>\n      <!-- <ion-col [size]=\"12\" *ngIf=\"phoneData?.change_number?.enable==true\" class=\"ion-text-right\">\n        <p class=\"noMargin changeNumber\" tappable (click)=\"goToPrevious()\">{{phoneData?.change_number?.text}}</p>\n      </ion-col> -->\n    </ion-row>\n\n    <br>\n    <div class=\"otpDiv\">\n      <ion-row>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n            (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n            (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n            (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n            (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"showButton==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{phoneData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"phoneData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', phoneData)\">{{phoneData?.voice?.text}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"phoneData?.resend?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('0', phoneData)\">{{phoneData?.resend?.text}} <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n      </ion-col>\n    </ion-row>\n    <br><br>\n  </div>\n\n\n\n  <div *ngIf=\"!phoneData\">\n    <app-skelton-listview [iconPath]=\"'enterOtp'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n<!-- <ion-content class=\"ion-padding\">\n\n  <div class=\"inputfiled\">\n    <br>\n    <ion-row><ion-col [size]=\"12\"><p>{{sendOtpData?.otpMessage}}</p></ion-col></ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n          (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\"></ion-input>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n          (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\"></ion-input>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n          (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\"></ion-input>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-input style=\"padding:0px !important;\" type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n          (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <br><br>\n\n\n    <ion-row class=\"ion-text-center\">\n      <ion-col [push]=\"1\" [size]=\"10\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"submitOtp()\">Submit</ion-button>\n        <br><br>\n        <p class=\"resendText\" tappable (click)=\"resendOtp()\">Resend</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/RedeemModule/redeem-otp/redeem-otp-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-otp/redeem-otp-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: RedeemOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemOtpPageRoutingModule", function() { return RedeemOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _redeem_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem-otp.page */ "./src/app/RedeemModule/redeem-otp/redeem-otp.page.ts");




const routes = [
    {
        path: '',
        component: _redeem_otp_page__WEBPACK_IMPORTED_MODULE_3__["RedeemOtpPage"]
    }
];
let RedeemOtpPageRoutingModule = class RedeemOtpPageRoutingModule {
};
RedeemOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedeemOtpPageRoutingModule);



/***/ }),

/***/ "./src/app/RedeemModule/redeem-otp/redeem-otp.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-otp/redeem-otp.module.ts ***!
  \**************************************************************/
/*! exports provided: RedeemOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemOtpPageModule", function() { return RedeemOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _redeem_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-otp-routing.module */ "./src/app/RedeemModule/redeem-otp/redeem-otp-routing.module.ts");
/* harmony import */ var _redeem_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem-otp.page */ "./src/app/RedeemModule/redeem-otp/redeem-otp.page.ts");







let RedeemOtpPageModule = class RedeemOtpPageModule {
};
RedeemOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redeem_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemOtpPageRoutingModule"]
        ],
        declarations: [_redeem_otp_page__WEBPACK_IMPORTED_MODULE_6__["RedeemOtpPage"]]
    })
], RedeemOtpPageModule);



/***/ }),

/***/ "./src/app/RedeemModule/redeem-otp/redeem-otp.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-otp/redeem-otp.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 150px;\n}\n.title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  line-height: 20px;\n}\n.changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n}\n.otpDiv {\n  padding: 0 25px;\n}\n.otpDiv ion-input {\n  border-bottom: 2px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.timeCountDown {\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0px;\n}\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1vdHAvcmVkZWVtLW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxrQ0FBQTtFQUFrQyxlQUFBO0FBRy9DO0FBRkU7RUFBSSxZQUFBO0FBS047QUFIQTtFQUFPLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixpQkFBQTtBQVN2QztBQVJBO0VBQVUsZUFBQTtFQUFlLGlCQUFBO0FBYXpCO0FBWkE7RUFBYyx5QkFBQTtFQUF5QixlQUFBO0VBQWUsaUJBQUE7QUFrQnREO0FBaEJBO0VBQVEsZUFBQTtBQW9CUjtBQW5CRTtFQUFVLDZCQUFBO0VBQTZCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLGVBQUE7RUFBZSxpQkFBQTtBQTBCOUY7QUF2QkE7RUFBZSxpQkFBQTtFQUFpQixlQUFBO0VBQWUsV0FBQTtBQTZCL0M7QUEzQkE7RUFBVSxrQkFBQTtFQUFrQixZQUFBO0VBQVksV0FBQTtBQWlDeEM7QUFoQ0E7RUFBaUIsV0FBQTtFQUFXLE9BQUE7RUFBTyxRQUFBO0VBQVEsTUFBQTtFQUFNLFNBQUE7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0FBMEM1RSIsImZpbGUiOiJzcmMvYXBwL1JlZGVlbU1vZHVsZS9yZWRlZW0tb3RwL3JlZGVlbS1vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRMb2dvRGl2e2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjEwcHggMDtcbiAgaW1ne3dpZHRoOjE1MHB4O31cbn1cbi50aXRsZXtmb250LXNpemU6MTdweDtmb250LXdlaWdodDpib2xkO21hcmdpbjowIDAgN3B4IDA7fVxuLnN1YlRpdGxle2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7fVxuLmNoYW5nZU51bWJlcntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG5cbi5vdHBEaXZ7cGFkZGluZzowIDI1cHg7XG4gIGlvbi1pbnB1dHtib3JkZXItYm90dG9tOjJweCBzb2xpZCBncmF5O3RleHQtYWxpZ246Y2VudGVyOy0tcGFkZGluZy1zdGFydDowcHg7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG59XG5cbi50aW1lQ291bnREb3due2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjBweDt9XG5cbi5sYXllckRpdntwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjAuNTt6LWluZGV4Oi0xO31cbi5sYXllckRpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTt9XG5cblxuLy8gLmlucHV0ZmlsZWR7cGFkZGluZzoxNXB4IDIwcHg7XG4vLyAgICAgLmJvZEJvdHRvbXtib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDtcbi8vICAgICAgIHdpZHRoOjg1JTtoZWlnaHQ6NTBweDttYXJnaW46YXV0bztjb2xvcjojMDAwOy0tcGFkZGluZy1zdGFydDowcDt9XG4vLyAgIH1cbi8vICAgLnJlc2VuZFRleHR7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjA7fSJdfQ== */");

/***/ }),

/***/ "./src/app/RedeemModule/redeem-otp/redeem-otp.page.ts":
/*!************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-otp/redeem-otp.page.ts ***!
  \************************************************************/
/*! exports provided: RedeemOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemOtpPage", function() { return RedeemOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");







let RedeemOtpPage = class RedeemOtpPage {
    constructor(apiservices, router, zone, menuCtrl, sendData) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.FirstOtp = "";
        this.SecondOtp = "";
        this.ThirdOtp = "";
        this.FourthOtp = "";
        this.hideTimmer = false;
        this.resendShow = false;
        this.showButton = false;
        this.allDataGetOtp = this.sendData.alldata;
        console.log("data come after enter number and then submit1==", this.allDataGetOtp);
        this.phoneData = this.allDataGetOtp.data.settings;
        console.log("data come after enter number and then submit==", this.phoneData);
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
            console.log("gety otp==");
            if (this.FirstOtp.trim() == "" || this.SecondOtp.trim() == "" || this.ThirdOtp.trim() == "" || this.FourthOtp.trim() == "") {
                this.showButton = false;
            }
            else {
                this.showButton = true;
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
                "event": "redeem",
                "phone": this.allDataGetOtp.data.phone,
                "country_code": this.allDataGetOtp.data.country_code,
                "order_id": this.allDataGetOtp.order_id
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
                    this.sendData.myParam = result.data;
                    var data = {
                        "commingFrom": "redeemOtp"
                    };
                    this.sendData.alldata = data;
                    this.router.navigate(["/redeem-my-order-detail"]);
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
                    "phone": this.allDataGetOtp.data.phone,
                    "country_code": this.allDataGetOtp.data.country_code,
                    "event": "redeem",
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
};
RedeemOtpPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] }
];
RedeemOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redeem-otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-otp/redeem-otp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redeem-otp.page.scss */ "./src/app/RedeemModule/redeem-otp/redeem-otp.page.scss")).default]
    })
], RedeemOtpPage);



/***/ })

}]);
//# sourceMappingURL=RedeemModule-redeem-otp-redeem-otp-module-es2015.js.map