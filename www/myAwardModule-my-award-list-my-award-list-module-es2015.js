(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myAwardModule-my-award-list-my-award-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-list/my-award-list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-list/my-award-list.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"segmentSectionDiv\">\n    <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentData($event)\" [value]=\"segmentModel\" >\n      <ion-segment-button value=\"dashboard\" *ngIf=\"allData?.btnData[0]?.isbtnShow\" >\n        <ion-label> {{allData?.btnData[0]?.btnName}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"myactivity\" *ngIf=\"allData?.btnData[1]?.isbtnShow\">\n        <ion-label>{{allData?.btnData[1]?.btnName}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div class=\"ion-padding-top\">\n    <ion-row *ngFor=\"let item of Data\" class=\"borderCard\" (click)=\"gotodetail(item)\">\n      <ion-col [size]=\"3\"><img [src]=\"item?.award_icon\" class=\"awardIcon\"/></ion-col>\n      <ion-col [size]=\"9\" class=\"autoMargin\">\n        <p class=\"ion-no-margin\"><b>{{item?.award_name}}</b></p>\n        <p class=\"ion-no-margin dateP\">{{item?.dateShow}}</p></ion-col>\n    </ion-row>\n\n\n  <p *ngIf=\"errorMessage\" class=\"ion-text-center\">{{errorMessage}}</p>\n  <div *ngIf=\"errorImage\"><img [src]=\"errorImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/></div>\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"errorMessage=='' && Data?.length>0\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/myAwardModule/my-award-list/my-award-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-list/my-award-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MyAwardListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardListPageRoutingModule", function() { return MyAwardListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_award_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-award-list.page */ "./src/app/myAwardModule/my-award-list/my-award-list.page.ts");




const routes = [
    {
        path: '',
        component: _my_award_list_page__WEBPACK_IMPORTED_MODULE_3__["MyAwardListPage"]
    }
];
let MyAwardListPageRoutingModule = class MyAwardListPageRoutingModule {
};
MyAwardListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyAwardListPageRoutingModule);



/***/ }),

/***/ "./src/app/myAwardModule/my-award-list/my-award-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-list/my-award-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: MyAwardListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardListPageModule", function() { return MyAwardListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_award_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-award-list-routing.module */ "./src/app/myAwardModule/my-award-list/my-award-list-routing.module.ts");
/* harmony import */ var _my_award_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-award-list.page */ "./src/app/myAwardModule/my-award-list/my-award-list.page.ts");







let MyAwardListPageModule = class MyAwardListPageModule {
};
MyAwardListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_award_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAwardListPageRoutingModule"]
        ],
        declarations: [_my_award_list_page__WEBPACK_IMPORTED_MODULE_6__["MyAwardListPage"]]
    })
], MyAwardListPageModule);



/***/ }),

/***/ "./src/app/myAwardModule/my-award-list/my-award-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-list/my-award-list.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".segmentSectionDiv ion-segment {\n  background: var(--headerColor);\n  border-radius: 10px;\n  height: 35px;\n}\n.segmentSectionDiv ion-segment ion-segment-button {\n  background: #f2f2f2;\n  color: gray;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin: 0px;\n  --line-height:20px;\n  min-height: 30px;\n}\n.segmentSectionDiv ion-segment .segment-button-checked {\n  background: var(--headerColor);\n  color: white;\n  --indicator-color:transparent ;\n  border-radius: 10px;\n}\n.awardIcon {\n  height: 60px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.dateP {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlBd2FyZE1vZHVsZS9teS1hd2FyZC1saXN0L215LWF3YXJkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVksOEJBQUE7RUFBOEIsbUJBQUE7RUFBbUIsWUFBQTtBQUdqRTtBQUZRO0VBQW1CLG1CQUFBO0VBQW1CLFdBQUE7RUFBVyxlQUFBO0VBQWUsbUJBQUE7RUFBbUIsV0FBQTtFQUMvRSxrQkFBQTtFQUFtQixnQkFBQTtBQVUvQjtBQVJRO0VBQXdCLDhCQUFBO0VBQThCLFlBQUE7RUFBWSw4QkFBQTtFQUM3RCxtQkFBQTtBQWFiO0FBVEE7RUFBVyxZQUFBO0VBQWEsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFlcEM7QUFkQTtFQUFPLGlCQUFBO0FBa0JQIiwiZmlsZSI6InNyYy9hcHAvbXlBd2FyZE1vZHVsZS9teS1hd2FyZC1saXN0L215LWF3YXJkLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlZ21lbnRTZWN0aW9uRGl2e1xuICAgIGlvbi1zZWdtZW50e2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6MTBweDtoZWlnaHQ6MzVweDtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9ue2JhY2tncm91bmQ6I2YyZjJmMjtjb2xvcjpncmF5O2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOjFweDttYXJnaW46MHB4O1xuICAgICAgICAgICAgLS1saW5lLWhlaWdodDoyMHB4O21pbi1oZWlnaHQ6MzBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTtjb2xvcjp3aGl0ZTstLWluZGljYXRvci1jb2xvcjp0cmFuc3BhcmVudFxuICAgICAgICAgICAgO2JvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5hd2FyZEljb257aGVpZ2h0OiA2MHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLmRhdGVQe2ZvbnQtd2VpZ2h0OiBib2xkO30iXX0= */");

/***/ }),

