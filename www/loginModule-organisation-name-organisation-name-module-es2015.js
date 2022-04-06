(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-organisation-name-organisation-name-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/organisation-name/organisation-name.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/organisation-name/organisation-name.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"textData\">\n\n    <br><br><br>\n    <br><br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <p class=\"noMargin title\">{{apiservices?.organisationNameData?.title}}</p>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <div class=\"inputDiv\">\n      <ion-row>\n        <ion-col [size]=\"10\" class=\"bottomBdr\">\n          <ion-input type=\"text\" [(ngModel)]=\"organisationName\" (ngModelChange)=\"changeEvent(organisationName)\" placeholder=\"{{apiservices?.organisationNameData?.placeholder}}\"></ion-input>\n        </ion-col>\n        <ion-col [size]=\"2\" *ngIf=\"apiservices?.organisationNameData?.instructions!=undefined\" class=\"ion-text-center autoMargin\">\n          <ion-icon name=\"help-circle\" tappable (click)=\"openInstruction()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"instructionDiv\" *ngIf=\"showInstruction==true\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n            <p class=\"noMargin titleText\">Instructions</p>\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <div class=\"listText\">\n              <app-text-layout [text]=\"apiservices?.organisationNameData?.instructions\" class=\"textCompoDiv\" [className]=\"\"></app-text-layout>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n\n\n    <br><br>\n\n    <ion-row *ngIf=\"apiservices?.iosRegistration==true\">\n      <ion-col [size]=\"12\" class=\"ion-text-right\">\n        <span tappable (click)=\"redirectionForIosTesting()\" class=\"noMargin tempTextDiv\">Registration</span>\n      </ion-col>\n    </ion-row>\n\n    <br><br><br><br><br>\n    <div class=\"loginFooterDiv ion-no-padding\">\n      <ion-row>\n        <ion-col [size]=\"2\" class=\"ion-text-center ion-no-padding autoMargin\">\n          <ion-checkbox color=\"primary\" [disabled]=\"organisationName?.trim()==''\" [(ngModel)]=\"acceptTNC\" (ionChange)=\"updateCheckedOptions(acceptTNC,$event)\" ></ion-checkbox>\n        </ion-col>\n        <ion-col [size]=\"10\">\n          <p class=\"noMargin\" style=\"font-size:3.5vw;line-height:18px;letter-spacing:.5px;margin:0 0 20px 0;\">{{textData?.footer?.one}} \n            <span class=\"benepikTandC\" tappable (click)=\"privacyTermsFunc('privacyPolicy')\">{{textData?.footer?.two}}</span> \n            <span *ngIf=\"textData?.footer?.three!=undefined\" class=\"andText\"> and </span>\n            <span class=\"benepikTandC\" tappable (click)=\"privacyTermsFunc('termsCondition')\">{{textData?.footer?.three}}</span>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n    <br><br>\n\n\n\n    <ion-row *ngIf=\"apiservices?.organisationNameData?.button!=undefined\">\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <!-- <ion-button [disabled]=\"organisationName==''\" tappable (click)=\"goToNext()\" class=\"benepikOrgButton\">{{apiservices?.organisationNameData?.button}}</ion-button> -->\n        <ion-button [disabled]=\"btnDisable==true || organisationName?.trim()==''\" tappable (click)=\"goToNext()\" class=\"benepikOrgButton\">{{apiservices?.organisationNameData?.button}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n  </div>\n\n\n\n\n  <!-- *ngIf=\"apiservices?.organisationNameData==''\" -->\n  <div *ngIf=\"!textData\">\n    <app-skelton-listview [iconPath]=\"'organisationName'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n<ion-footer class=\"loginFooterDiv\" *ngIf=\"textData\">\n  <ion-row>\n    <!-- <ion-col [size]=\"12\" class=\"ion-margin-bottom ion-padding-bottom\">\n      <p class=\"noMargin\" style=\"font-size:4.5vw;line-height:20px;letter-spacing:.5px;margin:0 0 20px 0;\">{{textData?.footer?.one}} \n        <span class=\"benepikTandC\" tappable (click)=\"privacyTermsFunc('privacyPolicy')\">{{textData?.footer?.two}}</span> \n        <span *ngIf=\"textData?.footer?.three!=undefined\" class=\"andText\"> and </span>\n        <span class=\"benepikTandC\" tappable (click)=\"privacyTermsFunc('termsCondition')\">{{textData?.footer?.three}}</span>\n      </p>\n    </ion-col> -->\n    <ion-col [size]=\"12\" class=\"ion-text-right\">\n      <div class=\"poweredDiv\">\n        <p class=\"noMargin\">Powered By:</p>\n        <!-- <img src=\"../../assets/icon/logoTwo.png\"> -->\n        <img src=\"../../assets/icon/benepikLogo.png\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/loginModule/organisation-name/organisation-name-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/loginModule/organisation-name/organisation-name-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: OrganisationNamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationNamePageRoutingModule", function() { return OrganisationNamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _organisation_name_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation-name.page */ "./src/app/loginModule/organisation-name/organisation-name.page.ts");




const routes = [
    {
        path: '',
        component: _organisation_name_page__WEBPACK_IMPORTED_MODULE_3__["OrganisationNamePage"]
    }
];
let OrganisationNamePageRoutingModule = class OrganisationNamePageRoutingModule {
};
OrganisationNamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrganisationNamePageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/organisation-name/organisation-name.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loginModule/organisation-name/organisation-name.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrganisationNamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationNamePageModule", function() { return OrganisationNamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _organisation_name_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-name-routing.module */ "./src/app/loginModule/organisation-name/organisation-name-routing.module.ts");
/* harmony import */ var _organisation_name_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation-name.page */ "./src/app/loginModule/organisation-name/organisation-name.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let OrganisationNamePageModule = class OrganisationNamePageModule {
};
OrganisationNamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _organisation_name_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrganisationNamePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_organisation_name_page__WEBPACK_IMPORTED_MODULE_6__["OrganisationNamePage"]]
    })
], OrganisationNamePageModule);



