(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-award-employee-preview-award-employee-preview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-preview/award-employee-preview.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-preview/award-employee-preview.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{dashData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"priviousSelectedData?.allData?.length>0\">\n    <h5>Nominees</h5>\n    <div class=\"customCard\">\n      <ion-slides [options]=\"slideOpts1\">\n        <ion-slide *ngFor=\"let item of priviousSelectedData?.allData\">\n          <ion-row >\n            <ion-col [size]=\"12\" class=\"collDiv\">\n                <img [src]=\"item?.nominee_image\" class=\"teamImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/> \n                <p class=\"ion-no-margin nameText lineDiv\">{{item?.name}}</p>\n                <p class=\"ion-no-margin positionText positionText1\">{{item?.designation}}</p>\n            </ion-col>\n          </ion-row>\n    \n        </ion-slide>\n      </ion-slides> \n    </div>\n  </div>\n  <div *ngIf=\"templateData?.length>0\">\n    <h5>Post Background</h5>\n    <ion-row class=\"customCard\" >\n      <ion-col>\n        <div class=\"ion-text-right\">\n          <ion-button class=\"editbtn heightDiv\" tappable (click)=\"showslidesDiv()\" >Select Template</ion-button>\n        </div>\n        <div [style.background-image]=\"'url('+ showImage +')'\" class=\"bgImage\">\n          <p [innerHTML]=\"priviousSelectedData?.previous?.mainData?.award_name\" class=\"ion-text-center gpDiv topDiv\"></p>\n        </div>\n        \n        <!-- <img [src]=\"showImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/> -->\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row *ngIf=\"priviousSelectedData?.previous?.mainData?.team_type==2\">\n    <ion-col>\n      <h5>Team Name</h5>\n      <ion-input type=\"text\" class=\"textareaDiv\" placeholder=\"Type your team name here...\" [(ngModel)]=\"teamName\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h5>Citaion</h5>\n      <ion-textarea class=\"textareaDiv\" rows=\"4\" cols=\"20\" placeholder=\"Give Citaion...\" [(ngModel)]=\"citatonData\"></ion-textarea>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col [size]=\"6\" class=\"ion-text-center\">\n      <ion-button  tappable (click)=\"editFun()\" class=\"editbtn\">Edit</ion-button>\n    </ion-col>\n    <ion-col [size]=\"6\" class=\"ion-text-center\">\n      <ion-button  tappable (click)=\"submitFun()\" [disabled]=\"citatonData?.trim()==''\"\n      class=\"dynamicButtonColor\">Submit</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n<ion-footer>\n  <div *ngIf=\"showDiv\" [ngClass]=\"{'tintBg':showDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showDiv\">\n    <p class=\"titleText\">Select Post Background <span tappable (click)=\"showslidesDiv()\"><ion-icon name=\"close\"></ion-icon></span></p>\n    <br>\n    <ion-row class=\"scrollDiv\">\n      <ion-col [size]=\"6\" class=\"ion-text-center\" *ngFor=\"let item of templateData\" (click)=\"selectedTemp(item)\">\n        <img [src]=\"item?.template_link\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\" class=\"temImg\"/>\n        <!-- <p>Camera</p> -->\n      </ion-col>\n      <!-- <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col> -->\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/R&RModule/award-employee-preview/award-employee-preview-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-preview/award-employee-preview-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AwardEmployeePreviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeePreviewPageRoutingModule", function() { return AwardEmployeePreviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _award_employee_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award-employee-preview.page */ "./src/app/R&RModule/award-employee-preview/award-employee-preview.page.ts");




const routes = [
    {
        path: '',
        component: _award_employee_preview_page__WEBPACK_IMPORTED_MODULE_3__["AwardEmployeePreviewPage"]
    }
];
let AwardEmployeePreviewPageRoutingModule = class AwardEmployeePreviewPageRoutingModule {
};
AwardEmployeePreviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AwardEmployeePreviewPageRoutingModule);



/***/ }),

/***/ "./src/app/R&RModule/award-employee-preview/award-employee-preview.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-preview/award-employee-preview.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AwardEmployeePreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeePreviewPageModule", function() { return AwardEmployeePreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _award_employee_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award-employee-preview-routing.module */ "./src/app/R&RModule/award-employee-preview/award-employee-preview-routing.module.ts");
/* harmony import */ var _award_employee_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award-employee-preview.page */ "./src/app/R&RModule/award-employee-preview/award-employee-preview.page.ts");







let AwardEmployeePreviewPageModule = class AwardEmployeePreviewPageModule {
};
AwardEmployeePreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _award_employee_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardEmployeePreviewPageRoutingModule"]
        ],
        declarations: [_award_employee_preview_page__WEBPACK_IMPORTED_MODULE_6__["AwardEmployeePreviewPage"]]
    })
], AwardEmployeePreviewPageModule);



/***/ }),

