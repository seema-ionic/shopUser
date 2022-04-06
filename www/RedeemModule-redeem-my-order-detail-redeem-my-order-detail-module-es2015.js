(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-my-order-detail-redeem-my-order-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{detailResponse?.settings?.page_header}}</ion-title>\n    <!-- <ion-title>Redeem Voucher Detail</ion-title> -->\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"detailResponse\">\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <div class=\"bannerImgDiv\">\n          <app-image-view [img]=\"detailResponse?.deal_image\" [imageView]=\"true\" class=\"circleCoverIcon\" ></app-image-view>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"purchaseDiv\" style=\"padding:5px 20px;margin:-50px 0 0 0;position:relative;\">\n      <div class=\"customCard\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-text-center\">\n            <p class=\"titleText\">{{detailResponse?.deal_name}}</p>\n            <img class=\"dealImgDiv\" [src]=\"detailResponse?.deal_image\">\n          </ion-col>\n        </ion-row>\n        <div class=\"listDiv\" *ngIf=\"detailResponse?.cardDetails!=''\">\n          <ion-row>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.denomination_string}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"priceAmtText\">&#8377; {{detailResponse?.cardDetails?.denomination_price}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.gift_card_string}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.gift_card_id}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.gift_card_code_string}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.gift_card_code}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.purchase_string}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p>{{detailResponse?.cardDetails?.purchase_date}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p class=\"boldText\">{{detailResponse?.cardDetails?.expiry_string}}</p></ion-col>\n            <ion-col [size]=\"6\" class=\"autoMargin\"><p>{{detailResponse?.cardDetails?.expiry_date}}</p></ion-col>\n          </ion-row>\n        </div>\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-text-center\">\n            <ion-button style=\"font-size:10px;\" tappable (click)=\"mailVoucher()\" class=\"dynamicButtonColor\">EMAIL VOUCHER</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    \n\n    <div style=\"padding:5px 20px;\">\n      <div class=\"customCard\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <app-text-layout [text]=\"detailResponse?.offerTnc\" [className]=\"''\"></app-text-layout>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"!detailResponse\">\n    <app-skelton-listview [iconPath]=\"'redeemOrderDetail'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: RedeemMyOrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemMyOrderDetailPageRoutingModule", function() { return RedeemMyOrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _redeem_my_order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem-my-order-detail.page */ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _redeem_my_order_detail_page__WEBPACK_IMPORTED_MODULE_3__["RedeemMyOrderDetailPage"]
    }
];
let RedeemMyOrderDetailPageRoutingModule = class RedeemMyOrderDetailPageRoutingModule {
};
RedeemMyOrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedeemMyOrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RedeemMyOrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemMyOrderDetailPageModule", function() { return RedeemMyOrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _redeem_my_order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-my-order-detail-routing.module */ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail-routing.module.ts");
/* harmony import */ var _redeem_my_order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem-my-order-detail.page */ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let RedeemMyOrderDetailPageModule = class RedeemMyOrderDetailPageModule {
};
RedeemMyOrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redeem_my_order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemMyOrderDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_redeem_my_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["RedeemMyOrderDetailPage"]]
    })
], RedeemMyOrderDetailPageModule);



/***/ }),

