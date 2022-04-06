(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-enter-number-enter-number-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-number/enter-number.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-number/enter-number.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{organisationNameData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"organisationNameData\">\n\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"headLogoDiv\">\n          <!-- <p>{{organisationNameData?.logo}}</p> -->\n          <img [src]=\"organisationNameData?.logo\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <p class=\"noMargin title\">{{organisationNameData?.title}}</p>\n        <p class=\"subTitle\">{{organisationNameData?.subtitle}}</p>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <div class=\"inputDiv\">\n      <!-- <ion-row>\n        <ion-col [size]=\"6\" class=\"ion-text-center\">\n          <ion-button tappable (click)=\"goToNext()\" fill=\"outline\" class=\"dynamicButtonColor newCss\">Email</ion-button>\n        </ion-col>\n        <ion-col [size]=\"6\" class=\"ion-text-center\">\n          <ion-button  tappable (click)=\"goToNext()\" fill=\"outline\" class=\"dynamicButtonColor newCss\">Mobile</ion-button>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col [size]=\"2\"><p class=\"noMargin mobileTitle\">&nbsp;</p></ion-col>\n        <ion-col [size]=\"3\"><p class=\"noMargin mobileTitle\">{{organisationNameData?.country_label}}</p></ion-col>\n        <ion-col [size]=\"7\"><p class=\"noMargin mobileTitle\">{{organisationNameData?.label}}</p></ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col [size]=\"2\" class=\"autoMargin borderRight ion-text-center\" style=\"font-size:6vw;\">\n          <div class=\"countryDiv\">\n            <ion-input type=\"tel\" readonly minlength=\"1\" placeholder=\"+\"></ion-input>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"3\" class=\"autoMargin borderRight\">\n          <div class=\"countryDiv\">\n            <ion-input type=\"tel\" [(ngModel)]=\"countryCode\"  minlength=\"1\" (ionChange)=\"changeCountryCode(countryCode,'country')\" [placeholder]=\"organisationNameData?.country_placeholder\"></ion-input>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"7\">\n          <ion-input type=\"tel\" [(ngModel)]=\"enterMobile\" minlength=\"1\" (ionChange)=\"changeCountryCode(enterMobile,'mobile')\" [placeholder]=\"organisationNameData?.placeholder\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"mobileErr!='' || countryErr!=''\">\n      <ion-col [size]=\"12\">\n        <div style=\"color:red;font-size:12px;\" [innerHTML]=\"countryErr\"></div>\n        <div style=\"color:red;font-size:12px;\" [innerHTML]=\"mobileErr\"></div>\n      </ion-col>\n    </ion-row>\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <!-- enterMobile?.trim()=='' || countryCode?.trim()=='' || MobileIsOk==false -->\n        <ion-button [disabled]=\"countryOk==false || MobileIsOk==false\" tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{organisationNameData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n  <div *ngIf=\"!organisationNameData\">\n    <app-skelton-listview [iconPath]=\"'countryList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n<!-- <ion-footer class=\"loginFooterDiv\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-right\">\n      <div class=\"poweredDiv\">\n        <p class=\"noMargin\">Powered By:</p>\n        <img src=\"../../assets/icon/benepikLogo.png\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n");

/***/ }),

/***/ "./src/app/loginModule/enter-number/enter-number-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loginModule/enter-number/enter-number-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EnterNumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNumberPageRoutingModule", function() { return EnterNumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _enter_number_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-number.page */ "./src/app/loginModule/enter-number/enter-number.page.ts");




const routes = [
    {
        path: '',
        component: _enter_number_page__WEBPACK_IMPORTED_MODULE_3__["EnterNumberPage"]
    }
];
let EnterNumberPageRoutingModule = class EnterNumberPageRoutingModule {
};
EnterNumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnterNumberPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/enter-number/enter-number.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/loginModule/enter-number/enter-number.module.ts ***!
  \*****************************************************************/
/*! exports provided: EnterNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNumberPageModule", function() { return EnterNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enter_number_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-number-routing.module */ "./src/app/loginModule/enter-number/enter-number-routing.module.ts");
/* harmony import */ var _enter_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-number.page */ "./src/app/loginModule/enter-number/enter-number.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let EnterNumberPageModule = class EnterNumberPageModule {
};
EnterNumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enter_number_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterNumberPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_enter_number_page__WEBPACK_IMPORTED_MODULE_6__["EnterNumberPage"]]
    })
], EnterNumberPageModule);