/***/ "./src/app/R&RModule/award-employee-preview/award-employee-preview.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-preview/award-employee-preview.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nomineeImage {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n\n.iconDiv {\n  height: 23px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.bgDiv {\n  background-size: 100% 100% !important;\n  background-repeat: no-repeat !important;\n}\n\n.marginText {\n  margin: 5px 0px;\n}\n\n.font11 {\n  font-size: 11px;\n}\n\n.customCard {\n  box-shadow: 0px 0px 5px 0px #a99e9e;\n}\n\n.textareaDiv {\n  border: 1px solid #b9b4b4;\n  border-radius: 5px;\n}\n\n.scrollDiv {\n  min-height: 300px;\n  overflow: scroll;\n  max-height: 500px;\n}\n\n.temImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.editbtn {\n  border: 1px solid var(--headerColor);\n  --background: white;\n  color: var(--headerColor);\n  border-radius: 4px;\n  text-transform: initial;\n}\n\n.bgImage {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.gpDiv {\n  top: 20%;\n  left: 0;\n  position: relative;\n  width: 90%;\n  transform: translate(0px, -20%);\n  margin: auto;\n  z-index: 1;\n  color: black;\n}\n\n.bgImage::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 0;\n}\n\n.topDiv {\n  top: 16%;\n  color: #5a57e1;\n  font-weight: bold;\n}\n\n.heightDiv {\n  height: 25px;\n}\n\n.collDiv {\n  border: 1px solid #bbb7b7;\n  border-radius: 10px;\n  height: 100px;\n  width: 100px !important;\n}\n\n.teamImage {\n  height: 45px;\n  width: 45px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL2F3YXJkLWVtcGxveWVlLXByZXZpZXcvYXdhcmQtZW1wbG95ZWUtcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxZQUFBO0VBQWEsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7RUFBb0Isa0JBQUE7QUFLM0Q7O0FBSkE7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFVaEM7O0FBVEE7RUFBTyxxQ0FBQTtFQUFzQyx1Q0FBQTtBQWM3Qzs7QUFiQTtFQUFZLGVBQUE7QUFpQlo7O0FBaEJBO0VBQVEsZUFBQTtBQW9CUjs7QUFuQkE7RUFBWSxtQ0FBQTtBQXVCWjs7QUF0QkE7RUFBYSx5QkFBQTtFQUEwQixrQkFBQTtBQTJCdkM7O0FBMUJBO0VBQVcsaUJBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsaUJBQUE7QUFnQzlDOztBQS9CQTtFQUFRLGFBQUE7RUFBYyxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtBQXFDbEM7O0FBcENBO0VBQVMsb0NBQUE7RUFBcUMsbUJBQUE7RUFBb0IseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsdUJBQUE7QUE0Qy9HOztBQTNDQTtFQUFTLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxhQUFBO0VBQWMsd0JBQUE7RUFBeUIsMkJBQUE7RUFBNEIsNEJBQUE7QUFvRDNHOztBQW5EQTtFQUFPLFFBQUE7RUFBUyxPQUFBO0VBQVEsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLCtCQUFBO0VBQWdDLFlBQUE7RUFBYSxVQUFBO0VBQy9GLFlBQUE7QUE2REo7O0FBNURBO0VBQ0ksV0FBQTtFQUFZLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxRQUFBO0VBQVEsUUFBQTtFQUFRLFNBQUE7RUFBUyxVQUFBO0FBcUVsRTs7QUFwRUk7RUFBUSxRQUFBO0VBQVMsY0FBQTtFQUFlLGlCQUFBO0FBMEVwQzs7QUF6RUE7RUFBVyxZQUFBO0FBNkVYOztBQTVFQTtFQUFTLHlCQUFBO0VBQ0wsbUJBQUE7RUFBb0IsYUFBQTtFQUFrQix1QkFBQTtBQWtGMUM7O0FBaEZJO0VBQVcsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLGtCQUFBO0FBdUY1RCIsImZpbGUiOiJzcmMvYXBwL1ImUk1vZHVsZS9hd2FyZC1lbXBsb3llZS1wcmV2aWV3L2F3YXJkLWVtcGxveWVlLXByZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vbWluZWVJbWFnZXtoZWlnaHQ6IDcwcHg7d2lkdGg6IDcwcHg7b2JqZWN0LWZpdDogY29udGFpbjtib3JkZXItcmFkaXVzOiA1MCU7fVxuLmljb25EaXZ7aGVpZ2h0OjIzcHg7d2lkdGg6MTAwJTtvYmplY3QtZml0OmNvbnRhaW47fVxuLmJnRGl2e2JhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O31cbi5tYXJnaW5UZXh0e21hcmdpbjogNXB4IDBweDt9XG4uZm9udDExe2ZvbnQtc2l6ZTogMTFweDt9XG4uY3VzdG9tQ2FyZHtib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2E5OWU5ZTt9XG4udGV4dGFyZWFEaXZ7Ym9yZGVyOiAxcHggc29saWQgI2I5YjRiNDtib3JkZXItcmFkaXVzOiA1cHg7fVxuLnNjcm9sbERpdnttaW4taGVpZ2h0OiAzMDBweDtvdmVyZmxvdzogc2Nyb2xsO21heC1oZWlnaHQ6IDUwMHB4O31cbi50ZW1JbWd7aGVpZ2h0OiAxMDBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb250YWluO30gXG4uZWRpdGJ0bntib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7LS1iYWNrZ3JvdW5kOiB3aGl0ZTtjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6IDRweDt0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDt9XG4uYmdJbWFnZXtwb3NpdGlvbjogcmVsYXRpdmU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNzVweDtiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7fVxuLmdwRGl2e3RvcDogMjAlO2xlZnQ6IDA7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiA5MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjAlKTttYXJnaW46IGF1dG87ei1pbmRleDogMTtcbiAgICBjb2xvcjogYmxhY2s7fVxuLmJnSW1hZ2U6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowcHg7Ym90dG9tOjA7ei1pbmRleDogMDt9XG4gICAgLnRvcERpdnt0b3A6IDE2JTtjb2xvcjogIzVhNTdlMTtmb250LXdlaWdodDogYm9sZDt9XG4uaGVpZ2h0RGl2e2hlaWdodDogMjVweDt9XG4uY29sbERpdntib3JkZXI6IDFweCBzb2xpZCAjYmJiN2I3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7aGVpZ2h0OiAxMDBweDsgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4gICAgLnRlYW1JbWFnZXtoZWlnaHQ6IDQ1cHg7d2lkdGg6IDQ1cHg7b2JqZWN0LWZpdDogY29udGFpbjtib3JkZXItcmFkaXVzOiA1MCU7fSJdfQ== */");

