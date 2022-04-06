(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-award-employee-list-award-employee-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-list/award-employee-list.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-list/award-employee-list.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{dashData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p><b>{{dashData?.page_settings?.search_title}}</b>\n  <p>\n    <ion-searchbar class=\"ion-no-padding\" showCancelButton=\"never\" [placeholder]=\"dashData?.page_settings?.search_placeholder\"\n      [(ngModel)]=\"searhString\" (ngModelChange)=\"onInputCapture($event)\"  (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n    <br>\n<div *ngIf=\"DashboardDataSelectedUser?.length>0\">\n    <ion-row *ngFor=\"let cheerData of DashboardDataSelectedUser; let in=index;\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\" [style.background]=\"'url('+cheerData?.search_user_bg+')'\"\n        class=\"customCard bgDiv\" >\n        <ion-row>\n          <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\" >\n            <img [src]=\"cheerData?.nominee_image\" class=\"nomineeImage\"\n              onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" />\n          </ion-col>\n          <ion-col [size]=\"7\" class=\"ion-text-left\">\n            <p class=\"ion-no-margin nameText\">{{cheerData?.name}}</p>\n            <p class=\"ion-no-margin marginText font11\">{{cheerData?.designation}}</p>\n            <p class=\"ion-no-margin font11\">{{cheerData?.department}}</p>\n            <p class=\"ion-no-margin marginText font11\">{{cheerData?.cost_center}}</p>\n\n          </ion-col>\n          <ion-col [size]=\"1\" *ngIf=\"cheerData?.is_selected==1\" tappable (click)=\"remove(in,cheerData)\">\n            <ion-icon name=\"close-outline\" class=\"closeRed\"></ion-icon>\n\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf=\"previousDashboard.nominationId==''\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\" *ngIf=\"showcancel==true \">\n        <ion-button *ngIf=\"dashData?.page_settings?.button_data?.button_show==true\" \n        tappable (click)=\"NextFun()\" class=\"dynamicButtonColor\">{{dashData?.page_settings?.button_data?.button_text}}</ion-button>\n      </ion-col>\n      </ion-row>\n    <ion-row *ngIf=\"previousDashboard.nominationId!=''\">\n      <ion-col [size]=\"6\" class=\"ion-text-center\" *ngIf=\"showcancel==true\">\n        <ion-button *ngIf=\"dashData?.page_settings?.cancel_btn_data?.button_show==true\" \n        tappable (click)=\"cancelFun()\" class=\"cancelBttn\">{{dashData?.page_settings?.cancel_btn_data?.button_text}}</ion-button>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" *ngIf=\"showcancel==true\">\n        <ion-button *ngIf=\"dashData?.page_settings?.button_data?.button_show==true\" \n        tappable (click)=\"updationFun()\" class=\"dynamicButtonColor\">{{dashData?.page_settings?.button_data?.button_text}}</ion-button>\n      </ion-col>\n\n\n      \n    </ion-row>\n\n  </div>\n    <ion-row *ngFor=\"let cheerData of DashboardData; let i=index;\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\" [style.background]=\"'url('+cheerData?.search_user_bg+')'\"\n        class=\"customCard bgDiv\" >\n        <ion-row>\n          <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\" tappable (click)=\"selcedDataFun(i,cheerData)\">\n            <img [src]=\"cheerData?.nominee_image\" class=\"nomineeImage\"\n              onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" />\n          </ion-col>\n          <ion-col [size]=\"8\" class=\"ion-text-left\" tappable (click)=\"selcedDataFun(i,cheerData)\">\n            <p class=\"ion-no-margin nameText\">{{cheerData?.name}}</p>\n            <p class=\"ion-no-margin marginText font11\">{{cheerData?.designation}}</p>\n            <p class=\"ion-no-margin font11\">{{cheerData?.department}}</p>\n            <p class=\"ion-no-margin marginText font11\">{{cheerData?.cost_center}}</p>\n\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n\n  <div *ngIf=\"errorMessage\">\n    <p class=\"ion-text-center\">{{errorMessage}}</p>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/R&RModule/award-employee-list/award-employee-list-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-list/award-employee-list-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AwardEmployeeListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeeListPageRoutingModule", function() { return AwardEmployeeListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _award_employee_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award-employee-list.page */ "./src/app/R&RModule/award-employee-list/award-employee-list.page.ts");




const routes = [
    {
        path: '',
        component: _award_employee_list_page__WEBPACK_IMPORTED_MODULE_3__["AwardEmployeeListPage"]
    }
];
let AwardEmployeeListPageRoutingModule = class AwardEmployeeListPageRoutingModule {
};
AwardEmployeeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AwardEmployeeListPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/award-employee-list/award-employee-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-list/award-employee-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AwardEmployeeListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeeListPageModule", function() { return AwardEmployeeListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _award_employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award-employee-list-routing.module */ "./src/app/R&RModule/award-employee-list/award-employee-list-routing.module.ts");
/* harmony import */ var _award_employee_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award-employee-list.page */ "./src/app/R&RModule/award-employee-list/award-employee-list.page.ts");







let AwardEmployeeListPageModule = class AwardEmployeeListPageModule {
};
AwardEmployeeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _award_employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardEmployeeListPageRoutingModule"]
        ],
        declarations: [_award_employee_list_page__WEBPACK_IMPORTED_MODULE_6__["AwardEmployeeListPage"]]
    })
], AwardEmployeeListPageModule);



