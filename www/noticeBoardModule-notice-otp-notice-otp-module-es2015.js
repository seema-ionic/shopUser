(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticeBoardModule-notice-otp-notice-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-otp/notice-otp.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-otp/notice-otp.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Enter OTP</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"showSkeleton==true\">\n\n\n\n\n\n    <br><br><br>\n    <!-- <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"headLogoDiv\"><img src=\"../../assets/icon/logoTwo.png\"></div>\n      </ion-col>\n    </ion-row> -->\n    <br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <p class=\"noMargin title\">{{policyData?.title}}</p>\n        <p class=\"noMargin subTitle\">{{policyData?.subtitle}}</p>\n      </ion-col>\n      <!-- <ion-col [size]=\"12\" class=\"ion-text-right\">\n        <p class=\"noMargin changeNumber\" tappable (click)=\"goToPrevious()\">Change Number</p>\n      </ion-col> -->\n    </ion-row>\n\n    <br>\n    <div class=\"otpDiv\">\n      <ion-row>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n            (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n            (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n            (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"3\">\n          <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n            (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\" (ngModelChange)=\"getOtp()\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"showButton==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{policyData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"policyData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', policyData)\">{{policyData?.voice?.text}}</p>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-top\">\n        <p *ngIf=\"policyData?.resend?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('0', policyData)\">{{policyData?.resend?.text}} <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n\n\n  </div>\n\n\n\n  <div *ngIf=\"showSkeleton==false\">\n    <app-skelton-listview [iconPath]=\"'hrEnterOtp'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/noticeBoardModule/notice-otp/notice-otp-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-otp/notice-otp-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NoticeOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeOtpPageRoutingModule", function() { return NoticeOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notice_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-otp.page */ "./src/app/noticeBoardModule/notice-otp/notice-otp.page.ts");




const routes = [
    {
        path: '',
        component: _notice_otp_page__WEBPACK_IMPORTED_MODULE_3__["NoticeOtpPage"]
    }
];
let NoticeOtpPageRoutingModule = class NoticeOtpPageRoutingModule {
};
NoticeOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoticeOtpPageRoutingModule);



/***/ }),

/***/ "./src/app/noticeBoardModule/notice-otp/notice-otp.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-otp/notice-otp.module.ts ***!
  \*******************************************************************/
/*! exports provided: NoticeOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeOtpPageModule", function() { return NoticeOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notice_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-otp-routing.module */ "./src/app/noticeBoardModule/notice-otp/notice-otp-routing.module.ts");
/* harmony import */ var _notice_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-otp.page */ "./src/app/noticeBoardModule/notice-otp/notice-otp.page.ts");







let NoticeOtpPageModule = class NoticeOtpPageModule {
};
NoticeOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notice_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticeOtpPageRoutingModule"]
        ],
        declarations: [_notice_otp_page__WEBPACK_IMPORTED_MODULE_6__["NoticeOtpPage"]]
    })
], NoticeOtpPageModule);



/***/ }),

