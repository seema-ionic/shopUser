(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-hr-questions-hr-questions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHrPolicyModuleHrQuestionsHrQuestionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"questionArray\">\n\n    <div class=\"topTitleText\">\n      <ion-row>\n        <ion-col [size]=\"12\"><p>{{allData?.data?.title_body}}</p></ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"topHeavyBorder\" *ngFor=\"let surveyQue of questionArray; let ind = index\">\n      <ion-row class=\"ion-padding-top questionDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin\">\n          <span style=\"padding:0 0 0 10px;\">Q{{ind+1}}.</span>\n        </ion-col>\n        <ion-col [size]=\"10\">\n          <span>{{surveyQue?.question}}\n            <!-- <sup style=\"color:red;\" *ngIf=\"surveyQue?.mendatory=='1'\">*</sup> -->\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"radioDiv ion-no-padding\" *ngIf=\"surveyQue?.option_type=='1'\">\n          <ion-radio-group name=\"radio-group\" [value]=\"surveyQue?.giveAnswer\" (ionChange)=\"radioGroupChange($event,surveyQue.options,ind)\">\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngFor=\"let surveyAns of surveyQue?.options\">\n                <ion-item lines=\"none\" color=\"none\">\n                  <ion-radio value=\"{{surveyAns?.option}}\" name=\"{{surveyAns?.option}}\"></ion-radio>\n                  <ion-label>{{surveyAns?.option}}</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-col>\n\n        <ion-col [size]=\"12\" class=\"textAreaDiv ion-margin-bottom ion-padding-horizontal\" *ngIf=\"surveyQue?.option_type=='2'\">\n          <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Write your answer here...\" [(ngModel)]=\"surveyQue.right_answer\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <br><br><br><br>\n\n\n  <div *ngIf=\"!questionArray\">\n    <app-skelton-listview [iconPath]=\"'hrQuestion'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n\n<ion-footer *ngIf=questionArray>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-center\">\n      <!-- questionArray[findIndex]?.giveAnswer=='' -->\n      <!-- <ion-button class=\"dynamicButtonColor\" tappable (click)=\"submitSurvey()\">{{allData?.settings?.button_text}}</ion-button> -->\n      <ion-button class=\"dynamicButtonColor\" [disabled]=\"checkValidation()\" tappable (click)=\"submitSurvey()\">{{allData?.settings?.button_text}}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: HrQuestionsPageRoutingModule */

    /***/
    function srcAppHrPolicyModuleHrQuestionsHrQuestionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrQuestionsPageRoutingModule", function () {
        return HrQuestionsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _hr_questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hr-questions.page */
      "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts");

      var routes = [{
        path: '',
        component: _hr_questions_page__WEBPACK_IMPORTED_MODULE_3__["HrQuestionsPage"]
      }];

      var HrQuestionsPageRoutingModule = function HrQuestionsPageRoutingModule() {
        _classCallCheck(this, HrQuestionsPageRoutingModule);
      };

      HrQuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HrQuestionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-questions/hr-questions.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.module.ts ***!
      \********************************************************************/

    /*! exports provided: HrQuestionsPageModule */

    /***/
    function srcAppHrPolicyModuleHrQuestionsHrQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrQuestionsPageModule", function () {
        return HrQuestionsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _hr_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hr-questions-routing.module */
      "./src/app/hrPolicyModule/hr-questions/hr-questions-routing.module.ts");
      /* harmony import */


      var _hr_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hr-questions.page */
      "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var HrQuestionsPageModule = function HrQuestionsPageModule() {
        _classCallCheck(this, HrQuestionsPageModule);
      };

      HrQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hr_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["HrQuestionsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_hr_questions_page__WEBPACK_IMPORTED_MODULE_6__["HrQuestionsPage"]]
      })], HrQuestionsPageModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHrPolicyModuleHrQuestionsHrQuestionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".topTitleText p {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0 0 20px 0;\n  color: #656565;\n}\n\n.radioDiv ion-item ion-radio {\n  margin: 0 10px 0 0px;\n}\n\n.radioDiv ion-item ion-label {\n  font-size: 13px !important;\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 20px;\n}\n\n.textAreaDiv ion-textarea {\n  border: 1px solid #dcdcdc;\n  border-radius: 5px;\n}\n\n.questionDiv span {\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvaHItcXVlc3Rpb25zL2hyLXF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFBRSxpQkFBQTtFQUFpQixlQUFBO0VBQWUsaUJBQUE7RUFBaUIsa0JBQUE7RUFBa0IsY0FBQTtBQUl6RTs7QUFBUTtFQUFVLG9CQUFBO0FBSWxCOztBQUhRO0VBQVUsMEJBQUE7RUFBMEIsU0FBQTtFQUFTLHFCQUFBO0VBQXFCLGlCQUFBO0FBUzFFOztBQUxJO0VBQWEseUJBQUE7RUFBMEIsa0JBQUE7QUFVM0M7O0FBUEk7RUFBSyxlQUFBO0VBQWUsaUJBQUE7QUFZeEIiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9oci1xdWVzdGlvbnMvaHItcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcFRpdGxlVGV4dHtcbiAgICBwe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MjBweDttYXJnaW46MCAwIDIwcHggMDtjb2xvcjojNjU2NTY1O31cbn1cbi5yYWRpb0RpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgaW9uLXJhZGlve21hcmdpbjowIDEwcHggMCAwcHg7fVxuICAgICAgICBpb24tbGFiZWx7Zm9udC1zaXplOjEzcHggIWltcG9ydGFudDttYXJnaW46MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtsaW5lLWhlaWdodDoyMHB4O31cbiAgICB9XG59XG4udGV4dEFyZWFEaXZ7XG4gICAgaW9uLXRleHRhcmVhe2JvcmRlcjoxcHggc29saWQgI2RjZGNkYzs7Ym9yZGVyLXJhZGl1czo1cHg7fVxufVxuLnF1ZXN0aW9uRGl2e1xuICAgIHNwYW57Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG59XG5cbi8vIC50aW50Qmd7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6MC41O3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTA7fVxuLy8gLnRoYW5reW91ZGl2e2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3BhZGRpbmc6MHB4IDE1cHg7ei1pbmRleDo5OTtcbi8vICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIDBweCk7dG9wOmF1dG87XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/hrPolicyModule/hr-questions/hr-questions.page.ts ***!
      \******************************************************************/

    /*! exports provided: HrQuestionsPage */

    /***/
    function srcAppHrPolicyModuleHrQuestionsHrQuestionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrQuestionsPage", function () {
        return HrQuestionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var HrQuestionsPage = /*#__PURE__*/function () {
        function HrQuestionsPage(router, storageService, alertController, zone, apiservices, eventService, navCtrl, sendData) {
          _classCallCheck(this, HrQuestionsPage);

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

        _createClass(HrQuestionsPage, [{
          key: "hardWareBackButton",
          value: function hardWareBackButton() {
            var _this = this;

            this.zone.run(function () {
              // this.navCtrl.navigateBack("/hr-policy-list");
              if (_this.commingData.commingFrom == "hrPolicyList") {
                _this.apiservices.hrPolicyCount = 0;

                _this.navCtrl.navigateBack("/hr-policy-detail");
              } else {
                _this.apiservices.hrPolicyCount = 0;

                _this.router.navigate(["/tabs/tab1"]);
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log("ion view will enter function==");
            this.apiservices.generateFCMToken();
            this.eventService.getObservable().subscribe(function (data) {
              console.log("publishData Data received==", data.data.commingFrom);

              if (data.data.commingFrom == "retakeQuiz" && data.data.reloadPage == true) {
                console.log("publishData Data forceupdate==", data);
                _this2.selectedQueAns = [];

                for (var i = 0; i < _this2.questionArray.length; i++) {
                  _this2.questionArray[i].giveAnswer = "";
                }
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.storageService.getStorage().then(function (res) {
              _this3.quizQuestionList();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "quizQuestionList",
          value: function quizQuestionList() {
            var _this4 = this;

            this.zone.run(function () {
              console.log("Quiz Question List api function==");
              var apiKey = {
                "post_id": _this4.hrPolicyDetailData[_this4.apiservices.hrPolicyCount].data.quiz_id
              };
              console.log("Quiz Question List api keys==", apiKey);

              _this4.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].hrPolicyQuizQuestion, apiKey).subscribe(function (result) {
                console.log("Quiz Question List Api Result==", result);
                _this4.allData = result;

                if (result.status == 1 || result.status == '1') {
                  _this4.questionArray = result.data.questions;

                  for (var i = 0; i < _this4.questionArray.length; i++) {
                    _this4.questionArray[i].giveAnswer = "";
                  }

                  console.log("Quiz Question List Api this.questionArray==", _this4.questionArray);
                } else {}
              }, function (err) {
                _this4.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event, optArr, index) {
            var _this5 = this;

            this.zone.run(function () {
              console.log("select Option==", event.detail);
              console.log("select optArr==", optArr);

              for (var i = 0; i < optArr.length; i++) {
                if (optArr[i].option == event.detail.value) {
                  _this5.questionArray[index].giveAnswer = optArr[i].option;
                  _this5.questionArray[index].right_answer = optArr[i].option_id;
                } else {
                  optArr[i].save_value = "";
                }
              }

              console.log("Final Array of Survey==", _this5.questionArray);
            });
          }
        }, {
          key: "checkValidation",
          value: function checkValidation() {
            var index = this.questionArray.findIndex(function (item) {
              return item.giveAnswer == '';
            });

            if (index >= 0) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "submitSurvey",
          value: function submitSurvey() {
            var _this6 = this;

            this.zone.run(function () {
              _this6.selectedQueAns = [];

              for (var i = 0; i < _this6.questionArray.length; i++) {
                if (_this6.questionArray[i].right_answer == "" && _this6.questionArray[i].mendetory == "1") {
                  _this6.apiservices.showToastMessage("Please fill all mandatory fields", 'top', 3000, 'redBg');

                  return;
                }

                console.log("submit array==", _this6.questionArray);

                _this6.selectedQueAns.push({
                  "question_id": _this6.questionArray[i].question_id,
                  "option_id": _this6.questionArray[i].right_answer
                });

                console.log("Final Array of selectedQueAns==", _this6.selectedQueAns);
              }

              _this6.confirmation();
            });
          }
        }, {
          key: "confirmation",
          value: function confirmation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        // title: 'Confirm purchase',
                        message: "Are you sure, you want to Submit your Quiz",
                        buttons: [{
                          text: 'No',
                          handler: function handler() {
                            console.log("submit survey exam, No==");
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this7.goToScoreCard();

                            console.log("submit survey exam, Yes==");
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToScoreCard",
          value: function goToScoreCard() {
            var _this8 = this;

            this.zone.run(function () {
              console.log("Quiz Question List api function==");
              console.log("hr Policy Detail Array api count==", _this8.apiservices.hrPolicyCount);
              console.log("hr Policy Detail Array Redirection quiz3.1==", _this8.hrPolicyDetailData.length);
              var apiKey = {
                "post_id": _this8.hrPolicyDetailData[_this8.apiservices.hrPolicyCount].data.quiz_id,
                "answers": _this8.selectedQueAns
              };
              console.log("Quiz Question List api keys==", apiKey);

              _this8.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].hrPolicyQuizSubmit, apiKey).subscribe(function (result) {
                console.log("Quiz Question List Api Result==", result);

                if (result.status == 1 || result.status == '1') {
                  _this8.apiservices.hrPolicyCount = _this8.apiservices.hrPolicyCount + 1;
                  _this8.sendData.alldata = _this8.policyData; // this.policyData.action="0";

                  _this8.sendData.myParam = _this8.hrPolicyDetailData[_this8.apiservices.hrPolicyCount];
                  _this8.sendData.hrPolicyDetailAllData = _this8.hrPolicyDetailData;
                  _this8.sendData.quizData = result;
                  _this8.sendData.commingPageName = _this8.commingData;
                  console.log("hr Policy Detail Array Redirection quiz4==", _this8.hrPolicyDetailData[_this8.apiservices.hrPolicyCount]);

                  _this8.router.navigate(["/question-score-card"]);

                  if (result.data.result == 1) {
                    _this8.policyData.action = "0";
                  } else {
                    _this8.policyData.action = "1";
                  }
                } else {
                  _this8.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this8.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return HrQuestionsPage;
      }();

      HrQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"]
        }];
      };

      HrQuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-questions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hr-questions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/hr-questions/hr-questions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hr-questions.page.scss */
        "./src/app/hrPolicyModule/hr-questions/hr-questions.page.scss"))["default"]]
      })], HrQuestionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hrPolicyModule-hr-questions-hr-questions-module-es5.js.map