(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-detail-say-cheers-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"cheerBoardData\">\n\n    <div class=\"customCard\">\n      <ion-row>\n        <ion-col [size]=\"4\" class=\"ion-text-center\">\n          <div class=\"cheerUserImg\">\n            <div class=\"userImgIcon\">\n              <app-image-view [img]=\"cheerBoardData?.receiver_profile\" [imageView]=\"true\" class=\"circleCoverIcon\" ></app-image-view>\n            </div>\n            <p class=\"noMargin nameText\">{{cheerBoardData?.receiver_name}}</p>\n            <p class=\"noMargin positionText\">{{cheerBoardData?.receiver_designation}}</p>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"7\" class=\"ion-text-center\">\n          <div class=\"cardSendImgDiv\">\n            <app-image-view [img]=\"cheerBoardData?.card_image\" [imageView]=\"true\" class=\"radiusFullImage\" ></app-image-view>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col [size]=\"12\">\n          <div class=\"textDiv\">\n            <div class=\"quotesIconDiv\"><img src=\"../../assets/icon/quotIcon.png\"></div>\n            <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n            <app-text-layout style=\"white-space:pre-wrap;\" [text]=\"cheerBoardData?.citation\" class=\"\" [className]=\"\"></app-text-layout>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [size]=\"8\" style=\"position:relative;\">\n          <div style=\"position:absolute;bottom:5px;left:10px;\">\n            <app-text-layout [text]=\"cheerBoardData?.badgesent_date\" class=\"\" style=\"font-size:14px;color:gray;\" [className]=\"\"></app-text-layout>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"4\" class=\"ion-text-center\">\n          <div class=\"cheerUserImg\">\n            <div class=\"userImgIcon\">\n              <app-image-view [img]=\"cheerBoardData?.sender_profile\" [imageView]=\"true\" class=\"circleCoverIcon\" ></app-image-view>\n            </div>\n            <p class=\"noMargin nameText\">{{cheerBoardData?.sender_name}}</p>\n            <p class=\"noMargin positionText\">{{cheerBoardData?.sender_designation}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- show like and comment start -->\n      <div #theTarget>  <!--  show auto scroll to like component  -->\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <div *ngIf=\"cheerBoardData\">\n              <show-comment [allCommentObj]=\"cheerBoardData\" [showLikeList]=\"'true'\" [showCommentList]=\"'true'\" [redirectPage]=\"''\"></show-comment>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- show like and comment start -->\n    </div>\n  </div>\n\n\n  <div *ngIf=\"!cheerBoardData\">\n    <app-skelton-listview [iconPath]=\"'cheerBadgesDetail'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n  <br><br><br>\n</ion-content>\n\n\n\n\n<ion-footer class=\"commentAreaFooter\" *ngIf=\"apiservices?.showCommentBox==true\">\n  <div class=\"padd\" style=\"background:#fff;\" *ngIf=\"cheerBoardData\">\n    <ion-row lines=\"none\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <do-comment [doCommentData]=\"cheerBoardData\" [postIndex]=\"\" [showFocus]=\"showScroll\" [pageName]=\"'detail'\"></do-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SayCheersDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersDetailPageRoutingModule", function() { return SayCheersDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _say_cheers_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./say-cheers-detail.page */ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.ts");




const routes = [
    {
        path: '',
        component: _say_cheers_detail_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersDetailPage"]
    }
];
let SayCheersDetailPageRoutingModule = class SayCheersDetailPageRoutingModule {
};
SayCheersDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SayCheersDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SayCheersDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersDetailPageModule", function() { return SayCheersDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _say_cheers_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./say-cheers-detail-routing.module */ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail-routing.module.ts");
/* harmony import */ var _say_cheers_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./say-cheers-detail.page */ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SayCheersDetailPageModule = class SayCheersDetailPageModule {
};
SayCheersDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _say_cheers_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_say_cheers_detail_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersDetailPage"]]
    })
], SayCheersDetailPageModule);



