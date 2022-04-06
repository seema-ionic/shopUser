(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-left\">{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src='../../assets/icon/sidemenuIcon.svg' style=\"width:20px;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content style=\"--background:gainsboro;\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <div class=\"padd07\" *ngIf=\"alertListData\">    \n    <div class=\"alertDiv\" *ngFor=\"let listArr of alertListData;\" >\n      <div tappable (click)=\"goToPage(listArr)\">\n        <ion-row>\n          <ion-col [size]=\"8\" class=\"autoMargin\">\n            <p class=\"noMargin nameText\">{{listArr?.module_name}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"ion-text-right ion-no-padding\">\n            <ion-button *ngIf=\"listArr?.is_btnapplicable==1 || listArr?.is_btnapplicable=='1'\" class=\"dynamicSmallButtonOutline\" style=\"margin:0px;\">{{listArr?.btn_text}}</ion-button>\n          </ion-col>\n          <ion-col [size]=\"2\" class=\"ion-no-padding autoMargin\">\n            <img [src]=\"listArr?.icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n          </ion-col>\n          <ion-col [size]=\"10\" class=\"ion-no-padding autoMargin\">\n            <ion-row>\n   \n              <ion-col [size]=\"12\">\n                <p class=\"noMargin discriptionText\">{{listArr?.alert_template}}</p>\n              </ion-col>\n              <ion-col [size]=\"12\" class=\"autoMargin\"><p class=\"noMargin dateText\">{{listArr?.created_on}}</p></ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </div>  \n    </div>\n  </div> \n\n\n\n\n\n  \n  <div *ngIf=\"!alertListData && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'alertTab'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!alertListData && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && alertListData\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && alertListData\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_9__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alertDiv {\n  margin: 10px 0;\n  border-bottom: 0px solid #bfbfbf;\n  padding: 10px;\n  background: #fff;\n}\n.alertDiv .bgcolorShowGray, .alertDiv .bgcolorShowWhite {\n  padding: 5px;\n}\n.alertDiv .bgcolorShowGray {\n  background-color: #f1f1f1;\n}\n.alertDiv .bgcolorShowWhite {\n  background-color: #fff;\n}\n.alertDiv img {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.alertDiv .nameText {\n  font-size: 15px;\n  font-weight: bold;\n}\n.alertDiv .discriptionText {\n  font-size: 16px;\n  color: #565656;\n}\n.alertDiv .dateText {\n  font-size: 10px;\n}\n.alertDiv:nth-last-child(1) {\n  border: none;\n}\n.padd07 {\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUFVLGNBQUE7RUFBYyxnQ0FBQTtFQUFnQyxhQUFBO0VBQWEsZ0JBQUE7QUFGckU7QUFHRTtFQUFtQyxZQUFBO0FBQXJDO0FBQ0U7RUFBaUIseUJBQUE7QUFFbkI7QUFERTtFQUFrQixzQkFBQTtBQUlwQjtBQUhFO0VBQUksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFPakI7QUFORTtFQUFVLGVBQUE7RUFBZSxpQkFBQTtBQVUzQjtBQVRFO0VBQWlCLGVBQUE7RUFBZSxjQUFBO0FBYWxDO0FBWkU7RUFBVSxlQUFBO0FBZVo7QUFiQTtFQUE0QixZQUFBO0FBaUI1QjtBQWhCQTtFQUFRLFlBQUE7QUFvQlIiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKSB7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG4gICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbiAgfVxuLmFsZXJ0RGl2e21hcmdpbjoxMHB4IDA7Ym9yZGVyLWJvdHRvbTowcHggc29saWQgI2JmYmZiZjtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZDojZmZmO1xuICAuYmdjb2xvclNob3dHcmF5LC5iZ2NvbG9yU2hvd1doaXRle3BhZGRpbmc6NXB4O31cbiAgLmJnY29sb3JTaG93R3JheXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9XG4gIC5iZ2NvbG9yU2hvd1doaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjt9XG4gIGltZ3t3aWR0aDoxMDAlO29iamVjdC1maXQ6Y29udGFpbjt9XG4gIC5uYW1lVGV4dHtmb250LXNpemU6MTVweDtmb250LXdlaWdodDpib2xkO31cbiAgLmRpc2NyaXB0aW9uVGV4dHtmb250LXNpemU6MTZweDtjb2xvcjojNTY1NjU2O31cbiAgLmRhdGVUZXh0e2ZvbnQtc2l6ZToxMHB4O31cbn1cbi5hbGVydERpdjpudGgtbGFzdC1jaGlsZCgxKXtib3JkZXI6bm9uZTt9XG4ucGFkZDA3e3BhZGRpbmc6IDdweDt9Il19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/assets/constant */ "./src/assets/constant.ts");







let Tab3Page = class Tab3Page {
    constructor(router, storageService, zone, apiservices, sendData) {
        this.router = router;
        this.storageService = storageService;
        this.zone = zone;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.showErrorImage = "";
        this.no_data_message = "";
        this.value = 0;
        this.myinfiniteScrollCall = false;
        this.errorMessage = "";
    }
    doRefresh(event) {
        console.log("Begin async opeations==");
        // this.value=0;
        setTimeout(() => {
            setTimeout(() => {
                this.value = 0;
                this.errorMessage = "";
                this.showErrorImage = "";
                this.no_data_message = "";
                this.alertListData = undefined;
                this.alertListApi();
            }, 500);
            console.log("async operation has ended==");
            event.target.complete();
        }, 2000);
    }
    ngOnInit() {
        this.apiservices.show_alert_dot = 0;
        // console.log(" this.apiservices.show_alert_dot==>", this.apiservices.show_alert_dot);
        // this.storageService.getStorage().then(res=>{
        //   this.alertListApi();
        //   console.log("ionic lifecycle called getStorage==>",res);
        // });
    }
    ionViewDidEnter() {
        this.storageService.getStorage().then(res => {
            console.log("ionic lifecycle called getStorage==>", res);
            this.alertListData = undefined;
            this.value = 0;
            this.alertListApi();
        });
    }
    alertListApi() {
        this.zone.run(() => {
            console.log("Alert List api function== ");
            let apiKey = {
                "limit": this.value,
            };
            console.log("Alert List api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].alertList, apiKey).subscribe((result) => {
                console.log("Alert List Api Result== ", result);
                this.getDataList = result;
                this.pageHeader = result.data.settings.page_header;
                if (result.status == 1 || result.status == '1') {
                    if (this.alertListData == undefined) {
                        this.alertListData = result.data.list;
                        console.log("noticeBoard List Infinite Scroll if1==", this.alertListData);
                    }
                    else {
                        this.alertListData = this.alertListData.concat(result.data.list);
                        console.log("noticeBoard List Infinite Scroll else1==", this.alertListData);
                    }
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll if2==", this.alertListData);
                        this.myInfiniteScroll.target.complete();
                        this.errorMessage = "";
                        this.myinfiniteScrollCall = false;
                    }
                    console.log("thoughtOftheDayApi List data1==", this.alertListData);
                    console.log("thoughtOftheDayApi List data2==", this.errorMessage);
                }
                else {
                    console.log("noticeBoard List Infinite Scroll12==", this.alertListData);
                    this.errorMessage = result.message;
                    this.no_data_message = result.data.settings.no_data_msg;
                    this.showErrorImage = result.data.settings.no_data_image;
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll123==", this.alertListData);
                        this.myInfiniteScroll.target.complete();
                        this.myinfiniteScrollCall = false;
                    }
                }
                // if (result.status == 1) {
                //   if(this.alertListData==undefined){
                //     console.log("Alert List response 3== ", result);
                //     this.alertListData = result.data;
                //   }else{
                //     console.log("Alert List response 4== ", result);
                //     if(this.alertListData[this.alertListData.length-1].created_on==result.data[0].created_on){
                //       for(let i=0; i<result.data.length;i++){
                //       if(this.alertListData[this.alertListData.length-1].created_on==result.data[i].created_on){
                //           this.alertListData[this.alertListData.length-1]= this.alertListData[this.alertListData.length-1].concat(result.data[i]);    
                //         }else{
                //           this.alertListData= this.alertListData.concat(result.data[i]);
                //         }
                //       }
                //     }else{
                //       this.alertListData= this.alertListData.concat(result.data);
                //     }
                //   }
                //   if(this.myinfiniteScrollCall==true){
                //     this.myInfiniteScroll.target.complete();
                //     this.myinfiniteScrollCall=false;
                //   }
                //   console.log("Alert List data1==", this.alertListData);
                //   this.errorMessage="";
                //   console.log("Alert List data2==", this.errorMessage);
                //   this.showErrorImage="";
                // }else{
                //   this.errorMessage = result.message;
                //   this.showErrorImage=result.error_image;
                //   if(this.myinfiniteScrollCall==true){
                //     this.myInfiniteScroll.target.complete();
                //     this.myinfiniteScrollCall=false;
                //   }
                // }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Infinite Scroll function");
        setTimeout(() => {
            this.value = this.alertListData.length;
            console.log("Infinite scroll value==", this.value);
            this.myInfiniteScroll = infiniteScroll;
            this.alertListApi();
        }, 500);
    }
    goToPage(listArr) {
        this.zone.run(() => {
            if (listArr.read == 0 || listArr.read == '0') {
                this.brandDetailFunc(listArr);
            }
            else {
            }
            this.sendData.alldata = listArr; // this data transfer use for "notice-detail", "hr-policy-detail"
            this.sendData.myParam = listArr; // this data transfer use for "communication-detail", "say-cheers-detail"
            if (listArr.pagename != "") {
                this.router.navigate([listArr.pagename]);
            }
            else { }
        });
    }
    brandDetailFunc(listArr) {
        this.zone.run(() => {
            let apiKey = {
                notification_id: listArr.notification_id
            };
            console.log("brand pending api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].alertRead, apiKey).subscribe((result) => {
                console.log("brand pending Api Result==", result);
                if (result.status == 1 || result.status == '1') {
                    listArr.read = '1';
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = result.message;
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map