/***/ "./src/app/noticeBoardModule/notice-otp/notice-otp.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-otp/notice-otp.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 100px;\n}\n.title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  line-height: 20px;\n}\n.changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n}\n.otpDiv {\n  padding: 0 25px;\n}\n.otpDiv ion-input {\n  border-bottom: 2px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.timeCountDown {\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0px;\n}\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlQm9hcmRNb2R1bGUvbm90aWNlLW90cC9ub3RpY2Utb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGtDQUFBO0VBQWtDLGVBQUE7QUFHL0M7QUFGSTtFQUFJLFlBQUE7QUFLUjtBQUhBO0VBQU8sZUFBQTtFQUFlLGlCQUFBO0VBQWlCLGlCQUFBO0FBU3ZDO0FBUkE7RUFBVSxlQUFBO0VBQWUsaUJBQUE7QUFhekI7QUFaQTtFQUFjLHlCQUFBO0VBQXlCLGVBQUE7RUFBZSxpQkFBQTtBQWtCdEQ7QUFoQkE7RUFBUSxlQUFBO0FBb0JSO0FBbkJJO0VBQVUsNkJBQUE7RUFBNkIsa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0IsZUFBQTtFQUFlLGlCQUFBO0FBMEJoRztBQXZCQTtFQUFlLGlCQUFBO0VBQWlCLGVBQUE7RUFBZSxXQUFBO0FBNkIvQztBQTVCQTtFQUFVLGtCQUFBO0VBQWtCLFlBQUE7RUFBWSxXQUFBO0FBa0N4QztBQWpDQTtFQUFpQixXQUFBO0VBQVcsT0FBQTtFQUFPLFFBQUE7RUFBUSxNQUFBO0VBQU0sU0FBQTtFQUFTLGtCQUFBO0VBQWtCLFVBQUE7QUEyQzVFIiwiZmlsZSI6InNyYy9hcHAvbm90aWNlQm9hcmRNb2R1bGUvbm90aWNlLW90cC9ub3RpY2Utb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkTG9nb0Rpdntib3JkZXItYm90dG9tOjBweCBzb2xpZCBnYWluc2Jvcm87cGFkZGluZzoxMHB4IDA7XG4gICAgaW1ne3dpZHRoOjEwMHB4O31cbn1cbi50aXRsZXtmb250LXNpemU6MTdweDtmb250LXdlaWdodDpib2xkO21hcmdpbjowIDAgN3B4IDA7fVxuLnN1YlRpdGxle2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7fVxuLmNoYW5nZU51bWJlcntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG5cbi5vdHBEaXZ7cGFkZGluZzowIDI1cHg7XG4gICAgaW9uLWlucHV0e2JvcmRlci1ib3R0b206MnB4IHNvbGlkIGdyYXk7dGV4dC1hbGlnbjpjZW50ZXI7LS1wYWRkaW5nLXN0YXJ0OjBweDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO31cbn1cblxuLnRpbWVDb3VudERvd257Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTRweDttYXJnaW46MHB4O31cbi5sYXllckRpdntwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjAuNTt6LWluZGV4Oi0xO31cbi5sYXllckRpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTt9Il19 */");

/***/ }),

/***/ "./src/app/noticeBoardModule/notice-otp/notice-otp.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-otp/notice-otp.page.ts ***!
  \*****************************************************************/
/*! exports provided: NoticeOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeOtpPage", function() { return NoticeOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









let NoticeOtpPage = class NoticeOtpPage {
    constructor(apiservices, router, zone, menuCtrl, sendData, location, eventService) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.location = location;
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
        this.noticeListData = this.sendData.alldata;
        console.log("policy list data12==", this.sendData.alldata);
        this.commingData = this.sendData.commingPageName;
        console.log("comming from which page==", this.commingData);
        setTimeout(() => {
            this.showSkeleton = true;
        }, 1000);
    }
    ngOnInit() {
        if (this.policyData) {
            this.maxTime = this.policyData.wait_time;
            if (this.maxTime && this.maxTime > 0) {
                this.StartTimer();
            }
        }
    }
    resendOTP(value, getData) {
        this.zone.run(() => {
            if (getData.max_resend == 0) {
                this.apiservices.showToastMessage(this.policyData.max_resend_string, 'top', 3000, 'redBg');
            }
            else {
                this.policyData.max_resend = parseInt(this.policyData.max_resend) - 1;
                this.maxTime = this.policyData.wait_time;
                this.hideTimmer = false;
                this.StartTimer();
                let apiKey = {
                    "phone": this.policyData.details.phone,
                    "country_code": this.policyData.details.country_code,
                    "event": this.policyData.details.event,
                    "type": value,
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
    StartTimer() {
        this.zone.run(() => {
            setTimeout(x => {
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
                "phone": this.policyData.details.phone,
                "country_code": this.policyData.details.country_code,
                "event": this.policyData.details.event,
                "post_id": this.noticeListData.notice_id
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
                    this.noticeListData.action = '0';
                    var data = {
                        "commingFrom": "reloadHomeApi",
                        "reloadHomePage": true
                    };
                    this.eventService.publishSomeData({ data });
                    if (this.commingData.commingFrom == "noticeList") {
                        this.router.navigate(["/notice-list"]);
                    }
                    else {
                        this.router.navigate(["/tabs/tab1"]);
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
    goToPrevious() {
        this.zone.run(() => {
            this.location.back();
        });
    }
};
NoticeOtpPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }
];
NoticeOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notice-otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-otp/notice-otp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notice-otp.page.scss */ "./src/app/noticeBoardModule/notice-otp/notice-otp.page.scss")).default]
    })
], NoticeOtpPage);



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let EventsService = class EventsService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventsService);



/***/ })

}]);
//# sourceMappingURL=noticeBoardModule-notice-otp-notice-otp-module-es2015.js.map