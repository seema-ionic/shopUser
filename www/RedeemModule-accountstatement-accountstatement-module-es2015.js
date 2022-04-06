(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-accountstatement-accountstatement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/accountstatement/accountstatement.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/accountstatement/accountstatement.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"totalBalDiv\">\n    <ion-row class=\"ion-padding\">\n      <ion-col [size]=\"12\"><p class=\"AvailBalText\">{{allHistoryData?.data?.settings?.available_balance}} {{allHistoryData?.data?.available}}</p></ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col [size]=\"6\" class=\"ion-text-center\">\n        <div class=\"bgDiv\">\n          <!-- <img [src]=\"allHistoryData?.data?.settings?.credit_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\"> -->\n          <p class=\"creditText\">{{allHistoryData?.data?.settings?.credit_text}}</p>\n          <p class=\"amountText\">{{allHistoryData?.data?.totalEarned}}</p>\n        </div>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\">\n        <div class=\"bgDiv\">\n          <!-- <img [src]=\"allHistoryData?.data?.settings?.debit_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\"> -->\n          <p class=\"creditText\">{{allHistoryData?.data?.settings?.debit_text}}</p>\n          <p class=\"amountText\">{{allHistoryData?.data?.redeemed}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"todayListResult\" class=\"botCard\">\n    <div class=\"commonPagePadding\">\n      <ion-row class=\"newBorderDiv\" *ngFor=\"let todayHistoryData of todayListResult\">\n        <ion-col [size]=\"9\" class=\"autoMargin\">\n          <p class=\"TitleText noMargin\">{{todayHistoryData?.description}}</p>\n          <p class=\"subTitleText\">{{todayHistoryData?.transaction_date}}</p>\n        </ion-col>\n        <ion-col [size]=\"3\" class=\"autoMargin balanceText ion-no-padding ion-text-center\">\n          <p class=\"noMargin\" [ngClass]=\"{'greenclr': todayHistoryData?.flag==0, 'redclr':todayHistoryData?.flag==1}\">\n            <!-- <span *ngIf=\"todayHistoryData?.flag==0\">+</span>\n            <span style=\"color:red;\" *ngIf=\"todayHistoryData?.flag==1\">-</span> -->\n            {{todayHistoryData?.amount}}\n          </p>\n          <p class=\"noMargin\" [ngClass]=\"{'greenclr': todayHistoryData?.flag==0, 'redclr':todayHistoryData?.flag==1}\">{{todayHistoryData?.transaction_type}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n\n\n  \n  <div *ngIf=\"!todayListResult && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'redeemAccountStatement'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!todayListResult && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row> \n\n  <h2 style=\"text-align:center;font-size:12px;margin:5px 0px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && todayListResult\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && todayListResult\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/RedeemModule/accountstatement/accountstatement-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/RedeemModule/accountstatement/accountstatement-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountstatementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountstatementPageRoutingModule", function() { return AccountstatementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accountstatement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountstatement.page */ "./src/app/RedeemModule/accountstatement/accountstatement.page.ts");




const routes = [
    {
        path: '',
        component: _accountstatement_page__WEBPACK_IMPORTED_MODULE_3__["AccountstatementPage"]
    }
];
let AccountstatementPageRoutingModule = class AccountstatementPageRoutingModule {
};
AccountstatementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountstatementPageRoutingModule);



/***/ }),

/***/ "./src/app/RedeemModule/accountstatement/accountstatement.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/RedeemModule/accountstatement/accountstatement.module.ts ***!
  \**************************************************************************/
/*! exports provided: AccountstatementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountstatementPageModule", function() { return AccountstatementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accountstatement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountstatement-routing.module */ "./src/app/RedeemModule/accountstatement/accountstatement-routing.module.ts");
/* harmony import */ var _accountstatement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountstatement.page */ "./src/app/RedeemModule/accountstatement/accountstatement.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let AccountstatementPageModule = class AccountstatementPageModule {
};
AccountstatementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accountstatement_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountstatementPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_accountstatement_page__WEBPACK_IMPORTED_MODULE_6__["AccountstatementPage"]]
    })
], AccountstatementPageModule);



/***/ }),

