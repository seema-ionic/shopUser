(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/login/login.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/login/login.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"bgImageDiv\">\n    <img [src]=\"mainData?.common_background_img\" class=\"bgImg\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n  </div>\n  <div class=\"bgCircleDiv\">\n    <br> <br>\n    <img [src]=\"Data?.app_logo\" class=\"logoImg\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n  </div>\n  <div class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\">\n      <h3 class=\"noMargin title\" [innerHTML]=\"Data?.welcome_title\" ></h3>\n      <!-- <h5 class=\"subTitle\">{{Data?.subtitle}}</h5> -->\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"email\">\n    <ion-segment-button value=\"email\">\n      <ion-label>{{Data?.email_tab?.title}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"mobile\">\n      <ion-label>{{Data?.mobile_tab?.title}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"segmentSectionDiv=='email'\">\n    <p class=\"emailtext\">{{Data?.email_tab?.sub_title}}</p>\n    <ion-input placeholder=\"{{Data?.email_tab?.placeholder}}\" type=\"email\" class=\"emailInput\" [(ngModel)]=\"emailID\"></ion-input>\n  </div>\n\n  <div *ngIf=\"segmentSectionDiv=='mobile'\">\n    <p class=\"emailtext\">{{Data?.mobile_tab?.sub_title}}</p>\n    <ion-row class=\"emailInput\">\n      <!-- country flag and country code Start -->\n      <ion-col [size]=\"4\" class=\"ion-no-padding\" style=\"position:relative;\">\n        <ion-row tappable (click)=\"showCountryList()\">\n          <ion-col [size]=\"5\" class=\"autoMargin\" >\n            <img [src]=\"countryFlag\" class=\"flagIcon border\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"></ion-col>\n          <ion-col [size]=\"5\">\n            <!-- <p class=\"CCode\"> -->\n              {{countryCode}}\n            <!-- </p>\n             -->\n          </ion-col>     \n          <ion-col [size]=\"2\"><ion-icon name=\"chevron-down-outline\"></ion-icon>\n          </ion-col> \n        </ion-row>\n        <!-- country list show desing start -->\n        <div *ngIf=\"showCountryArray==true\" class=\"tintDiv\" tappable (click)=\"changeCountry('','','hideList')\"></div>\n        <div *ngIf=\"showCountryArray==true\" class=\"countryDiv\">\n          <ion-searchbar type=\"search\" placeholder=\"Search country...\" (ionChange)=\"countryCodeListApi($event)\" \n          [(ngModel)]=\"searchValue\"></ion-searchbar>\n          <div class=\"scrollDiv\">\n            <div *ngFor=\"let countryList of allList\" class=\"border_bottom\">\n              <ion-row tappable (click)=\"changeCountry(countryList.flag_icon,countryList,'showList')\">\n                <ion-col [size]=\"2\" class=\"ion-no-padding ion-text-center autoMargin\">\n                  <img [src]=\"countryList?.flag_icon\" onerror=\"this.src='./assets/home/icon.png'\">\n                </ion-col>\n                <ion-col [size]=\"8\" class=\"autoMargin\">\n                  <h6 class=\"noMargin fontTwelve\">{{countryList?.name}} ({{countryList?.iso}})</h6>\n                </ion-col>\n                <ion-col [size]=\"2\" class=\"ion-text-center autoMargin\"><span>{{countryList?.phonecode}}</span></ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n        <!-- country list show desing end -->\n      </ion-col>\n      <!-- country flag and country code Start -->\n      \n      <!-- enter your mobile number desing start -->\n      <ion-col [size]=\"8\" class=\"ion-no-padding\">\n        <!-- <ion-item lines=\"none\"> -->\n          <!-- <ion-input type=\"tel\" [placeholder]=\"apiServices?.allStaticData?.number_placeholder\" autocomplete=\"on\" [(ngModel)]=\"mobileNumber\" (ngModelChange)=\"checkBtnStatus()\" class=\"largeText\" (ionBlur)=\"blurEvent($event);\" (ionFocus)=\"focusFunction($event)\" autofocus (ionChange)=\"validateMobile(mobileNumber)\">\n          </ion-input> -->\n          <ion-input placeholder=\"{{Data?.mobile_tab?.placeholder}}\" type=\"tel\" class=\"numberDiv\" [(ngModel)]=\"enterMobile\"></ion-input>\n        <!-- </ion-item>   -->\n      </ion-col>\n      <!-- enter your mobile number desing end -->\n    </ion-row>\n   \n  </div>\n  <br><br>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-center\">\n      <!-- -->\n      <ion-button  [disabled]=\"(enterMobile?.trim()=='' || countryCode?.trim()=='') && emailID?.trim()==''\"\n      tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">{{Data?.button_text}}</ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/LoginModuleNew/login/login-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/LoginModuleNew/login/login-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/LoginModuleNew/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/LoginModuleNew/login/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/LoginModuleNew/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/LoginModuleNew/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/LoginModuleNew/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/LoginModuleNew/login/login.page.scss":
/*!******************************************************!*\
  !*** ./src/app/LoginModuleNew/login/login.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment-button {\n  --color-checked: var(--headerColor);\n}\n\n.bgImg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.emailInput {\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 6px !important;\n}\n\n.emailtext {\n  font-size: 13px;\n}\n\nh3.title {\n  font-weight: bold !important;\n}\n\nh5.subTitle {\n  font-weight: bold !important;\n  margin: 5px 0px 0px 0px;\n}\n\n.bgImageDiv {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n\n.flagIcon {\n  width: 100%;\n  display: block;\n  margin: auto;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.CCode {\n  color: #000;\n  opacity: 1;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.CCode ion-icon {\n  position: absolute;\n  top: 20px;\n  margin: 0px 0px 0px 5px;\n}\n\nion-input.largeText {\n  --placeholder-color:#c5c5c5;\n  --placeholder-opacity:1;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.tintDiv {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9;\n  left: 0;\n  right: 0;\n}\n\n.countryDiv {\n  width: 100%;\n  height: 300px;\n  background: #fff;\n  z-index: 999;\n  box-shadow: 0px 0px 5px grey;\n  border-radius: 5px;\n  border-radius: 20px 20px 0px 0px;\n  padding: 0px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.countryDiv ion-searchbar {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.countryDiv .scrollDiv {\n  width: 100%;\n  height: 80%;\n  overflow: auto;\n}\n\n.countryDiv .scrollDiv img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.numberDiv {\n  padding: 2px !important;\n}\n\n.bgCircleDiv {\n  background: #ad97cd;\n  height: 200px;\n  border-radius: 0px 0px 200px 200px;\n  position: relative;\n  z-index: 1;\n}\n\n.logoImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFCLG1DQUFBO0FBRXJCOztBQURBO0VBQU8sWUFBQTtFQUFZLFdBQUE7RUFBVyxzQkFBQTtLQUFBLG1CQUFBO0FBTzlCOztBQU5BO0VBQVksc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsdUJBQUE7QUFZdEQ7O0FBWEE7RUFBVyxlQUFBO0FBZVg7O0FBZEE7RUFBVSw0QkFBQTtBQWtCVjs7QUFqQkE7RUFBWSw0QkFBQTtFQUE2Qix1QkFBQTtBQXNCekM7O0FBcEJBO0VBQVksZUFBQTtFQUFnQixNQUFBO0VBQU8sT0FBQTtFQUFRLFFBQUE7RUFBUyxTQUFBO0VBQVUsVUFBQTtBQTZCOUQ7O0FBNUJBO0VBQVUsV0FBQTtFQUFXLGNBQUE7RUFBYyxZQUFBO0VBQVksWUFBQTtFQUFhLHNCQUFBO0tBQUEsbUJBQUE7QUFvQzVEOztBQW5DQTtFQUFPLFdBQUE7RUFBVyxVQUFBO0VBQVUsZUFBQTtFQUFlLGdCQUFBO0FBMEMzQzs7QUF6Q0U7RUFBUyxrQkFBQTtFQUFrQixTQUFBO0VBQVMsdUJBQUE7QUE4Q3RDOztBQTVDQTtFQUFvQiwyQkFBQTtFQUE0Qix1QkFBQTtFQUF3QixlQUFBO0VBQWUsZ0JBQUE7QUFtRHZGOztBQS9DQTtFQUFTLGVBQUE7RUFBZSxNQUFBO0VBQU0sU0FBQTtFQUFTLDhCQUFBO0VBQThCLFVBQUE7RUFBVSxPQUFBO0VBQU8sUUFBQTtBQXlEdEY7O0FBeERBO0VBQVksV0FBQTtFQUFXLGFBQUE7RUFBYSxnQkFBQTtFQUFnQixZQUFBO0VBQVksNEJBQUE7RUFBNEIsa0JBQUE7RUFDMUYsZ0NBQUE7RUFBZ0MsWUFBQTtFQUFZLGVBQUE7RUFBZSxTQUFBO0VBQVMsT0FBQTtFQUFPLFFBQUE7RUFBUSxnQkFBQTtBQXVFckY7O0FBdEVFO0VBQWMsaUJBQUE7RUFBaUIsa0JBQUE7QUEwRWpDOztBQXpFRTtFQUFXLFdBQUE7RUFBVyxXQUFBO0VBQVcsY0FBQTtBQThFbkM7O0FBN0VJO0VBQUksV0FBQTtFQUFXLFlBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBa0YvQjs7QUEvRUE7RUFBVyx1QkFBQTtBQW1GWDs7QUFsRkE7RUFBYSxtQkFBQTtFQUFvQixhQUFBO0VBQWMsa0NBQUE7RUFBbUMsa0JBQUE7RUFBbUIsVUFBQTtBQTBGckc7O0FBekZBO0VBQVMsYUFBQTtFQUFjLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBK0ZuQyIsImZpbGUiOiJzcmMvYXBwL0xvZ2luTW9kdWxlTmV3L2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7IC0tY29sb3ItY2hlY2tlZDogdmFyKC0taGVhZGVyQ29sb3IpO31cbi5iZ0ltZ3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLmVtYWlsSW5wdXR7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7fVxuLmVtYWlsdGV4dHtmb250LXNpemU6IDEzcHg7fVxuaDMudGl0bGUge2ZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7fVxuaDUuc3ViVGl0bGV7Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDttYXJnaW46IDVweCAwcHggMHB4IDBweDt9XG4vLyAuZW1haWxJbnB1dDF7cGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7fVxuLmJnSW1hZ2VEaXZ7cG9zaXRpb246IGZpeGVkO3RvcDogMDtsZWZ0OiAwO3JpZ2h0OiAwO2JvdHRvbTogMDt6LWluZGV4OiAwO31cbi5mbGFnSWNvbnt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLkNDb2Rle2NvbG9yOiMwMDA7b3BhY2l0eToxO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjYwMDsvL21hcmdpbjoxMHB4IDBweDtcbiAgaW9uLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjIwcHg7bWFyZ2luOjBweCAwcHggMHB4IDVweDt9XG59XG5pb24taW5wdXQubGFyZ2VUZXh0ey0tcGxhY2Vob2xkZXItY29sb3I6I2M1YzVjNTstLXBsYWNlaG9sZGVyLW9wYWNpdHk6MTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo2MDA7fVxuXG5cbi8vIGNvdW50cnkgTGlzdCBDc3MgU3RhcnRcbi50aW50RGl2e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2JhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO3otaW5kZXg6OTtsZWZ0OjA7cmlnaHQ6MDt9XG4uY291bnRyeURpdnt3aWR0aDoxMDAlO2hlaWdodDozMDBweDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDo5OTk7Ym94LXNoYWRvdzowcHggMHB4IDVweCBncmV5O2JvcmRlci1yYWRpdXM6NXB4O1xuICBib3JkZXItcmFkaXVzOjIwcHggMjBweCAwcHggMHB4O3BhZGRpbmc6MHB4O3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO292ZXJmbG93OmhpZGRlbjtcbiAgaW9uLXNlYXJjaGJhcntwYWRkaW5nLWxlZnQ6MHB4O3BhZGRpbmctcmlnaHQ6MHB4O31cbiAgLnNjcm9sbERpdnt3aWR0aDoxMDAlO2hlaWdodDo4MCU7b3ZlcmZsb3c6YXV0bztcbiAgICBpbWd7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtvYmplY3QtZml0OmNvbnRhaW47fVxuICB9XG59XG4ubnVtYmVyRGl2e3BhZGRpbmc6IDJweCAhaW1wb3J0YW50O31cbi5iZ0NpcmNsZURpdntiYWNrZ3JvdW5kOiAjYWQ5N2NkO2hlaWdodDogMjAwcHg7Ym9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogMTt9XG4ubG9nb0ltZ3toZWlnaHQ6IDEwMHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fSJdfQ== */");

/***/ }),

