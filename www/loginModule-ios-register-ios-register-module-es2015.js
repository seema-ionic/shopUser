(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-ios-register-ios-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/ios-register/ios-register.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/ios-register/ios-register.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Registration</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <div *ngIf=\"allData\" class=\"commonPagePadding inputSectionDiv iosRegisterDiv\">\n    <ion-row *ngFor=\"let typeAreaData of allData?.data; let ind = index\">\n\n      <!-- this is only text area field start -->\n      <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.input_type=='text'\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <ion-label>{{typeAreaData?.label_text}}\n              <sup *ngIf=\"typeAreaData?.isMandatory==1\" style=\"color:red\">{{typeAreaData?.optionalLabel}}</sup>\n              <sup *ngIf=\"typeAreaData?.isMandatory==0\" style=\"color:gray\">{{typeAreaData?.optionalLabel}}</sup>\n            </ion-label>\n          </ion-col>\n          <ion-col [size]=\"12\" class=\"ion-no-padding autoMargin\">\n            <div class=\"inputAreaDiv\">\n              <ion-input type=\"text\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.value\"></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- this is only text area field end -->\n\n      <!-- this is only text area field for emailAddress start -->\n      <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.input_type=='email'\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <ion-label>{{typeAreaData?.label_text}}\n              <sup *ngIf=\"typeAreaData?.isMandatory==1\" style=\"color:red\">{{typeAreaData?.optionalLabel}}</sup>\n              <sup *ngIf=\"typeAreaData?.isMandatory==0\" style=\"color:gray\">{{typeAreaData?.optionalLabel}}</sup>\n            </ion-label>\n          </ion-col>\n          <ion-col [size]=\"12\" class=\"ion-no-padding autoMargin\">\n            <div class=\"inputAreaDiv\">\n              <ion-input type=\"text\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.value\" (ionChange)=\"validateEmail(typeAreaData.value)\"></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"emailIsOk==false\">\n          <ion-col [size]=\"12\"><div style=\"color:red;font-size:12px;\" [innerHTML]=\"errorEmail\"></div></ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- this is only text area field for emailAddress end -->\n\n      <!-- this is number/telephone area field start -->\n      <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.input_type=='number'\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <ion-label>{{typeAreaData?.label_text}}\n              <sup *ngIf=\"typeAreaData?.isMandatory==1\" style=\"color:red\">{{typeAreaData?.optionalLabel}}</sup>\n              <sup *ngIf=\"typeAreaData?.isMandatory==0\" style=\"color:gray\">{{typeAreaData?.optionalLabel}}</sup>\n            </ion-label>\n          </ion-col>\n          <ion-col [size]=\"12\" class=\"ion-no-padding autoMargin\">\n            <div class=\"inputAreaDiv\">\n              <ion-input type=\"tel\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.value\" (ionChange)=\"changeCountryCode(typeAreaData.value)\"></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"MobileIsOk==false\">\n          <ion-col [size]=\"12\"><div style=\"color:red;font-size:12px;\" [innerHTML]=\"mobileErr\"></div></ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- this is number/telephone area field end -->\n\n\n\n      <!-- this is radio button area field start -->\n      <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.input_type=='radio'\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <ion-label>{{typeAreaData?.label_text}}\n              <sup *ngIf=\"typeAreaData?.isMandatory==1\" style=\"color:red\">{{typeAreaData?.optionalLabel}}</sup>\n              <sup *ngIf=\"typeAreaData?.isMandatory==0\" style=\"color:gray\">{{typeAreaData?.optionalLabel}}</sup>\n            </ion-label>\n          </ion-col>\n          <ion-col [size]=\"12\" class=\"radioDiv ion-no-padding\">\n            <ion-radio-group name=\"radio-group\" [value]=\"typeAreaData?.giveAnswer\" (ionChange)=\"radioGroupChange($event,typeAreaData.option,ind)\">\n              <ion-row>\n                <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngFor=\"let surveyAns of typeAreaData?.option\">\n                  <ion-item lines=\"none\" color=\"none\">\n                    <ion-radio value=\"{{surveyAns?.label_text}}\" name=\"{{surveyAns?.label_text}}\"></ion-radio>\n                    <ion-label>{{surveyAns?.label_text}}</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- this is radio button area field start -->\n\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"btndiv\">\n          <ion-button [disabled]=\"MobileIsOk == false || emailIsOk == false\" tappable (click)=\"submitRegistrationData()\" class=\"dynamicButtonColor\">{{allData?.buttonText}}</ion-button>\n        </div> \n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"!allData\">\n    <app-skelton-listview [iconPath]=\"'iosRegistration'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/loginModule/ios-register/ios-register-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loginModule/ios-register/ios-register-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: IosRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosRegisterPageRoutingModule", function() { return IosRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ios_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ios-register.page */ "./src/app/loginModule/ios-register/ios-register.page.ts");




const routes = [
    {
        path: '',
        component: _ios_register_page__WEBPACK_IMPORTED_MODULE_3__["IosRegisterPage"]
    }
];
let IosRegisterPageRoutingModule = class IosRegisterPageRoutingModule {
};
IosRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IosRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/ios-register/ios-register.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/loginModule/ios-register/ios-register.module.ts ***!
  \*****************************************************************/
/*! exports provided: IosRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosRegisterPageModule", function() { return IosRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ios_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ios-register-routing.module */ "./src/app/loginModule/ios-register/ios-register-routing.module.ts");
/* harmony import */ var _ios_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ios-register.page */ "./src/app/loginModule/ios-register/ios-register.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let IosRegisterPageModule = class IosRegisterPageModule {
};
IosRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ios_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["IosRegisterPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_ios_register_page__WEBPACK_IMPORTED_MODULE_6__["IosRegisterPage"]]
    })
], IosRegisterPageModule);