/***/ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ol li, ul li {\n  font-size: 13px;\n  line-height: 15px;\n  margin: 5px 0px;\n}\n\nol, ul {\n  padding: 0 0 0 20px;\n}\n\n.bannerImgDiv {\n  width: 100%;\n  height: 200px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.dealImgDiv {\n  width: 100px;\n}\n\n.otherDetailText {\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.listDiv .boldText {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.listDiv .priceAmtText {\n  color: var(--headerColor);\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.listDiv p {\n  font-size: 12px;\n  margin: 3px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1teS1vcmRlci1kZXRhaWwvcmVkZWVtLW15LW9yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxlQUFBO0VBQWUsaUJBQUE7RUFBaUIsZUFBQTtBQUk3Qzs7QUFIQTtFQUFNLG1CQUFBO0FBT047O0FBTkE7RUFBYyxXQUFBO0VBQVcsYUFBQTtBQVd6Qjs7QUFMQTtFQUFXLGVBQUE7QUFTWDs7QUFSQTtFQUFZLFlBQUE7QUFZWjs7QUFYQTtFQUFpQixlQUFBO0VBQWUsZUFBQTtBQWdCaEM7O0FBZEk7RUFBVSxpQkFBQTtFQUFpQixlQUFBO0FBbUIvQjs7QUFsQkk7RUFBYyx5QkFBQTtFQUF5QixpQkFBQTtFQUFpQixlQUFBO0FBdUI1RDs7QUF0Qkk7RUFBRSxlQUFBO0VBQWUsYUFBQTtBQTBCckIiLCJmaWxlIjoic3JjL2FwcC9SZWRlZW1Nb2R1bGUvcmVkZWVtLW15LW9yZGVyLWRldGFpbC9yZWRlZW0tbXktb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm9sIGxpLCB1bCBsaXtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNXB4O21hcmdpbjo1cHggMHB4O31cbm9sLHVse3BhZGRpbmc6MCAwIDAgMjBweDt9XG4uYmFubmVySW1nRGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjIwMHB4O31cbi8vIC52b3VjaGVyUGluRGl2e1xuLy8gICAgIHB7Zm9udC1zaXplOiAxMnB4O1xuLy8gICAgICAgICBzcGFue2JvcmRlcjoxcHggc29saWQgZ3JheTtwYWRkaW5nOjVweDt9XG4vLyAgICAgfVxuLy8gfVxuLnRpdGxlVGV4dHtmb250LXNpemU6MTZweDt9XG4uZGVhbEltZ0Rpdnt3aWR0aDoxMDBweDt9XG4ub3RoZXJEZXRhaWxUZXh0e2ZvbnQtc2l6ZToxMnB4O21hcmdpbjo1cHggMHB4O31cbi5saXN0RGl2e1xuICAgIC5ib2xkVGV4dHtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxM3B4O31cbiAgICAucHJpY2VBbXRUZXh0e2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxN3B4O31cbiAgICBwe2ZvbnQtc2l6ZToxMnB4O21hcmdpbjozcHggMDt9XG59Il19 */");

/***/ }),

/***/ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: RedeemMyOrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemMyOrderDetailPage", function() { return RedeemMyOrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let RedeemMyOrderDetailPage = class RedeemMyOrderDetailPage {
    constructor(router, storageService, apiservices, sendData, actionSheetController, zone) {
        this.router = router;
        this.storageService = storageService;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.actionSheetController = actionSheetController;
        this.zone = zone;
        this.pinText = "SHOW PIN";
        this.myOrderListData = this.sendData.myParam;
        console.log("my order list click data==", this.myOrderListData);
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter==");
        this.previousePageData = this.sendData.alldata;
        if (this.previousePageData.commingFrom == "redeemOtp") {
            console.log("go back1==", this.previousePageData);
            this.setUIBackButtonAction();
            // this.apiservices.disableHardware=true;
        }
        else {
            // this.apiservices.disableHardware=false;
        }
    }
    setUIBackButtonAction() {
        this.zone.run(() => {
            this.backButton.onClick = () => {
                if (this.previousePageData.commingFrom == "redeemOtp") {
                    console.log("go back2==", this.previousePageData);
                    this.router.navigateByUrl("/tabs/tab1");
                }
                else {
                    // handle custom action here
                    this.router.navigateByUrl("/redeem-my-order-list");
                }
            };
        });
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.myOrderDetail();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    myOrderDetail() {
        this.zone.run(() => {
            console.log("my order detail api function==");
            let apiKey = {
                "orderId": this.myOrderListData.order_id
            };
            console.log("my order detail api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemMyOrderListDetail, apiKey).subscribe((result) => {
                console.log("my order detail Api Result==", result);
                if (result.status == 1 || result.status == '1') {
                    this.detailResponse = result.data;
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, (err) => {
                console.log("my order detail error==", err);
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    mailVoucher() {
        this.zone.run(() => {
            this.apiservices.showLoader();
            console.log("send email api function==");
            let apiKey = {
                "orderId": this.myOrderListData.order_id
            };
            console.log("send email api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemMyOrderDetailEmail, apiKey).subscribe((result) => {
                console.log("send email Api Result==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    console.log("send email Api response==", this.detailResponse);
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, (err) => {
                console.log("my order detail error==", err);
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
RedeemMyOrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
RedeemMyOrderDetailPage.propDecorators = {
    backButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], { static: false },] }]
};
RedeemMyOrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-my-order-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redeem-my-order-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redeem-my-order-detail.page.scss */ "./src/app/RedeemModule/redeem-my-order-detail/redeem-my-order-detail.page.scss")).default]
    })
], RedeemMyOrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=RedeemModule-redeem-my-order-detail-redeem-my-order-detail-module-es2015.js.map