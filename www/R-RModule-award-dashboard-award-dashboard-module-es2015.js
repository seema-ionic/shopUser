(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-award-dashboard-award-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-dashboard/award-dashboard.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-dashboard/award-dashboard.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{dashData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- <ion-row>\n    <ion-col [size]=\"6\" > \n      <ion-button class=\"dynamicButtonColor newCss bdrBtm\" fill=\"outline\" tappable (click)=\"segmentData(item)\">\n        {{quickAcessData?.tab_data?.dashboard?.button_text}}</ion-button>\n    </ion-col>\n    <ion-col [size]=\"6\"> \n      <ion-button class=\"dynamicButtonColor newCss bdrBtm\" fill=\"outline\" tappable (click)=\"segmentData(item)\">\n        {{quickAcessData?.tab_data?.activity?.button_text}}</ion-button>\n    </ion-col>\n  </ion-row> -->\n<div class=\"segmentSectionDiv\">\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentData($event)\" [value]=\"segmentModel\" >\n    <ion-segment-button value=\"dashboard\" *ngIf=\"quickAcessData?.tab_data?.dashboard\">\n      <ion-label> {{quickAcessData?.tab_data?.dashboard?.button_text}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"myactivity\" *ngIf=\"quickAcessData?.tab_data?.activity\">\n      <ion-label>{{quickAcessData?.tab_data?.activity?.button_text}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div *ngIf=\"segmentSectionDiv == 'dashboard'\" class=\"ion-padding-top\">\n    <div class=\"borderCard\">\n      <ion-row>\n        <ion-col>\n          <p class=\"ion-no-margin\">{{DashboardData?.budget_data?.title}}</p>\n          <p class=\"ion-no-margin font13\">{{DashboardData?.budget_data?.budget_creation_date}}</p>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"borderCard\">\n        <ion-row *ngFor=\"let item of DashboardData?.budget_data?.header_data\">\n          <ion-col [size]=\"2\" class=\"autoMargin ion-no-padding\">\n            <img [src]=item?.icon class=\"iconDiv\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/></ion-col>\n          <ion-col [size]=\"6\" class=\"autoMargin ion-no-padding\">\n            <p class=\"ion-no-margin font13\">{{item?.key}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"autoMargin ion-no-padding\"><p class=\"ion-no-margin font13\">{{item?.value}}</p></ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n  <div class=\"ion-padding-top\">\n    <ion-row *ngFor=\"let item of DashboardData?.award_data; let i=index;\">\n      <ion-col *ngIf=\"i==selectedData\" class=\"borderCard\">\n        <ion-row>\n          <ion-col [size]=\"8\"><p class=\"ion-no-margin font13\">{{item?.award_name}}</p> </ion-col>\n          <ion-col [size]=\"4\"><p class=\"ion-no-margin font12 grayClr ion-text-right\">{{item?.cost_center_name}}</p></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col><p class=\"ion-no-margin font12 grayClr\">{{item?.budget_creation_date}}</p>\n            <p class=\" font12 grayClr ion-text-center margin05\">{{item?.frequency_name}}</p>\n            <p class=\"ion-no-margin font12 grayClr ion-text-center\">{{item?.type_name}}</p>\n            <img [src]=\"item?.award_icon\" class=\"awardIconimg\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let val of item?.allocate_arr\">\n          <ion-col [size]=\"12\">\n            <div class=\"grayDiv relativeDIV\">\n             <div class=\"percentageDiv\" [style.width]=\"val.graph_percentage+'%'\"></div>\n             <div class=\"absoDIV\">\n              <ion-row >\n                <ion-col [size]=\"7\">\n                  <p class=\"ion-text-left ion-no-margin font10\">{{val?.left_str}}</p>\n                </ion-col>\n                <ion-col [size]=\"5\" *ngIf=\"val?.right_str\">\n                  <p class=\"ion-text-right ion-no-margin font10\">{{val?.right_str}}</p>\n                </ion-col>\n              </ion-row>\n             </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  \n  <ion-row class=\"ion-padding-top\">\n    <ion-col [size]=\"6\" *ngFor=\"let data of DashboardData?.award_data; let i=index;\">\n      <div class=\"borderHColor\" (click)=\"showUpperData(i)\">\n        <p class=\"font13 ion-no-margin ion-text-center pad04\" [ngClass]=\"{'bgCl':i==selectedData}\">{{data?.award_name}}</p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <br><br>\n  <ion-row  *ngFor=\"let data of DashboardData?.award_data; let i=index;\">\n<ion-col *ngIf=\"i==selectedData\" [size]=\"12\" class=\"ion-text-center\">\n  <p *ngIf=\"data?.can_nominate==false\" class=\"ion-text-center ion-no-margin font10 redP\">{{data?.nomination_error_msg}}</p>\n  <ion-button *ngIf=\"data?.button_data?.show_button==true\"  [disabled]=\"data?.can_nominate==false\" \n  tappable (click)=\"gotoDashboardDetail(data)\" class=\"dynamicButtonColor\">{{data?.button_data?.button_text}}</ion-button>\n</ion-col>\n  </ion-row>\n</div>\n<div *ngIf=\"segmentSectionDiv == 'myactivity'\" class=\"ion-padding-top\">\n  <div class=\"ion-padding-bottom\">\n    <ion-item lines=\"none\">\n      <ion-label>Filter Feed</ion-label>\n      <ion-select class=\"custom-options ion-no-padding\" (ionChange)=\"selcetedOption($event)\" \n      [value]=\"quickAcessData.tab_data.activity.filter_arr[0].filter\">\n        <ion-select-option  [value]=\"item?.filter\" *ngFor=\"let item of quickAcessData.tab_data.activity.filter_arr\">{{item?.key}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n\n  <ion-row *ngFor=\"let cheerData of myActivityData\" class=\"customCard bgDiv\" tappable (click)=\"gotoActvityDetail(cheerData)\"\n  [style.background]=\"'url('+cheerData?.bg_img+')'\">\n    <ion-col [size]=\"6\" class=\"autoMargin ion-text-center\">\n        <img [src]=\"cheerData?.nominee_image\" class=\"nomineeImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n        <p class=\"noMargin nameText\">{{cheerData?.nominee_name}}</p>\n        <p class=\"noMargin positionText\">{{cheerData?.nomination_date}}</p>\n        <p class=\"noMargin positionText\">{{cheerData?.nominated_by}}</p>\n        <p class=\"noMargin positionText\">{{cheerData?.nomination_status}}</p>\n    </ion-col>\n    <ion-col [size]=\"5\" class=\"autoMargin ion-text-center\">\n       <img [src]=\"cheerData?.award_icon\" class=\"awardDiv\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n        <p class=\"noMargin nameText\">{{cheerData?.award_name}}</p>\n        <p class=\"noMargin positionText\">{{cheerData?.award_type}}</p>\n        <p class=\"noMargin positionText\">{{cheerData?.award_level_str}}</p>\n\n    </ion-col>\n    <ion-col [size]=\"1\">\n      <img [src]=\"cheerData?.nomination_status_icons\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n    </ion-col>\n  </ion-row>\n\n  <p *ngIf=\"errorMessage\" class=\"ion-text-center\">{{errorMessage}}</p>\n  <div *ngIf=\"errorImage\"><img [src]=\"errorImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/></div>\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"errorMessage=='' && myActivityData?.length>0\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>\n \n\n</ion-content>");

/***/ }),

