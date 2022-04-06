(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-voucher-list-detail-voucher-list-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"VoucherDetail\">{{allData?.data?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [ngClass]=\"{'hideTientScroll':blurCheck==1, 'showTientScroll':blurCheck==0}\">\n\n  <!-- <div class=\"perimiumUserDiv\" *ngIf=\"blurCheck==1 || blurCheck=='1'\"><p>{{blurMessage}}</p></div> -->\n\n  <div *ngIf=\"VoucherDetail\">\n    <div [style.backgroundImage]=\"'url(' + VoucherDetail?.bgImage2 + ')'\" class=\"bgImage\"></div>\n    <div class=\"moduleAligment\">\n      <div class=\"customCard infoCard\">\n        <ion-row>\n          <ion-col [size]=\"6\"><img src=\"{{VoucherDetail?.merchantLogo}}\" class=\"merchantIcon\"></ion-col>\n          <!-- <ion-col [size]=\"6\">\n            <ion-button fill=\"clear\" tappable (click)=\"addFav(VoucherDetail)\" class=\"heartIcon\">\n              <img *ngIf=\"VoucherDetail?.favStatus=='1'\" [src]=\"'../../../assets/icon/fillHeart.svg'\" class=\"headerIcon\"/> \n              <img *ngIf=\"VoucherDetail?.favStatus=='0'\"  [src]=\"'../../../assets/icon/emptyHeart.svg'\" class=\"headerIcon\"/>         \n            </ion-button>\n          </ion-col> -->\n          <ion-col [size]=\"12\"><p class=\"noMargin giftTitle\">{{VoucherDetail?.merchantName}}</p></ion-col>\n          <ion-col *ngIf=\"VoucherDetail?.offers && VoucherDetail?.offers?.length>=1\" [size]=\"12\">\n            <p class=\"denominationText\">Denomination:-</p>\n          </ion-col>        \n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"6\">\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"selectedAmount\" placeholder=\"Select amount\" (ngModelChange)=\"amountChangeDetect(selectedAmount)\" style=\"border:1px solid var(--headerColor);padding:10px 5px;box-shadow:0px 0px 5px var(--headerColor);border-radius:5px;\">\n              <ion-select-option *ngFor=\"let amount of VoucherDetail?.offers\" value=\"{{amount?.actualPrice}}\"> <span class=\"rupeeIcon\">&#8377;</span> {{amount?.actualPrice}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col [size]=\"6\">\n            <p class=\"denominationVal\"> <span class=\"rupeeIcon\">&#8377;</span> {{VoucherDetail?.offers[selectedAmountIndex]?.actualPrice}}</p>\n          </ion-col>\n        </ion-row>   \n      </div>\n\n      <div class=\"customCard tncCard\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <app-text-layout [text]=\"VoucherDetail?.offers[selectedAmountIndex]?.offerTnc\" [className]=\"'redeemVoucher'\"></app-text-layout>\n          </ion-col>\n        </ion-row>\n      </div>\n      <p class=\"noMargin\" *ngIf=\"disableOffer==true\"><br><br><br></p>\n    </div>\n  </div>\n\n  <div *ngIf=\"!VoucherDetail\">\n    <app-skelton-listview  [iconPath]=\"'redeemVoucherDetails'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n</ion-content>\n\n\n<ion-footer class=\"footerRedeemDiv\">\n  <ion-row *ngIf=\"disableOffer==true\">\n    <ion-col class=\"ion-text-center\">\n      <div *ngIf=\"disableBtn==true\" class=\"absoDiv\" ></div>\n      <!-- <app-custom-sizebutton [btnText]=\"RedeemNow\" [iconPath]=\"\" [className]=\"smallBtton\" [size]=\"''\" (click)=\"openModal()\"></app-custom-sizebutton> -->\n      <ion-button class=\"dynamicSmallButton\" tappable (click)=\"redeemNowGetOtp()\">Redeem Now</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/RedeemModule/voucher-list-detail/voucher-list-detail-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VoucherListDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherListDetailPageRoutingModule", function() { return VoucherListDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _voucher_list_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-list-detail.page */ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.ts");




const routes = [
    {
        path: '',
        component: _voucher_list_detail_page__WEBPACK_IMPORTED_MODULE_3__["VoucherListDetailPage"]
    }
];
let VoucherListDetailPageRoutingModule = class VoucherListDetailPageRoutingModule {
};
VoucherListDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VoucherListDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.module.ts ***!
  \********************************************************************************/
/*! exports provided: VoucherListDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherListDetailPageModule", function() { return VoucherListDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _voucher_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voucher-list-detail-routing.module */ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail-routing.module.ts");
/* harmony import */ var _voucher_list_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voucher-list-detail.page */ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let VoucherListDetailPageModule = class VoucherListDetailPageModule {
};
VoucherListDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _voucher_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoucherListDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_voucher_list_detail_page__WEBPACK_IMPORTED_MODULE_6__["VoucherListDetailPage"]]
    })
], VoucherListDetailPageModule);