/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nameText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  font-size: 3vw;\n}\n\n.positionText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtZGV0YWlsL3NheS1jaGVlcnMtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUxJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBRTZCLGNBQUE7QUFBakM7O0FBQ0E7RUFOSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtZGV0YWlsL3NheS1jaGVlcnMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lcykge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi5uYW1lVGV4dHtAaW5jbHVkZSBsaW5lLWNsYW1wKDIpO2ZvbnQtc2l6ZTozdnc7fVxuLnBvc2l0aW9uVGV4dHtAaW5jbHVkZSBsaW5lLWNsYW1wKDEpO31cbi8vIC51c2VySW1nSWNvbntib3JkZXI6M3B4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTt3aWR0aDo1NXB4O2hlaWdodDo1NXB4O292ZXJmbG93OmhpZGRlbjtcbi8vICAgICBib3JkZXItcmFkaXVzOjUwJTttYXJnaW46MCBhdXRvIDVweDtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO1xuLy8gfVxuLy8gLnRleHREaXZ7YmFja2dyb3VuZDojZjNmM2Y1O2JvcmRlci1yYWRpdXM6MTVweDtwYWRkaW5nOjE1cHg7cG9zaXRpb246cmVsYXRpdmU7XG4vLyAgICAgLnF1b3Rlc0ljb25EaXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMHB4O2xlZnQ6NXB4O1xuLy8gICAgICAgICBpbWd7d2lkdGg6NDBweDt9XG4vLyAgICAgfVxuLy8gICAgIC50ZXh0Q29tcG9EaXZ7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MjBweDt9XG4vLyAgICAgLnRleHREaXY6OmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMHB4O2JvdHRvbTotMjBweDtib3JkZXItYm90dG9tOjBweCBzb2xpZCBncmVlbjtcbi8vICAgICAgICAgYm9yZGVyLWxlZnQ6MjBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MjBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjI1cHggc29saWQgI2YzZjNmNTtcbi8vICAgICB9XG4vLyB9XG4vLyAubmFtZVRleHR7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4vLyAucG9zaXRpb25UZXh0e2ZvbnQtc2l6ZToxMHB4O31cbi8vIC5jYXJkU2VuZEltZ0Rpdntib3JkZXI6MXB4IGRhc2hlZCBncmF5O2JvcmRlci1yYWRpdXM6MTBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzo1cHggNXB4IDJweCA1cHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SayCheersDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayCheersDetailPage", function() { return SayCheersDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let SayCheersDetailPage = class SayCheersDetailPage {
    constructor(storageService, apiservices, zone, sendData) {
        this.storageService = storageService;
        this.apiservices = apiservices;
        this.zone = zone;
        this.sendData = sendData;
        this.sayCheers = this.sendData.myParam;
        console.log("say cheers data==", this.sayCheers);
        this.showScroll = this.sendData.autoScroll;
        console.log("autoScrollClick show component click detail==>", this.showScroll);
    }
    ionViewWillLeave() {
        this.apiservices.showCommentBox = false;
        console.log('brandDetailData==> ', this.cheerBoardData);
        this.sayCheers.like_status = this.cheerBoardData.like_status;
        this.sayCheers.total_comments = this.cheerBoardData.total_comments;
        this.sayCheers.total_likes = this.cheerBoardData.total_likes;
        this.sayCheers.comment_setting = this.cheerBoardData.comment_setting;
        this.sayCheers.like_setting = this.cheerBoardData.like_setting;
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.sayCheersDetail();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    sayCheersDetail() {
        this.zone.run(() => {
            console.log("noticeBoard Detail api call function");
            let apikey = {
                "badge_id": this.sayCheers.post_id
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].sayCheersDetailApi, apikey).subscribe((result) => {
                console.log("noticeBoard Detail api result==", result);
                this.pageHeader = result.data.settings.page_header;
                if (result.status == 1 || result.status == '1') {
                    this.cheerBoardData = result.data;
                    this.sendData.alldata = this.cheerBoardData;
                    this.apiservices.showCommentBox = true;
                    setTimeout(() => {
                        // this.updateScroll();
                        if (this.showScroll == 'true') {
                            this.myContent.scrollToPoint(0, this.targetx.nativeElement.offsetTop - 10, 100);
                        }
                    }, 1000);
                    console.log("this cheerBoardData", this.cheerBoardData);
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
SayCheersDetailPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] }
];
SayCheersDetailPage.propDecorators = {
    myContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"] },] }],
    targetx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['theTarget',] }]
};
SayCheersDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./say-cheers-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./say-cheers-detail.page.scss */ "./src/app/sayCheersModule/say-cheers-detail/say-cheers-detail.page.scss")).default]
    })
], SayCheersDetailPage);



/***/ })

}]);
//# sourceMappingURL=sayCheersModule-say-cheers-detail-say-cheers-detail-module-es2015.js.map