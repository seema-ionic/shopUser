(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-filter-list-filter-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/filter-list/filter-list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/filter-list/filter-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Filter</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n     <ion-button (click)=\"clearFilter()\" class=\"btnClear\"> Clear</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"leftDiv\">\n    <ion-row>\n      <ion-col [size]=\"4\" class=\"padd\">\n        <ion-row *ngFor=\"let Data of filterData; let i=index\" (click)=\"applydata(Data,i)\">\n          <ion-col [size]=\"12\" [ngClass]=\"{colorchange: changecolorcheck==i,colorsame: changecolorcheck!=i}\">\n            <p class=\"parasize ion-text-left\">{{Data?.filter_name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col [size]=\"8\" class=\"newCol8\">\n        <ion-row *ngFor=\"let seconddata of applydataarr; let j=index\" \n        (click)=\"select(seconddata,j)\" [ngClass]=\"{colorchange1:seconddata?.isSelected=='1'}\">\n          <!-- <ion-col [size]=\"3\" class=\"mrauto\">\n            <div> <img *ngIf=\"seconddata.logo\" [src]=\"seconddata.logo\" class=\"imgcss\" /></div>\n          </ion-col> -->\n          <ion-col [size]=\"12\" class=\"mrauto\">\n            <p class=\"parasize\">{{seconddata.name}}</p>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-item *ngFor=\"let seconddata of applydataarr\">\n          <ion-label>{{seconddata.name}}</ion-label>\n          <ion-checkbox slot=\"start\"  (ionChange)=\"selectval($event,seconddata)\"></ion-checkbox>\n        </ion-item> -->\n        <br><br><br><br>\n      </ion-col>\n    </ion-row>\n  <!-- </div>\n  <div class=\"rightDiv\"> -->\n    <!-- <div class=\"bottombton\">\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"centerelement\">\n          <ion-button class=\"themeBtn\" tappable (click)=\"ClickOnNext()\">Apply</ion-button>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <div class=\"tempBtnDiv\">\n      <ion-row >\n          <ion-col [size]=\"4\" class=\"ion-text-center\">\n              <!-- <ion-button class=\"themeBtn\"  tappable (click)=\"todayAccountStatementList()\">Apply</ion-button> -->\n            </ion-col>\n        <ion-col [size]=\"8\" class=\"ion-text-center\">\n          <ion-button class=\"ionic_btn\"  tappable (click)=\"applyfun()\">Apply</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  \n  <!-- <ion-row>\n    <ion-col [size]=\"4\" class=\"padd\">\n      <ion-row *ngFor=\"let Data of filterData; let i=index\" (click)=\"applydata(Data,i)\">\n        <ion-col [size]=\"12\" [ngClass]=\"{colorchange: changecolorcheck==i,colorsame: changecolorcheck!=i}\">\n          <p class=\"parasize cntr\">{{Data.name}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col [size]=\"8\" class=\"newCol8\">\n      <ion-row *ngFor=\"let seconddata of applydataarr; let j=index\" (click)=\"select(seconddata,j)\" [ngClass]=\"{colorchange1: selectedindex==j,colorsame: selectedindex!=j}\">\n        <ion-col [size]=\"3\">\n          <img *ngIf=\"seconddata.logo\" [src]=\"seconddata.logo\" class=\"imgcss\" />\n        </ion-col>\n        <ion-col [size]=\"9\" class=\"mrauto\">\n          <p class=\"parasize\">{{seconddata.name}}</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-row> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/R&RModule/filter-list/filter-list-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/R&RModule/filter-list/filter-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FilterListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListPageRoutingModule", function() { return FilterListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-list.page */ "./src/app/R&RModule/filter-list/filter-list.page.ts");




const routes = [
    {
        path: '',
        component: _filter_list_page__WEBPACK_IMPORTED_MODULE_3__["FilterListPage"]
    }
];
let FilterListPageRoutingModule = class FilterListPageRoutingModule {
};
FilterListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterListPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/filter-list/filter-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/R&RModule/filter-list/filter-list.module.ts ***!
  \*************************************************************/
/*! exports provided: FilterListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListPageModule", function() { return FilterListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-list-routing.module */ "./src/app/R&RModule/filter-list/filter-list-routing.module.ts");
/* harmony import */ var _filter_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-list.page */ "./src/app/R&RModule/filter-list/filter-list.page.ts");







let FilterListPageModule = class FilterListPageModule {
};
FilterListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterListPageRoutingModule"]
        ],
        declarations: [_filter_list_page__WEBPACK_IMPORTED_MODULE_6__["FilterListPage"]]
    })
], FilterListPageModule);



/***/ }),

