(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-award-detail-award-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-detail/award-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-detail/award-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{awdDetailData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"borderDiv ion-margin-bottom\">\n    <ion-row class=\"borderBtm\">\n      <ion-col [size]=\"12\" ><p class=\"ion-no-margin\"><span  class=\"uDiv uDiv1\">{{Data?.header_title_one}} </span>\n        <span class=\"uDiv\">{{Data?.header_title_two}}</span> \n        <span class=\"uDiv uDiv1\" (click)=\"awardDetail(Data)\">\"{{Data?.award_name}}\"</span>\n      </p></ion-col>\n      <!-- <ion-col [size]=\"4\" ><p class=\"uDiv ion-no-margin\">{{item?.header_title_two}}</p></ion-col>\n      <ion-col [size]=\"3.5\" >\n        <p class=\"uDiv uDiv1 ion-no-margin\" (click)=\"awardDashboard()\">\"{{item?.award_name}}\"</p></ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"3\" class=\"ion-text-center\">\n        <img [src]=\"Data?.nominator_profile_image\" class=\"imgDiv\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      </ion-col>\n      <ion-col [size]=\"9\">\n        <p class=\"ion-no-margin uDiv\"><b>{{Data?.nominator_name}}</b></p>\n        <p class=\"ion-no-margin uDiv\">{{Data?.nominator_designation}}</p>\n         <p class=\"ion-no-margin uDiv\">{{Data?.nominator_cc}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n        <p [innerHTML]=\"Data?.citation\" class=\"pFont ion-no-margin\"></p>\n        <div [style.background-image]=\"'url('+ Data?.template_link +')'\" class=\"bgImage\">\n          <p [innerHTML]=\"Data?.award_name\" class=\"ion-text-center gpDiv topDiv\"></p>\n          <p class=\"ion-text-center gpDiv\">\n            <span *ngFor=\"let val of Data?.nominees_arr; let i=index;\">\n              <span *ngIf=\"i<Data?.nominee_len\">{{val}}</span>\n              <span *ngIf=\"Data?.nominees_arr[i+1]\"><span *ngIf=\"i+1<Data?.nominee_len\">, </span></span>\n              </span>\n            \n            <span class=\"sp\" *ngIf=\"Data?.nominees_arr?.length>Data?.nominee_len\"> \n              +{{Data?.nominees_arr?.length-Data?.nominee_len}} more</span></p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <ion-row>\n    <ion-col [size]=\"12\">\n      <div *ngIf=\"Data\">\n        <show-comment [allCommentObj]=\"Data\" [showLikeList]=\"'true'\" [showCommentList]=\"'true'\" [showAutoScroll]=\"'true'\" \n        [redirectPage]=\"\"></show-comment>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <p *ngIf=\"errorMessage\" class=\"ion-text-center\">{{errorMessage}}</p>\n<br><br>\n</ion-content>\n\n\n<ion-footer *ngIf=\"apiservices?.showCommentBox==true\">\n  <div style=\"background:#fff;\" *ngIf=\"Data\">\n    <ion-row lines=\"none\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <do-comment [doCommentData]=\"Data\" [postIndex]=\"\" [showFocus]=\"showScroll\" [pageName]=\"'detail'\"></do-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/R&RModule/award-detail/award-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/R&RModule/award-detail/award-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AwardDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDetailPageRoutingModule", function() { return AwardDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _award_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award-detail.page */ "./src/app/R&RModule/award-detail/award-detail.page.ts");




const routes = [
    {
        path: '',
        component: _award_detail_page__WEBPACK_IMPORTED_MODULE_3__["AwardDetailPage"]
    }
];
let AwardDetailPageRoutingModule = class AwardDetailPageRoutingModule {
};
AwardDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AwardDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/award-detail/award-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/R&RModule/award-detail/award-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: AwardDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDetailPageModule", function() { return AwardDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _award_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award-detail-routing.module */ "./src/app/R&RModule/award-detail/award-detail-routing.module.ts");
/* harmony import */ var _award_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award-detail.page */ "./src/app/R&RModule/award-detail/award-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let AwardDetailPageModule = class AwardDetailPageModule {
};
AwardDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _award_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_award_detail_page__WEBPACK_IMPORTED_MODULE_6__["AwardDetailPage"]]
    })
], AwardDetailPageModule);



/***/ }),

