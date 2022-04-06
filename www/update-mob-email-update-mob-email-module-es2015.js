(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-mob-email-update-mob-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-mob-email/update-mob-email.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-mob-email/update-mob-email.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{profileAllData?.pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <br><br>\n  <div *ngFor=\"let allData of profileAllData?.inputs; let ind = index\">\n    <div class=\"mobileCheck\">\n      <ion-row>\n        <ion-col [size]=\"12\"><p class=\"lableText ion-no-margin\">{{allData?.label}}</p></ion-col>\n      </ion-row>\n\n      <!-- Pre Entered \"Mobile Number\" Start -->\n      <ion-row *ngIf=\"ind==0\">\n        <ion-col [size]=\"12\" class=\"ion-no-padding\">\n          <div class=\"inputDiv\">\n            <ion-row>\n              <ion-col [size]=\"2\" class=\"ion-no-padding borderRight ion-text-center\" style=\"font-size:6vw;\">\n                <ion-input type=tel class=\"padtop\" disabled placeholder=\"+\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding borderRight\">\n                <ion-input type=tel disabled class=\"padtop\"[(ngModel)]=\"profileData.country_code\" [placeholder]=\"profileData?.country_code\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"8\" class=\"ion-no-padding\">\n                  <ion-input type=tel class=\"padtop\" disabled [(ngModel)]=\"profileData.phone\" [placeholder]=\"allData?.placeholder\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Pre Entered \"Mobile Number\" End -->\n      \n      <!-- Enter \"New Mobile Number\" Start -->\n      <ion-row *ngIf=\"ind==1\">\n        <ion-col [size]=\"12\" class=\"ion-no-padding\">\n          <div class=\"inputDiv\">\n            <ion-row>\n              <ion-col [size]=\"2\" class=\"ion-no-padding borderRight ion-text-center\" style=\"font-size:6vw;\">\n                <ion-input type=tel class=\"padtop\" readonly placeholder=\"+\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding borderRight\">\n                <ion-input type=tel class=\"padtop\" [(ngModel)]=\"changeCountryCode\" minlength=\"1\" (ionChange)=\"changeCountryCodeFun(changeCountryCode,'country')\" [placeholder]=\"countryCodePlaceholder\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"8\" class=\"ion-no-padding\">\n                  <ion-input type=tel class=\"padtop\" [(ngModel)]=\"newMobileNumber\"  minlength=\"1\" (ionChange)=\"changeCountryCodeFun(newMobileNumber,'mobile')\" [placeholder]=\"allData?.placeholder\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-row *ngIf=\"mobileErr!='' || countryErr!=''\">\n            <ion-col [size]=\"12\">\n              <div *ngIf=\"countryOk==false\" style=\"color:red;font-size:12px;\" [innerHTML]=\"countryErr\"></div><br>\n              <div *ngIf=\"MobileIsOk==false\" style=\"color:red;font-size:12px;\" [innerHTML]=\"mobileErr\"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n    <br><br>\n  </div>\n\n\n\n\n\n\n  <br><br>\n  <ion-row class=\"ion-text-center\" *ngIf=\"profileAllData?.isbuttonApplicable==true\">\n    <ion-col [push]=\"2\" [size]=\"8\">\n      <ion-button class=\"dynamicButtonColor\" [disabled]=\"countryOk==false || MobileIsOk==false\" tappable (click)=\"mobileOtp()\">{{profileAllData?.btnText}}</ion-button>\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n\n  <!-- Show after submit OTP and Verified Successfully Start -->\n  <div class=\"thankyouTintDiv\" [ngClass]=\"{'tintBg':thankyouDivShow == true}\"></div>\n  <div class=\"thankyoudiv\" *ngIf=\"thankyouDivShow\">\n    <div class=\"thankyouContentDiv\">\n      <ion-row class=\"ion-text-center\">\n        <ion-col [size]=\"12\"><img [src]=\"thankyouData?.icon\"></ion-col>\n        <ion-col [size]=\"12\"><p class=\"congratsText\">{{thankyouData?.text}}</p></ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"thankyouData?.isButtonApplicable==true\" class=\"ion-text-center\">\n        <ion-col [size]=\"12\">\n          <ion-button class=\"dynamicButtonColor\" tappble (click)=\"goToBack()\">{{thankyouData?.btnText}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- Show after submit OTP and Verified Successfully End -->\n    \n</ion-content>\n\n\n<ion-footer>\n  <!-- Enter OTP which is recived on your Entered Mobile Number Start -->\n  <div *ngIf=\"showotppage\" [ngClass]=\"{'tintBg':showotppage == true}\"> </div>\n  <div class=\"otpActionDiv\" *ngIf=\"showotppage\">\n    <div class=\"footerContainer\">\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"ion-text-center\">\n          <p class=\"title\">{{showOtpData?.title}} \n            <span style=\"float:right;margin:-5px 0 0 0;\" tappable (click)=\"hideOtp()\"><ion-icon name=\"close\"></ion-icon></span>\n          </p>\n          <p class=\"subTitle\">{{showOtpData?.subtitle}}<br>\n            <!-- <span class=\"changeNumber\"> +91 999 999 9999</span> -->\n          </p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <div class=\"otpDiv\">\n        <ion-row>\n          <ion-col [size]=\"3\">\n            <ion-input type=\"tel\" #otp1 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(1)\"\n              (keyup)=\"moveFocus(otp2, FirstOtp, '1')\" [(ngModel)]=\"FirstOtp\"></ion-input>\n          </ion-col>\n          <ion-col [size]=\"3\">\n            <ion-input type=\"tel\" #otp2 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(2)\"\n              (keyup)=\"moveFocus(otp3, SecondOtp, '2')\" [(ngModel)]=\"SecondOtp\"></ion-input>\n          </ion-col>\n          <ion-col [size]=\"3\">\n            <ion-input type=\"tel\" #otp3 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(3)\"\n              (keyup)=\"moveFocus(otp4, ThirdOtp, '3')\" [(ngModel)]=\"ThirdOtp\"></ion-input>\n          </ion-col>\n          <ion-col [size]=\"3\">\n            <ion-input type=\"tel\" #otp4 placeholder=\"*\" class=\"bodBottom\" maxlength=\"1\" (ionFocus)=\"checkFocus(4)\"\n              (keyup)=\"moveFocus(otp4, FourthOtp, '4')\" [(ngModel)]=\"FourthOtp\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n      <br><br>\n      <ion-row>\n        <ion-col [size]=\"12\" *ngIf=\"showOtpData?.voice?.enable==true\" class=\"ion-text-center\">\n          <p *ngIf=\"showOtpData?.voice?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('1', showOtpData)\">{{showOtpData?.voice?.text}}</p>\n        </ion-col>\n        <ion-col [size]=\"12\" *ngIf=\"showOtpData?.resend?.enable==true\" class=\"ion-text-center\">\n          <p *ngIf=\"showOtpData?.resend?.enable==true\" class=\"noMargin changeNumber\" [ngClass]=\"{'layerDiv': resendShow==true}\" tappable (click)=\"resendOTP('0', showOtpData)\">{{showOtpData?.resend?.text}} <span *ngIf=\"resendShow==true\">in {{maxTime}} seconds</span></p>\n        </ion-col>\n      </ion-row>\n      <br>\n      \n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col [size]=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"dynamicButtonColor\" [disabled]=\"FirstOtp.trim()=='' || SecondOtp.trim()=='' || ThirdOtp.trim()=='' || FourthOtp.trim()==''\" (click)=\"mobileOtpSubmit()\">{{showOtpData?.button_text}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- Enter OTP which is recived on your Entered Mobile Number End -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/update-mob-email/update-mob-email-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/update-mob-email/update-mob-email-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateMobEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMobEmailPageRoutingModule", function() { return UpdateMobEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _update_mob_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-mob-email.page */ "./src/app/update-mob-email/update-mob-email.page.ts");




const routes = [
    {
        path: '',
        component: _update_mob_email_page__WEBPACK_IMPORTED_MODULE_3__["UpdateMobEmailPage"]
    }
];
let UpdateMobEmailPageRoutingModule = class UpdateMobEmailPageRoutingModule {
};
UpdateMobEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateMobEmailPageRoutingModule);



/***/ }),