/***/ "./src/app/R&RModule/filter-list/filter-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/R&RModule/filter-list/filter-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leftDiv {\n  width: 100%;\n  background: #e5e5e8;\n  overflow: auto;\n}\n\n.rightDiv {\n  width: 66.7%;\n  right: 0;\n  background: #fff;\n}\n\n.rightDiv {\n  width: 66.7%;\n  right: 0;\n  background: #fff;\n}\n\n.newCol8 {\n  background: #fff !important;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  min-height: -webkit-fill-available;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n\n.rightDiv {\n  width: 66.7%;\n  right: 0;\n  background: #fff;\n}\n\n.leftDiv, .rightDiv {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  bottom: 0;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n}\n\n.parasize {\n  font-size: 15px;\n  margin-bottom: 3px;\n  margin-top: 3px;\n}\n\n.colorchange {\n  background: lightblue;\n  font-weight: bold;\n}\n\n.colorsame {\n  background: transparent;\n}\n\n.padd {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.cntr {\n  text-align: center;\n}\n\n.imgcss {\n  height: 32px;\n  width: 32px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.mrauto {\n  margin: auto;\n  margin-top: 0px;\n}\n\n.colorchange1 {\n  background: lightgray;\n}\n\n.bottombton {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.tempBtnDiv {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.btnClear {\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2ZpbHRlci1saXN0L2ZpbHRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUFTLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixjQUFBO0FBRTdDOztBQUFJO0VBQVUsWUFBQTtFQUFZLFFBQUE7RUFBUyxnQkFBQTtBQU1uQzs7QUFMSTtFQUFVLFlBQUE7RUFBWSxRQUFBO0VBQVMsZ0JBQUE7QUFXbkM7O0FBVkk7RUFBUywyQkFBQTtFQUE0QixrQkFBQTtFQUFtQixRQUFBO0VBQVMsTUFBQTtFQUFPLFNBQUE7RUFBVSxrQ0FBQTtFQUFtQywyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFvQnpIOztBQW5CSTtFQUFVLFlBQUE7RUFBWSxRQUFBO0VBQVMsZ0JBQUE7QUF5Qm5DOztBQXhCSTtFQUFxQixxQkFBQTtFQUF1QixrQkFBQTtFQUFvQixNQUFBO0VBQVEsV0FBQTtFQUFlLFNBQUE7RUFDdkYsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQXdCLFlBQUE7QUFpQzVCOztBQS9CSTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsZUFBQTtBQXFDakQ7O0FBcENJO0VBQWEscUJBQUE7RUFBcUIsaUJBQUE7QUF5Q3RDOztBQXhDSTtFQUFXLHVCQUFBO0FBNENmOztBQTNDSTtFQUFNLGlCQUFBO0VBQWtCLGtCQUFBO0FBZ0Q1Qjs7QUEvQ0k7RUFBTSxrQkFBQTtBQW1EVjs7QUFsREk7RUFBUSxZQUFBO0VBQWEsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUF3RHJDOztBQXZESTtFQUFRLFlBQUE7RUFBYSxlQUFBO0FBNER6Qjs7QUEzREk7RUFBYyxxQkFBQTtBQStEbEI7O0FBOURJO0VBQVksa0JBQUE7RUFBbUIsV0FBQTtFQUFZLE9BQUE7RUFBUSxRQUFBO0FBcUV2RDs7QUFwRUk7RUFBWSxlQUFBO0VBQWUsU0FBQTtFQUFTLE9BQUE7RUFBTyxRQUFBO0FBMkUvQzs7QUExRUk7RUFBVSxhQUFBO0FBOEVkIiwiZmlsZSI6InNyYy9hcHAvUiZSTW9kdWxlL2ZpbHRlci1saXN0L2ZpbHRlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgLmxlZnREaXZ7d2lkdGg6MTAwJTsgYmFja2dyb3VuZDogI2U1ZTVlODtvdmVyZmxvdzogYXV0bzsgfVxuICAgIC8vIGlvbi1jb250ZW50eyAtLWJhY2tncm91bmQ6ICNlNWU1ZTggIWltcG9ydGFudDsgfVxuICAgIC5yaWdodERpdnt3aWR0aDo2Ni43JTtyaWdodDogMDtiYWNrZ3JvdW5kOiAjZmZmO31cbiAgICAucmlnaHREaXZ7d2lkdGg6NjYuNyU7cmlnaHQ6IDA7YmFja2dyb3VuZDogI2ZmZjt9XG4gICAgLm5ld0NvbDh7YmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwO21pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7aGVpZ2h0OiBtYXgtY29udGVudDt9XG4gICAgLnJpZ2h0RGl2e3dpZHRoOjY2LjclO3JpZ2h0OiAwO2JhY2tncm91bmQ6ICNmZmY7fVxuICAgIC5sZWZ0RGl2LCAucmlnaHREaXZ7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHotaW5kZXg6IC0xOyAgIGJvdHRvbTogMDtcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5wYXJhc2l6ZXtmb250LXNpemU6IDE1cHg7bWFyZ2luLWJvdHRvbTogM3B4O21hcmdpbi10b3A6IDNweDt9XG4gICAgLmNvbG9yY2hhbmdle2JhY2tncm91bmQ6bGlnaHRibHVlO2ZvbnQtd2VpZ2h0OiBib2xkO31cbiAgICAuY29sb3JzYW1le2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cbiAgICAucGFkZHtwYWRkaW5nLWxlZnQ6IDBweDtwYWRkaW5nLXJpZ2h0OiAwcHg7fVxuICAgIC5jbnRye3RleHQtYWxpZ246IGNlbnRlcjt9XG4gICAgLmltZ2Nzc3toZWlnaHQ6IDMycHg7d2lkdGg6IDMycHg7b2JqZWN0LWZpdDogY29udGFpbjt9XG4gICAgLm1yYXV0b3ttYXJnaW46IGF1dG87bWFyZ2luLXRvcDogMHB4O31cbiAgICAuY29sb3JjaGFuZ2Uxe2JhY2tncm91bmQ6IGxpZ2h0Z3JheX1cbiAgICAuYm90dG9tYnRvbntwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwcHg7bGVmdDogMDtyaWdodDogMDt9XG4gICAgLnRlbXBCdG5EaXZ7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7fVxuICAgIC5idG5DbGVhcnstLWNvbG9yOndoaXRlO30iXX0= */");