/***/ "./src/app/R&RModule/award-detail/award-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/R&RModule/award-detail/award-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pFont {\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n\n.borderDiv {\n  border: 1px solid #d5d0d0;\n  border-radius: 10px;\n  background: white;\n}\n\n.borderBtm {\n  border-bottom: 1px solid #d5d0d0;\n}\n\n.imgDiv {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.uDiv {\n  font-size: 12px;\n}\n\n.bgImage {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.gpDiv {\n  top: 20%;\n  left: 0;\n  position: relative;\n  width: 90%;\n  transform: translate(0px, -20%);\n  margin: auto;\n  z-index: 1;\n  color: black;\n}\n\n.bgImage::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 0;\n}\n\n.sp {\n  color: #5a57e1;\n}\n\n.uDiv1 {\n  color: #5a57e1;\n}\n\n.topDiv {\n  top: 16%;\n  color: #5a57e1;\n  font-weight: bold;\n}\n\nion-content {\n  --background: #ededed;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWRldGFpbC9hd2FyZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQU8sZUFBQTtFQUFlLG1CQUFBO0FBTHRCOztBQU1BO0VBQVcseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0IsaUJBQUE7QUFBekQ7O0FBQ0E7RUFBVyxnQ0FBQTtBQUdYOztBQUZBO0VBQVEsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBU3BEOztBQVJBO0VBQU0sZUFBQTtBQVlOOztBQVhBO0VBQVMsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLGFBQUE7RUFBYyx3QkFBQTtFQUF5QiwyQkFBQTtFQUE0Qiw0QkFBQTtBQW9CM0c7O0FBbkJBO0VBQU8sUUFBQTtFQUFTLE9BQUE7RUFBUSxrQkFBQTtFQUFtQixVQUFBO0VBQVcsK0JBQUE7RUFBZ0MsWUFBQTtFQUFhLFVBQUE7RUFDL0YsWUFBQTtBQTZCSjs7QUE1QkE7RUFDSSxXQUFBO0VBQVksa0JBQUE7RUFBa0IsT0FBQTtFQUFPLFFBQUE7RUFBUSxRQUFBO0VBQVEsU0FBQTtFQUVyRCxVQUFBO0FBbUNKOztBQWxDQTtFQUFJLGNBQUE7QUFzQ0o7O0FBckNBO0VBQU8sY0FBQTtBQXlDUDs7QUF4Q0E7RUFBUSxRQUFBO0VBQVMsY0FBQTtFQUFlLGlCQUFBO0FBOENoQzs7QUE3Q0E7RUFBWSxxQkFBQTtFQUFzQixxQkFBQTtFQUM5QixtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFrREoiLCJmaWxlIjoic3JjL2FwcC9SJlJNb2R1bGUvYXdhcmQtZGV0YWlsL2F3YXJkLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbn1cblxuLnBGb250e2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOjFweDt9XG4uYm9yZGVyRGl2e2JvcmRlcjogMXB4IHNvbGlkICNkNWQwZDA7Ym9yZGVyLXJhZGl1czogMTBweDtiYWNrZ3JvdW5kOiB3aGl0ZTt9XG4uYm9yZGVyQnRte2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkMGQwO31cbi5pbWdEaXZ7Ym9yZGVyLXJhZGl1czogNTAlO2hlaWdodDogNjBweDt3aWR0aDogNjBweDtvYmplY3QtZml0OiBjb3Zlcjt9XG4udURpdntmb250LXNpemU6IDEycHg7fVxuLmJnSW1hZ2V7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiAxMDAlO2hlaWdodDogMTc1cHg7YmFja2dyb3VuZC1zaXplOiBjb250YWluO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O31cbi5ncERpdnt0b3A6IDIwJTtsZWZ0OiAwO3Bvc2l0aW9uOiByZWxhdGl2ZTt3aWR0aDogOTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwJSk7bWFyZ2luOiBhdXRvO3otaW5kZXg6IDE7XG4gICAgY29sb3I6IGJsYWNrO31cbi5iZ0ltYWdlOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MHB4O2JvdHRvbTowO1xuICAgIC8vIGJhY2tncm91bmQ6cmdiKDAsIDAsIDAsIC4zKTtcbiAgICB6LWluZGV4OiAwO31cbi5zcHtjb2xvcjojNWE1N2UxO31cbi51RGl2MXtjb2xvcjogIzVhNTdlMTt9XG4udG9wRGl2e3RvcDogMTYlO2NvbG9yOiAjNWE1N2UxO2ZvbnQtd2VpZ2h0OiBib2xkO31cbmlvbi1jb250ZW50ey0tYmFja2dyb3VuZDogI2VkZWRlZDstLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/R&RModule/award-detail/award-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/R&RModule/award-detail/award-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: AwardDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDetailPage", function() { return AwardDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let AwardDetailPage = class AwardDetailPage {
    constructor(router, localStorage, apiservices, zone, sendData) {
        this.router = router;
        this.localStorage = localStorage;
        this.apiservices = apiservices;
        this.zone = zone;
        this.sendData = sendData;
        this.limit = "0";
        this.errorMessage = '';
        this.awardListData = this.sendData.myParam;
        console.log("award List Data", this.awardListData);
    }
    ngOnInit() {
        this.awardDetail();
    }
    awardDetail() {
        this.zone.run(() => {
            this.apiservices.showLoader();
            this.localStorage.getStorage().then(storedData => {
                let apiKey = {
                    post_id: this.awardListData.auto_id,
                    employee_id: storedData.employeeID,
                };
                console.log("resend OTP by Voice Call, api key", apiKey);
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].nominationListApi, apiKey).subscribe((result) => {
                    console.log("resend OTP by Voice Call, api response==", result);
                    this.apiservices.hideLoader();
                    this.awdDetailData = result;
                    if (result.status == 1 || result.status == '1') {
                        this.Data = result.data;
                        // this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    }
                    else {
                        this.errorMessage = result.message;
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
        this.awardListData.total_comments = this.Data.total_comments;
    }
};
AwardDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
AwardDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-award-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./award-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-detail/award-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./award-detail.page.scss */ "./src/app/R&RModule/award-detail/award-detail.page.scss")).default]
    })
], AwardDetailPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-award-detail-award-detail-module-es2015.js.map