/***/ "./src/app/update-mob-email/update-mob-email.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/update-mob-email/update-mob-email.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdateMobEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMobEmailPageModule", function() { return UpdateMobEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_mob_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-mob-email-routing.module */ "./src/app/update-mob-email/update-mob-email-routing.module.ts");
/* harmony import */ var _update_mob_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-mob-email.page */ "./src/app/update-mob-email/update-mob-email.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let UpdateMobEmailPageModule = class UpdateMobEmailPageModule {
};
UpdateMobEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_mob_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateMobEmailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_update_mob_email_page__WEBPACK_IMPORTED_MODULE_6__["UpdateMobEmailPage"]]
    })
], UpdateMobEmailPageModule);



/***/ }),

/***/ "./src/app/update-mob-email/update-mob-email.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/update-mob-email/update-mob-email.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mobileCheck {\n  padding: 0px 25px;\n}\n.mobileCheck .lableText {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 10px 0;\n  letter-spacing: 0.5px;\n}\n.mobileCheck .inputDiv {\n  padding: 5px !important;\n  border: 2px solid gainsboro;\n  border-radius: 30px;\n  text-align: left;\n}\n.mobileCheck .inputDiv .borderRight {\n  border-right: 2px solid gainsboro;\n}\n.mobileCheck .inputDiv ion-input {\n  --padding-start:0px;\n  --padding-bottom:0px;\n  --padding-top:0;\n  font-size: 17px;\n}\n.otpActionDiv .title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 20px 0 30px 0;\n  color: black !important;\n}\n.otpActionDiv .title ion-icon {\n  font-size: 25px;\n  color: var(--headerColor);\n}\n.otpActionDiv .subTitle {\n  font-size: 14px;\n  line-height: 20px;\n  color: black !important;\n}\n.otpActionDiv .changeNumber {\n  color: var(--headerColor);\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0px;\n}\n.otpActionDiv .otpDiv {\n  padding: 0 25px;\n}\n.otpActionDiv ion-input {\n  border-bottom: 2px solid gray;\n  text-align: center;\n  --padding-start:0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.thankyoudiv {\n  width: 95%;\n}\n.thankyoudiv .thankyouContentDiv {\n  padding: 30px 15px;\n}\n.thankyoudiv .thankyouContentDiv img {\n  width: 100px;\n}\n.layerDiv {\n  position: relative;\n  opacity: 0.5;\n  z-index: -1;\n}\n.layerDiv::after {\n  content: \"\";\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLW1vYi1lbWFpbC91cGRhdGUtbW9iLWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGlCQUFBO0FBRWI7QUFERTtFQUFXLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixjQUFBO0VBQWMscUJBQUE7QUFPM0Q7QUFORTtFQUFVLHVCQUFBO0VBQXVCLDJCQUFBO0VBQTJCLG1CQUFBO0VBQW1CLGdCQUFBO0FBWWpGO0FBWEk7RUFBYSxpQ0FBQTtBQWNqQjtBQWJJO0VBQVUsbUJBQUE7RUFBb0Isb0JBQUE7RUFBcUIsZUFBQTtFQUFnQixlQUFBO0FBbUJ2RTtBQWRFO0VBQU8sZUFBQTtFQUFlLGlCQUFBO0VBQWlCLHFCQUFBO0VBQXFCLHVCQUFBO0FBcUI5RDtBQXBCSTtFQUFTLGVBQUE7RUFBZSx5QkFBQTtBQXdCNUI7QUF0QkU7RUFBVSxlQUFBO0VBQWUsaUJBQUE7RUFBaUIsdUJBQUE7QUEyQjVDO0FBMUJFO0VBQWMseUJBQUE7RUFBeUIsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLFdBQUE7QUFnQ3pFO0FBL0JFO0VBQVEsZUFBQTtBQWtDVjtBQWpDRTtFQUFVLDZCQUFBO0VBQTZCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLGVBQUE7RUFBZSxpQkFBQTtBQXdDOUY7QUF0Q0E7RUFBYSxVQUFBO0FBMENiO0FBekNFO0VBQW9CLGtCQUFBO0FBNEN0QjtBQTNDSTtFQUFJLFlBQUE7QUE4Q1I7QUEzQ0E7RUFBVSxrQkFBQTtFQUFrQixZQUFBO0VBQVksV0FBQTtBQWlEeEM7QUFoREE7RUFBaUIsV0FBQTtFQUFXLE9BQUE7RUFBTyxRQUFBO0VBQVEsTUFBQTtFQUFNLFNBQUE7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0FBMEQ1RSIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1tb2ItZW1haWwvdXBkYXRlLW1vYi1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlQ2hlY2t7cGFkZGluZzowcHggMjVweDtcbiAgLmxhYmxlVGV4dHtmb250LXNpemU6MTdweDtmb250LXdlaWdodDpib2xkO21hcmdpbjoxMHB4IDA7bGV0dGVyLXNwYWNpbmc6MC41cHg7fVxuICAuaW5wdXREaXZ7cGFkZGluZzo1cHggIWltcG9ydGFudDtib3JkZXI6MnB4IHNvbGlkIGdhaW5zYm9ybztib3JkZXItcmFkaXVzOjMwcHg7dGV4dC1hbGlnbjpsZWZ0O1xuICAgIC5ib3JkZXJSaWdodHtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIGdhaW5zYm9ybzt9XG4gICAgaW9uLWlucHV0ey0tcGFkZGluZy1zdGFydDowcHg7LS1wYWRkaW5nLWJvdHRvbTowcHg7LS1wYWRkaW5nLXRvcDowO2ZvbnQtc2l6ZToxN3B4O31cbiAgfVxufVxuXG4ub3RwQWN0aW9uRGl2e1xuICAudGl0bGV7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MjBweCAwIDMwcHggMDtjb2xvcjpibGFjayAhaW1wb3J0YW50O1xuICAgIGlvbi1pY29ue2ZvbnQtc2l6ZToyNXB4O2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4gIH1cbiAgLnN1YlRpdGxle2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XG4gIC5jaGFuZ2VOdW1iZXJ7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjBweDt9XG4gIC5vdHBEaXZ7cGFkZGluZzowIDI1cHg7fVxuICBpb24taW5wdXR7Ym9yZGVyLWJvdHRvbToycHggc29saWQgZ3JheTt0ZXh0LWFsaWduOmNlbnRlcjstLXBhZGRpbmctc3RhcnQ6MHB4O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxufVxuLnRoYW5reW91ZGl2e3dpZHRoOjk1JTtcbiAgLnRoYW5reW91Q29udGVudERpdntwYWRkaW5nOjMwcHggMTVweDtcbiAgICBpbWd7d2lkdGg6MTAwcHg7fVxuICB9XG59XG4ubGF5ZXJEaXZ7cG9zaXRpb246cmVsYXRpdmU7b3BhY2l0eTowLjU7ei1pbmRleDotMTt9XG4ubGF5ZXJEaXY6OmFmdGVye2NvbnRlbnQ6XCJcIjtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk7fSJdfQ== */");