/***/ }),

/***/ "./src/app/R&RModule/filter-list/filter-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/R&RModule/filter-list/filter-list.page.ts ***!
  \***********************************************************/
/*! exports provided: FilterListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListPage", function() { return FilterListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let FilterListPage = class FilterListPage {
    constructor(apiservices, navctrl, sendData, zone, storageService) {
        this.apiservices = apiservices;
        this.navctrl = navctrl;
        this.sendData = sendData;
        this.zone = zone;
        this.storageService = storageService;
        this.changecolorcheck = 0;
        this.clickcolor = true;
        this.clickcolor2 = false;
        this.showdata = false;
        this.value = 0;
        this.showFilterDiv = false;
        this.errorMessage = "";
        this.myinfiniteScrollCall = false;
        this.awardS = {};
        this.locationData = {};
        this.departmentData = {};
        this.awardType = {};
        this.categoryAuto_id = [];
        this.categoryAuto_id1 = [];
        this.categoryAuto_id2 = [];
        this.categoryAuto_id3 = [];
    }
    applydata(applydata, i) {
        this.zone.run(() => {
            //  this.categoryAuto_id=[];
            console.log('category data', applydata);
            console.log('categor index', i);
            this.selectedindex = undefined;
            this.changecolorcheck = i;
            this.branddata = applydata;
            console.log('categor index', i);
            this.applydataarr = applydata.filter_arr;
        });
    }
    select(selecteddata, j) {
        this.zone.run(() => {
            console.log('selecteddata data', selecteddata);
            console.log('selecteddata index', j);
            this.selectedindex = j;
            if (selecteddata.filter_name == "Awards") {
                var index = this.categoryAuto_id.indexOf(parseInt(selecteddata.id));
                if (index >= 0) {
                    selecteddata.isSelected = 0;
                    this.categoryAuto_id.splice(index, 1);
                    this.uniqueString = [...new Set(this.categoryAuto_id)].join(',');
                    console.log('this.uniqueString1', this.uniqueString);
                }
                else {
                    selecteddata.isSelected = 1;
                    this.categoryAuto_id.push(parseInt(selecteddata.id));
                    this.uniqueString = [...new Set(this.categoryAuto_id)].join(',');
                    console.log('this.uniqueString', this.uniqueString);
                    console.log('this.uniqueString', this.categoryAuto_id);
                }
                this.awardS = this.uniqueString;
                console.log('this.uniqueString767', this.awardS);
            }
            else if (selecteddata.filter_name == "Award Type") {
                var index = this.categoryAuto_id1.indexOf(parseInt(selecteddata.id));
                if (index >= 0) {
                    selecteddata.isSelected = 0;
                    this.categoryAuto_id1.splice(index, 1);
                    this.uniqueString = [...new Set(this.categoryAuto_id1)].join(',');
                    console.log('this.uniqueString1', this.uniqueString);
                }
                else {
                    selecteddata.isSelected = 1;
                    this.categoryAuto_id1.push(parseInt(selecteddata.id));
                    this.uniqueString = [...new Set(this.categoryAuto_id1)].join(',');
                    console.log('this.uniqueString', this.uniqueString);
                    console.log('this.uniqueString', this.categoryAuto_id1);
                }
                this.awardType = this.uniqueString;
                console.log('this.uniqueString767', this.awardType);
            }
            else if (selecteddata.filter_name == "Department") {
                var index = this.categoryAuto_id2.indexOf(parseInt(selecteddata.id));
                if (index >= 0) {
                    selecteddata.isSelected = 0;
                    this.categoryAuto_id2.splice(index, 1);
                    this.uniqueString = [...new Set(this.categoryAuto_id2)].join(',');
                    console.log('this.uniqueString1', this.uniqueString);
                }
                else {
                    selecteddata.isSelected = 1;
                    this.categoryAuto_id2.push(parseInt(selecteddata.id));
                    this.uniqueString = [...new Set(this.categoryAuto_id2)].join(',');
                    console.log('this.uniqueString', this.uniqueString);
                    console.log('this.uniqueString', this.categoryAuto_id2);
                }
                this.departmentData = this.uniqueString;
                console.log('this.uniqueString767', this.departmentData);
            }
            else if (selecteddata.filter_name == "Location") {
                var index = this.categoryAuto_id3.indexOf(parseInt(selecteddata.id));
                if (index >= 0) {
                    selecteddata.isSelected = 0;
                    this.categoryAuto_id3.splice(index, 1);
                    this.uniqueString = [...new Set(this.categoryAuto_id)].join(',');
                    console.log('this.uniqueString1', this.uniqueString);
                }
                else {
                    selecteddata.isSelected = 1;
                    this.categoryAuto_id3.push(parseInt(selecteddata.id));
                    this.uniqueString = [...new Set(this.categoryAuto_id3)].join(',');
                    console.log('this.uniqueString', this.uniqueString);
                    console.log('this.uniqueString', this.categoryAuto_id3);
                }
                this.locationData = this.uniqueString;
                console.log('this.uniqueString767', this.locationData);
            }
        });
    }
    ngOnInit() {
        this.allocationData = this.sendData.alldata;
        if (this.allocationData.module_id) {
        }
        else {
            this.awardS = this.allocationData.award_id;
            this.departmentData = this.allocationData.department_id;
            this.awardType = this.allocationData.award_type_id;
            this.locationData = this.allocationData.location_id;
        }
        this.filterListFun();
        //  this.allocationData=this.navParam.data.data;
        //  this.Arr=this.navParam.data;
        //  if(this.Arr.filterPre==undefined){
        //    this.categoryAuto_Arr={'category':'','sub_category':'','brands':''};
        //  }else{
        //    this.categoryAuto_Arr=this.navParam.data.filterPre;
        //  }
        //  console.log('previous allocationData data',this.allocationData);
        //  console.log('previous filter data', this.Arr.filterPre);
    }
    filterListFun() {
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            let apiKey = {
                "award_id": this.awardS,
                "award_type_id": this.awardType,
                "department_id": this.departmentData,
                "location_id": this.locationData
            };
            this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].filterApi, apiKey).subscribe((result) => {
                this.apiservices.hideLoader();
                if (result.status == 1) {
                    this.filterData = result.data;
                    this.applydataarr = this.filterData[0].filter_arr;
                    //  this.applydataarr.forEach(ele => {
                    //    if(ele.is_selected==1){
                    //      this.categoryAuto_id.push(parseInt(ele.id));
                    //    }
                    //  });
                    //  this.filterData[2].filter_arr.forEach(ele => {
                    //    if(ele.is_selected==1){
                    //      this.categoryAuto_id2.push(parseInt(ele.id));
                    //    }
                    //  });
                    // console.log('this.applydataarr', this.applydataarr);
                    this.errorImage = '';
                }
                else {
                    // this.errorMessage=result.message;
                    // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                this.apiservices.hideLoader();
            });
        }));
    }
    clearFilter() {
        this.categoryAuto_id = [];
        this.categoryAuto_id1 = [];
        this.categoryAuto_id2 = [];
        this.categoryAuto_id3 = [];
        this.awardS = {};
        this.awardType = {};
        this.departmentData = {};
        this.locationData = {};
        // this.filterArr={'category':'','sub_category':'','brands':''};
        //  this.categoryAuto_Arr={'category':'','sub_category':'','brands':''};
        this.filterData.forEach(element => {
            element.filter_arr.forEach(ele => {
                console.log('element', ele);
                ele.isSelected = 0;
            });
        });
        this.applydataarr.forEach(element => {
            console.log('element1', element);
            element.isSelected = 0;
        });
        //  console.log('filterData',this.categoryAuto_Arr);
    }
    applyfun() {
        this.sendData.alldata = { "award_id": this.awardS, "award_type_id": this.awardType, "department_id": this.departmentData,
            "location_id": this.locationData };
        this.navctrl.pop();
    }
};
FilterListPage.ctorParameters = () => [
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
];
FilterListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/filter-list/filter-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter-list.page.scss */ "./src/app/R&RModule/filter-list/filter-list.page.scss")).default]
    })
], FilterListPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-filter-list-filter-list-module-es2015.js.map