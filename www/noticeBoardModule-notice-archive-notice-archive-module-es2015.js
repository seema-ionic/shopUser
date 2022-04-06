(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticeBoardModule-notice-archive-notice-archive-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-archive/notice-archive.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-archive/notice-archive.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:gainsboro;\">  \n  <div *ngIf=\"archiveList\">    \n    <div *ngFor=\"let listData of archiveList; let i=index;\" class=\"titleDiv\">\n      <ion-row tappable (click)=\"goToArchiveDetail(listData)\">\n        <ion-col [size]=\"12\"><p class=\"noMargin\"><b>{{listData?.title}}</b></p></ion-col>\n        <ion-col [size]=\"12\" class=\"ion-text-right\"><p class=\"noMargin acknText\">{{settings?.expiry_text}}</p></ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n  \n  <div *ngIf=\"!archiveList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'noticeboardList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!archiveList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && archiveList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && archiveList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/noticeBoardModule/notice-archive/notice-archive-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-archive/notice-archive-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NoticeArchivePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeArchivePageRoutingModule", function() { return NoticeArchivePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notice_archive_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-archive.page */ "./src/app/noticeBoardModule/notice-archive/notice-archive.page.ts");




const routes = [
    {
        path: '',
        component: _notice_archive_page__WEBPACK_IMPORTED_MODULE_3__["NoticeArchivePage"]
    }
];
let NoticeArchivePageRoutingModule = class NoticeArchivePageRoutingModule {
};
NoticeArchivePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoticeArchivePageRoutingModule);



/***/ }),

/***/ "./src/app/noticeBoardModule/notice-archive/notice-archive.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-archive/notice-archive.module.ts ***!
  \***************************************************************************/
/*! exports provided: NoticeArchivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeArchivePageModule", function() { return NoticeArchivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notice_archive_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-archive-routing.module */ "./src/app/noticeBoardModule/notice-archive/notice-archive-routing.module.ts");
/* harmony import */ var _notice_archive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice-archive.page */ "./src/app/noticeBoardModule/notice-archive/notice-archive.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let NoticeArchivePageModule = class NoticeArchivePageModule {
};
NoticeArchivePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notice_archive_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticeArchivePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_notice_archive_page__WEBPACK_IMPORTED_MODULE_6__["NoticeArchivePage"]]
    })
], NoticeArchivePageModule);



/***/ }),

/***/ "./src/app/noticeBoardModule/notice-archive/notice-archive.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-archive/notice-archive.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titleDiv {\n  padding: 5px 10px;\n  margin: 10px 0;\n  background: #fff;\n}\n.titleDiv .acknText {\n  font-size: 12px;\n  color: var(--redTextColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlQm9hcmRNb2R1bGUvbm90aWNlLWFyY2hpdmUvbm90aWNlLWFyY2hpdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsaUJBQUE7RUFBaUIsY0FBQTtFQUFjLGdCQUFBO0FBSXpDO0FBSEk7RUFBVSxlQUFBO0VBQWUsMEJBQUE7QUFPN0IiLCJmaWxlIjoic3JjL2FwcC9ub3RpY2VCb2FyZE1vZHVsZS9ub3RpY2UtYXJjaGl2ZS9ub3RpY2UtYXJjaGl2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVEaXZ7cGFkZGluZzo1cHggMTBweDttYXJnaW46MTBweCAwO2JhY2tncm91bmQ6I2ZmZjtcbiAgICAuYWNrblRleHR7Zm9udC1zaXplOjEycHg7Y29sb3I6dmFyKC0tcmVkVGV4dENvbG9yKTt9XG59Il19 */");

/***/ }),

/***/ "./src/app/noticeBoardModule/notice-archive/notice-archive.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/noticeBoardModule/notice-archive/notice-archive.page.ts ***!
  \*************************************************************************/
/*! exports provided: NoticeArchivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeArchivePage", function() { return NoticeArchivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");







let NoticeArchivePage = class NoticeArchivePage {
    constructor(router, storageService, apiservices, zone, sendData) {
        this.router = router;
        this.storageService = storageService;
        this.apiservices = apiservices;
        this.zone = zone;
        this.sendData = sendData;
        this.errorMessage = "";
        this.myinfiniteScrollCall = false;
        this.value = "0";
        this.showErrorImage = "";
        this.no_data_message = "";
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.ArchiveListFunc();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    ArchiveListFunc() {
        this.zone.run(() => {
            console.log("noticeBoard List api call function");
            let apikey = {
                "limit": this.value,
                "flag": "2",
                "request_tab": "archive"
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].noticeList, apikey).subscribe((result) => {
                console.log("noticeBoard List api result==", result);
                this.settings = result.data.settings;
                if (result.status == 1 || result.status == '1') {
                    if (this.archiveList == undefined) {
                        this.archiveList = result.data.list_data;
                        console.log("noticeBoard List Infinite Scroll if1==", this.archiveList);
                    }
                    else {
                        this.archiveList = this.archiveList.concat(result.data.list_data);
                        console.log("noticeBoard List Infinite Scroll else1==", this.archiveList);
                    }
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll if2==", this.archiveList);
                        this.myInfiniteScroll.target.complete();
                        this.errorMessage = "";
                        this.myinfiniteScrollCall = false;
                    }
                }
                else {
                    this.errorMessage = result.data.settings.archive_list_message;
                    this.no_data_message = result.data.settings.no_data_msg;
                    this.showErrorImage = result.data.settings.no_data_image;
                    console.log("noticeBoard List Infinite Scroll12==", this.archiveList);
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll123==", this.archiveList);
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
            this.value = this.archiveList.length;
            console.log("Begin async operation 2==", this.value);
            this.myInfiniteScroll = infiniteScroll;
            this.ArchiveListFunc();
        }, 500);
    }
    goToArchiveDetail(listData) {
        this.zone.run(() => {
            this.sendData.alldata = listData;
            var data = {
                "commingFrom": "noticeArchive"
            };
            this.sendData.commingPageName = data;
            this.router.navigate(["/notice-detail"]);
        });
    }
};
NoticeArchivePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] }
];
NoticeArchivePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-archive',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notice-archive.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/noticeBoardModule/notice-archive/notice-archive.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notice-archive.page.scss */ "./src/app/noticeBoardModule/notice-archive/notice-archive.page.scss")).default]
    })
], NoticeArchivePage);



/***/ })

}]);
//# sourceMappingURL=noticeBoardModule-notice-archive-notice-archive-module-es2015.js.map