/***/ }),

/***/ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".moduleAligment {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.infoCard {\n  margin: -60px 15px 10px 15px !important;\n  background: #fff;\n}\n\n.infoCard .giftTitle {\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  margin-bottom: 3px;\n}\n\n.infoCard .merchantIcon {\n  width: 80px;\n  border: 1px solid #d4d4d4;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.bgImage {\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.tncCard {\n  margin: 10px 15px 10px 15px !important;\n}\n\n.heartIcon {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  z-index: 99;\n}\n\n.heartIcon img {\n  width: 35px;\n  background: #fff;\n  border-radius: 50%;\n  padding: 6px;\n}\n\n.denominationVal {\n  text-align: right;\n  font-size: 15px;\n  font-weight: 600;\n  color: #444;\n}\n\n.denominationText {\n  margin: 0;\n  font-size: 12px;\n  color: #444;\n}\n\n.footerRedeemDiv {\n  background: var(--headerColor);\n  border-radius: 0;\n}\n\n.perimiumUserDiv {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  padding: 45px 15px 0px 15px;\n  top: 40px;\n  bottom: 0;\n}\n\n.perimiumUserDiv p {\n  text-align: center;\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.hideTientScroll {\n  --overflow:hidden;\n}\n\n.showTientScroll {\n  --overflow:visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3ZvdWNoZXItbGlzdC1kZXRhaWwvdm91Y2hlci1saXN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0Isa0JBQUE7RUFBa0IsbUJBQUE7QUFHbEM7O0FBRkE7RUFBVSx1Q0FBQTtFQUF1QyxnQkFBQTtBQU9qRDs7QUFOSTtFQUFXLGdCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLFdBQUE7RUFBVyxrQkFBQTtBQVkxRDs7QUFYSTtFQUFjLFdBQUE7RUFBVyx5QkFBQTtFQUF5QixZQUFBO0VBQVksa0JBQUE7QUFpQmxFOztBQWZBO0VBQVMsYUFBQTtFQUFhLHNCQUFBO0VBQXNCLDJCQUFBO0VBQTJCLDRCQUFBO0FBc0J2RTs7QUFyQkE7RUFBUyxzQ0FBQTtBQXlCVDs7QUF4QkE7RUFBVyxrQkFBQTtFQUFrQixRQUFBO0VBQVEsV0FBQTtFQUFXLFdBQUE7QUErQmhEOztBQTlCSTtFQUFJLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixZQUFBO0FBb0NyRDs7QUFsQ0E7RUFBaUIsaUJBQUE7RUFBaUIsZUFBQTtFQUFlLGdCQUFBO0VBQWdCLFdBQUE7QUF5Q2pFOztBQXhDQTtFQUFrQixTQUFBO0VBQVMsZUFBQTtFQUFlLFdBQUE7QUE4QzFDOztBQTdDQTtFQUFpQiw4QkFBQTtFQUE4QixnQkFBQTtBQWtEL0M7O0FBN0NBO0VBQWlCLGVBQUE7RUFBZSxPQUFBO0VBQU8sUUFBQTtFQUFRLDhCQUFBO0VBQzNDLFlBQUE7RUFBWSwyQkFBQTtFQUEyQixTQUFBO0VBQVMsU0FBQTtBQXVEcEQ7O0FBdERJO0VBQUUsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLGNBQUE7QUEyRHZDOztBQXpEQTtFQUFpQixpQkFBQTtBQTZEakI7O0FBNURBO0VBQWlCLGtCQUFBO0FBZ0VqQiIsImZpbGUiOiJzcmMvYXBwL1JlZGVlbU1vZHVsZS92b3VjaGVyLWxpc3QtZGV0YWlsL3ZvdWNoZXItbGlzdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZUFsaWdtZW50e3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDt9XG4uaW5mb0NhcmR7bWFyZ2luOi02MHB4IDE1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDojZmZmO1xuICAgIC5naWZ0VGl0bGV7dGV4dC1hbGlnbjpsZWZ0O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojNDQ0O21hcmdpbi1ib3R0b206M3B4O31cbiAgICAubWVyY2hhbnRJY29ue3dpZHRoOjgwcHg7Ym9yZGVyOjFweCBzb2xpZCAjZDRkNGQ0O3BhZGRpbmc6NXB4O2JvcmRlci1yYWRpdXM6NXB4O31cbn1cbi5iZ0ltYWdle2hlaWdodDoyMDBweDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O31cbi50bmNDYXJke21hcmdpbjoxMHB4IDE1cHggMTBweCAxNXB4ICFpbXBvcnRhbnR9XG4uaGVhcnRJY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo3cHg7cmlnaHQ6MTBweDt6LWluZGV4Ojk5O1xuICAgIGltZ3t3aWR0aDozNXB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtwYWRkaW5nOjZweDt9XG59XG4uZGVub21pbmF0aW9uVmFse3RleHQtYWxpZ246cmlnaHQ7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiM0NDQ7fVxuLmRlbm9taW5hdGlvblRleHR7bWFyZ2luOjA7Zm9udC1zaXplOjEycHg7Y29sb3I6IzQ0NDt9XG4uZm9vdGVyUmVkZWVtRGl2e2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6MDt9XG5cblxuXG5cbi5wZXJpbWl1bVVzZXJEaXZ7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDo5OTk7cGFkZGluZzo0NXB4IDE1cHggMHB4IDE1cHg7dG9wOjQwcHg7Ym90dG9tOjA7XG4gICAgcHt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MjBweDtjb2xvcjojZmZmZmZmO31cbn1cbi5oaWRlVGllbnRTY3JvbGx7LS1vdmVyZmxvdzpoaWRkZW47fVxuLnNob3dUaWVudFNjcm9sbHstLW92ZXJmbG93OnZpc2libGU7fSJdfQ== */");

