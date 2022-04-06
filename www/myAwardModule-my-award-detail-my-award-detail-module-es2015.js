(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myAwardModule-my-award-detail-my-award-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-detail/my-award-detail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-detail/my-award-detail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.page_header}}</ion-title>\n     <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h5 class=\"ion-no-margin\">{{Data?.team_name}}</h5>\n  <ion-row>\n    <ion-col>\n      <!-- <img [src]=\"\"/> -->\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/myAwardModule/my-award-detail/my-award-detail-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-detail/my-award-detail-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MyAwardDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardDetailPageRoutingModule", function() { return MyAwardDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_award_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-award-detail.page */ "./src/app/myAwardModule/my-award-detail/my-award-detail.page.ts");




const routes = [
    {
        path: '',
        component: _my_award_detail_page__WEBPACK_IMPORTED_MODULE_3__["MyAwardDetailPage"]
    }
];
let MyAwardDetailPageRoutingModule = class MyAwardDetailPageRoutingModule {
};
MyAwardDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyAwardDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/myAwardModule/my-award-detail/my-award-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-detail/my-award-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: MyAwardDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardDetailPageModule", function() { return MyAwardDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_award_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-award-detail-routing.module */ "./src/app/myAwardModule/my-award-detail/my-award-detail-routing.module.ts");
/* harmony import */ var _my_award_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-award-detail.page */ "./src/app/myAwardModule/my-award-detail/my-award-detail.page.ts");







let MyAwardDetailPageModule = class MyAwardDetailPageModule {
};
MyAwardDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_award_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAwardDetailPageRoutingModule"]
        ],
        declarations: [_my_award_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyAwardDetailPage"]]
    })
], MyAwardDetailPageModule);



/***/ }),

/***/ "./src/app/myAwardModule/my-award-detail/my-award-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-detail/my-award-detail.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215QXdhcmRNb2R1bGUvbXktYXdhcmQtZGV0YWlsL215LWF3YXJkLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/myAwardModule/my-award-detail/my-award-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-detail/my-award-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: MyAwardDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardDetailPage", function() { return MyAwardDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");






let MyAwardDetailPage = class MyAwardDetailPage {
    constructor(apiservices, zone, localStorage, sendData) {
        this.apiservices = apiservices;
        this.zone = zone;
        this.localStorage = localStorage;
        this.sendData = sendData;
        this.limit = "0";
        this.myAardListData = this.sendData.alldata;
    }
    ngOnInit() {
        this.myAwardList();
    }
    myAwardList() {
        this.apiservices.showLoader();
        this.zone.run(() => {
            this.localStorage.getStorage().then(stored => {
                let apiKey = {
                    employee_id: stored.employeeID,
                    limit: this.limit,
                    team_type: this.myAardListData.team_type,
                    post_id: this.myAardListData.nomination_id
                };
                console.log("resend OTP by Voice Call, api key", apiKey);
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].myawardListApi, apiKey).subscribe((result) => {
                    console.log("resend OTP by Voice Call, api response==", result);
                    this.apiservices.hideLoader();
                    this.allData = result;
                    if (result.status == 1 || result.status == '1') {
                        this.Data = result.data;
                    }
                    else {
                        this.errorMessage = result.message;
                        // this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.hideLoader();
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
};
MyAwardDetailPage.ctorParameters = () => [
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] }
];
MyAwardDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-award-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-award-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-detail/my-award-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-award-detail.page.scss */ "./src/app/myAwardModule/my-award-detail/my-award-detail.page.scss")).default]
    })
], MyAwardDetailPage);



/***/ })

}]);
//# sourceMappingURL=myAwardModule-my-award-detail-my-award-detail-module-es2015.js.map