/***/ }),

/***/ "./src/app/loginModule/ios-register/ios-register.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/loginModule/ios-register/ios-register.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputSectionDiv .inputAreaDiv {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 0 7px;\n  margin: 0px 0 5px 0;\n  border-radius: 50px;\n}\n.inputSectionDiv .inputAreaDiv ion-input {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvaW9zLXJlZ2lzdGVyL2lvcy1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBYywyQkFBQTtFQUEyQixrQkFBQTtFQUFrQixjQUFBO0VBQWMsbUJBQUE7RUFBbUIsbUJBQUE7QUFLOUY7QUFKSTtFQUFVLFlBQUE7QUFPZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luTW9kdWxlL2lvcy1yZWdpc3Rlci9pb3MtcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0U2VjdGlvbkRpdntcbiAgLmlucHV0QXJlYURpdntib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjAgN3B4O21hcmdpbjowcHggMCA1cHggMDtib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgaW9uLWlucHV0e2hlaWdodDo0MHB4O31cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loginModule/ios-register/ios-register.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/loginModule/ios-register/ios-register.page.ts ***!
  \***************************************************************/
/*! exports provided: IosRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosRegisterPage", function() { return IosRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let IosRegisterPage = class IosRegisterPage {
    constructor(apiservices, zone, storageService, location) {
        this.apiservices = apiservices;
        this.zone = zone;
        this.storageService = storageService;
        this.location = location;
        this.MobileIsOk = true;
        this.mobileErr = "";
        this.emailIsOk = true;
        this.errorEmail = "";
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.redirectionForIosTesting();
            console.log("ionic lifecycle called getStorage==", res);
        });
    }
    redirectionForIosTesting() {
        this.zone.run(() => {
            console.log("connect to HR call function");
            let apikey = {};
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_3__["URLS"].listDataOfIosRegistration, apikey).subscribe((result) => {
                console.log("connect to HR api response ==", result);
                if (result.status == 1) {
                    this.allData = result.data.data;
                    console.log("all get data==", this.allData);
                }
                else {
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    changeCountryCode(mobileNumber) {
        this.zone.run(() => {
            console.log("code of country and mobile no==", mobileNumber);
            var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (mobileNumber.trim() != '') {
                if (!regexEmail.test(mobileNumber)) {
                    this.MobileIsOk = true;
                    this.mobileErr = '';
                }
                else {
                    this.MobileIsOk = false;
                    this.mobileErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                }
            }
            else {
                this.MobileIsOk = true;
                this.mobileErr = "";
            }
        });
    }
    validateEmail(email) {
        this.zone.run(() => {
            if (email.trim() != "") {
                console.log("validate emial on profile page==", email);
                var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
                if (regexEmail.test(email)) {
                    this.emailIsOk = true;
                    this.errorEmail = '';
                }
                else {
                    this.emailIsOk = false;
                    this.errorEmail = "<sup>*</sup>Invalid email format.";
                }
            }
            else {
                this.emailIsOk = true;
                this.errorEmail = "";
            }
        });
    }
    radioGroupChange(event, optArr, index) {
        this.zone.run(() => {
            console.log("select Option==", event.detail);
            console.log("select optArr==", optArr);
            console.log("select index==", index);
            for (let i = 0; i < optArr.length; i++) {
                if (optArr[i].label_text == event.detail.value) {
                    this.allData.data[index].value = optArr[i].optionId;
                    this.allData.data[index].giveAnswer = optArr[i].label_text;
                }
                else {
                    optArr[i].save_value = "";
                }
            }
            console.log("Final Array of Survey==", this.allData);
        });
    }
    submitRegistrationData() {
        this.zone.run(() => {
            console.log("contact you hr all data==", this.allData);
            for (let j = 0; j < this.allData.data.length; j++) {
                if (this.allData.data[j].isMandatory == 1 && this.allData.data[j].value.trim() == "") {
                    this.apiservices.showToastMessage("Please fill Mandatory fields", 'top', 3000, 'redBg');
                    return;
                }
                var allDataToApi = this.allData.data;
            }
            console.log("home page api call function", allDataToApi);
            let apikey = {
                "data": allDataToApi
            };
            console.log("home page api key ios registration==", apikey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_3__["URLS"].IosRegistrationSubmition, apikey).subscribe((result) => {
                console.log("api response of home page api==", result);
                if (result.success == 1) {
                    this.location.back();
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
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
IosRegisterPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
IosRegisterPage.propDecorators = {
    datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datePicker',] }]
};
IosRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ios-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ios-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/ios-register/ios-register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ios-register.page.scss */ "./src/app/loginModule/ios-register/ios-register.page.scss")).default]
    })
], IosRegisterPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-ios-register-ios-register-module-es2015.js.map