/***/ "./src/app/R&RModule/award-dashboard/award-dashboard-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/R&RModule/award-dashboard/award-dashboard-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AwardDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDashboardPageRoutingModule", function() { return AwardDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _award_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award-dashboard.page */ "./src/app/R&RModule/award-dashboard/award-dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _award_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["AwardDashboardPage"]
    }
];
let AwardDashboardPageRoutingModule = class AwardDashboardPageRoutingModule {
};
AwardDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AwardDashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/award-dashboard/award-dashboard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/R&RModule/award-dashboard/award-dashboard.module.ts ***!
  \*********************************************************************/
/*! exports provided: AwardDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDashboardPageModule", function() { return AwardDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _award_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award-dashboard-routing.module */ "./src/app/R&RModule/award-dashboard/award-dashboard-routing.module.ts");
/* harmony import */ var _award_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award-dashboard.page */ "./src/app/R&RModule/award-dashboard/award-dashboard.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let AwardDashboardPageModule = class AwardDashboardPageModule {
};
AwardDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _award_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardDashboardPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_award_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["AwardDashboardPage"]]
    })
], AwardDashboardPageModule);



/***/ }),

/***/ "./src/app/R&RModule/award-dashboard/award-dashboard.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/R&RModule/award-dashboard/award-dashboard.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".widthD {\n  width: 100%;\n}\n\n.awardDiv {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.nomineeImage {\n  height: 55px;\n  width: 55px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px dotted var(--headerColor);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n.iconDiv {\n  height: 23px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.font13 {\n  font-size: 13px;\n}\n\n.borderHColor {\n  border: 1px solid var(--headerColor);\n  border-radius: 5px;\n}\n\n.pad04 {\n  padding: 4px;\n  color: var(--headerColor);\n}\n\n.awardIconimg {\n  height: 120px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.font12 {\n  font-size: 12px;\n}\n\n.font10 {\n  font-size: 10px;\n}\n\n.grayClr {\n  color: #464343;\n}\n\n.grayDiv {\n  background-color: #eaeaea;\n  width: 100%;\n  position: relative;\n}\n\n.percentageDiv {\n  background-color: var(--headerColor);\n  position: absolute;\n  top: 0;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n}\n\n.grayDiv, .percentageDiv {\n  height: 24px;\n  border-radius: 20px;\n  border: 1px solid var(--headerColor);\n}\n\n.redP {\n  color: red;\n}\n\n.margin05 {\n  margin: 5px;\n}\n\n.bgCl {\n  background: var(--headerColor);\n  color: white;\n}\n\n.bgDiv {\n  background-size: 100% 100% !important;\n  background-repeat: no-repeat !important;\n}\n\nion-item {\n  border: 1px solid #afaaaa;\n  border-radius: 10px;\n}\n\n.custom-options {\n  font-size: 13px;\n}\n\n.segmentSectionDiv ion-segment {\n  background: var(--headerColor);\n  border-radius: 10px;\n  height: 35px;\n}\n\n.segmentSectionDiv ion-segment ion-segment-button {\n  background: #f2f2f2;\n  color: gray;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin: 0px;\n  --line-height:20px;\n  min-height: 30px;\n}\n\n.segmentSectionDiv ion-segment .segment-button-checked {\n  background: var(--headerColor);\n  color: white;\n  --indicator-color:transparent ;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWRhc2hib2FyZC9hd2FyZC1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsV0FBQTtBQUVSOztBQURBO0VBQVUsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBT25DOztBQU5BO0VBQWMsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLHFDQUFBO0VBQXNDLGtCQUFBO0VBQW1CLFlBQUE7QUFlcEg7O0FBZEE7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFvQmhDOztBQW5CQTtFQUFRLGVBQUE7QUF1QlI7O0FBdEJBO0VBQWMsb0NBQUE7RUFBc0Msa0JBQUE7QUEyQnBEOztBQTFCQTtFQUFPLFlBQUE7RUFBYSx5QkFBQTtBQStCcEI7O0FBOUJBO0VBQWMsYUFBQTtFQUFlLFdBQUE7RUFBYSxzQkFBQTtLQUFBLG1CQUFBO0FBb0MxQzs7QUFuQ0E7RUFBUSxlQUFBO0FBdUNSOztBQXRDQTtFQUFRLGVBQUE7QUEwQ1I7O0FBekNBO0VBQVMsY0FBQTtBQTZDVDs7QUE1Q0E7RUFBVSx5QkFBQTtFQUEyQixXQUFBO0VBQWEsa0JBQUE7QUFrRGxEOztBQWpEQTtFQUFlLG9DQUFBO0VBQXVDLGtCQUFBO0VBQXFCLE1BQUE7RUFBVSxrQkFBQTtFQUFvQixpQkFBQTtFQUFtQixZQUFBO0FBMEQ1SDs7QUF6REE7RUFBeUIsWUFBQTtFQUFjLG1CQUFBO0VBQW9CLG9DQUFBO0FBK0QzRDs7QUE5REE7RUFBTSxVQUFBO0FBa0VOOztBQWpFQTtFQUFVLFdBQUE7QUFxRVY7O0FBcEVBO0VBQU0sOEJBQUE7RUFBK0IsWUFBQTtBQXlFckM7O0FBeEVBO0VBQU8scUNBQUE7RUFBc0MsdUNBQUE7QUE2RTdDOztBQTVFQTtFQUFTLHlCQUFBO0VBQTBCLG1CQUFBO0FBaUZuQzs7QUFoRkE7RUFBb0IsZUFBQTtBQW9GcEI7O0FBbEZJO0VBQVksOEJBQUE7RUFBOEIsbUJBQUE7RUFBbUIsWUFBQTtBQXdGakU7O0FBdkZRO0VBQW1CLG1CQUFBO0VBQW1CLFdBQUE7RUFBVyxlQUFBO0VBQWUsbUJBQUE7RUFBbUIsV0FBQTtFQUMvRSxrQkFBQTtFQUFtQixnQkFBQTtBQStGL0I7O0FBN0ZRO0VBQXdCLDhCQUFBO0VBQThCLFlBQUE7RUFBWSw4QkFBQTtFQUM3RCxtQkFBQTtBQWtHYiIsImZpbGUiOiJzcmMvYXBwL1ImUk1vZHVsZS9hd2FyZC1kYXNoYm9hcmQvYXdhcmQtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aER7d2lkdGg6IDEwMCU7fVxuLmF3YXJkRGl2e2hlaWdodDogNzBweDt3aWR0aDogNzBweDtvYmplY3QtZml0OiBjb250YWluO31cbi5ub21pbmVlSW1hZ2V7aGVpZ2h0OiA1NXB4O3dpZHRoOiA1NXB4O29iamVjdC1maXQ6IGNvbnRhaW47Ym9yZGVyOiAxcHggZG90dGVkIHZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOiA1MCU7cGFkZGluZzogNXB4O31cbi5pY29uRGl2e2hlaWdodDoyM3B4O3dpZHRoOjEwMCU7b2JqZWN0LWZpdDpjb250YWluO31cbi5mb250MTN7Zm9udC1zaXplOiAxM3B4O31cbi5ib3JkZXJIQ29sb3J7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpOyBib3JkZXItcmFkaXVzOiA1cHg7fVxuLnBhZDA0e3BhZGRpbmc6IDRweDtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7fVxuLmF3YXJkSWNvbmltZ3toZWlnaHQ6IDEyMHB4OyB3aWR0aDogMTAwJTsgb2JqZWN0LWZpdDogY29udGFpbjt9XG4uZm9udDEye2ZvbnQtc2l6ZToxMnB4O31cbi5mb250MTB7Zm9udC1zaXplOiAxMHB4O31cbi5ncmF5Q2xye2NvbG9yOiAjNDY0MzQzO31cbi5ncmF5RGl2eyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhOyB3aWR0aDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4ucGVyY2VudGFnZURpdntiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7ICBwb3NpdGlvbjogYWJzb2x1dGU7ICB0b3A6IDA7ICAgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogMnB4O31cbi5ncmF5RGl2LCAucGVyY2VudGFnZURpdntoZWlnaHQ6IDI0cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO31cbi5yZWRQe2NvbG9yOiByZWQ7fVxuLm1hcmdpbjA1e21hcmdpbjogNXB4O31cbi5iZ0Nse2JhY2tncm91bmQ6IHZhcigtLWhlYWRlckNvbG9yKTtjb2xvcjogd2hpdGU7fVxuLmJnRGl2e2JhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O31cbmlvbi1pdGVte2JvcmRlcjogMXB4IHNvbGlkICNhZmFhYWE7Ym9yZGVyLXJhZGl1czogMTBweDt9XG4uY3VzdG9tLW9wdGlvbnN7ICAgIGZvbnQtc2l6ZTogMTNweDt9XG4uc2VnbWVudFNlY3Rpb25EaXZ7XG4gICAgaW9uLXNlZ21lbnR7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLXJhZGl1czoxMHB4O2hlaWdodDozNXB4O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b257YmFja2dyb3VuZDojZjJmMmYyO2NvbG9yOmdyYXk7Zm9udC1zaXplOjEycHg7bGV0dGVyLXNwYWNpbmc6MXB4O21hcmdpbjowcHg7XG4gICAgICAgICAgICAtLWxpbmUtaGVpZ2h0OjIwcHg7bWluLWhlaWdodDozMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO2NvbG9yOndoaXRlOy0taW5kaWNhdG9yLWNvbG9yOnRyYW5zcGFyZW50XG4gICAgICAgICAgICA7Ym9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/R&RModule/award-dashboard/award-dashboard.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/R&RModule/award-dashboard/award-dashboard.page.ts ***!
  \*******************************************************************/
/*! exports provided: AwardDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDashboardPage", function() { return AwardDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");







let AwardDashboardPage = class AwardDashboardPage {
    constructor(zone, apiservices, stoargeServices, sendData, router) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.stoargeServices = stoargeServices;
        this.sendData = sendData;
        this.router = router;
        this.selectedData = 0;
        this.limit = "0";
        this.myinfiniteScrollCall = false;
        this.myActivityData = [];
    }
    ngOnInit() {
        this.quickAcessData = this.sendData.alldata;
        console.log('the quick data', this.quickAcessData);
        if (this.quickAcessData.tab_data.dashboard) {
            this.tabType = this.quickAcessData.tab_data.dashboard.tab_value;
            this.segmentModel = "dashboard";
            this.segmentSectionDiv = "dashboard";
        }
        else {
            console.log('the quick data1', this.quickAcessData);
            this.filterData = this.quickAcessData.tab_data.activity.filter_arr[0].filter;
            this.tabType = this.quickAcessData.tab_data.activity.tab_value;
            this.segmentModel = "myactivity";
            this.segmentSectionDiv = "myactivity";
        }
        // this.awardDashboardFun();
    }
    ionViewWillEnter() {
        this.myActivityData = [];
        this.limit = "0";
        this.awardDashboardFun();
    }
    gotoActvityDetail(item) {
        this.sendData.alldata = item;
        this.router.navigate(['/myactivity-detail']);
    }
    segmentData(ev) {
        console.log('ev data', ev);
        this.DashboardData = {};
        this.myActivityData = [];
        this.limit = "0";
        this.errorMessage = '';
        this.segmentSectionDiv = ev.detail.value;
        if (this.segmentSectionDiv == 'dashboard') {
            this.tabType = this.quickAcessData.tab_data.dashboard.tab_value;
            this.filterData = "";
        }
        else {
            if (this.quickAcessData.tab_data.activity.filter_arr.length > 0) {
                this.filterData = this.quickAcessData.tab_data.activity.filter_arr[0].filter;
                this.tabType = this.quickAcessData.tab_data.activity.tab_value;
            }
        }
        this.awardDashboardFun();
    }
    selcetedOption(ev) {
        console.log('eve', ev);
        this.filterData = ev.detail.value;
        this.limit = "0";
        this.errorMessage = '';
        this.errorImage = '';
        this.myActivityData = [];
        this.awardDashboardFun();
    }
    gotoDashboardDetail(item) {
        this.sendData.alldata = item;
        this.router.navigate(['/awarddashboard-detail']);
    }
    showUpperData(ind) {
        this.selectedData = ind;
        console.log('ev selectedData', this.selectedData);
    }
    awardDashboardFun() {
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    employee_id: storedData.employeeID,
                    tab_type: this.tabType,
                    filter: this.filterData || '',
                    limit: this.limit
                };
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].awardDashboardApi, apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    this.dashData = result;
                    if (result.status == 1) {
                        if (this.segmentSectionDiv == 'dashboard') {
                            this.DashboardData = result.data;
                        }
                        else {
                            if (this.myActivityData == undefined) {
                                this.myActivityData = result.data;
                                console.log("Begin async operation 2==", this.myActivityData);
                            }
                            else {
                                this.myActivityData = this.myActivityData.concat(result.data);
                            }
                        }
                        if (this.myinfiniteScrollCall == true) {
                            this.myInfiniteScroll.target.complete();
                            this.errorMessage = "";
                            this.errorImage = "";
                            this.myinfiniteScrollCall = false;
                        }
                    }
                    else {
                        if (this.limit == "0") {
                            this.errorImage = result.no_data_image;
                        }
                        else {
                            this.errorMessage = result.message;
                        }
                        if (this.myinfiniteScrollCall == true) {
                            this.myInfiniteScroll.target.complete();
                            this.myinfiniteScrollCall = false;
                        }
                        // this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.apiservices.hideLoader();
                });
            });
        }));
    }
    loadData(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Begin async operation 1==");
        setTimeout(() => {
            this.limit = this.myActivityData.length;
            console.log("Begin async operation 2==", this.limit);
            console.log("Begin async operation 2==", this.myActivityData);
            this.myInfiniteScroll = infiniteScroll;
            this.awardDashboardFun();
        }, 500);
    }
};
AwardDashboardPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AwardDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-award-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./award-dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-dashboard/award-dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./award-dashboard.page.scss */ "./src/app/R&RModule/award-dashboard/award-dashboard.page.scss")).default]
    })
], AwardDashboardPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-award-dashboard-award-dashboard-module-es2015.js.map