(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-hr-policy-detail-hr-policy-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"HRdetial\" class=\"commonPagePadding\">\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-padding-top\">\n        <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n        <!-- <app-text-layout [text]=\"policyData?.title\" class=\"\" [className]=\"\"></app-text-layout> -->\n        <p><b>{{policyData?.title}}</b></p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngIf=\"HRdetial?.media\">\n      <ion-col [size]=\"12\" *ngFor=\"let mediaData of HRdetial?.media; let ind = index\">\n\n        \n        <div *ngIf=\"mediaData?.media_type==1 || mediaData?.media_type=='1'\" class=\"bannerImage\" tappable (click)=\"videoZoome(HRdetial?.media,'image',ind)\">\n          <app-image-view [img]=\"mediaData?.media_path\" [imageView]=\"false\" class=\"hrPolicyBanner\" ></app-image-view>\n        </div>          \n        <div *ngIf=\"mediaData?.media_type==2 || mediaData?.media_type=='2'\" class=\"bannerImage\">\n          <video width=\"100%\" height=\"auto\" style=\"object-fit:cover;\" controls=\"controls\" controlsList=\"nodownload noremote foobar\"\n            poster=\"{{mediaData?.alt_image}}\" [src]=\"mediaData?.media_path|safe\" type=\"video/mp4\"></video>\n            <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'video',ind)\">\n              <!-- <img [src]=\"videoIcon\"> -->\n            </div>\n        </div>\n        <div *ngIf=\"mediaData?.media_type==3 || mediaData?.media_type=='3'\" class=\"bannerImage\">\n          <iframe [src]=\"mediaData?.media_path | safe\" width=\"100%\" height=\"auto\"></iframe>\n          <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'youtube',ind)\">\n            <!-- <img [src]=\"videoIcon\"> -->\n          </div>\n        </div>\n        <!-- class=\"textDiv\" -->\n        <div *ngIf=\"mediaData?.media_type==4 || mediaData?.media_type=='4'\">\n          <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n          <app-text-layout [text]=\"mediaData?.media_path\" class=\"\" [className]=\"\"></app-text-layout>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- *ngIf=\"policyData?.auth_type!='View'\" -->\n    <ion-row *ngIf=\"HRdetial?.action==1 || HRdetial?.action=='1'\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"acknowledgeToGo()\">{{authData[apiservices?.hrPolicyCount]?.data?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n  <br><br><br><br>\n  </div>\n\n\n\n\n  <div *ngIf=\"!HRdetial\">\n    <app-skelton-listview [iconPath]=\"'hrAcknowData'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf=\"HRdetial?.action==0\" class=\"footerAckDiv\">\n  <ion-row>\n    <ion-col [push]=\"2\" [size]=\"8\">\n      <!-- <p class=\"noMargin\">{{HRdetial?.auth_date}}</p> -->\n      <app-text-layout [text]=\"HRdetial?.auth_date\" class=\"\" [className]=\"\"></app-text-layout>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: HrPolicyDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrPolicyDetailPageRoutingModule", function() { return HrPolicyDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hr_policy_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-policy-detail.page */ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.ts");




const routes = [
    {
        path: '',
        component: _hr_policy_detail_page__WEBPACK_IMPORTED_MODULE_3__["HrPolicyDetailPage"]
    }
];
let HrPolicyDetailPageRoutingModule = class HrPolicyDetailPageRoutingModule {
};
HrPolicyDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HrPolicyDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.module.ts ***!
  \****************************************************************************/
/*! exports provided: HrPolicyDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrPolicyDetailPageModule", function() { return HrPolicyDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hr_policy_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hr-policy-detail-routing.module */ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail-routing.module.ts");
/* harmony import */ var _hr_policy_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hr-policy-detail.page */ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let HrPolicyDetailPageModule = class HrPolicyDetailPageModule {
};
HrPolicyDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hr_policy_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HrPolicyDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_hr_policy_detail_page__WEBPACK_IMPORTED_MODULE_6__["HrPolicyDetailPage"]]
    })
], HrPolicyDetailPageModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textDiv::after {\n  content: \"\";\n  border-bottom: 0px solid green;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  border-top: 0px solid #f3f3f5;\n}\n\n.bannerImage {\n  margin: 5px 0px 0px 0px;\n  border-radius: 0px;\n  position: relative;\n}\n\n.bannerImage .playIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\n.footerAckDiv {\n  color: var(--headerColor);\n  text-align: center;\n  font-size: 18px;\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 0px;\n}\n\nvideo, iframe {\n  box-shadow: 0px 2px 4px 1px grey;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcG9saWN5LWRldGFpbC9oci1wb2xpY3ktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFBVyw4QkFBQTtFQUE4QixrQ0FBQTtFQUN6QyxtQ0FBQTtFQUFtQyw2QkFBQTtBQUl2Qzs7QUFGQTtFQUFhLHVCQUFBO0VBQXVCLGtCQUFBO0VBQWtCLGtCQUFBO0FBUXREOztBQVBJO0VBQVUsa0JBQUE7RUFBa0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFdBQUE7QUFlOUQ7O0FBYkE7RUFBYyx5QkFBQTtFQUF5QixrQkFBQTtFQUFrQixlQUFBO0VBQWUsYUFBQTtFQUFhLGlCQUFBO0VBQWlCLGtCQUFBO0FBc0J0Rzs7QUFwQkE7RUFBYyxnQ0FBQTtFQUFnQyxtQkFBQTtBQXlCOUMiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9oci1wb2xpY3ktZGV0YWlsL2hyLXBvbGljeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHREaXY6OmFmdGVye1xuICAgIGNvbnRlbnQ6XCJcIjtib3JkZXItYm90dG9tOjBweCBzb2xpZCBncmVlbjtib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjBweCBzb2xpZCAjZjNmM2Y1O1xufVxuLmJhbm5lckltYWdle21hcmdpbjo1cHggMHB4IDBweCAwcHg7Ym9yZGVyLXJhZGl1czowcHg7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgLnBsYXlJY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3otaW5kZXg6OTk7fVxufVxuLmZvb3RlckFja0Rpdntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjE4cHg7cGFkZGluZzoxMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Ym9yZGVyLXJhZGl1czowcHg7fVxuXG52aWRlbywgaWZyYW1le2JveC1zaGFkb3c6MHB4IDJweCA0cHggMXB4IGdyZXk7Ym9yZGVyLXJhZGl1czoxMHB4O30iXX0= */");

