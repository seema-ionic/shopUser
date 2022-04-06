(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-list-say-cheers-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>{{page_header}}</ion-title> -->\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"start\" class=\"headerSearchDiv\">\n      <!-- (ionInput)=\"onInputCapture($event,keyword)\" -->\n      <ion-searchbar showCancelButton=\"never\" [(ngModel)]=\"keyword\" (ngModelChange)=\"onInputCapture($event)\"\n      (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"--background:gainsboro;\">\n  \n  <!-- class=\"commonPagePadding\" -->\n  <div *ngIf=\"sayCheersList\">\n    <div *ngFor=\"let listData of sayCheersList; let i=index\">\n      <div class=\"cheerList\" [ngClass]=\"{'selectedUser':clickIndex==i}\">\n        <ion-row tappable (click)=\"selectItem(listData, i)\">\n          <ion-col [size]=\"3\">\n            <div class=\"iconDiv\">\n              <div class=\"imgDiv\">\n                <app-image-view [img]=\"listData?.profile_image\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n              </div>\n              <ion-icon *ngIf=\"clickIndex==i\" name=\"checkmark\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"9\" class=\"autoMargin\">\n            <p class=\"noMargin nameText\">{{listData?.name}}</p>\n            <p class=\"noMargin designationText\">{{listData?.designation}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!sayCheersList && errorMessage==''\">\n    <app-skelton-listview [iconPath]=\"'sayCheerList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n\n  <p style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!=''\"> {{errorMessage}}  </p>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && sayCheersList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-list/say-cheers-list-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SayCheersListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersListPageRoutingModule", function() { return SayCheersListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _say_cheers_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./say-cheers-list.page */ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.ts");




const routes = [
    {
        path: '',
        component: _say_cheers_list_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersListPage"]
    }
];
let SayCheersListPageRoutingModule = class SayCheersListPageRoutingModule {
};
SayCheersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SayCheersListPageRoutingModule);



/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-list/say-cheers-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: SayCheersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersListPageModule", function() { return SayCheersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _say_cheers_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./say-cheers-list-routing.module */ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list-routing.module.ts");
/* harmony import */ var _say_cheers_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./say-cheers-list.page */ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SayCheersListPageModule = class SayCheersListPageModule {
};
SayCheersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _say_cheers_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_say_cheers_list_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersListPage"]]
    })
], SayCheersListPageModule);