/***/ }),

/***/ "./src/app/R&RModule/award-employee-list/award-employee-list.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-list/award-employee-list.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nomineeImage {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n\n.iconDiv {\n  height: 23px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.bgDiv {\n  background-size: 100% 100% !important;\n  background-repeat: no-repeat !important;\n}\n\n.marginText {\n  margin: 5px 0px;\n}\n\n.font11 {\n  font-size: 11px;\n}\n\n.customCard {\n  box-shadow: 0px 0px 5px 0px #a99e9e;\n}\n\nion-searchbar {\n  padding: 0px;\n  --border-radius: 12px;\n}\n\n.cancelBttn {\n  border: 1px solid black;\n  text-transform: initial;\n  border-radius: 5px;\n  color: black;\n  --background: white;\n}\n\n.closeRed {\n  color: red;\n  font-weight: bold;\n  font-size: 16px;\n  border-radius: 50%;\n  border: 2px solid red;\n  position: absolute;\n  margin: -19px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWVtcGxveWVlLWxpc3QvYXdhcmQtZW1wbG95ZWUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxZQUFBO0VBQWEsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7RUFBb0Isa0JBQUE7QUFLM0Q7O0FBSkE7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFVaEM7O0FBVEE7RUFBTyxxQ0FBQTtFQUFzQyx1Q0FBQTtBQWM3Qzs7QUFiQTtFQUFZLGVBQUE7QUFpQlo7O0FBaEJBO0VBQVEsZUFBQTtBQW9CUjs7QUFuQkE7RUFBWSxtQ0FBQTtBQXVCWjs7QUF0QkE7RUFBYyxZQUFBO0VBQWMscUJBQUE7QUEyQjVCOztBQTFCQTtFQUFZLHVCQUFBO0VBQXVCLHVCQUFBO0VBQXlCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxtQkFBQTtBQWtDNUY7O0FBakNBO0VBQVUsVUFBQTtFQUFXLGlCQUFBO0VBQWtCLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIscUJBQUE7RUFBc0Isa0JBQUE7RUFBbUIsaUJBQUE7QUEyQ25IIiwiZmlsZSI6InNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWVtcGxveWVlLWxpc3QvYXdhcmQtZW1wbG95ZWUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9taW5lZUltYWdle2hlaWdodDogNzBweDt3aWR0aDogNzBweDtvYmplY3QtZml0OiBjb250YWluO2JvcmRlci1yYWRpdXM6IDUwJTt9XG4uaWNvbkRpdntoZWlnaHQ6MjNweDt3aWR0aDoxMDAlO29iamVjdC1maXQ6Y29udGFpbjt9XG4uYmdEaXZ7YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7fVxuLm1hcmdpblRleHR7bWFyZ2luOiA1cHggMHB4O31cbi5mb250MTF7Zm9udC1zaXplOiAxMXB4O31cbi5jdXN0b21DYXJke2JveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjYTk5ZTllO31cbmlvbi1zZWFyY2hiYXJ7cGFkZGluZzogMHB4OyAtLWJvcmRlci1yYWRpdXM6IDEycHg7fVxuLmNhbmNlbEJ0dG57Ym9yZGVyOjFweCBzb2xpZCBibGFjazt0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDsgYm9yZGVyLXJhZGl1czogNXB4O2NvbG9yOmJsYWNrOyAtLWJhY2tncm91bmQ6IHdoaXRlO31cbi5jbG9zZVJlZHtjb2xvcjogcmVkO2ZvbnQtd2VpZ2h0OiBib2xkO2ZvbnQtc2l6ZTogMTZweDtib3JkZXItcmFkaXVzOiA1MCU7Ym9yZGVyOiAycHggc29saWQgcmVkO3Bvc2l0aW9uOiBhYnNvbHV0ZTttYXJnaW46IC0xOXB4IDhweDt9Il19 */");

