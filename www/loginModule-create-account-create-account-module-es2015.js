(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-create-account-create-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/create-account/create-account.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/create-account/create-account.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"allData\">\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"headLogoDiv\"><img [src]=\"allData?.logo\" onerror=\"this.src='../../../assets/watermark/watermark.png'\"></div>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <p class=\"noMargin title\">{{allData?.title}}</p>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"inputFieldDiv\">\n      <div *ngFor=\"let fieldData of allData?.inputs; let i = index\">\n        <!-- This row Show Calender part of form Start -->\n        <ion-row *ngIf=\"fieldData?.type_check=='date'\">\n          <ion-col [size]=\"12\">\n            <p class=\"noMargin labelText\">{{fieldData?.label}} \n              <sup *ngIf=\"fieldData?.mendetory==true\" style=\"color:red;\">*</sup>\n            </p>\n          </ion-col>\n          <ion-col [size]=\"10\">\n            <ion-datetime displayFormat=\"DD-MMM-YYYY\" [max]=\"currentDate\" [placeholder]=\"fieldData?.placeholder\" pickerFormat=\"DD-MMM-YYYY\" displayFormat=\"DD-MMM-YYYY\" name=\"DOB\" [(ngModel)]=\"fieldData.save_value\" #datePicker></ion-datetime>\n          </ion-col>\n          <ion-col [size]=\"2\" class=\"ion-text-right\" tappable (click)=\"datePicker.open()\">\n            <img [src]=\"fieldData?.icon\" class=\"iconImg\">\n          </ion-col>\n        </ion-row>\n        <!-- This row Show Calender part of form End -->\n\n        <!-- This row Show TextBox part of form Start -->\n        <ion-row *ngIf=\"fieldData?.type_check=='text'\">\n          <ion-col [size]=\"12\"><p class=\"noMargin labelText\">{{fieldData?.label}} \n            <sup *ngIf=\"fieldData?.mendetory==true\" style=\"color:red;\">*</sup></p>\n          </ion-col>\n          <ion-col [size]=\"10\">\n            <ion-input type=text class=\"padtop\" [(ngModel)]=\"fieldData.save_value\" [placeholder]=\"fieldData?.placeholder\"></ion-input>\n          </ion-col>\n          <ion-col [size]=\"2\" class=\"ion-text-right\"><img [src]=\"fieldData?.icon\" class=\"iconImg\"></ion-col>\n        </ion-row>\n        <!-- This row Show TextBox part of form End -->\n\n      </div>\n    </div>\n\n\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <!-- [disabled]=\"employee_code?.trim()==''\" -->\n        <ion-button tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\">Next</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n  </div>\n\n\n  <div *ngIf=\"!allData\">\n    <app-skelton-listview [iconPath]=\"'createAccount'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n<ion-footer class=\"contactFooterText\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-right\">\n      <div class=\"contactText\">\n        <p class=\"noMargin\"><span tappable (click)=\"goToHrContact()\">Contact Us</span></p>\n        <!-- <img src=\"../../assets/icon/logoTwo.png\"> -->\n      </div>\n      <br><br>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/loginModule/create-account/create-account-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/loginModule/create-account/create-account-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageRoutingModule", function() { return CreateAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account.page */ "./src/app/loginModule/create-account/create-account.page.ts");




const routes = [
    {
        path: '',
        component: _create_account_page__WEBPACK_IMPORTED_MODULE_3__["CreateAccountPage"]
    }
];
let CreateAccountPageRoutingModule = class CreateAccountPageRoutingModule {
};
CreateAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/create-account/create-account.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/loginModule/create-account/create-account.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreateAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/loginModule/create-account/create-account-routing.module.ts");
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-account.page */ "./src/app/loginModule/create-account/create-account.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CreateAccountPageModule = class CreateAccountPageModule {
};
CreateAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateAccountPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_6__["CreateAccountPage"]]
    })
], CreateAccountPageModule);



/***/ }),