/***/ "./src/app/myAwardModule/my-award-list/my-award-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/myAwardModule/my-award-list/my-award-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: MyAwardListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardListPage", function() { return MyAwardListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let MyAwardListPage = class MyAwardListPage {
    constructor(apiservices, zone, localStorage, router, sendData) {
        this.apiservices = apiservices;
        this.zone = zone;
        this.localStorage = localStorage;
        this.router = router;
        this.sendData = sendData;
        this.Data = [];
        this.myinfiniteScrollCall = false;
        this.errorMessage = '';
        this.limit = "0";
        this.segmentSectionDiv = "dashboard";
        this.teamType = 1;
        this.segmentModel = "dashboard";
    }
    ngOnInit() {
        this.myAwardList();
    }
    gotodetail(val) {
        this.sendData.alldata = val;
        this.router.navigate(['/my-award-detail']);
    }
    segmentData(ev) {
        console.log('ev data', ev);
        this.limit = "0";
        console.log('ev data', ev);
        this.Data = [];
        this.errorMessage = '';
        this.segmentSectionDiv = ev.detail.value;
        if (this.segmentSectionDiv == 'dashboard') {
            this.teamType = this.allData.btnData[0].btnData;
        }
        else {
            this.teamType = this.allData.btnData[1].btnData;
        }
        this.myAwardList();
    }
    myAwardList() {
        this.apiservices.showLoader();
        this.zone.run(() => {
            this.localStorage.getStorage().then(stored => {
                let apiKey = {
                    employee_id: stored.employeeID,
                    limit: this.limit,
                    team_type: this.teamType,
                    post_id: ''
                };
                console.log("resend OTP by Voice Call, api key", apiKey);
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].myawardListApi, apiKey).subscribe((result) => {
                    console.log("resend OTP by Voice Call, api response==", result);
                    this.apiservices.hideLoader();
                    this.allData = result;
                    if (result.status == 1 || result.status == '1') {
                        if (this.Data == undefined) {
                            this.Data = result.data;
                        }
                        else {
                            this.Data = this.Data.concat(result.data);
                        }
                        if (this.myinfiniteScrollCall == true) {
                            // console.log("noticeBoard List Infinite Scroll if2==", this.communicationList);
                            this.myInfiniteScroll.target.complete();
                            this.errorMessage = "";
                            this.myinfiniteScrollCall = false;
                        }
                    }
                    else {
                        this.errorMessage = result.message;
                        // this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                        if (this.myinfiniteScrollCall == true) {
                            this.myInfiniteScroll.target.complete();
                            this.myinfiniteScrollCall = false;
                        }
                    }
                }, err => {
                    this.apiservices.hideLoader();
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
            });
        });
    }
    loadData(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Begin async operation 1==");
        setTimeout(() => {
            this.limit = this.Data.length;
            console.log("Begin async operation 2==", this.limit);
            console.log("Begin async operation 2==", this.Data);
            this.myInfiniteScroll = infiniteScroll;
            this.myAwardList();
        }, 500);
    }
};
MyAwardListPage.ctorParameters = () => [
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
MyAwardListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-award-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-award-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myAwardModule/my-award-list/my-award-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-award-list.page.scss */ "./src/app/myAwardModule/my-award-list/my-award-list.page.scss")).default]
    })
], MyAwardListPage);



/***/ })

}]);
//# sourceMappingURL=myAwardModule-my-award-list-my-award-list-module-es2015.js.map