/***/ }),

/***/ "./src/app/loginModule/enter-number/enter-number.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/loginModule/enter-number/enter-number.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 150px;\n}\n.title {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  margin: 8px 0px 0px 0px;\n}\n.inputDiv {\n  border-bottom: 1px solid gainsboro;\n}\n.inputDiv .countryDiv {\n  position: relative;\n}\n.inputDiv .countryDiv span {\n  font-size: 15px;\n  color: #000;\n  float: left;\n  font-weight: bold;\n}\n.inputDiv .countryDiv span img {\n  width: 20px;\n  height: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: -1px 10px 0 0px;\n  float: left;\n}\n.inputDiv .countryDiv .countryList {\n  position: absolute;\n  top: 30px;\n  left: -5px;\n  right: -5px;\n  background: gainsboro;\n  padding: 0 5px;\n  z-index: 99;\n}\n.inputDiv .countryDiv .countryList .listData {\n  border-bottom: 1px solid #fff;\n  padding: 5px 0 0px 0;\n}\n.inputDiv .countryDiv .countryList .listData img {\n  width: 25px;\n}\n.inputDiv .countryDiv .countryList .listData small {\n  font-size: 15px;\n}\n.inputDiv .countryDiv .countryList .listData:nth-last-child(1) {\n  border-bottom: 0px solid #000;\n}\n.inputDiv .mobileTitle {\n  font-weight: bold;\n  font-size: 11px;\n  font-size: 3vw;\n}\n.borderRight {\n  border-right: 1px solid gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvZW50ZXItbnVtYmVyL2VudGVyLW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxrQ0FBQTtFQUFrQyxlQUFBO0FBRy9DO0FBRkk7RUFBSSxZQUFBO0FBS1I7QUFIQTtFQUFPLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixpQkFBQTtBQVN2QztBQVJBO0VBQVUsZUFBQTtFQUFlLHVCQUFBO0FBYXpCO0FBWEE7RUFBVSxrQ0FBQTtBQWVWO0FBZEk7RUFBWSxrQkFBQTtBQWlCaEI7QUFoQlE7RUFBSyxlQUFBO0VBQWUsV0FBQTtFQUFXLFdBQUE7RUFBVyxpQkFBQTtBQXNCbEQ7QUFyQlk7RUFBSSxXQUFBO0VBQVcsWUFBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7RUFBbUIsdUJBQUE7RUFBd0IsV0FBQTtBQTRCbEY7QUExQlE7RUFBYSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsVUFBQTtFQUFVLFdBQUE7RUFBVyxxQkFBQTtFQUFxQixjQUFBO0VBQWMsV0FBQTtBQW1DeEc7QUFsQ1k7RUFBVSw2QkFBQTtFQUE2QixvQkFBQTtBQXNDbkQ7QUFyQ2dCO0VBQUksV0FBQTtBQXdDcEI7QUF2Q2dCO0VBQU0sZUFBQTtBQTBDdEI7QUF4Q1k7RUFBNEIsNkJBQUE7QUEyQ3hDO0FBeENJO0VBQWEsaUJBQUE7RUFBaUIsZUFBQTtFQUFlLGNBQUE7QUE2Q2pEO0FBekNBO0VBQWEsaUNBQUE7QUE2Q2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbk1vZHVsZS9lbnRlci1udW1iZXIvZW50ZXItbnVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkTG9nb0Rpdntib3JkZXItYm90dG9tOjBweCBzb2xpZCBnYWluc2Jvcm87cGFkZGluZzoxMHB4IDA7XG4gICAgaW1ne3dpZHRoOjE1MHB4O31cbn1cbi50aXRsZXtmb250LXNpemU6MTdweDtmb250LXdlaWdodDpib2xkO21hcmdpbjowIDAgN3B4IDA7fVxuLnN1YlRpdGxle2ZvbnQtc2l6ZToxNHB4O21hcmdpbjo4cHggMHB4IDBweCAwcHg7fVxuXG4uaW5wdXREaXZ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ2FpbnNib3JvO1xuICAgIC5jb3VudHJ5RGl2e3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBzcGFue2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiMwMDA7ZmxvYXQ6bGVmdDtmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgaW1ne3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7b2JqZWN0LWZpdDpjb250YWluO21hcmdpbjotMXB4IDEwcHggMDAgMHB4O2Zsb2F0OmxlZnQ7fVxuICAgICAgICB9XG4gICAgICAgIC5jb3VudHJ5TGlzdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzBweDtsZWZ0Oi01cHg7cmlnaHQ6LTVweDtiYWNrZ3JvdW5kOmdhaW5zYm9ybztwYWRkaW5nOjAgNXB4O3otaW5kZXg6OTk7XG4gICAgICAgICAgICAubGlzdERhdGF7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZjtwYWRkaW5nOjVweCAwICAwcHggMDtcbiAgICAgICAgICAgICAgICBpbWd7d2lkdGg6MjVweDt9XG4gICAgICAgICAgICAgICAgc21hbGx7Zm9udC1zaXplOjE1cHg7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3REYXRhOm50aC1sYXN0LWNoaWxkKDEpe2JvcmRlci1ib3R0b206MHB4IHNvbGlkICMwMDA7fVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tb2JpbGVUaXRsZXtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc2l6ZTozdnc7fVxufVxuXG5cbi5ib3JkZXJSaWdodHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdhaW5zYm9ybzt9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/loginModule/enter-number/enter-number.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/loginModule/enter-number/enter-number.page.ts ***!
  \***************************************************************/