/***/ "./src/app/loginModule/create-account/create-account.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/loginModule/create-account/create-account.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headLogoDiv {\n  border-bottom: 0px solid gainsboro;\n  padding: 10px 0;\n}\n.headLogoDiv img {\n  width: 150px;\n}\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n}\n.subTitle {\n  font-size: 14px;\n  line-height: 20px;\n}\n.inputFieldDiv {\n  padding: 0 10px;\n}\n.inputFieldDiv .labelText {\n  font-size: 17px;\n  font-weight: bold;\n}\n.inputFieldDiv ion-datetime {\n  border-bottom: 1px solid gainsboro;\n  font-size: 17px;\n}\n.inputFieldDiv ion-input {\n  border-bottom: 1px solid gainsboro;\n  font-size: 17px;\n}\n.inputFieldDiv ion-icon {\n  font-size: 25px;\n}\n.inputFieldDiv img {\n  width: 25px;\n}\n.contactFooterText .contactText p {\n  color: var(--headerColor);\n  font-size: 18px;\n  font-weight: bold;\n}\n.contactFooterText .contactText p span {\n  position: relative;\n}\n.contactFooterText .contactText span::before {\n  content: \"\";\n  height: 2px;\n  background: var(--headerColor);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -5px;\n}\n.contactFooterText:before {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsa0NBQUE7RUFBa0MsZUFBQTtBQUcvQztBQUZJO0VBQUksWUFBQTtBQUtSO0FBSEE7RUFBTyxlQUFBO0VBQWUsaUJBQUE7RUFBaUIsaUJBQUE7QUFTdkM7QUFSQTtFQUFVLGVBQUE7RUFBZSxpQkFBQTtBQWF6QjtBQVhBO0VBQWUsZUFBQTtBQWVmO0FBZEk7RUFBVyxlQUFBO0VBQWUsaUJBQUE7QUFrQjlCO0FBakJJO0VBQWEsa0NBQUE7RUFBa0MsZUFBQTtBQXFCbkQ7QUFwQkk7RUFBVSxrQ0FBQTtFQUFrQyxlQUFBO0FBd0JoRDtBQXZCSTtFQUFTLGVBQUE7QUEwQmI7QUF6Qkk7RUFBSSxXQUFBO0FBNEJSO0FBdEJRO0VBQUUseUJBQUE7RUFBeUIsZUFBQTtFQUFlLGlCQUFBO0FBNEJsRDtBQTNCWTtFQUFLLGtCQUFBO0FBOEJqQjtBQTNCSTtFQUEwQixXQUFBO0VBQVcsV0FBQTtFQUFXLDhCQUFBO0VBQThCLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxRQUFBO0VBQVEsWUFBQTtBQW9Dbkg7QUFsQ0E7RUFBMkIsa0NBQUE7QUFzQzNCIiwiZmlsZSI6InNyYy9hcHAvbG9naW5Nb2R1bGUvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRMb2dvRGl2e2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGdhaW5zYm9ybztwYWRkaW5nOjEwcHggMDtcbiAgICBpbWd7d2lkdGg6MTUwcHg7fVxufVxuLnRpdGxle2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjAgMCA3cHggMDt9XG4uc3ViVGl0bGV7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjBweDt9XG5cbi5pbnB1dEZpZWxkRGl2e3BhZGRpbmc6MCAxMHB4O1xuICAgIC5sYWJlbFRleHR7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgaW9uLWRhdGV0aW1le2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdhaW5zYm9ybztmb250LXNpemU6MTdweDt9XG4gICAgaW9uLWlucHV0e2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdhaW5zYm9ybztmb250LXNpemU6MTdweDt9XG4gICAgaW9uLWljb257Zm9udC1zaXplOjI1cHg7fVxuICAgIGltZ3t3aWR0aDoyNXB4O31cbn1cblxuXG4uY29udGFjdEZvb3RlclRleHR7XG4gICAgLmNvbnRhY3RUZXh0e1xuICAgICAgICBwe2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXNpemU6MThweDtmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgc3Bhbntwb3NpdGlvbjpyZWxhdGl2ZTt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhY3RUZXh0IHNwYW46OmJlZm9yZXtjb250ZW50OlwiXCI7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206LTVweDt9XG59XG4uY29udGFjdEZvb3RlclRleHQ6YmVmb3JlIHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/loginModule/create-account/create-account.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/loginModule/create-account/create-account.page.ts ***!
  \*******************************************************************/
/*! exports provided: CreateAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPage", function() { return CreateAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");








let CreateAccountPage = class CreateAccountPage {
    constructor(apiservices, router, zone, menuCtrl, sendData, storageService, navCtrl) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.allData = this.sendData.alldata;
        console.log("organisation name data from organisationNamePage 3==", this.allData);
        this.currentDate = new Date().toISOString();
        console.log("current Date==", this.currentDate);
    }
    hardWareBackButton() {
        this.zone.run(() => {
            // this.navCtrl.navigateBack("/hr-policy-list"); 
            this.navCtrl.navigateBack("/enter-number");
        });
    }
    ngOnInit() { }
    goToNext() {
        this.zone.run(() => {
            console.log("array==", this.allData);
            for (let j = 0; j < this.allData.inputs.length; j++) {
                if (this.allData.inputs[j].mendetory == true && this.allData.inputs[j].save_value.trim() == "") {
                    this.apiservices.showToastMessage(this.allData.inputs[j].mendetory_string, 'top', 3000, 'redBg');
                    return;
                }
                if (this.allData.inputs[j].type == "dob") {
                    var dateOfBirth = this.allData.inputs[j].save_value;
                }
                else if (this.allData.inputs[j].type == "doj") {
                    var dateOfJoining = this.allData.inputs[j].save_value;
                }
                else if (this.allData.inputs[j].type == "emp_code") {
                    this.employee_code = this.allData.inputs[j].save_value;
                }
            }
            this.apiservices.showLoader();
            console.log("create Account Array==", this.allData);
            let apiKey = {
                "dob": dateOfBirth,
                "emp_code": this.employee_code,
                "doj": dateOfJoining
            };
            console.log("create Account Api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].loginInformation, apiKey).subscribe((result) => {
                console.log("create Account Api response==", result);
                this.apiservices.hideLoader();
                if (result.status == '1' || result.status == 1) {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    this.sendData.alldata = result.data.settings;
                    this.sendData.myParam = result.data;
                    this.storageService.setStorage('login_token', result.data.token);
                    this.router.navigate(["/profile-picture"]);
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.hideLoader();
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    goToHrContact() {
        this.zone.run(() => {
            this.router.navigate(["/contact-hr"]);
        });
    }
};
CreateAccountPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CreateAccountPage.propDecorators = {
    datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datePicker',] }]
};
CreateAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/create-account/create-account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-account.page.scss */ "./src/app/loginModule/create-account/create-account.page.scss")).default]
    })
], CreateAccountPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-create-account-create-account-module-es2015.js.map