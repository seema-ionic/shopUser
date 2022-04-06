(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-terms-and-privacy-terms-and-privacy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [ngClass]=\"{'loginClass': termsValue?.commingName=='loginProcess'}\">\n  <ion-toolbar>\n    <ion-title>{{showData?.title}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\">\n    <app-text-layout [text]=\"showData?.content\" class=\"textCompoDiv\" [className]=\"''\"></app-text-layout>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/loginModule/terms-and-privacy/terms-and-privacy-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/loginModule/terms-and-privacy/terms-and-privacy-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TermsAndPrivacyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPrivacyPageRoutingModule", function() { return TermsAndPrivacyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _terms_and_privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-and-privacy.page */ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.ts");




const routes = [
    {
        path: '',
        component: _terms_and_privacy_page__WEBPACK_IMPORTED_MODULE_3__["TermsAndPrivacyPage"]
    }
];
let TermsAndPrivacyPageRoutingModule = class TermsAndPrivacyPageRoutingModule {
};
TermsAndPrivacyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsAndPrivacyPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loginModule/terms-and-privacy/terms-and-privacy.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsAndPrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPrivacyPageModule", function() { return TermsAndPrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _terms_and_privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-and-privacy-routing.module */ "./src/app/loginModule/terms-and-privacy/terms-and-privacy-routing.module.ts");
/* harmony import */ var _terms_and_privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-and-privacy.page */ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let TermsAndPrivacyPageModule = class TermsAndPrivacyPageModule {
};
TermsAndPrivacyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terms_and_privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsAndPrivacyPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_terms_and_privacy_page__WEBPACK_IMPORTED_MODULE_6__["TermsAndPrivacyPage"]]
    })
], TermsAndPrivacyPageModule);



/***/ }),

/***/ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textCompoDiv {\n  text-align: justify;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvdGVybXMtYW5kLXByaXZhY3kvdGVybXMtYW5kLXByaXZhY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsbUJBQUE7RUFBbUIsaUJBQUE7QUFHakMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbk1vZHVsZS90ZXJtcy1hbmQtcHJpdmFjeS90ZXJtcy1hbmQtcHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dENvbXBvRGl2e3RleHQtYWxpZ246anVzdGlmeTtsaW5lLWhlaWdodDoyMnB4O30iXX0= */");

/***/ }),

/***/ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.ts ***!
  \*************************************************************************/
/*! exports provided: TermsAndPrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPrivacyPage", function() { return TermsAndPrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");





let TermsAndPrivacyPage = class TermsAndPrivacyPage {
    constructor(apiservices, menuCtrl, sendData) {
        this.apiservices = apiservices;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.termsValue = this.sendData.alldata;
        console.log("data value privacy or terms==", this.termsValue);
        if (this.termsValue.pageName == "privacyPolicy") {
            this.showData = this.apiservices.privacyPolicyData;
            console.log("data value privacy policy==", this.showData);
        }
        else {
            this.showData = this.apiservices.termsAndConditionData;
            console.log("data value terms and condition==", this.showData);
        }
    }
    ngOnInit() { }
};
TermsAndPrivacyPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
TermsAndPrivacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-privacy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-and-privacy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms-and-privacy.page.scss */ "./src/app/loginModule/terms-and-privacy/terms-and-privacy.page.scss")).default]
    })
], TermsAndPrivacyPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-terms-and-privacy-terms-and-privacy-module-es2015.js.map