(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-awarddashboard-detail-awarddashboard-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{dashData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col>\n      <img [src]=\"DashboardData?.award_icon\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" \n      class=\"awardImg\"/>\n      <p class=\"ion-text-center\"><b>{{DashboardData?.award_name}}</b></p>\n    </ion-col>\n  </ion-row>\n  <div class=\"borderCard ion-no-padding\">\n    <ion-row>\n      <ion-col [size]=\"7\" class=\"ion-no-padding\">\n        <div class=\"awrdBg\">\n          <p class=\"ion-no-margin ion-text-center font14\">{{DashboardData?.award_type}}</p>\n        </div></ion-col>\n      <ion-col [size]=\"2\">\n        <img [src]=\"DashboardData?.point_icon\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" \n      class=\"iconDiv\"/> </ion-col>\n      <ion-col [size]=\"3\" class=\"autoMargin\">\n        <p class=\"ion-no-margin font10\"><b>{{DashboardData?.points}}</b></p>\n      </ion-col>\n      \n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n  <p [innerHTML]=\"DashboardData?.award_content\" class=\"ion-no-margin font14\"></p>\n  <br>\n  <div class=\"absoDIV\">\n    <ion-row >\n      <ion-col [size]=\"10.5\" class=\"ion-no-padding\">\n        <div class=\"grayDiv relativeDIV\">\n        <div class=\"percentageDiv\" [style.width]=\"DashboardData?.graph_percentage+'%'\"></div>\n      </div>\n      </ion-col>\n      <ion-col [size]=\"1.5\" *ngIf=\"DashboardData?.graph_percentage\" class=\"ion-no-padding autoMargin\">\n        <p class=\"ion-text-right ion-no-margin font10\">{{DashboardData?.graph_percentage}}%</p>\n      </ion-col>\n    </ion-row>\n    <!-- </div> -->\n       \n \n   </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button *ngIf=\"DashboardData?.button_data?.button_show==true\" tappable (click)=\"gotolist(data)\"\n         class=\"dynamicButtonColor\">{{DashboardData?.button_data?.button_text}}</ion-button>\n      </ion-col>\n        </ion-row>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AwarddashboardDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwarddashboardDetailPageRoutingModule", function() { return AwarddashboardDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _awarddashboard_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./awarddashboard-detail.page */ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.ts");




const routes = [
    {
        path: '',
        component: _awarddashboard_detail_page__WEBPACK_IMPORTED_MODULE_3__["AwarddashboardDetailPage"]
    }
];
let AwarddashboardDetailPageRoutingModule = class AwarddashboardDetailPageRoutingModule {
};
AwarddashboardDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AwarddashboardDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AwarddashboardDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwarddashboardDetailPageModule", function() { return AwarddashboardDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _awarddashboard_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./awarddashboard-detail-routing.module */ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail-routing.module.ts");
/* harmony import */ var _awarddashboard_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./awarddashboard-detail.page */ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.ts");







let AwarddashboardDetailPageModule = class AwarddashboardDetailPageModule {
};
AwarddashboardDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _awarddashboard_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwarddashboardDetailPageRoutingModule"]
        ],
        declarations: [_awarddashboard_detail_page__WEBPACK_IMPORTED_MODULE_6__["AwarddashboardDetailPage"]]
    })
], AwarddashboardDetailPageModule);



/***/ }),

