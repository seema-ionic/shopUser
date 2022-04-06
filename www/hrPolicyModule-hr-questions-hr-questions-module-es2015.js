(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-hr-questions-hr-questions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"questionArray\">\n\n    <div class=\"topTitleText\">\n      <ion-row>\n        <ion-col [size]=\"12\"><p>{{allData?.data?.title_body}}</p></ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"topHeavyBorder\" *ngFor=\"let surveyQue of questionArray; let ind = index\">\n      <ion-row class=\"ion-padding-top questionDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin\">\n          <span style=\"padding:0 0 0 10px;\">Q{{ind+1}}.</span>\n        </ion-col>\n        <ion-col [size]=\"10\">\n          <span>{{surveyQue?.question}}\n            <!-- <sup style=\"color:red;\" *ngIf=\"surveyQue?.mendatory=='1'\">*</sup> -->\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"radioDiv ion-no-padding\" *ngIf=\"surveyQue?.option_type=='1'\">\n          <ion-radio-group name=\"radio-group\" [value]=\"surveyQue?.giveAnswer\" (ionChange)=\"radioGroupChange($event,surveyQue.options,ind)\">\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngFor=\"let surveyAns of surveyQue?.options\">\n                <ion-item lines=\"none\" color=\"none\">\n                  <ion-radio value=\"{{surveyAns?.option}}\" name=\"{{surveyAns?.option}}\"></ion-radio>\n                  <ion-label>{{surveyAns?.option}}</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n\n        <ion-col [size]=\"12\" class=\"textAreaDiv ion-margin-bottom ion-padding-horizontal\" *ngIf=\"surveyQue?.option_type=='2'\">\n          <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Write your answer here...\" [(ngModel)]=\"surveyQue.right_answer\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <br><br><br><br>\n\n\n  <div *ngIf=\"!questionArray\">\n    <app-skelton-listview [iconPath]=\"'hrQuestion'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n\n<ion-footer *ngIf=questionArray>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-center\">\n      <!-- questionArray[findIndex]?.giveAnswer=='' -->\n      <!-- <ion-button class=\"dynamicButtonColor\" tappable (click)=\"submitSurvey()\">{{allData?.settings?.button_text}}</ion-button> -->\n      <ion-button class=\"dynamicButtonColor\" [disabled]=\"checkValidation()\" tappable (click)=\"submitSurvey()\">{{allData?.settings?.button_text}}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: HrQuestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrQuestionsPageRoutingModule", function() { return HrQuestionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hr_questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-questions.page */ "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts");




const routes = [
    {
        path: '',
        component: _hr_questions_page__WEBPACK_IMPORTED_MODULE_3__["HrQuestionsPage"]
    }
];
let HrQuestionsPageRoutingModule = class HrQuestionsPageRoutingModule {
};
HrQuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HrQuestionsPageRoutingModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/hr-questions/hr-questions.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.module.ts ***!
  \********************************************************************/
/*! exports provided: HrQuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrQuestionsPageModule", function() { return HrQuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hr_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hr-questions-routing.module */ "./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts");
/* harmony import */ var _hr_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hr-questions.page */ "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let HrQuestionsPageModule = class HrQuestionsPageModule {
};
HrQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hr_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["HrQuestionsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_hr_questions_page__WEBPACK_IMPORTED_MODULE_6__["HrQuestionsPage"]]
    })
], HrQuestionsPageModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topTitleText p {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0 0 20px 0;\n  color: #656565;\n}\n\n.radioDiv ion-item ion-radio {\n  margin: 0 10px 0 0px;\n}\n\n.radioDiv ion-item ion-label {\n  font-size: 13px !important;\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 20px;\n}\n\n.textAreaDiv ion-textarea {\n  border: 1px solid #dcdcdc;\n  border-radius: 5px;\n}\n\n.questionDiv span {\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcXVlc3Rpb25zL2hyLXF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFBRSxpQkFBQTtFQUFpQixlQUFBO0VBQWUsaUJBQUE7RUFBaUIsa0JBQUE7RUFBa0IsY0FBQTtBQUl6RTs7QUFBUTtFQUFVLG9CQUFBO0FBSWxCOztBQUhRO0VBQVUsMEJBQUE7RUFBMEIsU0FBQTtFQUFTLHFCQUFBO0VBQXFCLGlCQUFBO0FBUzFFOztBQUxJO0VBQWEseUJBQUE7RUFBMEIsa0JBQUE7QUFVM0M7O0FBUEk7RUFBSyxlQUFBO0VBQWUsaUJBQUE7QUFZeEIiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9oci1xdWVzdGlvbnMvaHItcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcFRpdGxlVGV4dHtcbiAgICBwe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MjBweDttYXJnaW46MCAwIDIwcHggMDtjb2xvcjojNjU2NTY1O31cbn1cbi5yYWRpb0RpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgaW9uLXJhZGlve21hcmdpbjowIDEwcHggMCAwcHg7fVxuICAgICAgICBpb24tbGFiZWx7Zm9udC1zaXplOjEzcHggIWltcG9ydGFudDttYXJnaW46MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtsaW5lLWhlaWdodDoyMHB4O31cbiAgICB9XG59XG4udGV4dEFyZWFEaXZ7XG4gICAgaW9uLXRleHRhcmVhe2JvcmRlcjoxcHggc29saWQgI2RjZGNkYzs7Ym9yZGVyLXJhZGl1czo1cHg7fVxufVxuLnF1ZXN0aW9uRGl2e1xuICAgIHNwYW57Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG59XG5cbi8vIC50aW50Qmd7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6MC41O3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTA7fVxuLy8gLnRoYW5reW91ZGl2e2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3BhZGRpbmc6MHB4IDE1cHg7ei1pbmRleDo5OTtcbi8vICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIDBweCk7dG9wOmF1dG87XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts ***!
  \******************************************************************/
/*! exports provided: HrQuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrQuestionsPage", function() { return HrQuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");









let HrQuestionsPage = class HrQuestionsPage {
    constructor(router, storageService, alertController, zone, apiservices, eventService, navCtrl, sendData) {
        this.router = router;
        this.storageService = storageService;
        this.alertController = alertController;
        this.zone = zone;
        this.apiservices = apiservices;
        this.eventService = eventService;
        this.navCtrl = navCtrl;
        this.sendData = sendData;
        this.selectedQueAns = [];
        this.policyData = this.sendData.alldata;
        console.log("hr Policy Detail Array Redirection==", this.policyData);
        this.hrPolicyDetailData = this.sendData.hrPolicyDetailAllData;
        console.log("hr Policy Detail Array Redirection==", this.hrPolicyDetailData);
        this.commingData = this.sendData.commingPageName;
        console.log("comming from which page==", this.commingData);
    }
    hardWareBackButton() {
        this.zone.run(() => {
            // this.navCtrl.navigateBack("/hr-policy-list");
            if (this.commingData.commingFrom == "hrPolicyList") {
                this.apiservices.hrPolicyCount = 0;
                this.navCtrl.navigateBack("/hr-policy-detail");
            }
            else {
                this.apiservices.hrPolicyCount = 0;
                this.router.navigate(["/tabs/tab1"]);
            }
        });
    }
    ionViewWillEnter() {
        console.log("ion view will enter function==");
        this.apiservices.generateFCMToken();
        this.eventService.getObservable().subscribe((data) => {
            console.log("publishData Data received==", data.data.commingFrom);
            if (data.data.commingFrom == "retakeQuiz" && data.data.reloadPage == true) {
                console.log("publishData Data forceupdate==", data);
                this.selectedQueAns = [];
                for (let i = 0; i < this.questionArray.length; i++) {
                    this.questionArray[i].giveAnswer = "";
                }
            }
        });
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.quizQuestionList();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    quizQuestionList() {
        this.zone.run(() => {
            console.log("Quiz Question List api function==");
            let apiKey = {
                "post_id": this.hrPolicyDetailData[this.apiservices.hrPolicyCount].data.quiz_id,
            };
            console.log("Quiz Question List api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].hrPolicyQuizQuestion, apiKey).subscribe((result) => {
                console.log("Quiz Question List Api Result==", result);
                this.allData = result;
                if (result.status == 1 || result.status == '1') {
                    this.questionArray = result.data.questions;
                    for (let i = 0; i < this.questionArray.length; i++) {
                        this.questionArray[i].giveAnswer = "";
                    }
                    console.log("Quiz Question List Api this.questionArray==", this.questionArray);
                }
                else {
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    radioGroupChange(event, optArr, index) {
        this.zone.run(() => {
            console.log("select Option==", event.detail);
            console.log("select optArr==", optArr);
            for (let i = 0; i < optArr.length; i++) {
                if (optArr[i].option == event.detail.value) {
                    this.questionArray[index].giveAnswer = optArr[i].option;
                    this.questionArray[index].right_answer = optArr[i].option_id;
                }
                else {
                    optArr[i].save_value = "";
                }
            }
            console.log("Final Array of Survey==", this.questionArray);
        });
    }
    checkValidation() {
        const index = this.questionArray.findIndex(item => item.giveAnswer == '');
        if (index >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    submitSurvey() {
        this.zone.run(() => {
            this.selectedQueAns = [];
            for (let i = 0; i < this.questionArray.length; i++) {
                if (this.questionArray[i].right_answer == "" && this.questionArray[i].mendetory == "1") {
                    this.apiservices.showToastMessage("Please fill all mandatory fields", 'top', 3000, 'redBg');
                    return;
                }
                console.log("submit array==", this.questionArray);
                this.selectedQueAns.push({ "question_id": this.questionArray[i].question_id, "option_id": this.questionArray[i].right_answer });
                console.log("Final Array of selectedQueAns==", this.selectedQueAns);
            }
            this.confirmation();
        });
    }
    confirmation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // title: 'Confirm purchase',
                message: "Are you sure, you want to Submit your Quiz",
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            console.log("submit survey exam, No==");
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.goToScoreCard();
                            console.log("submit survey exam, Yes==");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToScoreCard() {
        this.zone.run(() => {
            console.log("Quiz Question List api function==");
            console.log("hr Policy Detail Array api count==", this.apiservices.hrPolicyCount);
            console.log("hr Policy Detail Array Redirection quiz3.1==", this.hrPolicyDetailData.length);
            let apiKey = {
                "post_id": this.hrPolicyDetailData[this.apiservices.hrPolicyCount].data.quiz_id,
                "answers": this.selectedQueAns
            };
            console.log("Quiz Question List api keys==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].hrPolicyQuizSubmit, apiKey).subscribe((result) => {
                console.log("Quiz Question List Api Result==", result);
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.hrPolicyCount = this.apiservices.hrPolicyCount + 1;
                    this.sendData.alldata = this.policyData;
                    // this.policyData.action="0";
                    this.sendData.myParam = this.hrPolicyDetailData[this.apiservices.hrPolicyCount];
                    this.sendData.hrPolicyDetailAllData = this.hrPolicyDetailData;
                    this.sendData.quizData = result;
                    this.sendData.commingPageName = this.commingData;
                    console.log("hr Policy Detail Array Redirection quiz4==", this.hrPolicyDetailData[this.apiservices.hrPolicyCount]);
                    this.router.navigate(["/question-score-card"]);
                    if (result.data.result == 1) {
                        this.policyData.action = "0";
                    }
                    else {
                        this.policyData.action = "1";
                    }
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
HrQuestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"] }
];
HrQuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-questions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hr-questions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hr-questions.page.scss */ "./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss")).default]
    })
], HrQuestionsPage);



/***/ })

}]);
//# sourceMappingURL=hrPolicyModule-hr-questions-hr-questions-module-es2015.js.map