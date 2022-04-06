(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["birthaDayAnniversaryModule-birthday-aniversray-detail-birthday-aniversray-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{birthdayAniversaryData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngIf=\"birthdayAniversaryData\">\n    <ion-col >\n      <div [style.background]=\"'url('+birthdayAniversaryData?.bgImage+')'\" class=\"ion-text-center bgBirth\">\n        <br>\n        <img [src]=\"birthdayAniversaryData?.birthdayAnnImage\" class=\"sideImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n        <div >\n          <img [src]=\"birthdayAniversaryData?.user_image\" class=\"userImg\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n        </div>\n        <!-- [style.background]=\"'url('+birthdayAniversaryData?.capImage+')'\" -->\n        <!-- <img [src]=\"birthdayAniversaryData?.capImage\" class=\"\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/> -->\n        <br>\n        <p class=\"ion-no-margin\">{{birthdayAniversaryData?.name}}</p>\n        <p class=\"ion-no-margin\">{{birthdayAniversaryData?.designation}}</p>\n        <p class=\"ion-no-margin wishT\" [innerHTML]=\"birthdayAniversaryData?.title1\"></p>\n        <p class=\"ion-no-margin fontP\" [innerHTML]=\"birthdayAniversaryData?.title2\"></p>\n        <br>\n      </div>\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <div *ngIf=\"birthdayAniversaryData\">\n            <show-comment [allCommentObj]=\"birthdayAniversaryData\" [showLikeList]=\"'true'\" [showCommentList]=\"'true'\" [showAutoScroll]=\"'true'\" \n            [redirectPage]=\"\"></show-comment>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n<ion-footer *ngIf=\"apiservices?.showCommentBox==true\">\n  <div style=\"background:#fff;\" *ngIf=\"apiservices?.showCommentBox==true\">\n    <ion-row lines=\"none\" *ngIf=\"birthdayAniversaryData\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <do-comment [doCommentData]=\"birthdayAniversaryData\" [postIndex]=\"\" [showFocus]=\"showScroll\" [pageName]=\"'detail'\"></do-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BirthdayAniversrayDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayAniversrayDetailPageRoutingModule", function() { return BirthdayAniversrayDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _birthday_aniversray_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./birthday-aniversray-detail.page */ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.ts");




const routes = [
    {
        path: '',
        component: _birthday_aniversray_detail_page__WEBPACK_IMPORTED_MODULE_3__["BirthdayAniversrayDetailPage"]
    }
];
let BirthdayAniversrayDetailPageRoutingModule = class BirthdayAniversrayDetailPageRoutingModule {
};
BirthdayAniversrayDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BirthdayAniversrayDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: BirthdayAniversrayDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayAniversrayDetailPageModule", function() { return BirthdayAniversrayDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _birthday_aniversray_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./birthday-aniversray-detail-routing.module */ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail-routing.module.ts");
/* harmony import */ var _birthday_aniversray_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./birthday-aniversray-detail.page */ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let BirthdayAniversrayDetailPageModule = class BirthdayAniversrayDetailPageModule {
};
BirthdayAniversrayDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _birthday_aniversray_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BirthdayAniversrayDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_birthday_aniversray_detail_page__WEBPACK_IMPORTED_MODULE_6__["BirthdayAniversrayDetailPage"]]
    })
], BirthdayAniversrayDetailPageModule);



/***/ }),

/***/ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userImg {\n  display: block;\n  margin: auto;\n  height: 100px;\n  width: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n  border: 1px solid gray;\n}\n\n.bgBirth {\n  background-size: 100% 100% !important;\n  box-shadow: 3px 5px 8px 1px #afafaf;\n}\n\n.fontP {\n  font-size: 13px;\n}\n\n.wishT {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sideImage {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  top: 8px;\n  right: 13px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhhRGF5QW5uaXZlcnNhcnlNb2R1bGUvYmlydGhkYXktYW5pdmVyc3JheS1kZXRhaWwvYmlydGhkYXktYW5pdmVyc3JheS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsY0FBQTtFQUFlLFlBQUE7RUFBYSxhQUFBO0VBQWMsWUFBQTtFQUFhLHNCQUFBO0tBQUEsbUJBQUE7RUFBb0Isa0JBQUE7RUFDaEYsc0JBQUE7QUFPSjs7QUFOQTtFQUFTLHFDQUFBO0VBQTBDLG1DQUFBO0FBV25EOztBQVZBO0VBQU8sZUFBQTtBQWNQOztBQWJBO0VBQU8saUJBQUE7RUFBa0IsbUJBQUE7QUFrQnpCOztBQWpCQTtFQUFlLFlBQUE7RUFDUCxXQUFBO0VBQWdCLGtCQUFBO0VBQ2hCLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQXNCUiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoYURheUFubml2ZXJzYXJ5TW9kdWxlL2JpcnRoZGF5LWFuaXZlcnNyYXktZGV0YWlsL2JpcnRoZGF5LWFuaXZlcnNyYXktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VySW1ne2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bztoZWlnaHQ6IDEwMHB4O3dpZHRoOiAxMDBweDtvYmplY3QtZml0OiBjb250YWluO2JvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O31cbi5iZ0JpcnRoe2JhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7ICAgIGJveC1zaGFkb3c6IDNweCA1cHggOHB4IDFweCAjYWZhZmFmO31cbi5mb250UHtmb250LXNpemU6IDEzcHg7fVxuLndpc2hUe2ZvbnQtd2VpZ2h0OiBib2xkO21hcmdpbi1ib3R0b206IDEwcHg7fVxuLnNpZGVJbWFnZXsgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMjVweDsgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgcmlnaHQ6IDEzcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47fSJdfQ== */");

/***/ }),

/***/ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BirthdayAniversrayDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayAniversrayDetailPage", function() { return BirthdayAniversrayDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");






let BirthdayAniversrayDetailPage = class BirthdayAniversrayDetailPage {
    constructor(zone, apiservices, sendData, localStorage) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.localStorage = localStorage;
        this.listData = this.sendData.alldata;
        console.log("resend OTP by Voice Call, api response==", this.listData);
    }
    ngOnInit() {
        this.birthdayAniversaryDetail();
    }
    birthdayAniversaryDetail() {
        this.zone.run(() => {
            this.apiservices.showLoader();
            this.localStorage.getStorage().then(stored => {
                let apiKey = {
                    event_type: this.listData.event_type,
                    post_id: this.listData.post_id,
                    employee_id: stored.employeeID,
                };
                console.log("resend OTP by Voice Call, api key", apiKey);
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].birthdayAnniversaryDetailApi, apiKey).subscribe((result) => {
                    console.log("resend OTP by Voice Call, api response==", result);
                    this.apiservices.hideLoader();
                    if (result.status == 1 || result.status == '1') {
                        this.birthdayAniversaryData = result.data;
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                        // this.router.navigate(['/qualification-priview']);
                    }
                    else {
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.hideLoader();
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
    ionViewWillLeave() {
        this.apiservices.showCommentBox = false;
    }
};
BirthdayAniversrayDetailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
BirthdayAniversrayDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birthday-aniversray-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./birthday-aniversray-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./birthday-aniversray-detail.page.scss */ "./src/app/birthaDayAnniversaryModule/birthday-aniversray-detail/birthday-aniversray-detail.page.scss")).default]
    })
], BirthdayAniversrayDetailPage);



/***/ })

}]);
//# sourceMappingURL=birthaDayAnniversaryModule-birthday-aniversray-detail-birthday-aniversray-detail-module-es2015.js.map