/***/ }),

/***/ "./src/app/update-mob-email/update-mob-email.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/update-mob-email/update-mob-email.page.ts ***!
  \***********************************************************/
/*! exports provided: UpdateMobEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMobEmailPage", function() { return UpdateMobEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let UpdateMobEmailPage = class UpdateMobEmailPage {
    constructor(zone, apiservices, sendData, location) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.location = location;
        this.showotppage = false;
        this.FirstOtp = "";
        this.SecondOtp = "";
        this.ThirdOtp = "";
        this.FourthOtp = "";
        this.thankyouDivShow = false;
        this.profileData = "";
        this.newMobileNumber = "";
        this.confirmNewMobile = "";
        this.confirmNewNumber = "";
        this.showButton = false;
        this.hideTimmer = false;
        this.resendShow = false;
        this.changeCountryCode = "";
        this.MobileIsOk = false;
        this.countryOk = false;
        this.countryErr = '';
        this.mobileErr = '';
        this.profileData = this.sendData.alldata;
        console.log("profile data==", this.profileData);
        if (this.profileData != undefined) {
            this.profileAllData = this.profileData.settings;
            this.changeCountryCode = this.profileData.country_code;
            this.countryCodePlaceholder = this.changeCountryCode;
            if (this.changeCountryCode != '') {
                this.countryOk = true;
            }
        }
    }
    changeCountryCodeFun(codeCountry, value) {
        this.zone.run(() => {
            if (value == "country") {
                this.changeCountryCode = codeCountry;
                if (codeCountry.trim() != '') {
                    console.log("yz.5==", codeCountry);
                    // codeCountry=parseInt(codeCountry, 10);
                    // console.log("new Zero number1==", codeCountry);
                    // var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0]+/; //first no.should not be 0
                    var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //first no.should not be 0
                    if (!regexEmail.test(codeCountry)) {
                        this.countryOk = true;
                        this.changeCountryCode = codeCountry;
                        this.countryErr = '';
                        if (this.profileData.phone == this.newMobileNumber) {
                            this.MobileIsOk = false;
                            this.countryErr = "<sup>*</sup>Please enter new mobile number.";
                        }
                    }
                    else {
                        this.countryOk = false;
                        // this.mobileErr='';
                        this.countryErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                    }
                }
                else {
                    this.countryOk = false;
                    this.countryErr = '';
                }
            }
            else {
                this.newMobileNumber = codeCountry;
                console.log("validate mobile on profile page1==", codeCountry);
                console.log("validate mobile on profile page2==", this.newMobileNumber);
                if (codeCountry.trim() != '') {
                    var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //first no.should not be 0
                    if (!regexEmail.test(codeCountry)) {
                        this.newMobileNumber = codeCountry;
                        this.mobileErr = '';
                        if (this.profileData.phone == codeCountry) {
                            this.MobileIsOk = false;
                            this.mobileErr = "<sup>*</sup>Please enter new mobile number.";
                        }
                        else {
                            this.MobileIsOk = true;
                            console.log("code country code==", this.countryOk);
                            console.log("code MobileIsOk code==", this.MobileIsOk);
                        }
                    }
                    else {
                        this.MobileIsOk = false;
                        this.mobileErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                    }
                }
                else {
                    this.MobileIsOk = false;
                    this.mobileErr = '';
                }
            }
        });
    }
    ngOnInit() { }
    hideOtp() {
        this.zone.run(() => {
            this.FirstOtp = "";
            this.SecondOtp = "";
            this.ThirdOtp = "";
            this.FourthOtp = "";
            this.showotppage = false;
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
            console.log("********", index);
            if (index == 1) {
                this.FirstOtp = "";
            }
            else if (index == 2) {
                this.SecondOtp = "";
            }
            else if (index == 3) {
                this.ThirdOtp = "";
            }
            else if (index == 4) {
                this.FourthOtp = "";
            }
        });
    }
    mobileOtp() {
        this.zone.run(() => {
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.showotppage = true;
            this.showButton = true;
            this.matchNumberErr = "";
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "ccode": this.changeCountryCode.trim(),
                "phone": this.newMobileNumber.trim(),
                "event": this.profileAllData.otp_event,
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].sendOtp, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.showOtpData = result.data.settings;
                    if (this.showOtpData) {
                        this.maxTime = this.showOtpData.wait_time;
                        if (this.maxTime && this.maxTime > 0) {
                            this.StartTimer();
                        }
                    }
                    console.log("get otp actionSheet Data==", this.showOtpData);
                    setTimeout(() => {
                        this.thankyouDivShow = false;
                    }, 1000);
                }
                else {
                    this.showotppage = false;
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.hideLoader();
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    openThankyouDiv() {
        this.zone.run(() => {
            console.log("show filter1==", this.thankyouDivShow);
            if (this.thankyouDivShow) {
                console.log("show filter2==", this.thankyouDivShow);
                this.location.back();
                this.thankyouDivShow = false;
            }
            else {
                console.log("show filter3==", this.thankyouDivShow);
                this.thankyouDivShow = true;
            }
        });
    }
    goToBack() {
        this.zone.run(() => {
            // this.profileData.contactNumber=this.showOtpData.details.country_code+"-"+this.showOtpData.details.phone;
            this.location.back();
        });
    }
    mobileOtpSubmit() {
        this.zone.run(() => {
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "otp": this.FirstOtp.trim() + this.SecondOtp.trim() + this.ThirdOtp.trim() + this.FourthOtp.trim(),
                "phone": this.newMobileNumber,
                "country_code": this.changeCountryCode,
                "event": this.showOtpData.details.event,
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].submitOtp, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                this.FirstOtp = '';
                this.SecondOtp = '';
                this.ThirdOtp = '';
                this.FourthOtp = '';
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.profileData.contactNumber = this.changeCountryCode + "-" + this.newMobileNumber;
                    this.profileData.phone = this.newMobileNumber;
                    this.profileData.country_code = this.changeCountryCode;
                    this.thankyouData = result.data.thankyouData;
                    setTimeout(() => {
                        this.showotppage = false;
                        this.openThankyouDiv();
                    }, 1000);
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
                this.apiservices.showToastMessage(this.showOtpData.max_resend_string, 'top', 3000, 'redBg');
            }
            else {
                this.showOtpData.max_resend = parseInt(this.showOtpData.max_resend) - 1;
                this.maxTime = this.showOtpData.wait_time;
                this.hideTimmer = false;
                this.StartTimer();
                let apiKey = {
                    "phone": this.newMobileNumber,
                    "country_code": this.changeCountryCode,
                    "event": this.showOtpData.details.event,
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
};
UpdateMobEmailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
UpdateMobEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-mob-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-mob-email.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-mob-email/update-mob-email.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-mob-email.page.scss */ "./src/app/update-mob-email/update-mob-email.page.scss")).default]
    })
], UpdateMobEmailPage);



/***/ })

}]);
//# sourceMappingURL=update-mob-email-update-mob-email-module-es2015.js.map