/***/ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".awardImg {\n  height: 160px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.iconDiv {\n  height: 12px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.font10 {\n  font-size: 9px;\n}\n\n.font14 {\n  font-size: 14px;\n}\n\n.awrdBg {\n  background: var(--headerColor);\n  padding: 4px;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.grayDiv {\n  background-color: #eaeaea;\n  width: 100%;\n  position: relative;\n}\n\n.percentageDiv {\n  background-color: var(--headerColor);\n  position: absolute;\n  top: 0;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n}\n\n.grayDiv, .percentageDiv {\n  height: 16px;\n  border-radius: 20px;\n  border: 1px solid var(--headerColor);\n}\n\n.absoDIV {\n  border: 1px solid #b7b2b2;\n  padding: 5px;\n  border-radius: 20px;\n}\n\nion-content {\n  --background: #e7e7e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkZGFzaGJvYXJkLWRldGFpbC9hd2FyZGRhc2hib2FyZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsYUFBQTtFQUFjLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBSXBDOztBQUhBO0VBQVMsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBU2xDOztBQVJBO0VBQVEsY0FBQTtBQVlSOztBQVhBO0VBQVEsZUFBQTtBQWVSOztBQWRBO0VBQVEsOEJBQUE7RUFBK0IsWUFBQTtFQUFhLGdDQUFBO0FBb0JwRDs7QUFuQkE7RUFBVSx5QkFBQTtFQUEyQixXQUFBO0VBQWEsa0JBQUE7QUF5QmxEOztBQXhCQTtFQUFlLG9DQUFBO0VBQXVDLGtCQUFBO0VBQXFCLE1BQUE7RUFBVSxrQkFBQTtFQUFvQixpQkFBQTtFQUFtQixZQUFBO0FBaUM1SDs7QUFoQ0E7RUFBeUIsWUFBQTtFQUFjLG1CQUFBO0VBQW9CLG9DQUFBO0FBc0MzRDs7QUFyQ0E7RUFBUyx5QkFBQTtFQUEwQixZQUFBO0VBQWEsbUJBQUE7QUEyQ2hEOztBQTFDQTtFQUFZLHFCQUFBO0FBOENaIiwiZmlsZSI6InNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkZGFzaGJvYXJkLWRldGFpbC9hd2FyZGRhc2hib2FyZC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF3YXJkSW1ne2hlaWdodDogMTYwcHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY29udGFpbjt9XG4uaWNvbkRpdntoZWlnaHQ6IDEycHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY29udGFpbjt9XG4uZm9udDEwe2ZvbnQtc2l6ZTogOXB4O31cbi5mb250MTR7Zm9udC1zaXplOiAxNHB4O31cbi5hd3JkQmd7YmFja2dyb3VuZDogdmFyKC0taGVhZGVyQ29sb3IpO3BhZGRpbmc6IDRweDtib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDt9XG4uZ3JheURpdnsgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTsgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLnBlcmNlbnRhZ2VEaXZ7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpOyAgcG9zaXRpb246IGFic29sdXRlOyAgdG9wOiAwOyAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDJweDt9XG4uZ3JheURpdiwgLnBlcmNlbnRhZ2VEaXZ7aGVpZ2h0OiAxNnB4OyBib3JkZXItcmFkaXVzOiAyMHB4O2JvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTt9XG4uYWJzb0RJVntib3JkZXI6IDFweCBzb2xpZCAjYjdiMmIyO3BhZGRpbmc6IDVweDtib3JkZXItcmFkaXVzOiAyMHB4O31cbmlvbi1jb250ZW50ey0tYmFja2dyb3VuZDogI2U3ZTdlNzt9XG4iXX0= */");

/***/ }),

/***/ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AwarddashboardDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwarddashboardDetailPage", function() { return AwarddashboardDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let AwarddashboardDetailPage = class AwarddashboardDetailPage {
    constructor(zone, apiservices, stoargeServices, sendData, router) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.stoargeServices = stoargeServices;
        this.sendData = sendData;
        this.router = router;
    }
    ngOnInit() {
        this.previousDashboard = this.sendData.alldata;
        this.awardDashboardFun();
    }
    awardDashboardFun() {
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    employee_id: storedData.employeeID,
                    award_id: this.previousDashboard.auto_id,
                };
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].awardDashboardDetailApi, apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    this.dashData = result;
                    if (result.status == 1) {
                        this.DashboardData = result.data;
                        this.errorMessage = '';
                    }
                    else {
                        this.errorMessage = result.message;
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.apiservices.hideLoader();
                });
            });
        }));
    }
    gotolist(item) {
        this.sendData.alldata = { mainData: this.DashboardData, nominationId: '' };
        // this.sendData.alldata=this.DashboardData;
        this.router.navigate(['/award-employee-list']);
    }
};
AwarddashboardDetailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AwarddashboardDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-awarddashboard-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./awarddashboard-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./awarddashboard-detail.page.scss */ "./src/app/R&RModule/awarddashboard-detail/awarddashboard-detail.page.scss")).default]
    })
], AwarddashboardDetailPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-awarddashboard-detail-awarddashboard-detail-module-es2015.js.map