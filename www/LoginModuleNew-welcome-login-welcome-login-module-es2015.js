(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-welcome-login-welcome-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/welcome-login/welcome-login.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/welcome-login/welcome-login.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header> -->\n  <!-- <ion-toolbar>\n    <ion-title>welcomeLogin</ion-title>\n  </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content>\n  <div class=\"bgImageDiv\">\n    <img [src]=\"homePageData?.common_background_img\">\n  </div>\n  <br>  <br>  <br>  <br>\n  <div>\n  <h4 class=\"ion-text-center\">{{homePageData?.data?.start_page?.title}}</h4>\n  <p class=\"ion-text-center\">{{homePageData?.data?.start_page?.subtitle}} </p>\n</div>\n\n  <br>  <br>\n<ion-row>\n  <ion-col [size]=\"12\" class=\"ion-text-center\">\n    <!-- enterMobile?.trim()=='' || countryCode?.trim()=='' || MobileIsOk==false -->\n    <ion-button tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\" \n    *ngIf=\"homePageData?.data?.start_page?.button?.enable==true\">\n      {{homePageData?.data?.start_page?.button?.text}}</ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/LoginModuleNew/welcome-login/welcome-login-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/LoginModuleNew/welcome-login/welcome-login-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: WelcomeLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLoginPageRoutingModule", function() { return WelcomeLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-login.page */ "./src/app/LoginModuleNew/welcome-login/welcome-login.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_login_page__WEBPACK_IMPORTED_MODULE_3__["WelcomeLoginPage"]
    }
];
let WelcomeLoginPageRoutingModule = class WelcomeLoginPageRoutingModule {
};
WelcomeLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomeLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/LoginModuleNew/welcome-login/welcome-login.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/LoginModuleNew/welcome-login/welcome-login.module.ts ***!
  \**********************************************************************/
/*! exports provided: WelcomeLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLoginPageModule", function() { return WelcomeLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-login-routing.module */ "./src/app/LoginModuleNew/welcome-login/welcome-login-routing.module.ts");
/* harmony import */ var _welcome_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome-login.page */ "./src/app/LoginModuleNew/welcome-login/welcome-login.page.ts");







let WelcomeLoginPageModule = class WelcomeLoginPageModule {
};
WelcomeLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeLoginPageRoutingModule"]
        ],
        declarations: [_welcome_login_page__WEBPACK_IMPORTED_MODULE_6__["WelcomeLoginPage"]]
    })
], WelcomeLoginPageModule);



/***/ }),

/***/ "./src/app/LoginModuleNew/welcome-login/welcome-login.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/LoginModuleNew/welcome-login/welcome-login.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-weight: bold;\n}\n\np {\n  font-size: 13px;\n}\n\n.bgImageDiv {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvd2VsY29tZS1sb2dpbi93ZWxjb21lLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLGlCQUFBO0FBRUg7O0FBREE7RUFBRSxlQUFBO0FBS0Y7O0FBSkE7RUFBWSxlQUFBO0VBQWlCLE1BQUE7RUFBUSxPQUFBO0VBQVMsUUFBQTtFQUFVLFNBQUE7RUFBVyxVQUFBO0FBYW5FIiwiZmlsZSI6InNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvd2VsY29tZS1sb2dpbi93ZWxjb21lLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e2ZvbnQtd2VpZ2h0OiBib2xkO31cbnB7Zm9udC1zaXplOiAxM3B4O31cbi5iZ0ltYWdlRGl2e3Bvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiAwO30iXX0= */");

/***/ }),

/***/ "./src/app/LoginModuleNew/welcome-login/welcome-login.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/LoginModuleNew/welcome-login/welcome-login.page.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLoginPage", function() { return WelcomeLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");




let WelcomeLoginPage = class WelcomeLoginPage {
    constructor(router, sendData) {
        this.router = router;
        this.sendData = sendData;
        this.homePageData = this.sendData.alldata;
    }
    ngOnInit() {
    }
    goToNext() {
        this.sendData.alldata = this.homePageData;
        this.router.navigate(['/upload-profile-picture']);
    }
};
WelcomeLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] }
];
WelcomeLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/welcome-login/welcome-login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome-login.page.scss */ "./src/app/LoginModuleNew/welcome-login/welcome-login.page.scss")).default]
    })
], WelcomeLoginPage);



/***/ })

}]);
//# sourceMappingURL=LoginModuleNew-welcome-login-welcome-login-module-es2015.js.map