/***/ "./src/app/LoginModuleNew/login/login.page.ts":
/*!****************************************************!*\
  !*** ./src/app/LoginModuleNew/login/login.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let LoginPage = class LoginPage {
    constructor(zone, router, apiservices, sendData, storageService) {
        this.zone = zone;
        this.router = router;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.storageService = storageService;
        this.segmentSectionDiv = "email";
        this.showCountryArray = false;
        this.countryCode = "";
        this.countryName = "";
        this.isoName = "";
        this.emailID = "";
        this.enterMobile = "";
        this.searchValue = '';
    }
    ngOnInit() {
        this.loginData();
        this.countryCodeListApi('');
    }
    segmentChanged(ev) {
        this.zone.run(() => {
            this.segmentSectionDiv = ev.detail.value;
            if (this.segmentSectionDiv == 'email') {
                this.countryCode = '';
                this.enterMobile = '';
                this.countryFlag = '';
            }
            else {
                this.emailID = '';
            }
        });
        console.log('Segment changed', ev);
    }
    // goToNext(){
    //   // this.router.navigate(['/otp-verify']);
    //   this.router.navigate(['/idea']);
    // }
    showCountryList() {
        this.zone.run(() => {
            // console.log("country array value==", this.showCountryArray);
            if (this.showCountryArray == false) {
                this.showCountryArray = true;
            }
            else {
                this.showCountryArray = false;
            }
        });
    }
    countryCodeListApi(ev) {
        console.log("country code list on login page0==", ev);
        this.zone.run(() => {
            // if(loaderVisiblity=="showLoadder"){
            //   this.apiServices.showLoader();
            // }
            let apiKey = {
                "search_str": this.searchValue
            };
            console.log("country code list on login page0==", apiKey);
            this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].get_country_code, apiKey).subscribe((result) => {
                console.log("country code list on login page1==", result);
                // if(loaderVisiblity=="showLoadder"){
                //   this.apiservices.hideLoader();
                // }
                this.mainData = result;
                if (result.status == "1") {
                    this.allList = result.data;
                    // if(value=="0"){
                    // let countryInd =result.data.findIndex(p => p.iso3 == this.allStoredData.countLangData.country_Code);
                    // console.log("country code index==",countryInd);
                    // this.countryCode=this.allList[countryInd].phonecode;
                    // this.countryFlag=this.allList[countryInd].flag_icon;
                    // this.countryName=this.allList[countryInd].name;
                    // this.isoName=this.allList[countryInd].iso;
                    // }
                }
                else {
                    // this.apiServices.showToastMessage(result.message, "top", 3000, "redBg");
                }
            }, err => {
                // if(loaderVisiblity=="showLoadder"){
                //   this.apiServices.hideLoader();
                // }
                // this.apiServices.showToastMessage(JSON.stringify(err), "top", 3000, "redBg");
            });
        });
    }
    goToNext() {
        this.zone.run(() => {
            // if(this.emailID.trim()=='' || this.countryCode.trim()=='' || this.enterMobile.length==''){
            //   this.apiservices.showToastMessage('please fill mandatory field', 'top', 3000, 'redBg');
            //   return false;
            // }
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "login_type": this.segmentSectionDiv,
                "country_code": this.countryCode,
                "phone": this.enterMobile,
                "event": this.Data.event,
                "email_id": this.emailID,
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].verifyEmployeeApi, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.storageService.setStorage('checkSumKey', result.data.settings.client_data.checksum_key);
                    setTimeout(() => {
                        this.storageService.setStorage('client_Id', result.data.settings.client_data.client_id);
                    }, 500);
                    this.sendData.alldata = result;
                    this.router.navigate(["/otp-verify"]);
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
    changeCountry(flag, countryList, listValue) {
        this.zone.run(() => {
            if (listValue == "showList") {
                this.countryFlag = flag;
                this.countryCode = countryList.phonecode;
                this.countryName = countryList.name;
                // this.isoName=countryList.iso;
                this.showCountryArray = false;
            }
            else {
                this.showCountryArray = false;
            }
            ;
            // this.countryCodeListApi('');
        });
    }
    loginData() {
        this.zone.run(() => {
            console.log("checkSumKey==", this.apiservices.checkSumKey);
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {};
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].loginDataApi, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    // this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.Data = result.data;
                    // this.router.navigate(["/enter-otp"]);
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
};
LoginPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/LoginModuleNew/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=LoginModuleNew-login-login-module-es2015.js.map