/*! exports provided: EnterNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNumberPage", function() { return EnterNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");






let EnterNumberPage = class EnterNumberPage {
    constructor(apiservices, router, zone, sendData) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.sendData = sendData;
        this.enterMobile = "";
        this.btnDisable = true;
        this.MobileIsOk = false;
        this.countryOk = false;
        this.countryCode = "";
        this.countryErr = '';
        this.mobileErr = '';
        this.organisationNameData = this.sendData.alldata;
        console.log("organisation name data from organisationNamePage 1==", this.organisationNameData);
    }
    ngOnInit() { }
    goToNext() {
        this.zone.run(() => {
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "country_code": this.countryCode.trim(),
                "phone": this.enterMobile.trim(),
                "event": 'login'
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].loginOtpSend, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.sendData.alldata = result.data.settings;
                    this.router.navigate(["/enter-otp"]);
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
    changeCountryCode(codeCountry, value) {
        this.zone.run(() => {
            console.log("code of country and mobile no==", codeCountry);
            if (value == "country") {
                this.countryCode = codeCountry.trim();
                if (this.countryCode != '') {
                    console.log("check condition==", this.btnDisable);
                    console.log("validate mobile on login page==", this.countryCode);
                    // var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0]+/; //first no.should not be 0
                    var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //first no.should not be 0
                    if (!regexEmail.test(codeCountry)) {
                        this.countryOk = true;
                        this.countryCode = codeCountry;
                        console.log("filled mobile number123==", this.countryCode);
                        this.countryErr = '';
                    }
                    else {
                        this.countryOk = false;
                        this.mobileErr = '';
                        this.countryErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                    }
                }
                else {
                    console.log("code of country and mobile no if blacnk country code==", codeCountry);
                    this.countryOk = false;
                    this.countryErr = '';
                }
            }
            else {
                this.enterMobile = codeCountry.trim();
                if (this.enterMobile != '') {
                    console.log("check condition==", this.btnDisable);
                    console.log("validate mobile on login page==", this.countryCode);
                    var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //first no.should not be 0
                    if (!regexEmail.test(codeCountry)) {
                        this.MobileIsOk = true;
                        this.enterMobile = codeCountry;
                        console.log("filled mobile number123==", this.enterMobile);
                        this.mobileErr = '';
                    }
                    else {
                        this.MobileIsOk = false;
                        this.countryErr = '';
                        this.mobileErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                    }
                }
                else {
                    console.log("code of country and mobile no if blacnk mobile==", codeCountry);
                    this.MobileIsOk = false;
                    this.mobileErr = '';
                }
            }
        });
    }
};
EnterNumberPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] }
];
EnterNumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enter-number',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./enter-number.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/enter-number/enter-number.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./enter-number.page.scss */ "./src/app/loginModule/enter-number/enter-number.page.scss")).default]
    })
], EnterNumberPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-enter-number-enter-number-module-es2015.js.map