/***/ }),

/***/ "./src/app/loginModule/organisation-name/organisation-name.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/loginModule/organisation-name/organisation-name.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottomBdr {\n  border-bottom: 1px solid gainsboro;\n}\n\n.title {\n  font-size: 6vw;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n\n.inputDiv {\n  position: relative;\n}\n\n.inputDiv ion-icon {\n  font-size: 25px;\n}\n\n.inputDiv .instructionDiv {\n  position: absolute;\n  top: 130%;\n  left: 0;\n  right: 0;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: #efefef;\n  z-index: 99;\n  border-radius: 5px;\n}\n\n.inputDiv .instructionDiv .titleText {\n  border-bottom: 1px solid #d0d0d0;\n  padding: 15px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.inputDiv .instructionDiv li {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 10px 0;\n}\n\n.inputDiv .instructionDiv::before {\n  content: \"\";\n  border-bottom: 25px solid #efefef;\n  border-top: 0px solid var(--benepikBtnColor);\n  border-right: 15px solid transparent;\n  border-left: 15px solid transparent;\n  position: absolute;\n  right: 15px;\n  top: -23px;\n}\n\n.andText {\n  color: #000;\n}\n\n.tempTextDiv {\n  font-size: 14px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n\nion-checkbox {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: var(--headerColor) !important;\n  --border-color: var(--headerColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvb3JnYW5pc2F0aW9uLW5hbWUvb3JnYW5pc2F0aW9uLW5hbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsa0NBQUE7QUFFWDs7QUFEQTtFQUFPLGNBQUE7RUFBYyxpQkFBQTtFQUFpQixpQkFBQTtBQU90Qzs7QUFOQTtFQUFVLGtCQUFBO0FBVVY7O0FBVEk7RUFBUyxlQUFBO0FBWWI7O0FBWEk7RUFBZ0Isa0JBQUE7RUFBa0IsU0FBQTtFQUFTLE9BQUE7RUFBTyxRQUFBO0VBQVEsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ3RELG1CQUFBO0VBQW1CLFdBQUE7RUFBVyxrQkFBQTtBQW9CdEM7O0FBbkJRO0VBQVcsZ0NBQUE7RUFBZ0MsYUFBQTtFQUFhLGVBQUE7RUFBZSxpQkFBQTtBQXlCL0U7O0FBeEJRO0VBQUcsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLGNBQUE7QUE2QjNDOztBQTNCSTtFQUF3QixXQUFBO0VBQVcsaUNBQUE7RUFBaUMsNENBQUE7RUFDaEUsb0NBQUE7RUFBb0MsbUNBQUE7RUFBbUMsa0JBQUE7RUFDdkUsV0FBQTtFQUFXLFVBQUE7QUFtQ25COztBQWhDQTtFQUFTLFdBQUE7QUFvQ1Q7O0FBbkNBO0VBQWEsZUFBQTtFQUFlLHlCQUFBO0VBQXlCLGlCQUFBO0FBeUNyRDs7QUF4Q0E7RUFBYSxXQUFBO0VBQVcsWUFBQTtFQUFZLCtDQUFBO0VBQWdELGtDQUFBO0FBK0NwRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luTW9kdWxlL29yZ2FuaXNhdGlvbi1uYW1lL29yZ2FuaXNhdGlvbi1uYW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21CZHJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ2FpbnNib3JvO31cbi50aXRsZXtmb250LXNpemU6NnZ3O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjAgMCA3cHggMDt9XG4uaW5wdXREaXZ7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgaW9uLWljb257Zm9udC1zaXplOjI1cHg7fVxuICAgIC5pbnN0cnVjdGlvbkRpdntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTMwJTtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6I2VmZWZlZjt6LWluZGV4Ojk5O2JvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgICAudGl0bGVUZXh0e2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkMGQwZDA7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgICAgICBsaXtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMHB4O21hcmdpbjoxMHB4IDA7fVxuICAgIH1cbiAgICAuaW5zdHJ1Y3Rpb25EaXY6OmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyLWJvdHRvbToyNXB4IHNvbGlkICNlZmVmZWY7Ym9yZGVyLXRvcDowcHggc29saWQgdmFyKC0tYmVuZXBpa0J0bkNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjE1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6MTVweCBzb2xpZCB0cmFuc3BhcmVudDtwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6MTVweDt0b3A6LTIzcHg7XG4gICAgfVxufVxuLmFuZFRleHR7Y29sb3I6IzAwMDt9XG4udGVtcFRleHREaXZ7Zm9udC1zaXplOjE0cHg7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuaW9uLWNoZWNrYm94e3dpZHRoOjI1cHg7aGVpZ2h0OjI1cHg7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taGVhZGVyQ29sb3IpICFpbXBvcnRhbnQ7LS1ib3JkZXItY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9Il19 */");