/***/ }),

/***/ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.ts ***!
  \******************************************************************************/
/*! exports provided: VoucherListDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherListDetailPage", function() { return VoucherListDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let VoucherListDetailPage = class VoucherListDetailPage {
    constructor(router, storageService, apiservices, sendData, alertController, zone) {
        this.router = router;
        this.storageService = storageService;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.alertController = alertController;
        this.zone = zone;
        this.selectedAmountIndex = 0;
        this.disableOffer = false;
        this.blurCheck = 0;
        this.voucherListData = this.sendData.alldata;
        console.log("voucher list data==", this.voucherListData);
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.redeemVoucherDetail();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    redeemVoucherDetail() {
        this.zone.run(() => {
            let apiKey = {
                "dealId": this.voucherListData.dealId
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemVoucherDetail, apiKey).subscribe((result) => {
                console.log('response== ', result);
                this.allData = result;
                if (result.status == 1 || result.status == '1') {
                    this.VoucherDetail = this.allData.data;
                    this.selectedAmount = this.VoucherDetail.offers[this.selectedAmountIndex].actualPrice;
                    this.ActualAmount = this.VoucherDetail.balance;
                    this.amountChangeDetect(this.selectedAmount);
                }
                else {
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    amountChangeDetect(amt) {
        this.zone.run(() => {
            console.log("select amount== ", amt);
            var index = this.VoucherDetail.offers.findIndex(function (e) {
                console.log("function data==", e);
                return e.actualPrice == amt;
            });
            console.log("function active index==", index);
            this.selectedAmountIndex = index;
            setTimeout(() => {
                this.VoucherDetail.offers[this.selectedAmountIndex];
                this.ClickButton(this.VoucherDetail.offers[this.selectedAmountIndex].deal_id, this.VoucherDetail.offers[this.selectedAmountIndex].offer_id, this.VoucherDetail.offers[this.selectedAmountIndex].actualPrice);
            }, 100);
        });
    }
    ClickButton(dealid, offerid, salePrice) {
        this.zone.run(() => {
            console.log(dealid, offerid, salePrice, this.ActualAmount);
            if (this.ActualAmount == null || this.ActualAmount == undefined || this.ActualAmount == "" ||
                this.ActualAmount == "null" || this.ActualAmount == "undefined") {
                this.ActualAmount = 0;
            }
            if (parseInt(salePrice) > parseInt(this.ActualAmount) || parseInt(salePrice) == null || parseInt(salePrice) == undefined) {
                console.log("111", this.disableOffer);
                this.disableOffer = false;
                this.alertfunction("Insufficient Balance");
            }
            else {
                this.disableOffer = true;
            }
            this.selecteddealid = dealid;
            this.selectedofferid = offerid;
            this.salePrice = salePrice;
        });
    }
    alertfunction(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                // header: 'Alert',
                // subHeader: 'Subtitle',
                message: msg,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    redeemNowGetOtp() {
        this.zone.run(() => {
            let apiKey = {
                "dealId": this.VoucherDetail.offers[this.selectedAmountIndex].deal_id,
                "offerId": this.VoucherDetail.offers[this.selectedAmountIndex].offer_id,
                "quantity": "1",
                "redeemstatus": "1"
            };
            console.log("Redeem Voucher and Get OTP, api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemVoucherSendOtp, apiKey).subscribe((result) => {
                console.log("Redeem Voucher and Get OTP, api response==", result);
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.sendData.alldata = result;
                    this.router.navigate(["/redeem-otp"]);
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
VoucherListDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
VoucherListDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voucher-list-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./voucher-list-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./voucher-list-detail.page.scss */ "./src/app/RedeemModule/voucher-list-detail/voucher-list-detail.page.scss")).default]
    })
], VoucherListDetailPage);



/***/ })

}]);
//# sourceMappingURL=RedeemModule-voucher-list-detail-voucher-list-detail-module-es2015.js.map