/***/ "./src/app/RedeemModule/accountstatement/accountstatement.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/RedeemModule/accountstatement/accountstatement.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".totalBalDiv {\n  background: var(--headerLightColor);\n  min-height: 200px;\n}\n.totalBalDiv .AvailBalText {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  color: #fff;\n}\n.totalBalDiv .bgDiv {\n  background: var(--headerColor);\n  border-radius: 10px;\n  box-shadow: 0px 5px 5px #a0a0a0;\n  padding: 5px 5px;\n  /*background-image: linear-gradient(to top, #becfab, #d5e8bb);box-shadow: 0px -5px 2px #d5e8bb;*/\n}\n.totalBalDiv .bgDiv img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.totalBalDiv .bgDiv .creditText {\n  color: var(--headerTitleOrMenu);\n  font-size: 16px;\n  margin: 10px 0 5px 0;\n}\n.totalBalDiv .bgDiv .amountText {\n  color: var(--headerTitleOrMenu);\n  font-size: 18px;\n  margin: 5px 0;\n  font-weight: bold;\n}\n.botCard {\n  border-radius: 25px 25px 0px 0px;\n  margin: -25px 0 0 0;\n  z-index: 9;\n  background: #fff;\n}\n.botCard .newBorderDiv {\n  border-bottom: 1px solid gainsboro;\n  padding: 0px 0px 5px 0px;\n  margin: 5px 0 0 0px;\n}\n.botCard .newBorderDiv .TitleText {\n  font-size: 14px;\n  color: #505050;\n  font-weight: bold;\n}\n.botCard .newBorderDiv .subTitleText {\n  font-size: 11px;\n  margin: 5px 0 0 0;\n}\n.botCard .newBorderDiv .greenclr {\n  color: var(--headerColor);\n}\n.botCard .newBorderDiv .redclr {\n  color: #e70f0f;\n}\n.botCard .newBorderDiv .balanceText {\n  font-size: 12px;\n}\n.botCard .newBorderDiv:nth-last-child(1) {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL2FjY291bnRzdGF0ZW1lbnQvYWNjb3VudHN0YXRlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxtQ0FBQTtFQUFtQyxpQkFBQTtBQUdoRDtBQUZFO0VBQWMsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLFdBQUE7RUFBVyxxQkFBQTtFQUFxQixXQUFBO0FBU2hGO0FBUkU7RUFBTyw4QkFBQTtFQUE4QixtQkFBQTtFQUFtQiwrQkFBQTtFQUErQixnQkFBQTtFQUNyRixnR0FBQTtBQWNKO0FBYkk7RUFBSSxXQUFBO0VBQVcsWUFBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFrQi9CO0FBakJJO0VBQVksK0JBQUE7RUFBK0IsZUFBQTtFQUFlLG9CQUFBO0FBc0I5RDtBQXJCSTtFQUFZLCtCQUFBO0VBQStCLGVBQUE7RUFBZSxhQUFBO0VBQWEsaUJBQUE7QUEyQjNFO0FBdkJBO0VBQVMsZ0NBQUE7RUFBZ0MsbUJBQUE7RUFBbUIsVUFBQTtFQUFVLGdCQUFBO0FBOEJ0RTtBQTdCRTtFQUFjLGtDQUFBO0VBQWtDLHdCQUFBO0VBQXdCLG1CQUFBO0FBa0MxRTtBQWpDSTtFQUFXLGVBQUE7RUFBZSxjQUFBO0VBQWMsaUJBQUE7QUFzQzVDO0FBckNJO0VBQWMsZUFBQTtFQUFlLGlCQUFBO0FBeUNqQztBQXhDSTtFQUFVLHlCQUFBO0FBMkNkO0FBMUNJO0VBQVEsY0FBQTtBQTZDWjtBQTVDSTtFQUFhLGVBQUE7QUErQ2pCO0FBN0NFO0VBQWdDLG1CQUFBO0FBZ0RsQyIsImZpbGUiOiJzcmMvYXBwL1JlZGVlbU1vZHVsZS9hY2NvdW50c3RhdGVtZW50L2FjY291bnRzdGF0ZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsQmFsRGl2e2JhY2tncm91bmQ6dmFyKC0taGVhZGVyTGlnaHRDb2xvcik7bWluLWhlaWdodDoyMDBweDtcbiAgLkF2YWlsQmFsVGV4dHtmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO21hcmdpbjowcHg7bGV0dGVyLXNwYWNpbmc6MC41cHg7Y29sb3I6I2ZmZjt9XG4gIC5iZ0RpdntiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOjEwcHg7Ym94LXNoYWRvdzowcHggNXB4IDVweCAjYTBhMGEwO3BhZGRpbmc6NXB4IDVweDtcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNiZWNmYWIsICNkNWU4YmIpO2JveC1zaGFkb3c6IDBweCAtNXB4IDJweCAjZDVlOGJiOyovXG4gICAgaW1ne3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b2JqZWN0LWZpdDpjb250YWluO31cbiAgICAuY3JlZGl0VGV4dHtjb2xvcjp2YXIoLS1oZWFkZXJUaXRsZU9yTWVudSk7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjEwcHggMCA1cHggMDt9XG4gICAgLmFtb3VudFRleHR7Y29sb3I6dmFyKC0taGVhZGVyVGl0bGVPck1lbnUpO2ZvbnQtc2l6ZToxOHB4O21hcmdpbjo1cHggMDtmb250LXdlaWdodDpib2xkO31cbiAgfVxufVxuXG4uYm90Q2FyZHtib3JkZXItcmFkaXVzOjI1cHggMjVweCAwcHggMHB4O21hcmdpbjotMjVweCAwIDAgMDt6LWluZGV4Ojk7YmFja2dyb3VuZDojZmZmO1xuICAubmV3Qm9yZGVyRGl2e2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjBweCAwcHggNXB4IDBweDttYXJnaW46NXB4IDAgMCAwcHg7XG4gICAgLlRpdGxlVGV4dHtmb250LXNpemU6MTRweDtjb2xvcjojNTA1MDUwO2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgIC5zdWJUaXRsZVRleHR7Zm9udC1zaXplOjExcHg7bWFyZ2luOjVweCAwIDAgMDt9XG4gICAgLmdyZWVuY2xye2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4gICAgLnJlZGNscntjb2xvcjpyZ2IoMjMxLCAxNSwgMTUpfVxuICAgIC5iYWxhbmNlVGV4dHtmb250LXNpemU6MTJweDt9XG4gIH1cbiAgLm5ld0JvcmRlckRpdjpudGgtbGFzdC1jaGlsZCgxKXtib3JkZXItYm90dG9tOm5vbmU7fVxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/RedeemModule/accountstatement/accountstatement.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/RedeemModule/accountstatement/accountstatement.page.ts ***!
  \************************************************************************/
/*! exports provided: AccountstatementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountstatementPage", function() { return AccountstatementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");





let AccountstatementPage = class AccountstatementPage {
    constructor(storageService, zone, apiservices) {
        this.storageService = storageService;
        this.zone = zone;
        this.apiservices = apiservices;
        this.myinfiniteScrollCall = false;
        this.errorMessage = "";
        this.value = 0;
        this.showErrorImage = "";
        this.no_data_message = "";
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.todayAccountStatementList();
        });
    }
    todayAccountStatementList() {
        this.zone.run(() => {
            console.log("Account Statement of Redeeem api function==");
            let apiKey = { "limit": this.value };
            console.log("Account Statement of Redeeem api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].accountStatementListApi, apiKey).subscribe((result) => {
                console.log("Account Statement of Redeeem Api Result==", result);
                this.allHistoryData = result;
                this.pageHeader = result.data.settings.page_header;
                if (result.status == 1 || result.status == '1') {
                    if (this.todayListResult == undefined) {
                        this.todayListResult = result.data.history;
                        console.log("Account Statement of Redeeem if1==", this.todayListResult.length);
                    }
                    else {
                        this.todayListResult = this.todayListResult.concat(result.data.history);
                        console.log("Account Statement of Redeeem else1==", this.todayListResult);
                    }
                    if (this.myinfiniteScrollCall == true) {
                        console.log("Account Statement of Redeeem if2==", this.todayListResult);
                        this.myInfiniteScroll.target.complete();
                        this.errorMessage = "";
                        this.myinfiniteScrollCall = false;
                    }
                    console.log("Account Statement of Redeeem data1==", this.todayListResult);
                    console.log("Account Statement of Redeeem data2==", this.errorMessage);
                }
                else {
                    this.errorMessage = result.message;
                    if (this.value == 0) {
                        this.showErrorImage = result.data.settings.no_data_image;
                    }
                    else {
                        this.no_data_message = result.data.settings.no_data_msg;
                    }
                    console.log("Account Statement of Redeeem12==", this.todayListResult);
                    if (this.myinfiniteScrollCall == true) {
                        console.log("Account Statement of Redeeem123==", this.todayListResult);
                        this.myInfiniteScroll.target.complete();
                        this.myinfiniteScrollCall = false;
                    }
                }
            }, (err) => {
                console.log("Account Statement of Redeeem error==", err);
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Infinite Scroll function");
        setTimeout(() => {
            this.value = this.todayListResult.length;
            console.log("Infinite scroll value==", this.value);
            this.myInfiniteScroll = infiniteScroll;
            this.todayAccountStatementList();
        }, 500);
    }
};
AccountstatementPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] }
];
AccountstatementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accountstatement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accountstatement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/accountstatement/accountstatement.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accountstatement.page.scss */ "./src/app/RedeemModule/accountstatement/accountstatement.page.scss")).default]
    })
], AccountstatementPage);



/***/ })

}]);
//# sourceMappingURL=RedeemModule-accountstatement-accountstatement-module-es2015.js.map