/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerSearchDiv {\n  width: 100%;\n}\n.headerSearchDiv ion-searchbar {\n  width: 100%;\n  --padding-start:0px;\n  --padding-end:0px;\n  text-align: left;\n  color: #000;\n  --background:#fff;\n}\n.headerSearchDiv ion-searchbar::ng-deep input.searchbar-input {\n  --padding-left:0;\n  --padding-right:0;\n  -webkit-padding-start: 30px;\n  --padding-inline-start:0px;\n  -webkit-padding-end: 30px;\n  --padding-inline-end:0px;\n  --padding-top:0px;\n  font-size: 14px;\n  --padding-bottom:0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  border-radius: 5px;\n  height: 40px;\n}\n.headerSearchDiv ion-searchbar::ng-deep ion-icon.searchbar-search-icon {\n  left: 3px;\n  top: 10px;\n  width: 20px;\n  height: 20px;\n  /*color:var(--headerColor);*/\n}\n.headerSearchDiv ion-searchbar::ng-deep button.searchbar-clear-button {\n  right: 5px;\n  /*color:var(--headerColor);*/\n}\n.headerSearchDiv ion-searchbar::ng-deep button.searchbar-clear-button ion-icon.searchbar-clear-icon {\n  width: 25px;\n}\n.headerSearchDiv ion-searchbar::ng-deep button.searchbar-clear-button.sc-ion-searchbar-ios {\n  right: 2px;\n  top: 2px;\n}\nion-toolbar .sc-ion-searchbar-ios-h {\n  padding-top: 1px;\n  padding-bottom: 5px;\n  height: 30px;\n  margin: 5px 0 0 0;\n}\n.cheerList {\n  margin: 5px 0;\n  padding: 0 5px;\n  background: #fff;\n}\n.cheerList .iconDiv {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 2px solid var(--headerColor);\n  position: relative;\n}\n.cheerList .iconDiv .imgDiv {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.cheerList .iconDiv ion-icon {\n  font-size: 20px;\n  background: #fff;\n  border-radius: 50%;\n  color: var(--headerColor);\n  position: absolute;\n  bottom: 0;\n  right: -5px;\n  z-index: 9;\n}\n.cheerList .nameText {\n  font-size: 15px;\n  font-weight: bold;\n  color: #4c4c4c;\n}\n.cheerList .designationText {\n  margin: 5px 0;\n  font-size: 12px;\n}\n.selectedUser {\n  background: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtbGlzdC9zYXktY2hlZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLFdBQUE7QUFFakI7QUFESTtFQUFjLFdBQUE7RUFBVyxtQkFBQTtFQUFvQixpQkFBQTtFQUFrQixnQkFBQTtFQUFnQixXQUFBO0VBQVcsaUJBQUE7QUFTOUY7QUFQWTtFQUNJLGdCQUFBO0VBQWlCLGlCQUFBO0VBQWtCLDJCQUFBO0VBQTJCLDBCQUFBO0VBQzlELHlCQUFBO0VBQXlCLHdCQUFBO0VBQXlCLGlCQUFBO0VBQWtCLGVBQUE7RUFDcEUsb0JBQUE7RUFBcUIsZ0JBQUE7RUFBZ0IsbUJBQUE7RUFBbUIsa0JBQUE7RUFBa0IsWUFBQTtBQW1CMUY7QUFqQlk7RUFBK0IsU0FBQTtFQUFTLFNBQUE7RUFBUyxXQUFBO0VBQVcsWUFBQTtFQUFZLDRCQUFBO0FBd0JwRjtBQXZCWTtFQUE4QixVQUFBO0VBQVUsNEJBQUE7QUEyQnBEO0FBMUJnQjtFQUE4QixXQUFBO0FBNkI5QztBQTNCWTtFQUFtRCxVQUFBO0VBQVUsUUFBQTtBQStCekU7QUExQkE7RUFDSSxnQkFBQTtFQUFnQixtQkFBQTtFQUFtQixZQUFBO0VBQVksaUJBQUE7QUFnQ25EO0FBN0JBO0VBQVcsYUFBQTtFQUFhLGNBQUE7RUFBYyxnQkFBQTtBQW1DdEM7QUFsQ0k7RUFBUyxXQUFBO0VBQVcsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLG9DQUFBO0VBQzlDLGtCQUFBO0FBd0NSO0FBdkNRO0VBQVEsV0FBQTtFQUFXLFlBQUE7RUFBWSxnQkFBQTtFQUFnQixrQkFBQTtBQTZDdkQ7QUE1Q1E7RUFBUyxlQUFBO0VBQWUsZ0JBQUE7RUFBZ0Isa0JBQUE7RUFBa0IseUJBQUE7RUFDdEQsa0JBQUE7RUFBa0IsU0FBQTtFQUFTLFdBQUE7RUFBVyxVQUFBO0FBcURsRDtBQWxESTtFQUFVLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixjQUFBO0FBdUQ5QztBQXRESTtFQUFpQixhQUFBO0VBQWEsZUFBQTtBQTBEbEM7QUF2REE7RUFBYyxtQkFBQTtBQTJEZCIsImZpbGUiOiJzcmMvYXBwL3NheUNoZWVyc01vZHVsZS9zYXktY2hlZXJzLWxpc3Qvc2F5LWNoZWVycy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTZWFyY2hEaXZ7d2lkdGg6MTAwJTtcbiAgICBpb24tc2VhcmNoYmFye3dpZHRoOjEwMCU7LS1wYWRkaW5nLXN0YXJ0OjBweDstLXBhZGRpbmctZW5kOjBweDt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzAwMDstLWJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgJjo6bmctZGVlcCB7XG4gICAgICAgICAgICBpbnB1dC5zZWFyY2hiYXItaW5wdXR7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWxlZnQ6MDstLXBhZGRpbmctcmlnaHQ6MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MzBweDstLXBhZGRpbmctaW5saW5lLXN0YXJ0OjBweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOjMwcHg7LS1wYWRkaW5nLWlubGluZS1lbmQ6MHB4Oy0tcGFkZGluZy10b3A6MHB4O2ZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206MHB4O3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbTowcHg7Ym9yZGVyLXJhZGl1czo1cHg7aGVpZ2h0OjQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbi5zZWFyY2hiYXItc2VhcmNoLWljb257bGVmdDozcHg7dG9wOjEwcHg7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDsvKmNvbG9yOnZhcigtLWhlYWRlckNvbG9yKTsqL31cbiAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2hiYXItY2xlYXItYnV0dG9ue3JpZ2h0OjVweDsvKmNvbG9yOnZhcigtLWhlYWRlckNvbG9yKTsqL1xuICAgICAgICAgICAgICAgIGlvbi1pY29uLnNlYXJjaGJhci1jbGVhci1pY29ue3dpZHRoOjI1cHg7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7cmlnaHQ6MnB4O3RvcDoycHg7fVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tdG9vbGJhciAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gICAgcGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjVweDtoZWlnaHQ6MzBweDttYXJnaW46NXB4IDAgMCAwO1xufVxuXG4uY2hlZXJMaXN0e21hcmdpbjo1cHggMDtwYWRkaW5nOjAgNXB4O2JhY2tncm91bmQ6I2ZmZjtcbiAgICAuaWNvbkRpdnt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjoycHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgLmltZ0Rpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjUwJTt9XG4gICAgICAgIGlvbi1pY29ue2ZvbnQtc2l6ZToyMHB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDotNXB4O3otaW5kZXg6OTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmFtZVRleHR7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNGM0YzRjO31cbiAgICAuZGVzaWduYXRpb25UZXh0e21hcmdpbjo1cHggMDtmb250LXNpemU6MTJweDt9XG59XG5cbi5zZWxlY3RlZFVzZXJ7YmFja2dyb3VuZDojZjNmM2YzO30iXX0= */");

/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.ts ***!
  \*************************************************************************/
/*! exports provided: SayCheersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersListPage", function() { return SayCheersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");







let SayCheersListPage = class SayCheersListPage {
    constructor(apiservices, router, zone, sendData, storageService) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.sendData = sendData;
        this.storageService = storageService;
        this.selectedItem = false;
        this.value = 0;
        this.errorMessage = "";
        this.myinfiniteScrollCall = false;
        this.searchKey = "";
    }
    onCancel(event) {
        console.log("cancel event==", event);
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.sayCheersSearchUSer();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    sayCheersSearchUSer() {
        this.zone.run(() => {
            console.log("noticeBoard List api call function");
            let apikey = {
                limit: this.value,
                keyword: this.searchKey,
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].searchCheersUserListApi, apikey).subscribe((result) => {
                console.log("noticeBoard List api result==", result);
                this.page_header = result.data.postList.page_header;
                if (result.status == 1 || result.status == '1') {
                    this.searchList = result.data;
                    if (this.sayCheersList == undefined) {
                        this.sayCheersList = result.data.postList.userlist;
                        console.log("noticeBoard List Infinite Scroll if1==", this.sayCheersList);
                    }
                    else {
                        this.sayCheersList = this.sayCheersList.concat(result.data.postList.userlist);
                        console.log("noticeBoard List Infinite Scroll else1==", this.sayCheersList);
                    }
                    if (this.myinfiniteScrollCall == true) {
                        console.log("HrPolicy List Infinite Scroll if2==", this.sayCheersList);
                        this.myInfiniteScroll.target.complete();
                        this.errorMessage = result.message;
                        this.myinfiniteScrollCall = false;
                    }
                    console.log("thoughtOftheDayApi List data1==", this.sayCheersList);
                    console.log("thoughtOftheDayApi List data2==", this.errorMessage);
                }
                else {
                    this.errorMessage = result.message;
                    console.log("noticeBoard List Infinite Scroll12==", this.sayCheersList);
                    if (this.myinfiniteScrollCall == true) {
                        console.log("HrPolicy List Infinite Scroll123==", this.sayCheersList);
                        this.myInfiniteScroll.target.complete();
                        this.myinfiniteScrollCall = false;
                    }
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Begin async operation 1==");
        setTimeout(() => {
            this.value = this.sayCheersList.length;
            console.log("Begin async operation 2==", this.value);
            this.myInfiniteScroll = infiniteScroll;
            this.sayCheersSearchUSer();
        }, 500);
    }
    ionViewWillEnter() {
        this.clickIndex = undefined;
    }
    selectItem(clickedItem, index) {
        this.zone.run(() => {
            this.sendData.sayCheers = clickedItem;
            this.clickIndex = index;
            this.router.navigate(["/say-cheers-card"]);
        });
    }
    onInputCapture(ev) {
        this.zone.run(() => {
            if (ev.trim() != '') {
                console.log("change model==>", ev);
                this.searchKey = ev;
                this.value = 0;
                this.errorMessage = "";
                this.sayCheersList = undefined;
                this.sayCheersSearchUSer();
            }
            else {
                this.searchKey = "";
                this.value = 0;
                this.errorMessage = "";
                this.sayCheersList = undefined;
                this.sayCheersSearchUSer();
            }
        });
    }
};
SayCheersListPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
SayCheersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./say-cheers-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./say-cheers-list.page.scss */ "./src/app/sayCheersModule/say-cheers-list/say-cheers-list.page.scss")).default]
    })
], SayCheersListPage);



/***/ })

}]);
//# sourceMappingURL=sayCheersModule-say-cheers-list-say-cheers-list-module-es2015.js.map