/***/ }),

/***/ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.ts ***!
  \**************************************************************************/
/*! exports provided: HrPolicyDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrPolicyDetailPage", function() { return HrPolicyDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");









let HrPolicyDetailPage = class HrPolicyDetailPage {
    constructor(apiservices, router, zone, menuCtrl, sendData, storageService, eventService) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.storageService = storageService;
        this.eventService = eventService;
        this.policyData = this.sendData.alldata;
        console.log("policy list data==", this.policyData);
        this.commingData = this.sendData.commingPageName;
        console.log("comming from which page==", this.commingData);
    }
    videoZoome(videoPath, videoType, index) {
        this.zone.run(() => {
            console.log("data videoLevel click index==", index);
            this.apiservices.videoZoome(videoPath, videoType, index);
        });
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.hrPolicyFunc();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    ionViewWillEnter() {
        console.log("will enter api0 ==", this.apiservices.hrPolicyCount);
        this.eventService.getObservable().subscribe((data) => {
            if (data.data.commingFrom == 'quizScoreCard' && data.data.reloadPage == true) {
                console.log("will enter api1 ==", this.apiservices.hrPolicyCount);
                this.HRdetial = "";
                this.settings = "";
                this.authData = "";
                this.hrPolicyFunc();
            }
        });
    }
    hrPolicyFunc() {
        this.zone.run(() => {
            console.log("HrPolicy Detail api call function");
            let apikey = {
                "hrpolicy_id": this.policyData.hrpolicy_id
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicyDetail, apikey).subscribe((result) => {
                console.log("HrPolicy Detail api result==", result);
                this.HRdetial = result.data;
                this.settings = result.data.settings;
                if (result.status == 1 || result.status == '1') {
                    this.authData = result.data.auth_type;
                    if (result.data.action == "1" || result.data.action == 1) {
                        this.redirectionLink = this.authData;
                        console.log("hr Policy Detail Array Redirection detail remaining==", this.redirectionLink[this.apiservices.hrPolicyCount]);
                        console.log("hr Policy Detail Array Redirection authData==", this.authData);
                    }
                    else {
                        // this.policyData.action="0";
                    }
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    acknowledgeToGo() {
        this.zone.run(() => {
            this.sendData.hrPolicyDetailAllData = this.authData;
            if (this.authData.length > 0) {
                if (this.redirectionLink[this.apiservices.hrPolicyCount].type == "Submit") {
                    // no further action required 
                    // therefore go to hrpolicy list pageconsole.log("HrPolicy Detail api call function");
                    let apikey = {
                        "post_id": this.policyData.hrpolicy_id
                    };
                    this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicySubmit, apikey).subscribe((result) => {
                        console.log("HrPolicy Detail api result==", result);
                        if (result.status == 1 || result.status == '1') {
                            this.policyData.action = "0";
                            var data = {
                                "commingFrom": "reloadHomeApi",
                                "reloadHomePage": true
                            };
                            this.eventService.publishSomeData({ data });
                            if (this.commingData.commingFrom == "hrPolicyList") {
                                this.router.navigate(["/hr-policy-list"]);
                            }
                            else {
                                this.router.navigate(["/tabs/tab1"]);
                            }
                        }
                        else {
                            this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                        }
                    }, err => {
                        this.apiservices.showToastMessage(err, 'top', 3000, 'redBg');
                    });
                }
                else if (this.redirectionLink[this.apiservices.hrPolicyCount].type == "OTP") {
                    // in case of otp, we will update "this.apiservices.hrPolicyCount" value after otp submittion
                    // therefore go to otp page
                    console.log("noticeBoard Detail api call function==", this.redirectionLink[this.apiservices.hrPolicyCount]);
                    this.apiservices.showLoader();
                    let apikey = {
                        "post_id": this.policyData.hrpolicy_id,
                        "event": this.settings.otp_event
                    };
                    this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].sendOtp, apikey).subscribe((result) => {
                        console.log("noticeBoard Detail api result==", result);
                        this.apiservices.hideLoader();
                        if (result.status == 1 || result.status == '1') {
                            this.sendData.alldata = this.policyData;
                            this.sendData.myParam = result.data.settings;
                            this.sendData.commingPageName = this.commingData;
                            this.router.navigate([this.redirectionLink[this.apiservices.hrPolicyCount].data.redirect_page]);
                        }
                        else {
                            this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                        }
                    }, err => {
                        this.apiservices.hideLoader();
                        this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    });
                }
                else {
                    // go to net page and print data    
                    this.sendData.alldata = this.policyData;
                    this.sendData.myParam = this.redirectionLink[this.apiservices.hrPolicyCount];
                    console.log("apiservices hrpolicy count==", this.apiservices.hrPolicyCount);
                    console.log("apiservices hrpolicy redirection==", this.redirectionLink[this.apiservices.hrPolicyCount]);
                    this.sendData.commingPageName = this.commingData;
                    this.router.navigate([this.redirectionLink[this.apiservices.hrPolicyCount].data.redirect_page]);
                }
            }
        });
    }
};
HrPolicyDetailPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] }
];
HrPolicyDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-policy-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hr-policy-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hr-policy-detail.page.scss */ "./src/app/hrPolicyModule/hr-policy-detail/hr-policy-detail.page.scss")).default]
    })
], HrPolicyDetailPage);



/***/ })

}]);
//# sourceMappingURL=hrPolicyModule-hr-policy-detail-hr-policy-detail-module-es2015.js.map