/***/ }),

/***/ "./src/app/R&RModule/award-employee-list/award-employee-list.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-list/award-employee-list.page.ts ***!
  \***************************************************************************/
/*! exports provided: AwardEmployeeListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeeListPage", function() { return AwardEmployeeListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");








let AwardEmployeeListPage = class AwardEmployeeListPage {
    constructor(zone, apiservices, stoargeServices, sendData, router, navctrl) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.stoargeServices = stoargeServices;
        this.sendData = sendData;
        this.router = router;
        this.navctrl = navctrl;
        this.DashboardData = [];
        this.searhString = '';
        this.nomiessAutoId = [];
        this.nomineeFinalArr = [];
        // selectedInd: any;
        this.showcancel = false;
        this.DashboardDataSelectedUser = [];
    }
    ngOnInit() {
        this.previousDashboard = this.sendData.alldata;
        console.log("this.nomiessAutoId.length", this.previousDashboard);
        // if (this.previousDashboard.nominationId == '') {
        // } else {
        //   this.previousDashboard.mainData.forEach(element => {
        //     this.nomiessAutoId.push(element.nominee_id);
        //   });
        //   this.selectedNominees();
        // }
        this.awardDashboardFun(this.searhString);
    }
    onInputCapture(ev) {
        console.log('ev val', ev);
        if (ev.trim() != '') {
            this.DashboardData = [];
            this.errorMessage = '';
            this.awardDashboardFun(ev);
        }
        else {
            this.errorMessage = "";
            this.awardDashboardFun('');
        }
        this.selectedNominees();
    }
    remove(ind, item) {
        console.log('ind', ind);
        item.is_selected = 0;
        console.log('ind1', this.nomiessAutoId);
        this.nomiessAutoId.splice(ind, 1);
        this.DashboardDataSelectedUser.splice(ind, 1);
        console.log('this.nomineeFinalArr', this.nomineeFinalArr);
        this.DashboardData.unshift(item);
        console.log('ind', this.nomiessAutoId);
        console.log('DashboardDataSelectedUser', this.DashboardDataSelectedUser);
        this.selectedNominees();
    }
    cancelFun() {
        this.navctrl.pop();
    }
    NextFun() {
        this.sendData.alldata = { allData: this.DashboardDataSelectedUser, previous: this.previousDashboard, cur_nominees: this.nomiessAutoId };
        if (this.previousDashboard.mainData.max_user_required == 0) {
            if (this.nomiessAutoId.length < this.previousDashboard.mainData.minimum_user_required) {
                return (this.apiservices.showToastMessage(this.previousDashboard.mainData.nomination_err_msg, 'top', 3000, 'redBg'));
            }
        }
        else {
            if (this.nomiessAutoId.length > this.previousDashboard.mainData.minimum_user_required &&
                this.nomiessAutoId.length < this.previousDashboard.mainData.max_user_required) {
                return (this.apiservices.showToastMessage(this.previousDashboard.mainData.nomination_err_msg, 'top', 3000, 'redBg'));
            }
        }
        this.router.navigate(['/award-employee-preview']);
    }
    updationFun() {
        console.log("update nomiessAutoId", this.nomiessAutoId.length);
        console.log('this.previousDashboard.mainData', this.previousDashboard.mainData);
        if (this.nomiessAutoId.length <= 0) {
            return (this.apiservices.showToastMessage('Please select nominees', 'top', 3000, 'redBg'));
        }
        console.log('this.previousDashboard.mainData.max_user_required', this.previousDashboard.mainData.max_user_required);
        console.log('this.previousDashboard.mainData.minimum_user_required', this.previousDashboard.mainData.minimun_user_required);
        if (this.previousDashboard.mainData.max_user_required == '0') {
            if (this.nomiessAutoId.length < this.previousDashboard.mainData.minimun_user_required) {
                return (this.apiservices.showToastMessage(this.previousDashboard.mainData.nomination_err_msg, 'top', 3000, 'redBg'));
            }
        }
        else {
            if (this.nomiessAutoId.length > this.previousDashboard.mainData.minimun_user_required &&
                this.nomiessAutoId.length < this.previousDashboard.mainData.max_user_required) {
                return (this.apiservices.showToastMessage(this.previousDashboard.mainData.nomination_err_msg, 'top', 3000, 'redBg'));
            }
        }
        this.DashboardDataSelectedUser.forEach(element => {
            if (this.nomiessAutoId.indexOf(element.emp_id) == -1) {
                this.nomiessAutoId.push(element.emp_id);
            }
        });
        this.selectedNominees();
        console.log("this.nomiessAutoId.length", this.nomiessAutoId);
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    employee_id: storedData.employeeID,
                    cur_nominees: this.nomineeFinalArr,
                    nomination_id: this.previousDashboard.nominationId
                };
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].updateNominationApi, apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    if (result.status == 1) {
                        this.navctrl.pop();
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
    selcedDataFun(ind, item) {
        // this.selectedInd = ind;
        console.log(`this.nomiessAutoId.length ${this.nomiessAutoId.length}`);
        if (this.previousDashboard.mainData.max_user_required == 0) {
        }
        else {
            if (this.nomiessAutoId.length > this.previousDashboard.mainData.minimum_user_required &&
                this.nomiessAutoId.length < this.previousDashboard.mainData.max_user_required) {
                this.isError = 1;
            }
            else {
                this.nomiessAutoId = [];
            }
        }
        if (this.nomiessAutoId.indexOf(item.emp_id) == -1) {
            this.nomiessAutoId.push(item.emp_id);
            if (this.previousDashboard.mainData.team_type == '1') {
                if (this.DashboardDataSelectedUser.length >= 1) {
                    return;
                }
            }
            this.DashboardDataSelectedUser.push(item);
            this.DashboardData.splice(ind, 1);
            item.is_selected = 1;
            this.showcancel = true;
            console.log('this.this.DashboardDataSelectedUser val', this.DashboardDataSelectedUser);
            console.log('this.nomiessAutoId val', this.nomiessAutoId);
        }
        console.log('this.isError', this.isError);
        this.selectedNominees();
        // this.nomiessAutoId.push(item.emp_id);
    }
    selectedNominees() {
        this.nomineeFinalArr = [];
        console.log('select this.nomiessAutoId', this.nomiessAutoId);
        if (this.nomiessAutoId.length > 0) {
            for (let i = 0; i < this.nomiessAutoId.length; i++) {
                this.nomineeFinalArr.push({ 'nominee_id': this.nomiessAutoId[i] });
            }
        }
        console.log('select this.nomineeFinalArr', this.nomineeFinalArr);
    }
    onCancel(event) {
        console.log("cancel event==", event);
    }
    awardDashboardFun(searhString) {
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    employee_id: storedData.employeeID,
                    cur_nominees: this.nomineeFinalArr,
                    key: searhString,
                    nomination_id: this.previousDashboard.nominationId || ''
                };
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].awardEmployeeSearchApi, apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    this.dashData = result;
                    if (result.status == 1) {
                        this.DashboardData = result.search_list;
                        if (result.selected_nominees == undefined) {
                            // this.DashboardDataSelectedUser=[];
                        }
                        else {
                            this.showcancel = true;
                            this.DashboardDataSelectedUser = result.selected_nominees;
                            this.DashboardDataSelectedUser.forEach(element => {
                                this.nomiessAutoId.push(element.emp_id);
                            });
                            this.selectedNominees();
                        }
                        this.errorMessage = '';
                    }
                    else {
                        this.errorMessage = result.message;
                        // this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.apiservices.hideLoader();
                });
            });
        }));
    }
};
AwardEmployeeListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__["ApiservicesService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AwardEmployeeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-award-employee-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./award-employee-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-list/award-employee-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./award-employee-list.page.scss */ "./src/app/R&RModule/award-employee-list/award-employee-list.page.scss")).default]
    })
], AwardEmployeeListPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-award-employee-list-award-employee-list-module-es2015.js.map