/***/ }),

/***/ "./src/app/R&RModule/award-employee-preview/award-employee-preview.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/R&RModule/award-employee-preview/award-employee-preview.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AwardEmployeePreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardEmployeePreviewPage", function() { return AwardEmployeePreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/constant */ "./src/assets/constant.ts");








let AwardEmployeePreviewPage = class AwardEmployeePreviewPage {
    constructor(zone, apiservices, stoargeServices, sendData, router, navctrl) {
        this.zone = zone;
        this.apiservices = apiservices;
        this.stoargeServices = stoargeServices;
        this.sendData = sendData;
        this.router = router;
        this.navctrl = navctrl;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.citatonData = '';
        this.showDiv = false;
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 2.5,
            speed: 400,
            spaceBetween: 5,
        };
    }
    ngOnInit() {
        this.priviousSelectedData = this.sendData.alldata;
        console.log(" this.priviousSelectedData==", this.priviousSelectedData);
        this.awardDashboardFun();
    }
    awardDashboardFun() {
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    team_type: this.priviousSelectedData.previous.mainData.team_type
                };
                this.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].awardTemplateApi, apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    this.dashData = result;
                    if (result.status == 1) {
                        this.templateData = result.data;
                        this.showImage = this.templateData[0].template_link;
                        this.templateID = this.templateData[0].auto_id;
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
    showslidesDiv() {
        this.zone.run(() => {
            console.log("show filter1==", this.showDiv);
            if (this.showDiv) {
                console.log("show filter2==", this.showDiv);
                this.showDiv = false;
            }
            else {
                console.log("show filter3==", this.showDiv);
                this.showDiv = true;
            }
        });
    }
    selectedTemp(item) {
        this.showDiv = false;
        this.showImage = item.template_link;
        this.templateID = item.auto_id;
    }
    editFun() {
        this.navctrl.pop();
    }
    submitFun() {
        if (this.priviousSelectedData.previous.mainData.team_type == 1) {
            this.teamName = '';
        }
        this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiservices.showLoader();
            this.stoargeServices.getStorage().then(storedData => {
                let apiKey = {
                    employee_id: storedData.employeeID,
                    citation: this.citatonData,
                    award_id: this.priviousSelectedData.previous.mainData.auto_id,
                    team_name: this.teamName,
                    nominees: this.priviousSelectedData.cur_nominees.join(","),
                    template_id: this.templateID
                };
                let copy_apiKey = {
                    employee_id: storedData.employeeID,
                    citation: this.citatonData,
                    award_id: this.priviousSelectedData.previous.mainData.auto_id,
                    team_name: this.teamName,
                    nominees: this.priviousSelectedData.cur_nominees.join(","),
                    template_id: this.templateID
                };
                this.apiservices.apiCallWithLoginTokenComment(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].awardSubmitApi, apiKey, copy_apiKey).subscribe((result) => {
                    this.apiservices.hideLoader();
                    if (result.status == 1) {
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                        this.router.navigateByUrl('/award-dashboard');
                        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-7));
                    }
                    else {
                        this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.apiservices.hideLoader();
                });
            });
        }));
    }
};
AwardEmployeePreviewPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__["ApiservicesService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AwardEmployeePreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-award-employee-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./award-employee-preview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/award-employee-preview/award-employee-preview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./award-employee-preview.page.scss */ "./src/app/R&RModule/award-employee-preview/award-employee-preview.page.scss")).default]
    })
], AwardEmployeePreviewPage);



/***/ })

}]);
//# sourceMappingURL=R-RModule-award-employee-preview-award-employee-preview-module-es2015.js.map