/***/ }),

/***/ "./src/app/loginModule/organisation-name/organisation-name.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loginModule/organisation-name/organisation-name.page.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationNamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationNamePage", function() { return OrganisationNamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");








let OrganisationNamePage = class OrganisationNamePage {
    constructor(apiservices, router, zone, sendData, storageService, statusBar) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.sendData = sendData;
        this.storageService = storageService;
        this.statusBar = statusBar;
        this.showInstruction = false;
        this.organisationName = "";
        this.textData = "";
        this.btnDisable = true;
        this.textData = this.apiservices.organisationNameData;
        console.log("organisation data comming form maintenance api==", this.apiservices.organisationNameData);
    }
    ngOnInit() { }
    openInstruction() {
        this.zone.run(() => {
            if (this.showInstruction == false) {
                this.showInstruction = true;
            }
            else {
                this.showInstruction = false;
            }
        });
    }
    changeEvent(organisationName) {
        this.zone.run(() => {
            console.log("change event==", organisationName);
            if (organisationName.length > 0) {
                this.showInstruction = false;
            }
            else {
                this.acceptTNC = false;
            }
        });
    }
    goToNext() {
        this.zone.run(() => {
            this.apiservices.showLoader();
            console.log("organisation api fun called");
            let apiKey = {
                "client_flag": this.organisationName.trim(),
            };
            console.log("organisation api key", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].organisationName, apiKey).subscribe((result) => {
                console.log("organisation api response==", result);
                if (result.status == 1 || result.status == '1') {
                    // APP_CONFIG.clientId=result.data.client_id;
                    // this.apiservices.checkSumKey=result.data.checksum_key;
                    this.storageService.setStorage('checkSumKey', result.data.checksum_key);
                    setTimeout(() => {
                        this.storageService.setStorage('client_Id', result.data.client_id);
                    }, 500);
                    this.themeColor = result.data.theme;
                    this.statusBar.backgroundColorByHexString('var(--topStatusBarColor');
                    document.querySelector('body').style.setProperty('--headerColor', this.themeColor.headerColor);
                    document.querySelector('body').style.setProperty('--headerTitleOrMenu', this.themeColor.headerTitleOrMenu);
                    document.querySelector('body').style.setProperty('--headerLightColor', this.themeColor.headerLightColor);
                    document.querySelector('body').style.setProperty('--whiteHeader', this.themeColor.whiteHeader);
                    document.querySelector('body').style.setProperty('--blackHeaderText', this.themeColor.blackHeaderText);
                    document.querySelector('body').style.setProperty('--outlineBorderButton', this.themeColor.outlineBorderButton);
                    document.querySelector('body').style.setProperty('--transparentColor', this.themeColor.transparentColor);
                    document.querySelector('body').style.setProperty('--redTextColor', this.themeColor.redTextColor);
                    document.querySelector('body').style.setProperty('--blackTextColor', this.themeColor.blackTextColor);
                    document.querySelector('body').style.setProperty('--yellowTextColor', this.themeColor.yellowTextColor);
                    document.querySelector('body').style.setProperty('--toastSuccessColorApp', this.themeColor.toastSuccessColorApp);
                    document.querySelector('body').style.setProperty('--toastFailColorRed', this.themeColor.toastFailColorRed);
                    document.querySelector('body').style.setProperty('--nonSelectedTabs', this.themeColor.nonSelectedTabs);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBorder', this.themeColor.nonSelectedTabsBorder);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBg', this.themeColor.nonSelectedTabsBg);
                    document.querySelector('body').style.setProperty('--selectedTabBg', this.themeColor.selectedTabBg);
                    document.querySelector('body').style.setProperty('--topStatusBarColor', this.themeColor.topStatusBarColor);
                    this.apiservices.hideLoader();
                    this.sendData.alldata = result.data.settings;
                    this.router.navigate(["/enter-number"]);
                }
                else {
                    this.apiservices.hideLoader();
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.hideLoader();
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    privacyTermsFunc(value) {
        this.zone.run(() => {
            var data = {
                "pageName": value,
                "commingName": "loginProcess"
            };
            this.sendData.alldata = data;
            this.router.navigate(["/terms-and-privacy"]);
        });
    }
    updateCheckedOptions(val, ev) {
        this.zone.run(() => {
            console.log("checkbox event==", ev);
            console.log("checkbox value==", val);
            this.acceptTNC = ev.currentTarget.checked;
            console.log("checkboxValue==", this.acceptTNC);
            if (this.acceptTNC == true) {
                this.checkBtnStatus();
            }
            else {
                this.btnDisable = true;
            }
        });
    }
    checkBtnStatus() {
        this.zone.run(() => {
            setTimeout(() => {
                if (this.organisationName != '' && this.acceptTNC == true) {
                    this.btnDisable = false;
                    console.log("val1==", this.btnDisable);
                }
                else {
                    this.btnDisable = true;
                    console.log("val2==", this.btnDisable);
                    // return false;
                }
            }, 300);
        });
    }
    redirectionForIosTesting() {
        this.zone.run(() => {
            this.router.navigate(["/ios-register"]);
        });
    }
};
OrganisationNamePage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] }
];
OrganisationNamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organisation-name',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./organisation-name.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/organisation-name/organisation-name.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./organisation-name.page.scss */ "./src/app/loginModule/organisation-name/organisation-name.page.scss")).default]
    })
], OrganisationNamePage);



/***/ })

}]);
//# sourceMappingURL=loginModule-organisation-name-organisation-name-module-es2015.js.map